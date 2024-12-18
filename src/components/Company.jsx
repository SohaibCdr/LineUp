import profil from "../assets/done.jpg" ;
import bagPic from "../assets/bagPic.svg";
import map from "../assets/mapIcon.svg";
import savedIcon from "../assets/savedIcon.svg";
import ReactStars from 'react-stars';
import { useState } from "react";
import defaultPic  from "../assets/defaultPic.svg";
import ReviewCard from "./ReviewCard";


function Company ({company ,  onReadMoreClick }){
   

    return (
    <div className="flex flex-col px-0 pb-1  pt-3 w-[200px] h-[230px] items-center  font-inter bg-white rounded rounded-tl-3xl m-2  shadow-md relative  transition hover:shadow-sdw flex-shrink-0">
        {/* <button className="cursor-pointer hover:bg-secondary ">
        <img src={savedIcon} alt="short list" className="absolute right-4 top-5  hover:filter hover:text-secondary"/>
        </button>
      */}

     
        <div className=" rounded-full mt-2 mb-1 ">
            {company.profil ? (
                <img src={company.profil} alt="Profile" className="rounded-full w-14  h-14  " />
            ) : (
                <img src={defaultPic} alt="Default" className="rounded-full  w-14  h-14 " />
            )}
       </div>
        <div className="mb-2">
            <p className="font-bold text-lg  ">{company.username}</p>

        </div>
        <div  className="flex items-center  text-[8px]">
            <img src={map} alt="localization" className="w-2"></img>
          <p className="ml-2" >
          {company.wilaya}
          </p>
        </div>
        <div className="flex items-center text-[8px]">
            <img src={bagPic} alt="posts" className="w-3 " >
            </img>
            <p className="ml-2">
            avaliable posts : {company.availablePosts}
            </p>
         
        </div>
        <div className="w-4/5 mt-1 overflow-hidden">
                <p className="text-[10px]  h-3 text-center leading-none font-light whitespace-nowrap overflow-hidden overflow-ellipsis">
                    {company.description.length > 30 ? company.description.substring(0, 30) + "..." : company.description}
                </p>
            </div>
        <div>
            <button   onClick={() => onReadMoreClick(company)} className="    font-bold rounded-full bg-secondary mt-6 px-6 py-1 ml-1 text-xs text-primary  shadow-lg ">
                Read More 
            </button>

        </div>
        <div className="h-[0.5px]  border absolute bottom-5    border-lightGry w-4/5 mt-3 ">
        </div>
        <div className="flex items-center absolute bottom-0 left-6  ">
            <div className="mr-1 mt-0 mb-0 ">
                {/* in place of value i need the average to put in  theire  */}
               <ReactStars 
               count={5}
               color2={"#ffd700"}
               value={company.rating}
               edit={false}
               />

            
            </div>
            <div>
                {/* here also i need the average  */}
                <p className="text-xs">
               { company.rating.toFixed(1)}  
                </p>
            </div>
        

        </div>
        
    
     
    </div>
    
    )
}
export default Company ;