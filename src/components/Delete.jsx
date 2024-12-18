import React from "react";
import Sidebar from "./Sidebar1";
import { deletjobseeker } from "../backend/sohaib/handleDeletJobseeker";
import { useNavigate } from "react-router-dom";
import SearchBar from "./searchBar";
import returnArrow from "../assets/arrowForward.svg";
import { Link} from 'react-router-dom';

const Delete = () => {
  const navigate = useNavigate();
  
   const handleDelet =async ()=>{

    deletjobseeker();
    navigate('/');

   }
   
  return (
    <div className="flex">
        <div className="w-1/5">
        <Sidebar/>
        </div>
      
       <div className="w-4/5 flex flex-col  items-center pt-5  mt-[5px] rounded-xl rounded-r-none bg-back">


       <div className="flex items-center  mb-11 ">
     <div className="flex mr-16 items-center z-20  ">
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

      <div className="bg-white rounded-3xl h-36 p-10 align-middle mr-4 pl-36 mb-10 w-5/6 ">
        <h2 className="text-2xl font-bold text-primary pl-16 ">Are you sure you want to delete your </h2>
        <h2 className="text-2xl font-bold text-primary pl-52 mb-5">account in LineUp ?</h2>
      </div>
      <div className="bg-white rounded-3xl p-10 h-auto w-5/6">
        <h1 className="font-bold mb-7">Why do you want to delete your account?</h1>
        <form>
          <div className="flex space-x-2 mb-4">
            <input type="checkbox" id="job_reason1" />
            <label htmlFor="job_reason1">You got a job and you don't need it</label>
          </div>
          <div className="flex space-x-2 mb-4">
            <input type="checkbox" id="job_reason2" />
            <label htmlFor="job_reason2">Lack of Relevant Job Opportunities</label>
          </div>
          <div className="flex space-x-2 mb-4">
            <input type="checkbox" id="job_reason3" />
            <label htmlFor="job_reason3">Poor User Experience</label>
          </div>
          <div className="flex space-x-2 mb-4">
            <input type="checkbox" id="job_reason4" />
            <label htmlFor="job_reason4">Unresponsive Support or Lack of Assistance</label>
          </div>
          <div className="flex mt-9 space-x-6 justify-center justify-around">
            <button type="submit" className="bg-teal-400 rounded-3xl shadow-lg p-3 font-bold text-xl w-56" onClick={handleDelet}>Delete</button>
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
}

export default Delete;
