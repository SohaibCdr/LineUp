import { useState } from 'react';
import salary from '../assets/salary.svg';
import location from '../assets/mapIcon.svg';
import types  from '../assets/period.svg';
import date from '../assets/date.svg';
import appliance from '../assets/appliances.svg';
import gender  from '../assets/gender.svg';
import posts from '../assets/level.svg';
import level from '../assets/level1.svg';
import verify from "../assets/verification.svg";
import { Link } from 'react-router-dom';
import Company from "./ReadMore.jsx";
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db,Auth } from '../backend/firebaseconfig';
import { getcompany } from '../backend/sohaib/getompany.js';
import { applyForJob, applyState } from '../backend/ilyes/applyForJob.js';
const PopUp=({job,appear=true})=>{
 
  const loggedIn=''//there's no need for this
  // (try jobseeker or company or guest)
  const [userType, setUserType] = useState('guest');
  useEffect(() => {
    const fetchUserType = async (user) => {
      if (user) {
        try {
          const docSnap = await getDoc(doc(db, 'roles', user.uid));
          if (docSnap.exists()) {
            setUserType(docSnap.data().role);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      }else{setUserType('guest')}
    };

    // Subscribe to authentication state changes
    const unsubscribe = Auth.onAuthStateChanged((user) => {
      fetchUserType(user);
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    console.log(userType + ' hahaha');
  }, [userType]);

  

 
   // const[exist,setExist]=useState(false)
   
       
  const [CV,setCV]=useState(null);//Cv uploaded by user(jobseeker)
  const[apply,setApply]=useState(false);//apply state of each user (already applied /first time to apply)
  const [company,setcompany]=useState({})//company's object of the selected job (this is a test object)
const fetchcompany = async () => {
    try {
        const companieData = await getcompany(job);
        setcompany(companieData);
       
    
    } catch (error) {
       console.error("Error fetching posts:", error);
          }
 };

useEffect(()=>{
 fetchcompany();

},[])
useEffect(() => {
  const checkApplyState = async () => {
    const applied = await applyState(job.id);
    setApply(applied);
  };

  checkApplyState();
}, []);




  
  //function to edit by backend
  const submit=()=>{
    setOpen(false);//keep this here :)
    setApply(true);//this is for test only the real version should receive apply state from backend
    console.log("job.id: ",job.id)
    applyForJob(job.id,CV,job.companyID)
    console.log("applied to job successfully");
  };
  const [uploadComplete, setUploadComplete] = useState(false);
  const[companyProfile,setCompanyProfile]=useState(false);

  const [open,setOpen]=useState(false);
  //function to upload Cv
    function handleFileChange(event) {
      const file = event.target.files[0];
  
      if (file) {
        
        setCV(file);
        
        setUploadComplete(true);
      }
    }
    const handleCancel=()=>{
      setOpen(false);
      setCV(null); 
      setUploadComplete(false);
    }
   
   // const[exist,setExist]=useState(false)
    return(
        <div className=''>
       
     {!open && !companyProfile &&  ( <div className={`w-[650px] max-h-[500px] px-8 py-3 bg-white flex flex-col  text-primary rounded-20 overflow-auto  overflow-x-hidden scrollBar  z-20  gap-[10px] text-primary `}>
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-row gap-5'>
            <img src={job.logo} className='h-14 w-14 bg-background rounded-full' />
              <div ><p className='text-xl font-bold m-1 '>{job.name}</p><p className='text-sm font-semibold'>by {job.company} in <span className='bg-green-200 rounded-20 px-2'>{job.category}</span></p></div></div>
          <div className='flex flex-row gap-2'>
    {/************apply button conditions(don't remove appear  )************/}
            {(appear && userType!="company") && (<div>{!apply ? ( !job.filled ? (<button onClick={()=>setOpen(!open)} className='bg-primary w-[100px] h-[30px] text-white rounded-20 text-sm font-bold'>apply now</button>):(<button className='bg-red-400 w-[100px] h-[30px] text-white rounded-20 text-md font-bold'>Filled</button>)):(<button className='bg-secondary w-[100px] h-[30px] text-white rounded-20 text-sm font-bold'>Applied</button>)}</div>)}
          {/* <img src={Cicon} onClick={() => handleSaveToggle(index)} className={`${job.saved &&"bg-secondary"} `}/> */}</div></div>
        <div className='border-b border-primary py-4'> <p className='text-xl font-bold'>job overview</p><div className='grid grid-cols-4 bg-background rounded-20 px-2 py-3 gap-4 my-2' >
          <div className='flex flex-row text-xs  items-center '><img src={location} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Location</p><p className='font-semibold'>{job.location}</p></div></div>
          <div className='flex flex-row text-xs  items-center '><img src={types} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Job type</p><p className='font-semibold'>{job.jobType}</p></div></div>
          <div className='flex flex-row text-xs items-center  '><img src={level} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Job level</p><p className='font-semibold break-all'>{job.jobLevel}</p></div></div>
          <div className='flex flex-row text-xs items-center  '><img src={salary} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>salary</p><p className='font-semibold'>{job.salary.toString().concat("da")}</p></div></div>
          <div className='flex flex-row text-xs items-center  '><img src={date} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Posting date</p><p className='font-semibold'>{job.postingDate}</p></div></div>
          <div className='flex flex-row text-xs items-center  '><img src={gender} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Gender</p><p className='font-semibold'>{job.gender}</p></div></div>
          <div className='flex flex-row text-xs  items-center '><img src={posts} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Available posts</p><p className='font-semibold'>{job.availablePosts}</p></div></div>
          <div className='flex flex-row text-xs  items-center '><img src={appliance} className='h-7 w-7 mr-2' /><div><p className='text-sm font-bold'>Appliance</p><p className='font-semibold'>{job.appliances}</p></div></div>
        </div></div>
        <div className='border-b border-primary py-4'> <p className='text-xl font-bold mb-4'>job overview</p><p className='text-xs font-semibold'>{job.jobDescription}</p></div>
        <div className='border-b border-primary py-4'> <p className='text-xl font-bold mb-4'>Key responsibilities</p><p className='text-xs font-semibold'>{job.keyResponsibilities}</p></div>
        <div className='border-b border-primary py-4'> <p className='text-xl font-bold mb-4'>Skills & Experience & Qualification</p><p className='text-xs font-semibold'>{job.qualification}</p></div>
       
       {appear && <div className='flex flex-row justify-end'><button onClick={()=>setCompanyProfile(true)} className='bg-primary px-2 py-1 text-sm font-semibold text-white rounded-20'>view company profile</button></div>}</div>
)}
     {open && (<div className='w-[350px] h-fit px-8 py-3 flex flex-col  text-primary rounded-20 overflow-auto  overflow-x-hidden scrollBar  z-20  gap-[10px] font-init text-primary bg-background items-center justify-evenly  '>
     {userType==="jobseeker"  &&( <div className=' h-[350px] flex flex-col items-center justify-center gap-3'>  <div className='flex flex-col items-center'> <img src={verify} className='w-20 m-4'/>
      <p className='font-bold text-3xl text-shadow-md '>Apply Now</p></div>
    {/* <p className={`text-justify  text-sm ${exist && 'text-red-500'}`}>Please enter the email that you’ve registered with</p>
     <input type="email" placeholder='Email'value={userType.email} onChange={(e)=>setuserType((prevData) => ({
          ...prevData,
          email: e.target.value
         
        }))} className='w-[250px] h-[30px]  p-2 rounded-20 text-sm'/>*/}
     
     
    
  <div className='m-2'>
           <input
          type="file"
          accept="image/*"
          id="file"
         name="file"   
          onChange={handleFileChange}
          className="hidden"
        />
               {uploadComplete&&(<div className='flex flex-col font-bold text-[12px]'>
  <div className='flex flex-row justify-between gap-8  ' >
    <span>Upload file 1 of 1 files</span>
    <span>100% completed</span>
  </div>
  <div   className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 w-full rounded-full"/>
               </div>)}  
           </div>
           <div className={`flex flex-row  gap-[10px] ${uploadComplete && 'flex-col-reverse items-center'} mb-4`}>
               <button  type="button" onClick={handleCancel} className="rounded-full bg-gray shadow-lg w-[120px] p-[3px] font-semibold text-primary ">cancel</button> 
               {!uploadComplete ?(<label htmlFor="file" className="rounded-full text-primary text-center bg-secondary border border-gray shadow-lg w-[120px] p-[3px] font-semibold hover:bg-primary hover:text-secondary">Upload Cv</label> ):(<button type="button" onClick={submit} className="rounded-full text-primary text-center bg-secondary border border-gray shadow-lg w-[120px] p-[3px] font-semibold hover:bg-primary hover:text-secondary">confirm </button>)}
               </div></div>)}
           {userType==="guest" &&( <div className='flex flex-col items-center   '> <p className='font-bold text-3xl text-red-500 m-6'>Oooops!!! </p>   <p className='text-sm font-semibold '>You need to <Link to="/LogIn" className='text-cyan-700'>log in</Link> first to apply for this job.</p>
           <button  type="button" onClick={handleCancel} className="rounded-full bg-gray shadow-lg w-[120px] p-[3px] font-semibold text-primary m-4 ">cancel</button>
           <p className='text-xs mt-4'>don't have an account? <Link to="/signUpEmployee" className="text-cyan-700">signUp</Link></p>
          </div>)}
           
      
     </div>)}
       {companyProfile &&(<div><Company company={company}/></div>)}
       
       </div>

    )
};
export default PopUp;