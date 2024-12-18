import React, { useState,useEffect } from 'react';
import emailPic from '../../assets/email.svg' ;
import SideUser from '../../components/SideUser';
import donepic from '../../assets/done.jpg' ;
import ClosedEye from '../../assets/closedEye.svg';
import OpenedEye from '../../assets/OpenedEye.svg';
import Warning from '../../assets/Warning.svg';
import Upload from '../../assets/upload.svg';
import step1 from '../../assets/step1.svg';
import step2 from '../../assets/step2.svg';
import step3 from '../../assets/step3.svg';
import Navbar from '../../components/navBar';
import {signUpComp} from '../../backend/ilyes/signUpComp';
import { Auth, db } from '../../backend/firebaseconfig';
import { Link,  useNavigate } from 'react-router-dom';
import { sendagain } from '../../backend/sohaib/signupUser';
import { signout } from '../../backend/sohaib/handleloginBackend';
import { doc, getDoc } from 'firebase/firestore';
import Routing from '../../Routing';
const LongForm = () => {
//send data to backend
const handleSubmit=(event)=>{
  setVerifyEmail(true);
 setShowCard(false);
  //Checking for empty network urls
  for(let i=0;i<formData.network.length ;i++) {
    if (formData.network[i].url==""){
      formData.network.splice(i,1);
      i--//if we do delete the current index's value change so we need to check it again --ilyes
    }
  }
    console.log("formData: ",formData);
    event.preventDefault();
    //sending the data
    signUpComp(formData)
      .catch(error => console.log('Error:', error.message));
    
    };
  //email verification 
  const[verifyEmail,setVerifyEmail]=useState(false);
  const [popUp,setPopUp]=useState(false);
  const handleVerify = () => {
     const user = Auth.currentUser;
 user.reload().then(() => {         //verification email tset backend
   console.log("isUserEmailVer?", user.emailVerified);
    setPopUp(user.emailVerified);  
   
 });    
         

  }
  const canCel = () => { 
    setVerifyEmail(false);
    signout()
  }
    const [networks, setNetworks] = useState([]);
      const [showInputs, setShowInputs] = useState(false);    
      const handleAddNetwork = () => {
        const updatedNetworks =[...networks, { name: '', url: '' }]
        setNetworks([...updatedNetworks]);
        setShowInputs(true);
      };
    
      const handleRemoveNetwork = () => {
        if (networks.length > 0) {
          const updatedNetworks = [...networks];
          updatedNetworks.pop();
          setNetworks(updatedNetworks);
          setFormData((prevState)=>({...prevState,network :[...updatedNetworks]}));
        }
        if (networks.length === 1) {//why is this here?--ilyes
          setShowInputs(false);
        }
        
      };
    
      const handlenChange = (index, field, value) => {
        const updatedNetworks = [...networks];
        updatedNetworks[index][field] = value;
        setNetworks(updatedNetworks);
        updatedNetworks.forEach((net) => {
       console.log(net.url);
        })
        setFormData((prevState) => ({
          ...prevState,
          network: [...networks]
        }));
      };
    
  const [formData, setFormData]=useState({
  employerName:"",
  foundationDate:"",
  email:"",
  phoneNumber:"",
  website:"",
  companySize:"",
  friendlyAdress:"",
  wilaya:"",
  category:"",
  description:"",
  logo:null,
  logoFile:null,
  fileVal:null,
  password:"",
  network:[],
  });
  const [isValidEmail, setIsValidEmail] = useState(true);
  
    const isEmailValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      return emailRegex.test(email);
     
     
    };
  
    
   
      function handleLogoChange(event) {
      const file = event.target.files[0];
  
      if (file) {
        
        setFormData((prevData) => ({
          ...prevData,
          logo: URL.createObjectURL(file),
          logoFile:file,
        }));
      }
    }
    const [uploadComplete, setUploadComplete] = useState(false);
    function handleFileChange(event) {
      const file = event.target.files[0];
  
      if (file) {
        
        setFormData((prevData) => ({
          ...prevData,
          fileVal: file
         
        }));
        setUploadComplete(true);
      }
    }
    // Event handler for form input changes
    const handleChange = (event) => {
        if (event && event.target) {
      const { name, value } = event.target;
      setFormData((prevState) => ({ ...prevState, [name]: value })); 
      if (name==='email'){
      setIsValidEmail(isEmailValid(value)); }
      else if (name === 'password') {
        validatePassword(value);
      }else if (name === 'confirmPassword') {
        validateConfirmPassword(value);
      }}}

      //verify password
      const [showPassword, setShowPassword] = useState(false);
    
      const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
      const [passwordError, setPasswordError] = useState("");
      const [confirmPasswordError, setConfirmPasswordError] = useState("");
      const validatePassword = (password) => {
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/;
    
        if (!passwordRegex.test(password)) {
          setPasswordError('Error! Password should contain at least 8 characters, a capital letter, a special character, and a number.');
        } else {
          setPasswordError('');
  return true;
        }
      };
    
      const validateConfirmPassword = (confirmPassword) => {
        if (confirmPassword !== formData.password) {
          setConfirmPasswordError("Error! Confirmed password doesn't match the password.");
        } else {
          setConfirmPasswordError('');
          return true;
        }
      };
      const [showCard, setShowCard] = useState(false);
      const handleButtonClick = () => {
        // Check if all fields are properly filled
        if (
          validatePassword(formData.password) &&
        /*isEmailValid(formData.email) &&*/
          validateConfirmPassword (formData.confirmPassword)
        ) {
          setShowCard(true);
          console.log(formData)
        } else {
          // Show some error message or notification that fields are not valid
          alert("Please fill all fields properly before proceeding.");
        }
      };
      const handleCancel=()=>{
        setShowCard(false);
        setFormData((prevState) => ({ ...prevState, fileVal: null })); 
        setUploadComplete(false);
      }
       const navigate = useNavigate()
    const handlegotoprofil =async ()=>{
       navigate('/company/dashboard' );
       location. reload()
    }
  
      
    //array of companySize
  
  const companySize =['Micro Businesses','small businesses','medium businesses','large businesses'];
    // Array of 58 wilayas in Algeria
    const wilayas = [
      "01. Adrar", "02. Chlef", "03. Laghouat", "04. Oum El Bouaghi", "05. Batna",
      "06. Béjaïa", "07. Biskra", "08. Béchar", "09. Blida", "10. Bouira",
      "11. Tamanrasset", "12. Tébessa", "13. Tlemcen", "14. Tiaret", "15. Tizi Ouzou",
      "16. Algiers", "17. Djelfa", "18. Jijel", "19. Sétif", "20. Saïda",
      "21. Skikda", "22. Sidi Bel Abbès", "23. Annaba", "24. Guelma", "25. Constantine",
      "26. Médéa", "27. Mostaganem", "28. M'Sila", "29. Mascara", "30. Ouargla",
      "31. Oran", "32. El Bayadh", "33. Illizi", "34. Bordj Bou Arréridj", "35. Boumerdès",
      "36. El Tarf", "37. Tindouf", "38. Tissemsilt", "39. El Oued", "40. Khenchela",
      "41. Souk Ahras", "42. Tipaza", "43. Mila", "44. Aïn Defla", "45. Naâma",
      "46. Aïn Témouchent", "47. Ghardaïa", "48. Relizane", "49. Timimoun", "50. Bordj Badji Mokhtar",
      "51. Ouled Djellal", "52. Beni Abbes", "53. In Salah", "54. In Guezzam", "55. Touggourt",
      "56. Djanet", "57. El M'Ghair", "58. El Meniaa"
    ];
    //array of categories
  const categories =["Health & Care" ,"education & Training","Human ressources","Creative Design","Developpement & Tech",
  "Marketing","Finance & Acounting","Automatisation & Engineering" ,"Management & Administration","Commercial"]
  //array of social media 
  const socialMedia=["LinkedIn","Instagram","Facebook","Twitter","Telegram","Youtube","Messenger","whatsApp"]



    return (
      <div className="flex flex-col bg-background gap-[30px] pt-6 pb-0 ">
        
      <div className='px-9'> <Navbar /></div>
      <div className='flex flex-row  gap-[0px] justify-around px-6 '>
     <SideUser  />
        {/*form */}
      <div className=" basis-2/3 no-scrollbar   py-6 px-2  font-bold text-primary bg-background max-h-[75vh] max-w-[54vw] overflow-y-auto overflow-x-hidden   rounded-20 shadow-sdw">
        <form  className='flex flex-col '>
         <h1 className="font-inter text-[24px] leading-29 tracking-normal ml-4">
          Describe Your Company
        </h1>
          <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2 m-3'>
          <div className='flex flex-col '> 
        <label htmlFor="employerName" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Employer name</label>
        <input
        type="text"
        id='employerName'
        required   
  name="employerName"
        onChange={handleChange}
         className=" mb-2 mt-2 px-4 py-2  w-[350px] bg-white rounded-full shadow-md"></input>
        </div>
        <div className='flex flex-col'>
        <label  htmlFor="date" className='font-inter text-[16px] leading-[19px] tracking-normal pl-4'>foundation date </label>
        <input 
        type="date"
        id='date'
        
        name="foundationDate"
      
        onChange={handleChange}
        className=" mb-2 mt-2 px-4 py-2 w-[250px]  bg-white rounded-full shadow-md"></input>
        </div>
        </div>
        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2'>
          <div className='flex flex-col items-'> 
        <label htmlFor="email" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Email</label> 
        <input
        type="email"
        id='email'
        required
     name="email"
        onChange={handleChange}
        className={`mb-2 mt-2 px-4 py-2 w-[350px] bg-white rounded-full shadow-md ${!isValidEmail ? 'border border-red-500' : 'border-none'}`}


        />
       
        </div>
        <div className='flex flex-col'>
        <label htmlFor="phoneNumber" className='font-inter text-[16px] leading-[19px] tracking-normal pl-4'>Phone number</label>
        <input 
        type="tel"
        id='phoneNumber'
        required
        name="phoneNumber"
        onChange={handleChange}
      
        className=" mb-2 mt-2 px-4 py-2 w-[250px]  bg-white rounded-full shadow-md"></input>
        </div>
        </div>
        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2'>
          <div className='flex flex-col items-'> 
        <label htmlFor="url" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Website/Profile URL</label>
        <input
        type="url"
        id='url'
        
        name="website"
        onChange={handleChange}
         className=" mb-2 mt-2 px-4 py-2  w-[350px] bg-white rounded-full shadow-md"></input>
        </div>
        <div className='flex flex-col'>
        <label htmlFor="size" className='font-inter text-[16px] leading-[19px] tracking-normal pl-4'>Company size</label>
        <select
  name="companySize"
  onChange={handleChange}
  id="size"
  className=" mb-2 mt-2 px-4 py-2 w-[250px]  bg-white rounded-full shadow-md">
  
  <option value="" > </option>
  
  {companySize.map((companySize, index) => (
  
  <option key={index} value={companySize} className='font-semibold'>
  
  {companySize}
  
  </option>
  
  ))}
  
  </select>
        </div>
        </div>
        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2'>
          <div className='flex flex-col items-'> 
        <label htmlFor="adress" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Friendly adress</label>
        <input
        type="text"
        id='adress'
        
      name="friendlyAdress"
        onChange={handleChange}
         className=" mb-2 mt-2 px-4 py-2  w-[350px] bg-white rounded-full shadow-md"></input>
        </div>
        <div className='flex flex-col relative inline-block overflow-hidden'>
        <label htmlFor="wilayas" className='font-inter text-[16px] leading-[19px] tracking-normal  pl-4'>Wilaya</label>
     
          <div className="">
        <select
          id="wilayas"
          name="wilaya"
          onChange={handleChange}  
          
          
      
          
          
          className="single-select block no-scrollbar mb-2 mt-2 px-4 py-2 w-[250px]  rounded-full   bg-white  shadow-md "
        >
          <option value=""  > </option>
          
      
          {wilayas.map((wilaya, index) => (
            <option key={index} value={wilaya} className='font-semibold' >
              {wilaya}
            </option>
        ))}
        
        </select>
  
        </div>
    
      </div>
        </div>
        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2'>
          <div className='flex flex-col items-'> 
        <label htmlFor="categories" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Category</label>
        <select
          id="categories"
          name="category"
          onChange={handleChange}  
            required  
          className="select block  mb-2 mt-2 px-2 py-2 w-[250px] no-scrollbar   bg-white rounded-full shadow-md "
        >
          <option value="" > </option>
          
      
          {categories.map((categories, index) => (
            <option key={index} value={categories} className='font-semibold'>
              {categories}
            </option>
        ))}
        
        </select>
        </div>
      
        </div>
        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2 '>
          <div className='flex flex-col '> 
        <label htmlFor="description" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Description of the company</label>
        <textarea
        id='description'
        maxLength={500}
        rows="10"
        name="description"
        onChange={handleChange}
         className=" font-semibold  w-[600px] h-[191px] bg-white rounded-20 shadow-lg ml-2 mr-2 mb-2 mt-2  px-2 py-2"></textarea>
        </div>
      
        </div>
        
        <h1 className="font-inter text-[24px] leading-29 tracking-normal m-4">
          Social Networks
        </h1>
        <div >
        <button type="button" onClick={handleAddNetwork} className='ml-4  w-[120px] h-[35px] shadow-xl rounded-[45px] bg-secondary hover:bg-primary hover:text-white font-inter text-center text-[12px]'>Add Network</button>
        {showInputs &&
          networks.map((network, index) => (
            <div key={index} className='flex flex-wrap items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2'>
          
        <div className='flex flex-col relative inline-block overflow-hidden'> 
        <label htmlFor="net" className='font-inter text-[16px] leading-[19px] tracking-normal pl-4 '>Network name</label>
     
            
              <select
               id="net"
               value={network.name}
                onChange={(e) => handlenChange(index, 'name', e.target.value)}
                className=" select block ml-2 mr-1 mb-2 mt-2 px-2 py-2 w-[220px] no-scrollbar    bg-white rounded-full shadow-md " > 
                <option value="" ></option>
              {socialMedia.map((SocialMedia, index) => (
                <option key={index} value={SocialMedia} className='font-semibold'>
                  {SocialMedia}
                </option>
            ))}</select>
              </div>
              <div className='flex flex-col'> 
        <label htmlFor="neturl" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>URL</label>
              <input
              id="neturl"
                type="text"
                value={network.url}
                onChange={(e) => handlenChange(index, 'url', e.target.value)}
                className="ml-1 mr-2 mb-2 mt-2 px-2 py-2  w-[350px] bg-white rounded-full shadow-md"
              />
              </div>
              
              {index === networks.length - 1 && (
                <button type="button" onClick={handleRemoveNetwork} className=' w-[120px] h-[35px] shadow-xl rounded-[45px] bg-secondary hover:bg-primary hover:text-white font-inter text-center text-[12px]'>Remove Network</button>
              )}
               
            </div>
          ))}
         
      </div>
  
    <div className="flex flex-row gap-[10px] items-center container m-4">
    {formData.logo ? (
          <div className="mt-4">
            <img src={formData.logo} alt="Logo Preview" className="w-[100px] h-[100px] rounded-[33px] shadow-xl bg-transparent object-cover" />
          </div>
        ) : (
          <div className="mt-4 bg-white w-[100px] h-[100px]  rounded-[33px] shadow-xl"></div>)}
       <div><label className="block text-gray-700 text-sm font-bold mb-2">Logo image</label>
        <label
          htmlFor="logoInput"
          className="cursor-pointer  p-2 shadow-xl w-[120px] h-[35px]  rounded-[45px] bg-secondary hover:bg-primary hover:text-white font-inter text-center text-[12px]"
        >Browse</label></div>
        <input
          type="file"
          accept="image/*"
          id="logoInput"
         name="logo"   
          onChange={handleLogoChange}
          className="hidden"
        />
  
        
      </div>
    <div className='flex flex-col   gap-[10px] ml-4 mr-4 mt-2 mb-2'>
        <label htmlFor="password" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Password</label>
        <div className='flex flex-row'><div className='relative w-[350px]'><input
        type={showPassword ? 'text' : 'password'}
        maxLength={50}
        id='password'
        
    name="password"
    onChange={handleChange}
         className=" mb-2 mt-2 px-4 py-2  w-[350px] bg-white rounded-full shadow-md "></input>
             <img
        title={showPassword ? "ClosedEye":"OpenedEye" }
        src={showPassword ? OpenedEye:ClosedEye}
        onClick={handleTogglePassword}
      
        className="  cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
      />
      </div>
     {passwordError && ( <div className='flex flex-row items-center max-w-[250px] m-2'>
      <img src={Warning} alt="warning" className="mr-2" />
      <p className="text-red-600 text-xs">{passwordError}</p></div>)}
        </div>
         </div>
         <div className='flex flex-col  relative gap-[10px] ml-4 mr-4 mt-2 mb-2'>
        <label htmlFor="confirmPassword" className='font-inter  text-[16px] leading-[19px] tracking-normal pl-4'>Confirm Password</label>
        <div className='flex flex-row'><div className='relative  w-[350px]'><input
        type={showPassword ? 'text' : 'password'}
        id='confirmPassword'
        required
        name="confirmPassword"
        onChange={handleChange}
         className=" mb-2 mt-2 px-4 py-2  w-[350px]  rounded-full shadow-md "></input>
          
        
        
  </div>
         
  {confirmPasswordError &&  (
    <div className='flex flex-row items-center max-w-[250px] m-2'>
      <img src={Warning} alt="warning" className="mr-2" />
      <p className="text-red-600 text-xs">{confirmPasswordError}</p>
    </div>
  ) }
  </div>
         </div>
      
        <button  type="button"  onClick={handleButtonClick} className="text-costumGreen bg-primary  mt-[50px] mb-4 rounded-[30px] mx-auto flex items-center justify-center w-[300px] h-[34px]">Next</button>
       
     </form>
     </div>
     </div>
{/*******************************email Verification pop up**********************************************/}
     {verifyEmail && ( <div className="fixed inset-0 flex justify-center items-center bg-popUp bg-opacity-50">
        
        <button className="absolute top-0 right-0 m-4 text-xl" onClick={canCel}>
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
        <button  type="button" onClick={canCel} className=" inline-block  font-bold rounded-full hover:bg-primary hover:text-costumGreen  px-8 py-1 mr-1 text-lightGry border border-lightGry transition duration-500  ">
            <a href="">
            Cancel
            </a> 
        </button>
        <button type="submit" onClick={handleVerify} className=" inline-block  font-bold rounded-full  hover:bg-primary bg-lightGry  px-9 py-1 ml-1  text-costumGreen transition duration-500">
            Verify </button>
    </div>
    <div className="mt-3">
        <p className="text-xs font-bold text-center">
        Have a problem?
         {/*****************************button to resent email**************************************/}
        <button type='button' onClick={sendagain} className='text-blue-600'>send again</button>
        </p>
    </div>
</div>
</div>)}
          {/*****************************validation file pop up**************************************/}
     {showCard && (<div>
       <div className="absolute inset-0 bg-black w-full h-full opacity-50 overflow-hidden"></div>
  
           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card z-[20px] broder m-8 rounded-lg bg-background w-[60vw] h-[70vh] px-[6vw] py-[2vh]  flex flex-col gap-[20px] font-init text-primary  ">
           <div className="flex flex-row gap-[10px] items-center justify-center">
           <img src={Upload} alt="uploadLogo" className="w-[40px]"/>
           <p className="text-[24px] font-extrabold">Upload Verification Feature</p>
           </div>
           <div className="flex flex-col justify-center " >
           <span className="font-bold text-[13px] text-center">To successfully complete your sign-up process, it is required to upload a verification feature</span><span className="font-semibold text-[13px] text-center">Verification constitutes an indispensable measure in bolstering the security and preserving the integrity of our platform. It serves to authenticate the identity of employers, thus deterring the ingress of spurious entities.
           </span>
           </div>
           <div className="flex flex-row  justify-around ">
               <div className="flex flex-col gap-[10px] items-center  basis-1/5">
                   <img src={step1} alt="step1" className="w-[50px] "/>
                   <p className="font-medium text-[13px] text-center">Upload Feature and send the form</p>
               </div>
               <div className="flex flex-col gap-[10px] items-center basis-1/5">
                   <img src={step2} alt="step1" className="w-[50px]"/>
                   <p className="font-medium text-[13px] text-center">Our team will promptly review it</p>
               </div>
               <div className="flex flex-col gap-[10px] items-center basis-1/5">
                   <img src={step3} alt="step1" className="w-[50px]"/>
                   <p className="font-medium text-[13px] text-center ">You will be notified of your account activation status</p>
               </div>
               
           </div>
           <div>
           <input
          type="file"
          accept="image/*"
          id="file"
         name="file"   
          onChange={handleFileChange}
          className="hidden"
        />
               {uploadComplete&&(<div className='flex flex-col font-bold text-[12px]'>
  <div className='flex flex-row justify-between' >
    <span>Upload file 1 of 1 files</span>
    <span>100% completed</span>
  </div>
  <div   className="bg-gradient-to-r from-teal-400 to-blue-500 h-2 w-full rounded-full"/>
               </div>)}  
           </div>
           <div className="flex flex-row  gap-[10px] ">
               <button  type="button" onClick={handleCancel} className="rounded-full text-gray bg-background border border-gray shadow-lg basis-2/3 p-[3px] font-semibold hover:bg-gray hover:text-background ">cancel</button> 
               {!uploadComplete ?(<label htmlFor="file" className="rounded-full text-primary text-center bg-secondary border border-gray shadow-lg basis-2/3 p-[3px] font-semibold hover:bg-primary hover:text-secondary">Upload</label> ):(<button type="submit" onClick={handleSubmit} className="rounded-full text-primary text-center bg-secondary border border-gray shadow-lg basis-2/3 p-[3px] font-semibold hover:bg-primary hover:text-secondary">Submit</button>)}
               </div>
           
               </div> 
        </div>)}
        {/*************************************Done User pop up********************************/}
        {popUp && (<div className="fixed inset-0 flex justify-center items-center bg-popUp bg-opacity-50"> <div className="flex flex-col relative text-primary shadow-sdw  px-2 py-10  rounded-3xl items-center w-[300px] bg-back">




    <div className=" ">
    
    <img src={donepic} className="w-[100px] ">
    </img>

    </div> 



<div>
    <p className="text-3xl font-bold ">
      It is Done! 
    </p>
</div>
<div className="mt-8">
 <p className="text-[10px] font-bold mb-[-2px] text-center">
 You have completed all the steps
 </p>
 <p className="text-[10px] font-bold">
 You will be notified of your account activation status
 </p>


</div>
<div  className="mt-8">
    <button  type="button"  className=" rounded-full bg-primary text-xl px-8  py-1 font-bold  text-costumGreen  " onClick={handlegotoprofil}>
        go to profile
    </button>
</div>


</div> </div>)}
     </div>
  
  )};
  
  export default LongForm;
  