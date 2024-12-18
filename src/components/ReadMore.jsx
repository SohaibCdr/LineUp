import donepic from "../assets/done.jpg"
import Company from "./Company";
import JobCard from './jobCard'
import ReactRating from "react-stars";
import shortList from "../assets/savedIcon.svg";
import localisation from "../assets/location.svg";
import size from "../assets/periodIcon.svg";
import post from "../assets/level.svg";
import letter from "../assets/money.svg";
import tel from "../assets/Tel.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import  date from "../assets/date.svg";
import linkedln from "../assets/LinkedIn.svg";
import {useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import defaultPic from "../assets/defaultPic.svg";
import { addreview,companyreviews,reviewinfo,getsocialmedia, posts} from "../backend/sohaib/CompaniesBackend";
import { Auth } from "../backend/firebaseconfig";
import PopUp from './jobPopUp';
import exit from '../assets/Exit.svg';
function ReadMore ({company}) {
  //signout()
  const [availableJobs, setAvailableJobs] = useState([]);
    //this function to  add job offer to the liste of availiable pots  and create the cards it should take as a parameter job {object}
    // it will be done when received the card component 
  const postJob = (job) => {
    setAvailableJobs([...availableJobs, job]);
  };
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]); 
  const [rememberMe, setRememberMe] = useState(false);
  const maxCharacters = 100;
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [logo, setLogo] = useState ('')
  const [rating, setRating] = useState(0);
  const [userinfo,setuserinfo]=useState({})
  const[socialmedia,setsocialmedia]=useState({})
  
const fetchjobs = async () => {
    try {
        const companiesData = await posts(company.companyId);
        setAvailableJobs(companiesData);
       
    
    } catch (error) {
       console.error("Error fetching posts:", error);
          }
 };

useEffect(()=>{
 fetchjobs();

},[])
console.log('posts :'+availableJobs[0])

  const fetchData = async () => {
    try {
        const companiesData = await companyreviews(company);
        setReviews(companiesData);
       
    
    } catch (error) {
       console.error("Error fetching companies:", error);
          }
 };

useEffect(()=>{
 fetchData();

},[])
//console.log(reviews);
const fetchdata = async () => {                  //user email and name and profil img for the review form --sohaib 
    try {
      const info = await reviewinfo();
      setuserinfo(info);
      
    
    } catch (error) {
       console.error("Error fetching companies:", error);
          }
 };

useEffect(()=>{
   fetchdata();

},[])
//console.log('user email :'+userinfo.name)
const fetchsocialmedia = async () => {                  //get socialmedia backend --sohaib 
    try {
        const soc = await getsocialmedia(company);
        setsocialmedia(soc);
       
    
    } catch (error) {
       console.error("Error fetching companies:", error);
          }
 };

useEffect(()=>{
 fetchsocialmedia();

},[])
//console.log("social media :"+socialmedia.facebook)

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleChange = (event) => {
    const inputComment = event.target.value;
    if (inputComment.length <= maxCharacters) {
      setComment(inputComment);
    }
  };


  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };
  useEffect(()=>{
  if(Auth.currentUser != null){
         setUserName(userinfo.name);         //setUsername and email in the reviews box in case of logged in 
    setEmail(userinfo.email);
     console.log('Remember me qgdqhsggh:');
     setLogo(userinfo.profil)
  }},[userinfo])
  const handleSubmit =  async () => {
    
    if(Auth.currentUser == null){ alert("Login is required to leave your review") }    //tset if user logged in . to make review  --sohaib
    else{   
      // Logique pour soumettre le commentaire
    //console.log('Comment submitted:', comment);
   
    // Create a new review object

       
       
    const newReview = {
    
        name: userName,
        date: new Date().toLocaleDateString(), // Current date
        rating: rating,
        comment: comment,
        logo:userinfo.profil,
    };
 addreview(newReview,company.companyId); // function that sent new reviews to database  --Sohaib
    setReviews([...reviews, newReview]);
     //console.log(reviews)
     ;}
  };
   //popUp posts
  const [popUp,setPopUp]=useState(false);
  const[openJob,setOpenJob]=useState(null);

