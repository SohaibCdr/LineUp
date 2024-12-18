import SideBarCom from "../../components/sideBarCom";
import returnArrow from "../../assets/arrowForward.svg";
import { Link } from "react-router-dom";
import filled from '../../assets/filled.svg';
import remove from '../../assets/remove.svg';
import viewEye from '../../assets/viewEye.svg';
import { TbEyeFilled } from "react-icons/tb";
import { FaLock } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import exit from '../../assets/Exit.svg';
import level from "../../assets/level1.svg";
import location from "../../assets/location.svg";
import period from "../../assets/period.svg";
import money from "../../assets/salary.svg";
import { useState,useEffect } from "react";
import { GetJobs, deletjob, updatefilled } from "../../backend/sohaib/MyJobs";

import JobPopUp from"../../components/jobPopUp";
function MyJobs(){
  const[viewIt,setViewIt]=useState(false);  
  const[openJob,setOpenJob]=useState(null); 
  const [jobs,setJob]=useState([]);//[{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:true},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false},{id:1,name:"first",postingDate:"June20,2024",applicants:"22",category:"managerial / supervisor",jobLevel:"managerial/supervisor",location:"50. Bordj Badji Mokhtar",jobType:"internership",salary:2000,filled:false}]);
  
  
  const fetchData = async () => {
    try {
        const jobsData = await GetJobs();
        setJob(jobsData);
       
    
    } catch (error) {
       console.error("Error fetching Jobes:", error);
          }
 };

useEffect(()=>{
 fetchData();

},[])
  console.log(jobs)
  
  const open=(job)=>{
    setViewIt(!viewIt);
    setOpenJob(job);} 
  
  const appear=false;
  
  return(
        <div className="flex font-inter bg-primary"> 
            <div className="w-1/5">
            <SideBarCom/> 
            </div>
          
<div className="w-4/5 h-screen p-10 px-16 space-y-6 rounded-l-[30px] border-2 bg-background ">
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

             {/*job's table*/}
             <div className="bg-white shadow-md w-full max-h-[77vh] min-h-[30vh] overflow-y-auto scrollBar pb-2 rounded-md  flex flex-col">
                <div className="px-2 py-2 my-2 mx-2 bg-green-200   rounded-md text-blue-500 font-bold grid grid-cols-5">
                <div className="col-span-2">Title</div>
                <div>Creation date</div>
                <div>Applicants</div>
                <div className="place-self-center">Actions</div>
                </div>
                
          {jobs.map((job,index)=>(
                <div className="px-2 py-2   mx-2 border-b font-semibold  text-black  grid grid-cols-5 ">
                <div className="flex flex-col gap-2 col-span-4  font-semibold" >
              <div className="grid grid-cols-4">
                <div className="col-span-2 font-bold">{job.name}</div>
                <div>{job.postingDate}</div>
                <div>{job.applicants} Applicant(s)</div>
                </div>
                <div className='flex flex-row  gap-2 font-semibold my-4'>
            <div className='flex flex-row  items-center gap-1 text-xs'>
              <img src={location} className='h-6 w-6' />
              <p>{job.location}</p>
            </div>
            <div className='flex flex-row items-center gap-1 text-xs'>
              <img src={level} className='h-6 w-6 ' />
              <p>{job.jobLevel}</p>
            </div>
            <div className='flex flex-row items-center gap-1 text-xs'>
              <img src={period} className='h-6 w-6 ' />
              <p>{job.jobType}</p>
            </div>
            <div className='flex flex-row items-center gap-1 text-xs'>
              <img src={money} className='h-6 w-6 ' />
              <p>{job.salary.toString().concat("da")}</p>
            </div>
            <div className="text-xs bg-green-100 rounded-full px-2  w-fit place-self-center">{job.category}</div>
            </div>
                </div>
                <div className="flex flex-row gap-3 place-self-center   ">
                <div className="group relative"> <TbEyeFilled onClick={()=>open(job)} className="w-6 h-6 rounded-md p-1 fill-primary hover:fill-white bg-blue-200 hover:bg-blue-600" />
                <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2 z-50">
    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
    <p className="px-1">view post</p>
  </div>
</div>
<div className="group relative">
<FaLock onClick={() => {
  const updatedJobs = [...jobs]; 

  updatefilled(updatedJobs[index].id,updatedJobs[index].filled)      //function Backend to change filled etat  --sohaib


  updatedJobs[index] = { ...updatedJobs[index], filled: !updatedJobs[index].filled }; 
  setJob(updatedJobs); 
 
}} className={`w-6 h-6 rounded-md p-1 hover:fill-white  hover:bg-blue-600 ${!job.filled  ? " fill-primary bg-blue-200":"fill-white bg-blue-600"}`} />
               
                <div className="hidden group-hover:block bg-black text-white flex  w-[90px] text-xs rounded p-1 absolute bottom-7  transform -translate-x-1/2 z-50">
    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-6 rotate-45"></div>
    <p className="px-1">
        {job.filled ? 'mark unfilled' : 'mark as filled'}
    </p>
  </div>
</div>
<div className="group relative">
<RxCross1 onClick={()=>{
  const updatedJobs = [...jobs];
  deletjob(updatedJobs[index].id)   //function Backend to delet job --Sohaib
  setJob(jobs.filter(item=> item !== job))


}
  }  className="w-6 h-6 rounded-md p-1  bg-blue-200 hover:bg-blue-600"  />
                
                <div className="hidden group-hover:block bg-black text-white w-[60px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2 z-50">
    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-3 rotate-45"></div>
    <p className="px-1 ">remove</p>
  </div>
</div>
                </div>
                {viewIt && openJob &&(
      <div key={`popup-${index}`} className=''>  <div className='fixed inset-0 z-10 flex flex-col justify-center items-center bg-popUp bg-opacity-20'>
      <img onClick={()=>open(job)} src={exit} className='h-10 w-10 absolute top-[10vh] bg-white rounded-full z-30 p-2 right-[18vw]'/><JobPopUp job={openJob} appear={appear}/></div> </div>)}
                </div>
            
               ))}
               {jobs.length===0 && (<p className="font-bold text-black text-md place-self-center p-8">you haven't posted anything yet</p>)}
              </div>
             
             
</div>
             
          
</div>
            
        
    );
}
export default MyJobs ;