import React from "react";
import Box2 from "./Box2";
import Sidebar from "./Sidebar1";
import { useState,useEffect } from "react";
import PopUp from "./jobPopUp";
import Box from "./Box";
import exit from '../assets/Exit.svg';
import { getJobs } from "../backend/ilyes/getJobs";
import { getMyApps } from "../backend/ilyes/getApps";
import SearchBar from "./searchBar";
import returnArrow from "../assets/arrowForward.svg";
import { Link} from 'react-router-dom';
const Applications =()=>{

    const test = [1] ; // data from backend as test
    const [show ,setShow]= useState(false);
    const [openJob,setOpenJob]= useState(null);
    const open =(job)=>{
        setShow(!show);
        setOpenJob(job);
    }

    const [Infoscard ,setInfoscard]= useState([]);
    // console.log(Infoscard)
    // console.log(Infoscard.length);

    const fetchJobs = async () => {
            const jobsData = await getMyApps();
            setInfoscard(jobsData);
            console.log("jobsData: "+jobsData);
        
         
      };

    useEffect(()=>{
        fetchJobs();
        
    },[])

return(
    <div className="flex">
        <div className="w-1/5">
        <Sidebar/>
        </div>

<div className="w-4/5 p-5 mt-[5px] rounded-xl rounded-r-none bg-back  ">

<div className="flex  items-center  mb-11 ">
     <div className="flex   mr-16 items-center z-20  ">
                <Link to="/" className="flex items-center">
                <img src={returnArrow} alt="" className="transform mb-4 rotate-180 w-5 h-5 mr-4" />
                </Link>
                <p className=" mb-4 font-semibold text-[18px] ">
                    Home 
                </p>

                </div>
       
     <div className=" mr-20 z-20 h-16">
        <SearchBar/>


        
        </div>



        


</div>

        {

        
            Infoscard.length === 0 ? <Box/> 
            : (
        <div className="w-4/5  flex items-center p-10 mt-[5px] rounded-xl rounded-r-none rounded-br-none  rounded-bl-none bg-back">
        {Infoscard.map((obj, index) => (
                    <React.Fragment key={index}>
                        <Box2
                            Infoscard={obj}
                            open={() => open(obj)}
                        />
                        {show && openJob && (<div key={`popup-${index}`} className=''>  <div className='fixed inset-0 z-20 flex flex-col justify-center items-center bg-popUp bg-opacity-40'>
      <img onClick={()=>open(obj)} src={exit} className='h-10 w-10 absolute top-[10vh] bg-white rounded-full z-30 p-2 right-[18vw]'/> <PopUp job={openJob}/></div></div>)} 
                    </React.Fragment>
                ))}
        </div>
         ) 
        
        }
        </div>
    </div>

)
}
export default Applications;