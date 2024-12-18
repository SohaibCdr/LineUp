import DoneUser  from './DoneUser';
import emailPic from '../assets/email.svg' ;
import { useState } from "react";
import{sendagain}from '../backend/sohaib/signupUser'
import { Auth } from "../backend/firebaseconfig";
import { signout } from '../backend/sohaib/handleloginBackend';

function VerificationCode (){
    const [showPopup, setShowPopup] = useState(false);
    const [showVerificationCode, setShowVerificationCode] = useState(false);

    const handleSuccess = () => {
        setShowVerificationCode(true );
      };
      const handleVerificationCodeClose=()=>{
        setShowVerificationCode(false);
        signout()
      }

    const [verify, setVerify] = useState(false ); // State to store the confirmation of verification  received from the backend

    // // Function of backend 
    

         const  handleVerificationCode  =()=>{
 // if (verify) // verify is the boolean sent with true after verification email 
        const user = Auth.currentUser;
 user.reload().then(() => {         //verification email tset backend
   console.log("isUserEmailVer?", user.emailVerified);
   setShowPopup(user.emailVerified);   
   
 });    
         }
        return (
            <div className="fixed inset-0 flex justify-center items-center bg-popUp bg-opacity-50">
        
            <button className="absolute top-0 right-0 m-4 text-xl" onClick={handleVerificationCodeClose}>
              &times;
            </button>

        <div className=" flex flex-col relative text-primary shadow-sdw  px-2 py-3   rounded-3xl items-center w-[300px] bg-back">

        

        
            <div >
            
            <img src={emailPic} className=" m-0 w-12 p-0">
            </img>

            </div> 
        
        
        
        <div className="mt-3">
            <p className="text-2xl font-bold ">
            Verification Code
            </p>
        </div>
        <div className="mt-2 ">
         <p className="text-[11px]  leading-3 font-bold text-center w-full">
         Please enter the verification code that we have <br/>sent to your email box
         </p>
         

        </div>
        <div className="mb-12 mt-4 font-bold ">
           
            Check your email to verify 
        </div>
        <div  className="mt-8">
            <button  type="button" onClick={ handleVerificationCodeClose}  className=" inline-block  font-bold rounded-full hover:bg-primary hover:text-costumGreen  px-8 py-1 mr-1 text-lightGry border border-lightGry transition duration-500  " >
                <a href="">
                Cancel
                </a> 
            </button>
            <button type="submit" onClick={handleVerificationCode} className=" inline-block  font-bold rounded-full  hover:bg-primary bg-lightGry  px-9 py-1 ml-1  text-costumGreen transition duration-500">
                Verify

            </button>
        </div>
        <div className="mt-3">
            <p className="text-xs font-bold text-center">
            Have a problem?
        {/* we will use router for links  */}
             <a href="#PageSignUser.jsx"> 
             
            <button type='submit' onClick={sendagain} className='text-blue-600' >send again</button>
             </a>
            </p>
        </div>
        {showPopup && 
        ( <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50">
             <DoneUser />
             </div>
            )
       }



    </div>
    </div>
    );

}
export default VerificationCode