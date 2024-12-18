import SideBarCom from "../../components/sideBarCom";
import returnArrow from "../../assets/arrowForward.svg";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import linkedln from "../../assets/LinkedIn.svg";
import twitter from "../../assets/twitter.svg";
import ReviewCard from "../../components/ReviewCard";
import exit from "../../assets/Exit.svg";
import ReadMore from "../../components/ReadMore";
import { useState,useEffect, useReducer } from "react";
import ReactRating from "react-stars";
import bag from "../../assets/Bag.svg";
import group from  "../../assets/Group.svg";
import msg from "../../assets/Messaging.svg";
import defaultRec from "../../assets/defaultRec.svg"
import { Link, useLocation } from 'react-router-dom';
import { getCompanyInfo, handleForgotPasswordBackend } from "../../backend/sohaib/DashboardCompany";
import { companyreviews } from "../../backend/sohaib/CompaniesBackend";
import { Auth } from "../../backend/firebaseconfig";

function DashboardCom ( ){
    const [myjobsPosts,setMyJobsPosts] = useState(0);
    const [myApplicants,setMyApplicants] = useState(0);
    //const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [viewProfile, setViewProfile] = useState(false);
    const handleViewProfile = (e) => {
      
        e.preventDefault();
        setViewProfile(true);
    };
    const handleExit = () => {
        setViewProfile(false);
    };


   const  handleChangePassword=()=>{
    //add your function of changing password here 
 handleForgotPasswordBackend(company.email).then(() => {
      alert("Check your email address to Reset you password");
    })
    .catch(()=>{
      alert("failed to send email try after few minutes")
    })

   };

    const [company, setCompany] = useState({}
        //info about the current company 
       /* {
            username: 'John Doe',
            profil :null,
            category: 'Software Engineer',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati id quos vel, non ea nam repellat rem, ut, dolorem ullam odio consequuntur explicabo libero maxime eaque sequi quo assumenda',
            foundedDate: '01/01/2000',
            wilaya: 'Skikda',
            adresse : "Collo", //friendly adresse of the form 
            companySize: '100-500 employees',
            rating : 4,
            email: 'john.doe@example.com',
            phoneNumber: '+1 234 567 890',
            socialmedia: {
            instgram : 'https//john.doe',
            facebook: 'john.doe',
            linkedin: 'john.doe',
            twitter :'john.doe',
            },
           
          },*/
    
        )

        const fetchData = async () => {          //geting company inforamations from backend --sohaib
    try {
        const companieData = await getCompanyInfo();
       setCompany(companieData);
        setMyApplicants(companieData.applicants)
      setMyJobsPosts(companieData.availablePosts)
    
       //forceUpdate()
    
    } catch (error) {
       console.error("Error fetching companie:", error);
          }
 };

useEffect(()=>{
 fetchData();

},[])
//console.log('company :'+company.socialmedia.instgram)
    //each company must have this three arrays 
   
  
   


        // a review just for traying 
        const newReview = {
    
            name: "esma",
            // the date is the date of review posting not the current date 
            date: new Date().toLocaleDateString(), // Current date 
            rating: 3.5,
            comment: "blaksdjiwehfurf",
            //log also of the user who make the review 
           
        }; 
        //array which contains the reviews of this company 
        const [reviews, setReviews] = useState([])//[newReview ,newReview,newReview,newReview,newReview,newReview]);

         const fetchdata = async () => {    //gettin reviews from backend
    try {
        if(!(Auth.currentUser==null)){
        const com ={}
        com.companyId=Auth.currentUser.uid;
        const companiesData = await companyreviews(com);
        setReviews(companiesData);
        //forceUpdate()
        }
    
    } catch (error) {
       console.error("Error fetching reviews:", error);
          }
 };

useEffect(()=>{
 fetchdata();

},[])
//console.log('reviews :'+reviews)
    return(
        <div className="flex bg-primary">
            <div className="w-1/5">
            <SideBarCom/> 
            </div>
          
            <div className="w-4/5 p-10 px-16 space-y-6 rounded-l-[30px] border-2 bg-background">
             {/* top */}
              <div className=" flex justify-between items-center">
                <div className="flex  items-center justify-between ">
                <img src={returnArrow} alt=""  className="transform rotate-180 w-5 h-5  mr-4 "/>
               <Link to="/" className="text-[18px]">Home </Link> 

                </div>
                <div className=" flex justify-end space-x-2 ">
                <Link to="/company/submitJob" className="bg-primary font-medium text-center px-8 py-1 rounded-[6px] text-costumGreen hover:bg-secondary hover:text-primary ">
              Post Now
               </Link>
                    <Link
                    to="/company/dashboard"
                    className="bg-primary font-medium  text-center  px-8 py-1  rounded-[6px] text-costumGreen hover:bg-secondary hover:text-primary ">
                        View Profile 
                    </Link>
                
                

                </div>
                
              </div>

             
            {/* center  */}
              <div className="mb-36"> 
                <p className="text-2xl font-semibold ">
                    Welcome in your logo Employer’s dashboard 
                    </p>
              </div>
              {/* bottom  */}
              <div className="flex  space-x-8 items-start mt-10">

                {/* form */}
                <div className="w-3/4  space-y-4  ">
                    {/* perso info  */}
                 <div className="flex  flex-col py-6 px-10 space-y-4  bg-white rounded-20 hover:shadow-sdw">
                    <p className="font-bold text-[20px]">
                    Your personal informations
                    </p>
                    <div className="flex  space-x-8">
                  
                    {company.profil ? (
                        <img src={company.profil} alt="Profile" className="rounded-20 w-24 h-24 mt-1" />
                    ) : (
                        <img src={defaultRec} alt="Default" className=" h-24 w-24 mt-1" />
                    )}
                    
                    <div className="font-medium space-y-1 text-[14px]">
                        <p> Name : <span className="text-[12px] font-normal ml-3">{company.username}</span></p>
                        <p> Category :<span className="text-[12px] font-normal ml-3"> {company.category}</span></p>
                        <p> Email : <span className="text-[12px] font-normal ml-3"> {company.email} </span></p>
                        <p> Phone : <span className="text-[12px] font-normal ml-3"> {company.phoneNumber}</span></p>

                    </div>

                    </div>
                    
                 </div>
                 {/* Details  */}
                 <div className="flex  flex-col py-6 px-10 space-y-4  bg-white rounded-20 hover:shadow-sdw">
                    <p className="font-bold text-[20px]">
                    Details 
                    </p>
                    
                    <div className="font-medium  text-[14px] space-y-1">
                        <p> Founded Date  : <span className="text-[12px] font-normal ml-3">{company.foundationDate} </span></p>
                        <p> Location : <span className="text-[12px] font-normal ml-3">  {company.adresse} {company.wilaya} </span></p>
                        <p> Company Size: <span className="text-[12px] font-normal ml-3">{company.companySize} </span> </p>
                        

                    </div>

                   
                    
                 </div>
                 {/* About  */}
                 <div className="flex  flex-col py-6 px-10 space-y-4  bg-white rounded-20 hover:shadow-sdw">
                    <p className="font-bold text-[20px]">
                    About Company 
                    </p>
                    
                    <div className="font-medium  text-[14px] space-y-1">
                        <p> 
                        {company.description}
                            
                         </p>
                        
                        

                    </div>

                   
                    
                 </div>
                    {/*  social media  */}
                    <div className="flex  flex-col py-6 px-10 space-y-4  bg-white rounded-20 hover:shadow-sdw">
                    <p className="font-bold text-[20px]">
                    social media
                    </p>
                                        <div className="flex justify-center items-center space-x-7">
                        {/* Facebook */}
                        {company.socialmedia?.facebook ? (
                            <a href={company.socialmedia.facebook}>
                                <img src={facebook} alt="Facebook" />
                            </a>
                        ) : (
                            <img src={facebook} alt="Facebook" />
                        )}

                        {/* Instagram */}
                        {company.socialmedia?.instgram ? (
                            <a href={company.socialmedia.instgram}>
                                <img src={instagram} alt="Instagram" />
                            </a>
                        ) : (
                            <img src={instagram} alt="Instagram" />
                        )}

                        {/* Twitter */}
                        {company.socialmedia?.twitter ? (
                            <a href={company.socialmedia.twitter}>
                                <img src={twitter} className="h-10 w-10"  alt="Twitter" />
                            </a>
                        ) : (
                            <img src={twitter} alt="Twitter" className="h-10 w-10" />
                        )}

                        {/* LinkedIn */}
                        {company.socialmedia?.linkedIn ? (
                            <a href={company.socialmedia.linkedin}>
                                <img src={linkedln} alt="LinkedIn" />
                            </a>
                        ) : (
                            <img src={linkedln} alt="LinkedIn" />
                        )}
                    </div>


                    
                 </div>
                    {/*  review  */}
                    <div className="flex  flex-col py-6 px-10 space-y-4  bg-white rounded-20 hover:shadow-sdw">
                    <p className="font-bold text-[20px]">
                   Reviews 
                    </p>
                    
                    <div className="flex flex-col justify-around w-5/4 max-h-[270px] overflow-scroll overflow-x-hidden no-scrollbar">
                <div className="...">
                      {reviews.map((newReview, index) => (
                     <ReviewCard key={index} review={newReview}   />
                  ))}     
      
                  </div>
                </div>
                </div>
                    {/*  reset password  */}
                   
                    <div className="flex  flex-col py-6 px-10 space-y-4  bg-white rounded-20 hover:shadow-sdw">
                    <p className="font-bold text-[20px]">
                    Change your Password 
                    </p>
                    <div className="font-medium  text-[14px] space-y-1">
                        <p> Password : </p>
                    </div>
                    <div>

                    </div>
                   <button onClick={handleChangePassword} className="py-1 px-6 font-semibold bg-secondary text-primary  rounded-full w-1/3"> 
                    Change Password
                   </button>
                    </div>
                   



                </div>
                {/* cards  */}
                <div className="flex flex-col space-y-6 ">
                    {/* r1 */}
                <div className="bg-primary hover:shadow-sdw rounded-20 justify-evenly  px-3 py-0 flex space-x-6 items-center w-full ">
                        <ReactRating
                        count={5}
                        size={24}
                        color2={'#1AD3A7'}
                        value={company.rating}
                        edit={false}/>
                        <p className="text-white text[18px]">
                        {company.rating}
                        </p>
                </div>
                    {/* r2 */}
                    <div className= " hover:shadow-sdw flex flex-col text-[16px] items-start justify-center bg-primary text-white w-full px-8 py-4 rounded-20  font-semibold ">
                        <div className="flex  items-center space-x-2">
                        <img src={bag} alt="bag"  className="w-10 h-10"/>
                        <span className="font-bold text-[24px]" > {myjobsPosts}</span>
                        </div>
                    
                       <p className="font-bold text-[18px]">  Post Offers </p>
                       <p> Since Creation </p>
                        {/* instead of 3: current date -date of signing up   */}
                    </div>
                    {/* r3 */}
                    <div className= " hover:shadow-sdw flex flex-col text-[16px] items-start justify-center bg-costumGreen text-primary w-full px-8 py-4 rounded-20  font-semibold ">
                        <div className="flex  items-center space-x-2">
                        <img src={group} alt="bag"  className="w-10 h-10"/>
                        <span className="font-bold text-[24px]" > {myApplicants} </span>
                        </div>
                    
                       <p  className="font-bold text-[18px]">   Applicants </p>
                       <p> Since Creation</p>
                        {/* instead of 9 : current date -date of signing up   */}
                       


                    </div>
                    {/* r4 */}
                    <div className= " hover:shadow-sdw flex flex-col text-[16px] items-start justify-center bg-[#39F5C8] text-primary w-full px-8 py-4 rounded-20  font-semibold ">
                        <div className="flex  items-center space-x-2">
                        <img src={msg} alt="bag"  className="w-10 h-10"/>
                        <span  className="font-bold text-[24px]" > {reviews.length} </span>
                        </div>
                    
                       <p className="font-bold text-[18px]" >   Reviews </p>
                       <p> Since Creation </p>
                        {/* instead of 3 : current date - date of signing up   */}
                    </div>
                </div>

              </div>
             




            </div>
            
      

          </div>
    );
}
export default DashboardCom ;