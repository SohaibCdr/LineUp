import React, { useState } from "react";
import '../index.css';
import logo from '../assets/email.svg';
import Avatar from '../assets/Avatar.svg';
import done from '../assets/review.svg';
import { handleForgotPasswordBackend } from "../backend/sohaib/handleloginBackend";
import { deletjobseeker } from "../backend/sohaib/handleDeletJobseeker";
const Card = ({ fullname, email, phone, b_date, b_place, adress, status, password,logo}) => {
    const [step5, setStep5] = useState(false);
    const [step6, setStep6] = useState(false);
    const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

    const handleForgotPassword = () => {
         handleForgotPasswordBackend(email)
         //deletjobseeker()
       .then(() => {
      alert("Check your email address to Reset you password");
    })
    .catch(()=>{
      alert("failed to send email try after few minutes")
    })
    };
    const popup6 = () =>{
        setStep5(false)
        setStep6(true)
    }

    const handleSubmitNewPassword = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour soumettre le nouveau mot de passe
    };

    return (
        <div>
            {/* Forget password popup */}
            {step5 && (
                <div className="popup  ">
                    <div className="reset " onClick={() => setStep5(!step5)}>Close</div>
                   
                    <form onSubmit={handleSubmitNewPassword} >
                       
                       <div className="img ">
                           <img className="logo" src={logo} alt="" />
                       </div>
                       <h2 className="font-inter font-bold text-xl text-blue-950 py-2">New Password</h2>
                       <p className="font-inter font-bold text-base text-blue-950 mb-2">Please enter a new password for your account</p>
                       <div className="flex flex-col space-y-10 ">
                           <div className="box ">
                               <label className='font-semibold text-blue-950' htmlFor="password">Password</label>
                               <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md " type="password" id='password' name='password' value={newPassword1} onChange={(e) => setNewPassword1(e.target.value)} required />
                           </div>
                           <div className="box ">
                               <label className='font-semibold text-blue-950 ' htmlFor="confirmPassword">Confirm Password</label>
                               <input className=" bg-white rounded-3xl block p-3 w-72 h-62 shadow-md" type="password" id='confirmPassword' name='confirmPassword' value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} required />
                           </div>
                       </div>
                       <div className="both p">
                           <button className="button " type="button" onClick={() => setStep5(!step5)}>Cancel</button>
                           <button className="button active" type="submit" onClick={popup6}>Confirm</button>
                       </div>
                   </form>
                   
                   
                </div>
            )}
            {/* //--------------------------------it's done pop up ----------------------------// */}
            {step6 && (
    <div className="popup">
    <div className='reset' onClick={()=>setStep6(!step6)}>  </div>
  
           <form onSubmit={handleSubmitNewPassword} action='#' >
            <div className="img mt-5 mb-5">
                         <img className='logo' src={done} alt="" />
            </div>
           <h1 className="font-inter font-bold text-xl text-blue-950 mt-10">It's  Done</h1>
    <p className="font-inter font-bold text-sm text-blue-950 mb-2 mt-7">Your new password is confirmed ! </p>
             
           
    
     <button className=" tr p-2 h-11 w-56   shadow-md rounded-3xl bg-blue-950 text-teal-200 font-bold text-xl mt-10 " type="submit"> Go to your Profile</button>
             
            
           </form>
      </div>
         )}


            
            <div className="scroll overflow-auto h-lvh ">
                
                <div className="card rounded-2xl bg-white shadow-lg p-10 max-w-2xl ">
                    <h1 className="font-bold text-xl"> Your personal Profile </h1>
                    <div className="flex mt-4 gap-8  ">
                        
                    {logo ? (
                        <img src={logo} alt="Profile" className="rounded-full w-24 h-24 mt-4" />
                    ) : (
                        <img src={Avatar} alt="Default" className=" h-24 w-24 mt-1" />
                    )}
                        
                        <div>
                            <div className="flex flex-row items-center"><h2 className="text-base font-semibold"> full name </h2> <p>: {fullname}</p></div>
                 
                            <div className="flex items-center"><h2 className="text-base font-semibold"> email </h2> <p>: {email}</p> </div>
                            <div className="flex items-center"><h2 className="text-base font-semibold"> phone </h2> <p>: {phone}</p> </div>
                        </div>
                    </div>
                </div>

                <div className="card rounded-2xl bg-white shadow-lg p-10 max-w-2xl mt-4">
                    <h1 className="font-bold text-xl"> Details </h1>
                    <div className="mt-3">
                        <div className="flex mb-1 items-center"><h2 className="text-base font-semibold"> Birthday date </h2> <p>: {b_date}</p></div>
                        <div className="flex mb-1 items-center"><h2 className="text-base font-semibold"> Birthday place </h2> <p>: {b_place}</p> </div>
                        <div className="flex mb-1 items-center"><h2 className="text-base font-semibold"> Adress </h2> <p>: {adress}</p> </div>
                        <div className="flex mb-1 items-center"><h2 className="text-base font-semibold"> Status </h2> <p>: {status}</p> </div>
                    </div>
                </div>

                <div className="card rounded-2xl bg-white shadow-lg p-8 max-w-2xl mt-4 items-center">
                    <h1 className="font-bold text-xl items-center flex flex-row"> Change your Password </h1>
                    <div className="flex mb-1 mt-2"><h2 className=" flex flex-row text-base font-semibold items-center"> Password </h2> <p>: {password}</p></div>
                    <div className="mt-6"> <button className="bg-teal-500 text-blue-950 rounded-3xl p-2 font-semibold items-center flex flex-row" onClick={handleForgotPassword}> change your password</button></div>
                </div>
              
              
            </div>
        </div>
    );
}
 

// const Applications =({number,date}) =>{
//     return(
//         <Card>
//             <Space>
//                 <Statistic number={number} date={date}/>
//             </Space>
//         </Card>
//     )
// }

export default Card;











