import React from "react";
import Job from "./Job";
import Counter1 from "./counter1";
import Rout from "./Rout";
import Sidebar from "./Sidebar1";
import SearchBar from "./searchBar";
import returnArrow from "../assets/arrowForward.svg";
import { Link} from 'react-router-dom';
const Dash = () =>{
return(
    <div className="flex relative p-5 mt-[5px] rounded-xl rounded-r-none bg-back items-center">
    
        <div className="w-1/5">
        <Sidebar/>
        </div>
      
       
  
       


     <div className="flex flex-col  w-4/5 items-center  ">



<div className="flex items-center   ">
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
       
       
        <div className="flex   justify-around items-st p-10 z-10">
        <Job/>
        <Counter1/>
        </div>
      
     </div>
     
    
    </div>
 
)
}
export default Dash;