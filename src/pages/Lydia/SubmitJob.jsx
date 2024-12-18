
import React from "react";
import { useState,useEffect,useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import SideBarCom from "../../components/sideBarCom";
import { Navigate } from "react-router-dom";
import returnArrow from "../../assets/arrowForward.svg";
import { Link} from 'react-router-dom';
import exit from "../../assets/Exit.svg";
import ReadMore from "../../components/ReadMore";
import { getCompanyInfo, handleForgotPasswordBackend } from "../../backend/sohaib/DashboardCompany";
import { companyreviews } from "../../backend/sohaib/CompaniesBackend";
import { Auth } from "../../backend/firebaseconfig";
import { submitjob } from "../../backend/sohaib/SubmitJob";
const SubmitJob = () =>{
    const [JobName, setJobName] = useState('');
    const [Category, setCategory] = useState('');
    const [Jobtype, setJobtype] = useState('');
    const [Level, setLevel] = useState('');
    const [Wilaya, setWilaya] = useState('');
    const [friendly, setfriendly] = useState('');
    const [gendre, setgendre] = useState('');
    const [Salary, setSalary] = useState('');
    const [    respons, setrespons] = useState('');
    const [  descreption,setdescreption] = useState('');
    const [skills, setskills] = useState('');
    const [posts, setposts] = useState('');
    const navigate = useNavigate();


    const gendres=["male","female"];
    const levels=["entry level","mid-level","sunior level","managerial/supervisor"];
    const jobs=["internership","full time","part time","temporary"];
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
      const categories =["Health & Care" ,"education & Training","Human ressources","Creative Design","Developpement & Tech",
      "Marketing","Finance & Acounting","Automatisation & Engineering" ,"Management & Administration","Commercial"];


//  const changes =()=>{
//         e.preventDefault(e);
//         // le code
//     }




    const [preferences, setPreferences] = useState({
      remote: false,
      nonRemote: false,
    });
  
    const handleChange = (event) => {
      const { name, checked } = event.target;
      setPreferences((prevPreferences) => ({
        ...prevPreferences,
        [name]: checked,
      }));
    };




    const handleSubmit = async ()=>{
      submitjob({
          JobName,
      Category,
     Jobtype,
  Level,
  Wilaya,
    friendly, 
      gendre,
       respons, 
      Salary,   
           descreption,
          skills, 
          posts,
          preferences
      })
      console.log('hhhhhhhh')
    }



    const handlecancel = async ()=>{
        navigate('/SubmitJob');
    }


  
return(
    <div className="flex">
        <div className="w-1/5">
            <SideBarCom/>
        </div>












        
        <div className="w-4/5 p-5 mt-[5px] rounded-xl rounded-r-none bg-back ">
          


         <div className=" flex justify-between items-center w-[930px]">
                <div className="flex  items-center justify-between ">
                <Link to="/" className="flex items-center">
                <img src={returnArrow} alt="" className="transform rotate-180 w-5 h-5 mr-4" />
                </Link>
                <p className="text-[18px] ">
                    Home 
                </p>

                </div>
                <div className=" flex justify-end space-x-2 ">
                   <Link to="/company/submitJob" className="bg-primary font-medium text-center px-8 py-1 rounded-[6px] text-costumGreen hover:bg-secondary hover:text-primary ">
              Post Now
               </Link>
               
                    <Link
                    to="/company/dashboard"
                    className="bg-primary font-medium  text-center  px-8 py-1  rounded-[6px] text-costumGreen hover:bg-secondary hover:text-primary ">
                        View Profile 
                    </Link>
                
                
                

                </div>
                
              </div> 
              <h1 className="font-bold mb-8 text-3xl mt-5">New Post</h1>

              <div className=" flex flex-col  justify-between items-center w-full">
             
        <div className="flex justify-around w-full" >
          
<div className="flex space-x-12" >
<div className='flex flex-col '> 
        <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Job name</label>
        <input
        type="text"
 
        required   
        name="Job Name"
        value={JobName} onChange={(e) => setJobName(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
        </div>
</div>
       

        <div className="flex space-x-12" >
            <div className='flex flex-col '>
            <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Category</label>
        <select
    id="category"
     
        required   
  name="Category"
  value={Category} onChange={(e) => setCategory(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md">
             <option value=""  > </option>
             {categories.map((Category, index) => (
            <option key={index} value={Category} className='font-semibold' >
              {Category}
            </option>
        ))}
         </select>
            </div>

        </div>
     
       

       
        </div>



        <div className="flex space-x-12" >
         

            <div className='flex flex-col '> 
        <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Job Type</label>
        <select
        id="jobtype"
        required   
        name="Job type"
        value={Jobtype} onChange={(e) => setJobtype(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md">
             <option value=""></option>
            {jobs.map((Jobtype,index)=>(
                <option key={index} value={Jobtype}className='font-semibold' >
                     {Jobtype}
                </option>
            )


            )}
         
         </select>
        </div>

        <div className='flex flex-col '>
            <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Career Level</label>
        <select
    id="levelCareer"
     
        required   
  name="Level"
  value={Level} onChange={(e) => setLevel(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md">
            <option value=""></option>
            {levels.map((Level,index)=>(
                <option key={index} value={Level}className='font-semibold' >
                     {Level}
                </option>
            )


            )}
         </select>
            </div>

       

       
     </div>



     <div className="flex space-x-12" >

     <div className='flex flex-col '> 
        <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Wilaya</label>
        <select
      id="wilaya"
        required   
  name="Wilaya"
  value={Wilaya} onChange={(e) => setWilaya(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md">
              <option value=""  > </option>
            {wilayas.map((wilaya, index) => (
            <option key={index} value={wilaya} className='font-semibold' >
              {wilaya}
            </option>
        ))}
         </select>
        </div>





            <div className='flex flex-col '>
            <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Friendly adress</label>
        <input
        type="text"
     
        required   
  name="Friendly adress"
  value={friendly} onChange={(e) => setfriendly(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
            </div>
       

     




       




      



        </div>


<div className="flex space-x-12">



<div className='flex flex-col  '> 
        <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Gendre</label>
        <select
        type="text"
        required   
  name="gendre"
  value={gendre} onChange={(e) => setgendre(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md" >
 <option value=""  > </option>
            {gendres.map((gendre, index) => (
            <option key={index} value={gendre} className='font-semibold' >
              {gendre}
            </option>
        ))}

         </select>
        </div>





        <div className='flex flex-col '> 
        <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Salary</label>
        <input
        type="text"
        required   
  name="Salary"
  value={Salary} onChange={(e) => setSalary(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
        </div>

</div>

      
         <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2 '>
          <div className='flex flex-col '> 
        <label htmlFor="description" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'> Job Description</label>
        <textarea
        id='description'
        maxLength={500}
        rows="10"
        name="description"
        value={descreption}
        onChange={(e) => setdescreption(e.target.value)}
         className=" font-semibold  w-[900px] h-[191px] bg-white rounded-20 shadow-lg ml-2 mr-2 mb-2 mt-2  px-2 py-2"></textarea>
        </div>
      
        </div>



        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2 '>
          <div className='flex flex-col '> 
        <label htmlFor="description" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'> Key Responsibilities</label>
        <textarea
        id='description'
        maxLength={500}
        rows="10"
        name="description"
        value={respons}
        onChange={(e) => setrespons(e.target.value)}
         className=" font-semibold  w-[900px] h-[191px] bg-white rounded-20 shadow-lg ml-2 mr-2 mb-2 mt-2  px-2 py-2"></textarea>
        </div>
      
        </div>


        
        <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2 '>
          <div className='flex flex-col '> 
        <label htmlFor="description" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'> Skills & Experiences & Qualifications</label>
        <textarea
        id='description'
        maxLength={500}
        rows="10"
        name="skills"
        value={skills}
        onChange={(e) => setskills(e.target.value)}
         className=" font-semibold  w-[900px] h-[191px] bg-white rounded-20 shadow-lg ml-2 mr-2 mb-2 mt-2  px-2 py-2"></textarea>
        </div>
      
        </div>






        <div className='flex flex-col '> 
        <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Available posts</label>
        <input
        type="number"
        min={0}
        max={50}
 
        required   
  name="posts"
  value={posts} onChange={(e) => setposts(e.target.value)}
         className=" mb-2 mt-2 px-4 py-2  w-[900px] h-12 bg-white rounded-full shadow-md"></input>
        </div>



        <div className="mb-4 flex flex-col justify-center mt-6 " >
        <label className="flex items-center mb-2">
          <input
            type="checkbox"
            name="remote"
            checked={preferences.remote}
            onChange={handleChange}
            className="mr-2"
          />
         <div className="font-bold">Remote Job</div> 
        </label>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="nonRemote"
            checked={preferences.nonRemote}
            onChange={handleChange}
            className="mr-2"
          />
        <div className="font-bold"> Non-Remote Job</div> 
        </label>
      </div>

      
     



<div className="flex  justify-between items-center w-1/2 space-x-5  mt-8">

    <button  type="submit" className="bg-teal-400 rounded-3xl shadow-lg p-2 font-semibold text-lg w-1/2 hover:bg-slate-200 hover:text-emerald-300" onClick={handleSubmit}>Submit job</button>
  

 
    <button  type="submit" className="bg-slate-200 rounded-3xl shadow-lg p-2 font-semibold text-lg w-1/2 text-emerald-300  hover:text-slate-200 hover:bg-teal-400 " onClick={handlecancel}>Cancel</button>
 

      </div>
              </div>
       

       


        </div>
        

        

    </div>
  
)
}
export default SubmitJob;
