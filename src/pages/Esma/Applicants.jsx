import SideBarCom from "../../components/sideBarCom";
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import returnArrow from "../../assets/arrowForward.svg";
import ReadMore from "../../components/ReadMore";
import exit from "../../assets/Exit.svg";

 import PostCard from "../../components/MyPostApp.jsx"; 
import {   getMyoffers, getThisApplicants } from "../../backend/ilyes/getApplicants.js";
import { Auth } from "../../backend/firebaseconfig.js"; //we need this after merging
function Applicants (){
    
    const initialApplicants = [
      
    ];
 
    


const [viewProfile, setViewProfile] = useState(false);
const handleViewProfile = (e) => {
    fetchCompInfo();
    e.preventDefault();
    setViewProfile(true);
};
const handleExit = () => {
    setViewProfile(false);

};
// array of jobs posted by this company 
const [Posts,setPosts]= useState([]);
//fetches all of the company offers and for each of em it fetches its applicants
useEffect(() => {
  const fetchApplicants = async () => {
    try {
      let myposts = [];
      //for now we use the company with this id as an example
      const offersInfo =await getMyoffers(Auth.currentUser.uid  );
      // we replace with this after we link with other pages...
      //const offersInfo =await getMyoffers(Auth.currentUser.uid);

      const applicantsPromises = offersInfo.map(async (offer) => {
        const myapplicants = await getThisApplicants(offer.offerid);
        return { ...offer, applicants: myapplicants };
      });

      myposts = await Promise.all(applicantsPromises);
      console.log("Posts: ", myposts);
      setPosts(myposts);
    } catch (error) {
      console.error("Error fetching applicants: ", error);
    }
  };

  fetchApplicants();
}, []);

const [company, setCompany] = useState(
    {
        username: 'John Doe',
        profil :null,
        category: 'Software Engineer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad obcaecati id quos vel, non ea nam repellat rem, ut, dolorem ullam odio consequuntur explicabo libero maxime eaque sequi quo assumenda',
        foundedDate: '01/01/2000',
        wilaya: 'Skikda',
        adresse : "Collo", //friendly adresse of the form 
        companySize: '100-500 employees',
        rating : 4,
        availablePosts: 5,
        email: 'john.doe@example.com',
        phoneNumber: '+1 234 567 890',
        socialmedia: {
        instgram : 'https//john.doe',
        facebook: 'john.doe',
        linkedIn: 'john.doe',
        twitter :'john.doe',
    
        },
       
      },

    )
    return(
        <div className="flex bg-primary ">
            <div className="w-1/5">
              <SideBarCom/> 
             </div>
             

             <div className="w-4/5 h-screen  p-10 px-16 space-y-6 rounded-l-[30px] border-2 bg-background">
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
              {/* bottom content of the page  */}
              <div className="w-full  max-h-[450px] overflow-y-scroll  no-scrollbar overflow-x-hidden  p-2 space-y-4 ">

              {Posts.map((post, index) => (
                     <PostCard
                        key={index}
                        initialApplicants={post.applicants}
                        jobName={post.jobName}
                    />
                ))}  
             
               {Posts.length==0 && 
               (
                <div className="font-3xl border-1 rounded-lg p-40 text-center bg-white shadow-md">
                   You have not any applicant yet  
                </div>
               )}
          







              </div>




           </div>

           { viewProfile && (
            <div className="fixed inset-0  z-50 flex flex-col justify-center items-center bg-popUp bg-opacity-50">
                <button className="h-10 w-10 absolute top-[10vh] bg-white rounded-full z-30 p-2 right-[18vw]" onClick={handleExit}>
                    <img src={exit} alt="exit" className="w-6 h-6" />
                </button>
                <ReadMore company={company}  />
            </div>
        )}


</div>
        


          
           

      
     
    );
}
export default Applicants ;