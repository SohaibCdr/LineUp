import React, { useState } from "react";
import appliances from "../assets/User.svg";
import date from "../assets/hour.svg";


const Box2 =({Infoscard,open}) =>{
   
 
return(

    <div className={` m-2 rounded-tl-20 flex flex-col justify-between shadow-2xl  h-[230px] w-[200px] ${Infoscard.state === 'Accepted' ? 'bg-green-300': (Infoscard.state === 'Rejected' ? 'bg-red-400' : 'bg-back')}`}>
<div className="flex justify-center items-center space-y-7">
    <div className="">
 <img  className="w-6 h-6 rounded-full " src={Infoscard.logo}/> 
    </div>
    <div className="flex flex-col space-y-4">

        <div className="flex flex-col items-center justify-center">

<p > {Infoscard.name}</p>
<p>  {Infoscard.company}</p>
        </div>
        <div className="rounded-3xl text-[10px] bg-cyan-200 p-1">
            <p>{Infoscard.category}</p>
        </div>

    </div>
</div>
<div className="flex flex-col  items-center justify-center">
<p className="font-bold"> {Infoscard.state }</p>
    <p>  {Infoscard.postingDate}</p>
</div>
<div className=" flex  items-center justify-center">
    <button onClick={open} className=" gap-4 font-bold className='mb-1 py-[5px] px-6 rounded-full bg-secondary shadow-lg text-xs font-semibold hover:bg-primary hover:text-secondary">view post</button>
</div>


<div className='flex flex-row justify-between border-t-[1px] font-semibold px-1 py-1'>
          <div className='flex flex-row text-xs'>
            <img src={date} className='h-4 w-4 mr-2' />
            <p>{Infoscard.postingDate}</p>
          </div>
          <div className='flex flex-row text-xs'>
            <img src={appliances} className='h-4 w-4 mr-2' />
            <p>{Infoscard.appliances}</p>
          </div>
          
        </div>
    </div>
)
}
export default Box2;