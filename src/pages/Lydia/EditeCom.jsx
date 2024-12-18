import React from "react";
import { useState,useEffect,useReducer } from 'react';
import exit from "../../assets/Exit.svg";
import ReadMore from "../../components/ReadMore";
import { getCompanyInfo, handleForgotPasswordBackend } from "../../backend/sohaib/DashboardCompany";
import { companyreviews } from "../../backend/sohaib/CompaniesBackend";
import { Auth } from "../../backend/firebaseconfig";
import returnArrow from "../../assets/arrowForward.svg";
import { Link} from 'react-router-dom';

import SideBarCom from "../../components/sideBarCom";
import { editCom, getCompany } from "../../backend/sohaib/EditCompany";
const EditeCom = () =>{
    const [NameCom, setNameCom] = useState('');
    const [FondDate, setFondDate] = useState('');
    const [emailCom, setemailCom] = useState('');
    const [phoneCom, setphoneCom] = useState('');
    const [wilayaCom, setwilayaCom] = useState('');
    const [friendlyCom, setfriendlyCom] = useState('');
    const [CategoryCom, setCategoryCom] = useState('');
    const [sizeCom, setsizeCom] = useState('');
    const [face, setface] = useState('');
    const [linked, setlinked] = useState('');
    const [tweeter, settweeter] = useState('');
    const [youtube, setyoutube] = useState('');
    const [insta, setinsta] = useState('');
    const[WibeSite,setWibeSite]=useState('');
    const[descCom,setdescCom]=useState('');
    const[picture,setpicture]=useState();

const[picexicte,setpicexicte] =useState(true);

    function handlepictureChange(event) {

        const file = event.target.files[0];
      setpicture(file);
      setpicexicte(false)
       console.log('pic :'+picexicte)  
        
      }
      const  [pic,setpic]=useState()
      const[netnames,setnetnames]=useState([])
     const[neturls,setneturls]=useState([])
      const getinfo= async()=>{
       await  getCompany()
        .then(d=>
            {setNameCom(d.name);
            setemailCom(d.email);
            setphoneCom(d.phone);
            setwilayaCom(d.wilaya);
            setfriendlyCom(d.friendly);
           setFondDate(d.date);
           setCategoryCom(d.category);
           setsizeCom(d.size)
           setdescCom(d.description)
           setnetnames(d.netnames)
           setneturls(d.neturls)
           setpicture(d.logo)
           setpic(d.logo)

        })
        
            

    }
    useEffect(()=>{
        getinfo();
    },[])

    const categories =["Health & Care" ,"education & Training","Human ressources","Creative Design","Developpement & Tech",
  "Marketing","Finance & Acounting","Automatisation & Engineering" ,"Management & Administration","Commercial"];
  
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

  const companySize =['Micro Businesses','small businesses','medium businesses','large businesses'];


 const changesCom =async (e)=>{
        e.preventDefault(e);
         await  getCompany()
        console.log('names :'+netnames)
        if(insta.length>0 ){
 // Check if the element exists in the array                                                    
if (neturls.includes(insta)) {
    
    let index = neturls.indexOf(insta);
    neturls.splice(index, 1);
    netnames.splice(index, 1);
    // Move the element to the beginning
    neturls.unshift(insta);
     netnames.unshift("Instagram")  
} else {
    
            neturls.unshift(insta)
             netnames.unshift("Instagram")  
}
         
        }
        if(face.length>0 ){
if (neturls.includes(face)) {
    
    let index = neturls.indexOf(face);
    neturls.splice(index, 1);
     netnames.splice(index, 1);
    // Move the element to the beginning
    neturls.unshift(face);
      netnames.unshift("Facebook") 
} else {
    
            neturls.unshift(face)
              netnames.unshift("Facebook") 
}
           
        }
         if(linked.length>0 ){
            if (neturls.includes(linked)) {
    
    let index = neturls.indexOf(linked);
    neturls.splice(index, 1);
     netnames.splice(index, 1);
    // Move the element to the beginning
    neturls.unshift(linked);
     netnames.unshift("LinkedIn") 
} else {
    
            neturls.unshift(linked)
             netnames.unshift("LinkedIn") 
}
           
           
        }
if(tweeter.length>0 ){
             
        if (neturls.includes(tweeter)) {
    
    let index = neturls.indexOf(tweeter);
    neturls.splice(index, 1);
     netnames.splice(index, 1);
    // Move the element to the beginning
    neturls.unshift(tweeter);
     netnames.unshift("Twitter") 
} else {
    
            neturls.unshift(tweeter)
             netnames.unshift("Twitter") 
}
           
            
        }
         if(youtube.length>0 ){
             if (neturls.includes(youtube)) {
    
    let index = neturls.indexOf(youtube);
    neturls.splice(index, 1);
     netnames.splice(index, 1);
    // Move the element to the beginning
    neturls.unshift(youtube);
      netnames.unshift("Youtube") 
} else {
    
            neturls.unshift(youtube)
              netnames.unshift("Youtube") 
}
          
           
            
        }
         if(WibeSite.length>0){
             if (neturls.includes(WibeSite)) {
    
    let index = neturls.indexOf(WibeSite);
    neturls.splice(index, 1);
     netnames.splice(index, 1);
    // Move the element to the beginning
    neturls.unshift(WibeSite);
     netnames.unshift("Wibesite") 
} else {
    
            neturls.unshift(WibeSite)
             netnames.unshift("Wibesite") 
}
           
           
        }
let p
if(picexicte==true){
    p=pic
}else{
    p=picture
}
console.log('hhhhhh :'+picexicte)
await editCom(
            {username:NameCom,
            email:emailCom,
            phoneNumber:phoneCom,
            friendlyAdress:friendlyCom,
           foundationDate:FondDate,
            category:CategoryCom,
            profil:p,
            description:descCom,
            companySize:sizeCom,
            wilaya:wilayaCom,
            networknames:netnames,
            networkurls:neturls,
        },picexicte)

    
       
     }


  
return(
    <div className="flex">
        <div className="w-1/5">
            <SideBarCom/>
        </div>

        <div className="w-4/5 flex flex-col p-5 mt-[5px] rounded-l-[30px] bg-back">
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
        <h1 className="font-bold mb-8 text-3xl mt-6 ">Modify your Profile's public informations</h1>
        <div className="flex flex-col justify-center items-center w-full">
       
       
        <div className="flex space-x-12" >
          

          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Employer name</label>
          <input
          type="text"
   
          required   
    name="employer Name"
    value={NameCom} onChange={(e) => setNameCom(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
  
          <div className='flex flex-col '>
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Fondation Date</label>
          <input
          type="Date"
       
          required   
    name="DateFondation"
    value={FondDate} onChange={(e) => setFondDate(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
  
  
  
  
  
  
          </div>
          <div className="flex space-x-12" >
             
         
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Email Adress</label>
          <input
          type="email"
          required   
    name="email"
    value={emailCom} onChange={(e) => setemailCom(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
  
  
  
  
  
  
  
          <div className='flex flex-col '>
              <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Phone</label>
          <input
          type="text"
       
          required   
    name="phoneCom"
    value={phoneCom} onChange={(e) => setphoneCom(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
  
          </div>
  
  
  
          <div className="flex space-x-12" >
              
         
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Wilyaya</label>
          <select
          id="wilaya"
          required   
    name="wilaya"
    value={wilayaCom} onChange={(e) => setwilayaCom(e.target.value)}
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
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Friendly Adress</label>
          <input
          type="text"
       
          required   
    name="friendly  adress"
    value={friendlyCom} onChange={(e) => setfriendlyCom(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
  
       </div>
  
  
  
       <div className="flex space-x-12" >
             
         
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Category</label>
          <select
          id="category"
          required   
    name="Category"
    value={CategoryCom} onChange={(e) => setCategoryCom(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md">
               <option value=""  > </option>
               {categories.map((CategoryCom, index) => (
              <option key={index} value={CategoryCom} className='font-semibold' >
                {CategoryCom}
              </option>
          ))}
  
           </select>
          </div>
  
  
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Company size</label>
          <select
          id="sizeCom"
          required   
    name="sizeCom"
    value={sizeCom} onChange={(e) => setsizeCom(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md">
  
  
  <option value=""  > </option>
               {companySize.map((sizeCom, index) => (
              <option key={index} value={sizeCom} className='font-semibold' >
                {sizeCom}
              </option>
          ))}
  
  
           </select>
          </div>
  
  
          </div>
  
  
  
  
  
          <div className="flex space-x-12" >
              <div className='flex flex-col '>
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Social networking  </label>
          <input
          type="text"
       placeholder="facebook"
          required   
    name="face"
    value={face} onChange={(e) => setface(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
         
  
          <div className='flex flex-col mt-4 '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>                  </label>
          <input
          type="text"
          placeholder="linked in"
          required   
    name="linked"
    value={linked} onChange={(e) => setlinked(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
          </div>
  
  
  
  
  
          <div className="flex space-x-12" >
              <div className='flex flex-col mt-4  '>
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4' >   </label>
          <input
          type="text"
       placeholder="tweeter"
          required   
    name="tweeter"
    value={tweeter} onChange={(e) => settweeter(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
         
  
          <div className='flex flex-col mt-4 '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'></label>
          <input
          type="text"
          placeholder="youtube"
          required   
    name="youtube"
    value={youtube} onChange={(e) => setyoutube(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
          </div>
  
  <div className="flex space-x-12">
  
  <div className='flex flex-col mt-4 '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>             </label>
          <input
          type="text"
          required   
          placeholder="instagram"
    name="instagram"
    value={insta} onChange={(e) => setinsta(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
  
  
  
          <div className='flex flex-col mt-4 '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>             </label>
          <input
          type="text"
          required   
          placeholder="WibeSite"
    name="WibeSite"
    value={WibeSite} onChange={(e) => setWibeSite(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2 w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
  
  
  </div>
         
  
  
  
  
  
       
  
  
 
        </div>
        <div className="flex flex-row gap-[10px] items-center container m-4">
                      {picture ? (
                          <div className="mt-4">
                              <img src={picture} alt="Photo Preview" className="w-[100px] h-[100px] rounded-[33px] shadow-xl bg-transparent object-cover" />
                          </div>
                      ) : (
                          <div className="mt-4 bg-white w-[100px] h-[100px] rounded-[33px] shadow-xl"></div>
                      )}
                      <div>
                          <label className="block text-gray-700 text-sm font-bold mb-2">Identity picture</label>
                          <label
                              htmlFor="photoInput"
                              className="cursor-pointer font-medium  p-2 px-5 shadow-xl w-[220px] h-[35px] rounded-[45px] bg-secondary hover:bg-primary hover:text-white font-inter text-center text-[12px]"
                          >
                              Browse
                          </label>
                          <input
                              type="file"
                              accept="image/*"
                              id="photoInput"
                              name="photo"
                              onChange={handlepictureChange}
                              className="hidden"
                          />
                      </div>
                  </div>
                  <div className='flex flex-row items-center  gap-[10px] ml-4 mr-4 mt-2 mb-2 '>
            <div className='flex flex-col '> 
          <label htmlFor="description" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'> Description of the Company</label>
          <textarea
          id='description'
          maxLength={500}
          rows="10"
          name="descriptionCom"
          value={descCom}
          onChange={(e) => setdescCom(e.target.value)}
           className=" font-semibold  w-[900px] h-[191px] bg-white rounded-20 shadow-lg ml-2 mr-2 mb-2 mt-2  px-2 py-2"></textarea>
          </div>
        
          </div>
      
       
     





        <div className="flex mt-9 space-x-6 justify-center ">
    <button type="submit" className="bg-teal-400 rounded-3xl shadow-lg p-2 py-3 font-bold text-xl w-56 hover:bg-primary hover:text-secondary " onClick={changesCom}>Submit changes</button>
  </div>
        </div>

        


    </div>
  
)
}
export default EditeCom;