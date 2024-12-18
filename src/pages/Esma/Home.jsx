import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../components/navBar";
import Footer from "../../components/Footer";
import homepic from "../../assets/homepic.svg";
import  img from "../../assets/imageHome.svg";
import adv from "../../assets/advantages.svg"
import cmnt from "../../assets/comments.svg"
import notfc from "../../assets/notification.svg"
import background from "../../assets/background.svg"
import defaultpic from "../../assets/defaultPic2.svg"
import s1 from "../../assets/first step.svg";
import s2 from "../../assets/second step.svg"
import s3 from "../../assets/third step.svg"
import health from  "../../assets/health.svg" 
import education from "../../assets/etucation.svg"
import hr from "../../assets/hr.svg"
import design from "../../assets/design.svg"
import tech from "../../assets/tech.svg"
import marketing from "../../assets/marketing.svg"
import finance from "../../assets/finance.svg"
import automative from "../../assets/automative.svg"
import management from "../../assets/management.svg"
import commerce from "../../assets/commerce.svg"
import reviews from "../../assets/reviews.svg"
import background2 from "../../assets/background1.svg"

import SearchBar from "../../components/searchBar";
import { Auth, db } from "../../backend/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";


function Home (){

   let t
  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(async(user) => {
      
        try {
          if(user){
          const docSnap = await getDoc(doc(db, 'roles', user.uid));
            t=docSnap.data().role;
          } else {
            t='guest'
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      
    })

    // Assuming you have a way to get the current user from Auth
    

    return () => unsubscribe();
  }, []);
    return(
        < div className=" p-6 pb-0 max-w-screen bg-back  overflow-x-hidden">
       
        <Navbar type={t}/>
        <div   className=" h-auto absolute top-0 left-0   ">
   
    
   <div className="flex flex-col ">
       {/* first part search  */}

       <div className="flex px-24  ">
               <div className="w-2/4">
                       <img src={homepic} className=" w-5/6"/>
                   
              </div>
           <div className="flex flex-col w-3/4 p-24 pb-18 text-[50px] justify-evenly leading-none">
                   <div className=" font-bold">
                       <p className="">
                     One Step </p>
                   
                         <p >
                     <span className="text-secondary text-[60px] mt-1"> Closer</span> To Your 
                     New Job 

                    </p>

                   </div>

                   <div className="m-12 ml-0 w-30 h-20 ">
                    <div><SearchBar/></div> 
                       

                   

                   
                     
                   </div>
           </div>
          
       </div>
        {/* second section  */}
        <div className= " flex justify-around bg-primary  p-20  flex-col relative mt-5 w-full">

          {/* top */}
            <div className="flex justify-around items-end  ">
                <div className="flex flex-col w-1/3 ">
                    <div className="mb-8">
                      <p className="text-secondary  text-[32px] font-bold leading-10">
                      Discover Your  <br>
                      </br>
                        Career Opportunities 
                        Through Our Platform
                      </p>
                    </div>
                    
                    <div className="text-white text-[14px] mb-3 ">
                       <p className="mb-2">
                     At LineUP, we recognize that navigating the job market in Algeria can be challenging. That's why we've created a user-friendly platform designed to streamline your job search experience. </p>

                    <p className="mb-2">Our intuitive interface connects talented individuals with a diverse range of job opportunities across multiple industries </p>

                      <p className="mb-2"> we're here to help you find your perfect fit. Get started now and take the next step towards your dream career." 
                       </p>
                    </div>
                    <div className="flex justify-evenly items-center">
                            <Link to="/signUpEmployer" className="w-1/3  text-center bg-transparent border border-secondary text-secondary transition delay-100 hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm z-20">
                               
                                    Get started
                             
                            </Link>
                            <Link to="/aboutUs" className="w-1/3 text-center bg-transparent border border-secondary text-secondary transition delay-100 hover:bg-secondary hover:text-primary px-3 py-1 rounded-sm z-20">
                             
                                    Learn More
                               
                            </Link>
                     </div>


                </div>

                {/* images section  */}
                <div className="w-1/2">
                      <div className="w-1/2 relative  ">
                      <img src={img} className="" />
                      <img src={adv} className="absolute top-[-80px] right-[-50px] w-1/2 " />
                      <img scr={cmnt} className="absolute right-0 top-0 " />
                      <img src={notfc} className="absolute left-0 top-[60px] w-1/2" />
                 
                      

            
                </div>
                    
                  

                </div>
                
                

            </div>
             <div className="absolute  max-w-screen  bottom-[180px] right-0 z-10">
            <img src={background} alt="" />
             </div>
             <div className="absolute  bottom-[60px] max-w-screen  right-0 z-10">
            <img src={background2} alt="" />
             </div> 
             


            {/* bottom  */}
            <div className="flex flex-col justify-center items-center mt-36">
                <div>
                    <p className="text-white font-bold text-[30px]">
                         Trusted By 
                    </p>
                </div>
                <div className="flex justify-evenly mt-10 ">
                <img src={defaultpic} className=" w-1/6"/>
                <img src={defaultpic} className=" w-1/6"/>
                <img src={defaultpic} className=" w-1/6"/>
                <img src={defaultpic} className=" w-1/6"/>
                <img src={defaultpic} className=" w-1/6"/>
                    
                </div>
                    
            </div>

        </div>
        {/* third section  */}
        <div className="flex flex-col p-24 items-center w-full ">
            {/* top */}
            <div className="flex flex-col  items-center mb-12 ">
                  
                  <p className="font-bold  text-[40px] mb-2">
                  Easy to Use , Easy to Apply
                  </p>
                  <p className="text-[#77778C] font-bold text-[28px]">
                  
                  How it works
                  </p>
              
            </div>
            {/* bottom  */}
            <div className="flex mt-4 justify-evenly w-5/6 ">
               
                <img src={s1}  className="w-1/3 mr-2 hover:shadow-sdw  border-back rounded-sm  hover:scale-110 transition-transform duration-300 ease-in-out"/>
                <img src={s2} className=" w-1/3  mr-2 hover:shadow-sdw  border-back rounded-sm  hover:scale-110 transition-transform duration-300 ease-in-out"/>
                <img src={s3}  className="  w-1/3 mr-2 hover:shadow-sdw  border-back rounded-sm  hover:scale-110 transition-transform duration-300 ease-in-out"/>
                
                
               
            </div>
        </div>
        {/*  4 eme section  */}
        <div className="bg-primary flex flex-col  justify-center items-center  py-8 w-full">
            {/* title  */}
            <div className="flex flex-col items-center ">
                <p className="text-secondary font-bold text-[40px]">
                Select Preferred Category
                </p>
                <p className="text-white  text-[14px] mt-4">
                Know your worth and choose the job that qualify your life
                </p>

            </div>
             {/* select part  */}
             <div className="flex flex-wrap w-3/4 my-20">
            <Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Health%20%26%20Care">
    <img src={health} alt="Health" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=education%20%26%20Training">
    <img src={education} alt="Education" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Human%20ressources">
    <img src={hr} alt="HR" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Creative%20Design">
    <img src={design} alt="Design" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Developpement%20%26%20Tech">
    <img src={tech} alt="Tech" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Marketing">
    <img src={marketing} alt="Marketing" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Finance%20%26%20Acounting">
    <img src={finance} alt="Finance" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Automatisation%20%26%20Engineering">
    <img src={automative} alt="Automotive" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Management%20%26%20Administration">
    <img src={management} alt="Management" />
</Link>
<Link className="w-1/5 hover:scale-90 transition-transform duration-300 ease-in-out" to="/Jobs?category=Commercial">
    <img src={commerce} alt="Commerce" />
</Link>
</div>
             {/* review part  */}
             <div className="w-3/4 my-24">
                <img src={reviews} alt="" />

             </div>

        </div>
        
    </div>
    <div className="w-full">
    <Footer/>
    </div>
    
    </div>
    </div>
    );
}
export default Home;