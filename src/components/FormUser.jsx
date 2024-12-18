import { useEffect, useState } from 'react';
import ClosedEye from '../assets/closedEye.svg';
import OpenedEye from '../assets/OpenedEye.svg';
import Warning from '../assets/Warning.svg';
import {signupUser}from'../backend/sohaib/signupUser'

function FormUser ( {onSuccess}) {

       const [submitButton,setSubmitButton] = useState("  Send Verification Code  ");
        const [formData, setFormData] = useState({
          username: '',
          dateOfBirth: "",
          email: '',
          phoneNumber :"",
          password: '',
          confirmPassword: '',
        })
      
        const [errors, setErrors] = useState({})
        const [isSubmit ,setIsSubmit] =useState(false);
        const [showPassword, setShowPassword] = useState(false);
        const [showConfirmPassword, setShowConfirmPassword] = useState(false);
        
      
        const handleChange = (e) => {
          const {name, value} = e.target;
          setFormData({
              ...formData, [name] : value
          })
        }
      

        
  useEffect(() => {
    if (isSubmit) {
      const validationErrors = {};

      if (!formData.email.trim()) {
        validationErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        validationErrors.email = "Email is not valid";
      }
      if (!formData.phoneNumber.trim()) {
        validationErrors.phoneNumber = "Phone number is required";
      } else if (formData.phoneNumber.length !== 10|| !/^(00213|\+213|0)(5|6|7)[0-9]{8}$/.test(formData.phoneNumber)) {
        validationErrors.phoneNumber = "The phone number is not valid";
      }

      if (!formData.password.trim()) {
        validationErrors.password = "Password is required";
      } else if (formData.password.length < 8) {
        validationErrors.password = "Password should be at least 8 characters";
      }
      if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-z]).{8,}$/.test(formData.password)){
        validationErrors.password ="Error! Password should contain at least 8 characters, a capital letter, a special character, and a number"
      }

      if (formData.confirmPassword !== formData.password) {
        validationErrors.confirmPassword = "Error! Enter the same characters please";
      }

      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        alert("Form submitted successfully");
        setSubmitButton("Create new account");
        onSuccess();
          signupUser(formData)   //signUp function backend /sohaib
      } else {
        setIsSubmit(false); 
      }
    }
  }, [isSubmit, formData  ]);                           
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    
      
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
    return (

     
        <div className=" shadow-sdw basis-2/3 bg-background font-bold  text-primary pt-2 max-w-[54vw]   max-h-[80vh]  px-5 rounded-20  relative " >
          
       
       <h1 className="text-[24px] mt-3 mb-3">
          Describe yourself 
       </h1>
       <form className=""  onSubmit={handleSubmit}>
        <div >  {/* first line   */}
          
            <div className="inline-block mb-4 ">
               <label   htmlFor="fullName" className=" pl-1 mr-5 text-[16px]  block font-inter"> Full Name </label> 
               <input
              
               className="w-[350px] h-10 w-50 px-2 rounded-full shadow-md"
               id='fullName'
               type="text"
               required
               name="username"
               onChange={handleChange}
               />
                </div>
            <div className=" inline-block ml-5 mb-4">
             
               <label  htmlFor="date" className="  pl-1 block  text-[16px]" > Date Of Birth  </label> 
               <input
                
               className=" w-[250px] h-10  px-2 rounded-full shadow-md"
               id='date'
               type="date"
               required
               name="dateOfBirth"
               onChange={handleChange}
               />
              
            </div>
        
        <div className=" relative"> {/* second line  */}
            
            <div className="inline-block mb-4">
               <label  htmlFor="email" className=" pl-1 mr-5 block text-[16px]"> Email </label> 
               <input
                id='email'
               className=" w-[350px] h-10  px-2 rounded-full  shadow-md  "
               type="email"
               required
               name="email"
               onChange={handleChange}
               />
                
 
            </div>
            <div className="inline-block ml-5 mb-4">
               <label  htmlFor="phoneNumber" className=" pl-1 mr-5 pb-0.8 block text-[16px]"> phone number  </label> 
               <input
               id='phoneNumber'
               className=" w-[250px] h-10 px-2 w-396 rounded-full  shadow-md "
               type="tel"
               required
               name="phoneNumber"
               onChange={handleChange}
               length={10} 
               />
                 {errors.phoneNumber &&
               <div className="text-red-500  absolute right-12 text-[10px] ml-5 max-w-[200px]">
                   <p className='inline'>{errors.phoneNumber}</p>
                 </div>}
             
            </div>
          



        </div>
         <div className="">   {/* tird line  */}
          
            <div className=" mb-4 w-369 ">
               <label  htmlFor="password" className=" pl-1 mr-5 px-2 block mb-0  text-[16px]" >Password  </label> 
               <div className='flex items-center'> 

               <div className='relative '>
               <input
               
               id='password'
              className="w-[350px] h-10  px-2 rounded-full  shadow-md  "
              type={showPassword ? 'text' : 'password'}
              name="password"
              onChange={handleChange}
              >
              </input>
              <img
              title={showPassword ? "ClosedEye":"OpenedEye" }
              src={showPassword ? OpenedEye:ClosedEye}
              onClick={ togglePasswordVisibility}
          
              className="  cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
       

              />
               </div>
               
                        
                       

              {errors.password &&
               <div className="flex flex-row items-center max-w-[250px] ml-2">
                   <img  className="mr-2" src={Warning}></img> 
                   <p className='text-red-600 text-xs'>{errors.password}</p>
                   </div>}
 
               </div>
              
            </div>
        
        </div>
        <div className="mb-6">  {/*  line  4 */}
           
            <div className="">
               <label   htmlFor="confirmPassword" className=" pl-1 mr-5 px-2 block text-[16px] "> Confirm Password  </label>
               <div className='flex items-center'> 
               <div className='relative '> 
               <input
              id='confirmPassword'
               className="w-[350px] h-10  px-2 rounded-full  shadow-md "
               type={showConfirmPassword ? 'text' : 'password'}
               name="confirmPassword"
               onChange={handleChange}
               />
               <img
              title={showConfirmPassword ? "ClosedEye":"OpenedEye" }
              src={showConfirmPassword ? OpenedEye:ClosedEye}
              onClick={ toggleConfirmPasswordVisibility}
          
              className="  cursor-pointer absolute top-1/2 right-4 transform -translate-y-1/2"
              />
              </div>


                 {errors.confirmPassword &&
                <div className="flex flex-row items-center max-w-[250px] ml-2">
                   <img  className="mr-2" src={Warning}></img> 
                   <p className='text-red-600 text-xs'>{errors.confirmPassword}</p>
                  
                </div>}
                </div>
 
               </div>

 
            </div>
        
        </div>
        {/* line 5  button  */}
        <div className="text-center">
 
           <button 
          
            type ="submit"
          className="  cursor-pointer  text-md text-costumGreen  text-center rounded-full w-[450px]   bg-primary 
           py-2 px-20 font-bold"
         
          
           >
            <a href=''>

            </a>
               {submitButton}  

            </button>
        
         </div>
         </form>
         
      
    </div>

    
    );
}
export default FormUser