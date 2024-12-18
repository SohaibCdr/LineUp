import React from 'react';
import infoIcon from "../assets/infosIcon.svg";
import returnArrow from "../assets/arrow_forward.png";
import defaultRec from "../assets/defaultRec.svg"
function UserInfoPopUp({ onClose , info }) {
    return (
       
            
            <div className="bg-white shadow-lg flex flex-col  relative rounded-[28px] w-[350px] h-[470px] p-6 z-50">
                 <div className="flex justify-center mb-4 ">
                        <div className="flex items-center justify-center">
                            <img src={infoIcon} alt="Info" className="w-28 " />
                        </div>
                        <button onClick={onClose} className=" absolute top-6 right-6 text-gray-600 hover:text-gray-800 focus:outline-none">
                            <img src={returnArrow} alt="Return" className="w-6 transform rotate-180" />
                        </button>
                        
                </div>
                <div className="flex flex-col items-center justify-between space-y-3 ">
              
                    <h2 className="text-xl font-bold">Applicant Personal Information</h2>
                    {info.profil ? (
                        <img src={info.profil} alt="Profile" className="rounded-20 w-20 h-20 mt-1" />
                    ) : (
                        <img src={defaultRec} alt="Default" className=" h-20 w-20 mt-1" />
                    )}
                    <div className='p-4 text-[12px] font-medium flex flex-col'>
                       <span> Name : {info.appName} </span> 
                       <span> Email : {info.email} </span>
                       <span>Applied at : {info.appDate}</span> 
                        <span> Phone number : {info.phoneNumber}</span>
                       <span>  Address : {info.adresse}</span>
                        <span>  Birth day  : {info.birthDay}</span> 
                       <span>  Status :{info.appState}</span>
                    </div>

                    
                </div>
             
                
            </div>
     
    );
}

export default UserInfoPopUp;
