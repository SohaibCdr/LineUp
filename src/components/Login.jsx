import './Login.css'
// import ForgotPassword from '../ForgotPassword';
import { useEffect, useState } from 'react';
import {Link,NavLink, useNavigate} from 'react-router-dom';
import logo from '../assets/email 1.png'
import txt from '../assets/text header.png'
import done from '../assets/review 1.png'
import back from '../assets/greenLines.svg'
import{IsEmailverified,signout,sendagain} from '../backend/sohaib/handleloginBackend' 
// import back from '../assets/background1.png'
import Navbar from './navBar';
import { handleloginBackend } from '../backend/sohaib/handleloginBackend';
import { handleForgotPasswordBackend } from '../backend/sohaib/handleloginBackend';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../backend/firebaseconfig';


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  // const [showForgotPassword, setShowForgotPassword] = useState(false);

  const [step, setStep] = useState(false); // 1: Email, 2: Verification Code, 3: New Password
  const [step1, setStep1] = useState(false); // 1: Email, 2: Verification Code, 3: New Password
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [email1, setEmail1] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword2, setNewPassword2] = useState('');

 
 




  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure handleloginBackend returns a valid user object
    try {
        const user = await handleloginBackend({ email, password });
        if (!user) {
            throw new Error('Invalid login credentials');
        }

        // Ensure user has emailVerified property
        if (!IsEmailverified()) {
            setStep3(true);
            console.log("not veriiiifii") ;
            // Assuming setStep3 toggles the email verification step
            signout();
            return;
        } else {
            setStep3(false);
            console.log("veriiiifii")
        

        const docRef = doc(db, "roles", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const userType = docSnap.data().role;
            console.log("usertype :" + userType);
            if (userType === 'jobseeker') {
                navigate('/jobseeker/dashboard');
            } else {
                navigate('/company/dashboard');
            }
        } else {
            console.error("No such document!");
        }}
    } catch (err) {
        console.error(err.message);
        alert('Invalid email or password');
    }
};


  const handleForgotPassword = () => {
    // setShowForgotPassword(true);
    setStep1(true)
  };

  const popup1 = () => {
    setStep2(false)
  }
 
  const popup2 =()=>{
    setStep1(false)
    setStep2(true)
  }
  const popup3 = () => {
    
    setStep3(!IsEmailverified())


  }
 // Unused for now --ilyes
  // const popup3= ()=>{
  //   setStep(false)
  //   setStep4(true)

  // }
  const handlesubmitok =()=>{
   signout()
  setStep3(!step3)
  }


  const handleSubmitNewPassword =  (e) => {
    e.preventDefault()

    console.log(newPassword1);
    console.log(newPassword2);
    setStep(false)
   
  };

  const handleSubmitNewPassword1 =  (e) => {

    e.preventDefault()
    
    console.log("email1 from subPass1",email1);
    handleForgotPasswordBackend(email1)
    .then(() => {
      alert("Check your email address to Reset you password");
    })
    .catch(()=>{
      alert("ERROR in handelsubmitPass1")
    })
    popup2()
   
   
  };


  return (<>
  
  
  {step1 && (
    <div className="popup">
    <div className='reset' onClick={()=>setStep1(!step1)}>  </div>
  
           <form onSubmit={handleSubmitNewPassword1} action='#'  >
            <div className="img">
                         <img className='logo' src={logo} alt="" />
            </div>
           <h1 className="font-inter font-bold text-xl text-blue-950">Reset Password</h1>
    <p className="font-inter font-bold text-sm text-blue-950 mb-2">Please enter your Log in email to request a password reset</p>
               <div className="flex flex-col space-y-10 ">
             
             <div className='box '>
               <label ></label>
             <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md " type="email" id='email' name='email' value={email1} onChange={(e) => setEmail1(e.target.value)} required />
             </div>
             </div>
             <div className='both'>
             <button class=" font-bold text-xl button " type="submit" onClick={()=>setStep1(!step1)}>Cancel</button>
             <button class=" font-bold text-xl  button active  " type="submit" >send</button>
             </div>
             <div className='flex items-center'>
             <p className='text-sm font-bold '>you remember your password?</p><a className= 'font-bold text-sm hover:cursor-pointer text-blue-800 ' onClick={()=>setStep(!step)
              
             }>Login</a>
             </div>
           </form>
      </div>
         )}
 
  
 {step2 && (
    <div className="popup">
    <div className='reset' onClick={()=>setStep2(!step2)}>  </div>
  
           <form onSubmit={handleSubmitNewPassword} action='#' >
            <div className="img">
                         <img className='logo' src={logo} alt="" />
            </div>
           <h1 className="font-inter font-bold text-xl text-blue-950">Verification Mail Sent</h1>
    <p className="font-inter font-bold text-sm text-blue-950 mb-2">Please check your email and click on the link to Rest your password.Then comback and login in again</p>
               <div className="flex flex-col space-y-10 ">
             
             {/* <div className='box'>
               <label ></label>
             <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md " type="password" id='Password' name='confirmPassword' value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} required />
             </div> */}
             </div>
             <div className='both'>
             <button class=" font-bold text-xl button " type="submit" onClick={()=>setStep2(!step2)}>Cancel</button>
             <button class=" font-bold text-xl  button active  " type="submit" onClick={popup1}>OK</button>
             </div>
             <div className='flex items-center'>
             <p className='text-sm font-bold'>you remember your password?</p><a className= 'font-bold text-sm hover:cursor-pointer text-blue-800' onClick={()=>setStep(!step)}>Send a</a>
             </div>
           </form>
      </div>
         )}
  
  { step3 && ( 
 <div className="popup  ">
 <div className='reset' onClick={()=>setStep3(!step3)}>  </div>

        <form onSubmit={handleSubmitNewPassword} action='#' >
         <div className="img">
                      <img className='logo' src={logo} alt="" />
         </div>
        <h1 className="font-inter font-bold text-xl text-blue-950">Verification Mail Sent</h1>
 <p className="font-inter font-bold text-sm text-blue-950 mb-2">Please check your email and click on the link to Rest your password.Then comback and login in again</p>
            <div className="flex flex-col space-y-10 ">
          
          {/* <div className='box'>
            <label ></label>
          <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md " type="password" id='Password' name='confirmPassword' value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} required />
          </div> */}
          </div>
          <div className='both'>
          
          <button class=" font-bold text-xl  button active  " type="submit" onClick={handlesubmitok}>OK</button>
          </div>
          <div className='flex items-center'>
          <p className="text-xs font-bold text-center">
            Have a problem?
        {/* we will use router for links  */}
             <a href="#PageSignUser.jsx"> 
             
            <button type='submit' onClick={sendagain} >sendagain</button>
             </a>
            </p>
          </div>
        </form>
   </div>
)
}


  
  
  {step && (
    <div className="popup ">
    <div className='reset' onClick={()=>setStep(!step)}>  </div>
  

           <form onSubmit={handleSubmitNewPassword} action='#' >
            <div className="img">
                         <img className='logo' src={logo} alt="" />
            </div>
           <h2 className="font-inter font-bold text-xl text-blue-950">New Password</h2>
    <p className="font-inter font-bold text-base text-blue-950 mb-2">Please enter a new password for your 
account</p>
               <div className="flex flex-col space-y-10 ">
                <div className='box'>
               <label className=' font-semibold text-blue-950' >Password</label>
             <input  className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md " type="password" id='password ' minLength={4} maxLength={10} name='password' value={newPassword1}  onChange={(e) => setNewPassword1(e.target.value)} required />

             </div>
             <div className='box'>
               <label className='  font-semibold text-blue-950' > Confirm Password</label>
             <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md " type="password" id='Password' name='confirmPassword' value={newPassword2} onChange={(e) => setNewPassword2(e.target.value)} required />
             </div>
             </div>
             <div className='both'>
             <button class=" button " type="submit" onClick={()=>setStep(!step)}>Cancel</button>
             <button class="  button active  " type="submit" onClick={popup3}>Confirm</button>
             </div>
             
           </form>
      </div>
         )}

{step4 && (
    <div className="popup">
    <div className='reset' onClick={()=>setStep4(!step4)}>  </div>
  
           <form onSubmit={handleSubmitNewPassword} action='#' >
            <div className="img">
                         <img className='logo' src={done} alt="" />
            </div>
           <h1 className="font-inter font-bold text-xl text-blue-950">It's  Done</h1>
    <p className="font-inter font-bold text-sm text-blue-950 mb-2">Your new password is confirmed ! </p>
             
           
    
     <button className=" tr p-2 h-11 w-56   shadow-md rounded-3xl bg-blue-950 text-teal-200 font-bold text-xl " type="submit"> Go to your Profile</button>
             
            
           </form>
      </div>
         )}
{/* ---------------------------la page --------------------- */}

<div className="flex flex-col bg-background gap-[40px] p-6 pb-0">
<div className='z-0'><Navbar /></div>

<div className='flex flex-row  gap-[0px] justify-around relative'>
     <div className="absolute">
<img  src={back} alt="" />
</div> 
<div className="flex flex-col items-center font-init text-primary basis-1/3 ">

<div className=" w-[26vw] font-bold  text-[28px]">
                        <span className="text-[22px] br ">Welcome Back</span>
                         <br />
                        <span className='br'> Don't give up<span className=" text-secondary text-[32px] drop-shadow-2xl">Trying</span>, for who knows what awaits you there?</span>
                  </div>
                  <div className='flex flex-col items-center justify-center mt-[220px] gap-[20px]'>
                   <p className='font-bold text-[12px]'>Already have an account? <a href="#" className='text-secondary'>Sign up</a></p>
                
                   </div>
                
  </div>
   {/* form */}
    <div className= "px-12 py-16 items-center flex justify-center  rounded-3xl bg-background shadow-md mt-8  p-2.5  drop-shadow-xl">
   

  

 
       
        <form action="" onSubmit={handleSubmit}>
        
            <div className='p-1 ' >

            <div  className="p-0 gap-1.5 flex flex-col items-start   ">

            <label className=' font-semibold text-blue-950' >Email</label>
            <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md "  type="email"   value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />

            </div>
            

            <div  className="p-0 gap-1.5 flex flex-col items-start   ">

            <label className='font-semibold text-blue-950'>Password</label>
            <input className="bg-white rounded-3xl block p-3 w-72 h-62 shadow-md" type="password"  required  value={password}
            onChange={(e) => setPassword(e.target.value)} />
                
            </div>

            </div>
            <div className=' mt-2 flex justify-between justify-center' >

               <div >

               <input  type="checkbox"/>
                <label className=' ml-2 font-medium text-base text-sm text-gray-400' >    Keep me signing in</label>
            
               </div>
                <a className='font-medium text-base text-gray-400 text-sm forgit'   onClick={handleForgotPassword}>Forgot Password ?</a>
          

            </div>
            < div className='mt-9 flex flex-col gap-y-6'>
             <button  className=" hover:bg-blue-950 hover:text-emerald-300 bg-emerald-300 text-blue-950 text-xl font-semibold rounded-3xl drop-shadow-lg w-72 h-12">Log in</button> 
            
           
             </div>
         
    
    
        </form>
      
    </div>
    
    </div>
    
    </div>
            
 </> )
}

export default Login
