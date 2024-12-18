import React from "react";
import { useNavigate } from "react-router-dom";
import SideBarCom from "../../components/sideBarCom";
import { deletcompany } from "../../backend/sohaib/DeletCompany";
import { useState,useEffect,useReducer } from 'react';
import exit from "../../assets/Exit.svg";
import ReadMore from "../../components/ReadMore";
import { getCompanyInfo, handleForgotPasswordBackend } from "../../backend/sohaib/DashboardCompany";
import { companyreviews } from "../../backend/sohaib/CompaniesBackend";
import { Auth } from "../../backend/firebaseconfig";
import returnArrow from "../../assets/arrowForward.svg";
import { Link} from 'react-router-dom';

const DeleteCom = () => {
    const navigate = useNavigate();

    const handleDeleteCom = async()=>{
        // backend code 
       await deletcompany()
        //navigate('/home')
    }

  return (
    <div className="flex h-screen">
        <div className="w-1/5">
        <SideBarCom/>
        </div>
      
       <div className="w-4/5 flex flex-col  items-center pt-5  mt-[5px] rounded-l-[30px] bg-back">
       <div className=" flex justify-between items-center w-[930px] mb-10">
                <div className="flex  items-center justify-between ">
                <Link to="/" className="flex items-center">
                <img src={returnArrow} alt="" className="transform rotate-180 w-5 h-5 mr-4" />
                </Link>
                <p className="text-[18px] ">
                    Home 
                </p>

                </div>
                <div className=" flex justify-end space-x-2 ">
               
                     <Link
                    to="/company/dashboard"
                    className="bg-primary font-medium  text-center  px-8 py-1  rounded-[6px] text-costumGreen hover:bg-secondary hover:text-primary ">
                        View Profile 
                    </Link>
                
                    <Link to="/company/submitJob" className="bg-primary font-medium text-center px-8 py-1 rounded-[6px] text-costumGreen hover:bg-secondary hover:text-primary ">
                      Post Now
                      </Link>
                        
                

                </div>
                
              </div> 
      <div className="bg-white rounded-3xl h-36 mb-10 w-5/6  flex flex-col justify-center items-center px-24 py-16">
        <h2 className="text-2xl font-bold text-blue-950 ">Are you sure you want to delete your </h2>
        <h2 className="text-2xl font-bold text-blue-950 mb-5">account in LineUp ?</h2>
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
          <div className="flex mt-9 space-x-6 justify-center ">
            <button type="submit" className="bg-teal-400 rounded-3xl shadow-lg p-2  font-bold text-lg w-56" onClick={handleDeleteCom}>Delete</button>
          </div>
        </form>
      </div>
    </div>

    </div>
    
  );
}

export default DeleteCom;