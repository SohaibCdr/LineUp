
import React from 'react';
import appliances from "../assets/User.svg";
import date from "../assets/hour.svg";
import level from "../assets/level1.svg";
import location from "../assets/location.svg";
import period from "../assets/period.svg";
import money from "../assets/salary.svg";
{/*import save from "../assets/savedIcon.jsx";*/}
const JobCard=({data,openPopUp})=>{

    
    
    return( 
        <div  className="flex-shrink-0 basis-1/4 h-fit  px-4 justify-between pt-2 font-inter bg-white rounded rounded-tl-3xl text-inter shadow-md relative m-2 transition hover:shadow-2xl">
        {/*<img src={save}   className={`absolute right-0 m-2 h-6 w-6 ${data.saved && "bg-green-300"}`}/>*/}
        <div className='flex flex-col h-[260px] items-center p-2'>
         <div className='flex flex-col h-[150px] items-center justify-evenly '> <img  src={data.logo} className='h-14 w-14 bg-background rounded-full '/>
         <div className='flex flex-col justify-center items-center mb-2 gap-2  '><div className='font-bold text-lg text-center'>{data.name}</div>
        <div className='text-xs px-2 bg-green-200 rounded-20'>{data.category}</div>
         </div> </div>
          <div className='grid grid-cols-2 my-2  items-center font-semibold h-[80px]  text-[11px]'>
           
              <div className='flex flex-row items-center  '>
                <img src={location} className='h-6 w-6 mr-2' />
                <p>{data.location}</p>
              </div>
              <div className='flex flex-row items-center break-all '>
                <img src={level} className='h-6 w-6 mr-2' />
                <p className=' '>{data.jobLevel}</p>
              </div>
            
         
              <div className='flex flex-row items-center '>
                <img src={period} className='h-6 w-6 mr-2' />
                <p>{data.jobType}</p>
              </div>
              <div className='flex flex-row items-center '>
                <img src={money} className='h-6 w-6 mr-2' />
                <p>{data.salary.toString().concat("da")}</p>
              </div>
           
          </div>
          <button onClick={()=>openPopUp(data)} className='mb-1 py-[5px] px-6 rounded-full bg-secondary shadow-lg text-xs font-semibold'>visit post</button>
        </div>
        <div className='flex flex-row justify-between border-t-[1px] font-semibold px-1 py-1'>
          <div className='flex flex-row text-xs'>
            <img src={date} className='h-4 w-4 mr-2' />
            <p>{data.postingDate}</p>
          </div>
          <div className='flex flex-row text-xs'>
            <img src={appliances} className='h-4 w-4 mr-2' />
            <p>{data.appliances}</p>
          </div>
          
        </div>
        
      </div>  
    )
}
export default JobCard; 