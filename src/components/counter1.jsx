import React from "react";
import bag from "../assets/Bag.svg"
import save from "../assets/save.svg";
import { getJobseekerInfo } from "../backend/sohaib/DashboardJobseeker";
import { useState,useEffect } from "react";
//const d = await getJobseekerInfo();

const Counter1 = ( info)=>{
    const [data,setdata] = useState([])
 const fetchData = async () => {
    try {
        const Data = await getJobseekerInfo();
        setdata(Data);
       
    
    } catch (error) {
       console.error("Error fetching :", error);
          }
 };

useEffect(()=>{
 fetchData();

},[])
  console.log("applications :"+data.applications)
    return(
        <div className="pl-10 ">
             <div className="w-52 bg-primary text-center rounded-2xl  h-32 mb-5 items-center justify-center  ">
            <div className=" justify-center flex flex-row  pt-2"> 
<img src={bag} alt="" />
<h2 className="font-bold  text-white text-xl">{data.applications}</h2>
            </div>
<h2 className="font-bold text-base text-white"> Applications</h2>
    <p className="font-bold text-base text-white"> Since Created </p>
</div>

        </div>
       
    )

   
}
export default Counter1;