const open=(job)=>{
setPopUp(!popUp);
setOpenJob(job);}
    return(

        <div className=" w-[650px] max-h-[500px] px-8 py-3 bg-white flex flex-col  text-primary rounded-20 overflow-auto  overflow-x-hidden scrollBar  z-40">
            {/* top section  */}
            <div className="flex  justify-center items-start ">
            <div className=" flex flex-col w-2/3 ">
              {/*  card  */}
              <div className="flex  items-center ">
                <div className="mr-8">
                <div>
            {company.profil ? (
                <img src={company.profil} alt="Profile" className="rounded-full w-14 h-14 mt-1" />
            ) : (
                <img src={defaultPic} alt="Default" className="rounded-full  h-14 w-14 mt-1" />
            )}
       </div>
                </div>
                <div className=" flex flex-col">
                    <div>
                    <p className="text-2xl font-bold whitespace-nowrap">
                      {/* Employee Name   */}
                      {company.username}
                    </p>
                    </div>
                    
                    <div className="bg-costumGreen py-1 px-2 mt-2  w-max rounded-full ">
                    <p className="text-sm">
                       {/* Category  */}
                      {company.category}
                    </p>
                    </div>
                    
                </div>

              </div>
              {/* about company  */}
              <div className="mt-5 w-auto">
                <p className="text-xl font-bold mb-1">
                  About Employee
                 
                </p>
                <p className="text-xs leading-normal">
                {company.description}
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, incidunt! Molestias harum debitis culpa animi illum quaerat modi expedita? Voluptatibus quae aliquam voluptates pariatur, tempore soluta architecto voluptatum distinctio dolores? */}
                </p>

              </div>
              
              <div className="h-[0.5px]  border   border-lightGry w-[350px] mt-3 ">
               </div>
               {/* posts  */}
               <div className="flex flex-col w-full ">
                <div className="flex justify-between items-center mt-1">
                <p className="text-xl font-bold  inline">
                 Available Posts 
                </p> 
                <p className="text-xs inline mr-4 ">
                   
                   {availableJobs.length}  Open Posts
                </p>
                </div>
                <div className="flex justify-start  mt-2 overflow-auto overflow-y-hidden  no-scrollbar">
                  {/* jobs cards instead company  */}
                  {availableJobs.map((job, index) => (<div key={index} >
   
  <div className="w-[250px]"> <JobCard data={job} openPopUp={()=>open(job)}/></div>
    {popUp && openJob &&(
      <div key={`popup-${index}`} className=''>  <div className='fixed inset-0 z-10 flex flex-col justify-center items-center bg-popUp bg-opacity-40'>
      <img onClick={()=>open(job)} src={exit} className='h-10 w-10 absolute top-[10vh] bg-white rounded-full z-30 p-2 right-[18vw]'/><PopUp job={openJob}/></div> </div>)}

    </div>
  ))}
               
                </div>
                </div>
                
                <div className="h-[0.5px]  border   border-lightGry w-[350px] mt-3 ">
               </div>
            </div>
             <div className="flex flex-col  w-1/3">
                  
            <div className="flex justify-evenly ">
                <div className="bg-primary rounded-20 px-3 py-0 flex justify-between items-center ">
                 <ReactRating
                 count={5}
                 size={20}
                 color2={'#1AD3A7'}
                 value={company.rating}
                 edit={false}/>
                 <p className="text-white">
                    {company.rating}
                 </p>
                </div>
                <div>
                    <img src={shortList} alt="short list" className="ml-0" />
                </div>

            </div>
               
                {/* info  */}
                <div className="flex  flex-col  mt-4 rounded-20 px-6 py-6 bg-lightGry">
                    <div className="flex items-start mb-4 ">
                        <div>
                          <img src={localisation} alt=""  className="w-6 mr-3"/>
                        </div>
                        <div>
                          <p className="text-[12px] font-bold">
                          Location
                          </p>
                          <p className="text-[10px]">
                          {/* something   */}
                        {company.wilaya}
                       
                          </p>
                        </div>

                    </div>
                    
                    <div className="flex items-start mb-4">
                    <div >
                          <img src={date} alt=""  className="w-6 mr-3"/>
                        </div>
                        <div>
                          <p className="text-[12px] font-bold">
                          Founded date
                          </p>
                          <p className="text-[10px]">
                          {company.foundationDate} 
                          </p>
                        </div>

                    </div>

                    <div className="flex items-start mb-4">
                    <div>
                          <img src={size} alt=""  className="w-6 mr-3" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold">
                          Company size
                          </p>
                          <p className="text-[10px] ">
                          {company.companySize}
                          </p>
                        </div>
                    </div>
                    
                    <div className="flex items-start mb-4">
                    <div>
                          <img src={post} alt=""  className="w-6 mr-3" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold">
                          Available posts
                          </p>
                          <p className="text-[10px]">
                          {company.availablePosts} 
                          </p>
                        </div> 
                    </div>

                    
                    <div className="flex items-start mb-4">
                    <div className="shrink-0">
                          <img src={letter} alt=""   className="w-6 mr-3"/>
                        </div>
                        <div>
                          <p className="text-[12px]   font-bold ">
                          Email
                          </p>
                          <p className="text-[10px] w-5/6 overflow-x-scroll no-scrollbar ">
                          {company.email}  
                          </p>
                        </div> 
                    </div>
                    
                    <div className="flex items-start mb-4">
                    <div>
                          <img src={tel} alt=""  className="w-6 mr-3" />
                        </div>
                        <div>
                          <p className="text-[12px] font-bold">
                            Phone number
                          </p>
                          <p className="text-[10px]">
                          {company.phoneNumber}
                          </p>
                        </div>
                    </div>
                    {/* network */}
                    <div className="flex justify-center">
                          {socialmedia.instgram && (
                              <a href={`${socialmedia.instgram}`}>
                                  <img src={instagram} alt="Instagram" />
                              </a>
                          )}
                          {!socialmedia.instgram && (
                              <img src={instagram} alt="Instagram" />
                          )}

                           {socialmedia.facebook && (
                              <a href={`${socialmedia.facebook}`}>
                                  <img src={facebook} alt="facebook" />
                              </a>
                          )}
                          {!socialmedia.facebook && (
                              <img src={facebook} alt="facebook" />
                          )}


                          {socialmedia.linkedin && (
                              <a href={`${socialmedia.linkedin}`}>
                                  <img src={linkedln} alt="linkedIn" />
                              </a>
                          )}
                          {!socialmedia.linkedin && (
                              <img src={linkedln} alt=" linkedln" />
                          )}



                      
                      </div>

                </div>
              </div>
            

            </div>

           
              
    
            {/* bottom section  */}
            <div className="flex  mr-1 justify-between"> 
                 {/* comments and reviews  */}
             <div className="mt-1 flex flex-col  w-2/3  ">
               <div className="flex justify-between items-center mt-1 w-full">
                <p className="text-xl font-bold  inline">
                Comments & Reviews
                </p> 
                <p className="text-xs inline mr-4 ">
                    {reviews.length} Comments 
                </p>
                </div>
                {/* les boites de commentaires  */}
                <div className="flex flex-col justify-around w-5/4 max-h-[270px] overflow-scroll overflow-x-hidden no-scrollbar">
                <div className="...">
                      {reviews.map((newReview, index) => (
                     <ReviewCard key={index} review={newReview}  userInfo={userinfo}   />
        ))}     
      
      </div>
                </div>
                
                 

               </div>
              
                    {/* feedback */}
                    <div className="bg-lightGry rounded-20 px-3 py-2 mt-4  h-[270px] w-1/3 ">
                    <div className="flex justify-between items-center">
                        <p className="text-[11px]  font-medium ">
                        Add a review
                        </p>
                        <div className="">
                        <ReactRating 
                        onChange={ handleRatingChange }
                        value={rating} 
                        />

                        </div>
                       
                    </div>
                    <div className="w-auto flex flex-col ">
                        <input placeholder="Your name" className="m-1 h-7 w-5/4 rounded text-xs px-2  text-justify"
                         onChange={(e) => setUserName(e.target.value)}
                         value={userName}>
                        </input>
                        <input placeholder="Email address" 
                        className="m-1 h-7 w-5/4 rounded text-xs px-2  text-justify"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}>
                        </input>

                    </div>
                    <div className="flex justify-between items-start mt-2" >
                    <input
                        type="checkbox"
                        value={rememberMe}
                        onChange={handleCheckboxChange } 
                        className="h-4 w-4"
                    />
                    <p className="text-[10px] ml-2"> 
                    Remember my name and email for the next time I comment 
                    </p>
                    </div>
                    <div className="flex flex-col justify-center">
                   
                        <textarea
                        className="text-[10px] h-20 p-1 w-full mt-1"
                        value={comment}
                        onChange={handleChange}
                        placeholder="Enter your comment..."
                        maxLength={maxCharacters}
                        />
                    
                    <div className="mt-2">
                        <button className="bg-primary rounded-lg text-costumGreen  font-semibold  px-6 w-full text-[10px] py-1 content-center "
                        onClick={handleSubmit}
                        >
                        Submit your review
                        </button>
                    </div>
                    </div>
                   


                 </div>


            </div>
            
            
            <div className="flex flex-col w-1/3 h-2/3">
                {/* rating  */}
               
            


            </div>

            
          
        </div>
    )

}
export default ReadMore;