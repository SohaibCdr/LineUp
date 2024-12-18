import React, { useEffect } from "react";
import { useState } from 'react';
import Sidebar from "./Sidebar1";
import { getJobseekerInfo, updateInfo } from "../backend/ilyes/getSeekerInfo";
import SearchBar from "./searchBar";
import returnArrow from "../assets/arrowForward.svg";
import { Link} from 'react-router-dom';
const Edite = () =>{
    

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [wilaya, setwilaya] = useState('');
    const [friendly, setfriendly] = useState('');
    const [date, setdate] = useState('');
    const [place, setplace] = useState('');
    const [face, setface] = useState('');
    const [linked, setlinked] = useState('');
    const [tweeter, settweeter] = useState('');
    const [youtube, setyoutube] = useState('');
    const [insta, setinsta] = useState('');
     const [logo, setlogo] = useState();


    function handleLogoChange(event) {
        const file = event.target.files[0];
        setlogo(file);
         setpicexicte(false)
       console.log('pic :'+picexicte)
        
      }


const[picexicte,setpicexicte] =useState(true);
 const  [pic,setpic]=useState()

    
    const getinfo= async()=>{
       await getJobseekerInfo()
        .then(d=>
            {setname(d.name);
            setEmail(d.email);
            setphone(d.phone);
            setwilaya(d.wilaya);
            setfriendly(d.friendly);
            setdate(d.date);
            setplace(d.place);
            setpic(d.logo)
           
           setlogo(d.logo)

        })
        
            

    }
    useEffect(()=>{
        getinfo({name,});
    },[])
    

    const changes =async(e)=>{
        e.preventDefault(e);
        await  getJobseekerInfo()
 // Check if the element exists in the array                                                    
        
let p
if(picexicte==true){
    p=pic
}else{
    p=logo
}

        updateInfo(
            {username:name,
            email:email,
            phoneNumber:phone,
            Adress:friendly,
            dateOfBirth:date,
            placeOfBirth:place,
            profil:p,
        },picexicte)
        
    }
return(
    <div className="flex">
        <div className="w-1/5">
            <Sidebar/>
        </div>
        <div className="w-4/5 p-5 mt-[5px] rounded-xl rounded-r-none bg-back">

        <div className="flex items-center  mb-11 ">
     <div className="flex mr-16 items-center z-20  ">
                <Link to="/" className="flex items-center">
                <img src={returnArrow} alt="" className="transform mb-4 rotate-180 w-5 h-5 mr-4" />
                </Link>
                <p className=" mb-4 font-semibold text-[18px] ">
                    Home 
                </p>

                </div>
       
     <div className=" mr-20 z-20 h-16">
        <SearchBar/>


        
        </div>
        </div>

            
        <h1 className="font-bold mb-8 text-3xl  ml-14">Modify personal Profile</h1>
     <div className="flex flex-col justify-center items-center w-full">
        
        
     <div className="flex space-x-12" >
          

          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Full  name</label>
          <input
          type="text"
   
          required   
    name="first Name"
    value={name} onChange={(e) => setname(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[870px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
          </div>
          <div className="flex space-x-12" >
              <div className='flex flex-col '>
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Email adress</label>
          <input
          type="email"
       
          required   
    name="email"
    value={email} onChange={(e) => setEmail(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
         
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>phone</label>
          <input
          type="text"
          required   
    name="phone"
    value={phone} onChange={(e) => setphone(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
          </div>
  
  
  
          <div className="flex space-x-12" >
              <div className='flex flex-col '>
              <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Wilaya</label>
          <input
          type="text"
       
          required   
    name="wilaya"
    value={wilaya} onChange={(e) => setwilaya(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
         
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Friendly adress</label>
          <input
          type="text"
          required   
    name="friendly adress"
    value={friendly} onChange={(e) => setfriendly(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
       </div>
  
  
  
       <div className="flex space-x-12" >
              <div className='flex flex-col '>
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Birth date</label>
          <input
          type="date"
       
          required   
    name="date"
    value={date} onChange={(e) => setdate(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
              </div>
         
  
          <div className='flex flex-col '> 
          <label htmlFor="" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Birth place</label>
          <input
          type="text"
          required   
    name="place"
    value={place} onChange={(e) => setplace(e.target.value)}
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
          </div>
  
          </div>
  
  
  
  
  
          <div className="flex space-x-12" >
              <div className='flex flex-col '>
              <label htmlFor="e" className='font-inter  text-[16px] font-bold leading-[19px] tracking-normal pl-4'>Social media </label>
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
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
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
           className=" mb-2 mt-2 px-4 py-2  w-[420px] h-12 bg-white rounded-full shadow-md"></input>
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
        
        
        
        
        
        
        
        
        
        </div>   
       


       <div className=" ml-14 flex flex-row gap-[10px] items-center container m-4">
                    {logo ? (
                        <div className="mt-4">
                            <img src={logo} alt="Photo Preview" className="w-[100px] h-[100px] rounded-[33px] shadow-xl bg-transparent object-cover" />
                        </div>
                    ) : (
                        <div className="mt-4 bg-white w-[100px] h-[100px] rounded-[33px] shadow-xl"></div>
                    )}
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Identity picture</label>
                        <label
                            htmlFor="photoInput"
                            className="cursor-pointer p-2 shadow-xl w-[120px] h-[35px] rounded-[45px] hover:bg-primary hovetext-secondary bg-secondary hover:bg-primary hover:text-white font-inter text-center text-[12px]"
                        >
                            Browse
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            id="photoInput"
                            name="photo"
                            onChange={handleLogoChange}
                            className="hidden"
                        />
                    </div>
                </div>
     





        <div className="flex mt-9 space-x-6 justify-center justify-around">
    <button onClick={changes} type="submit" className="bg-teal-400 text-primary  rounded-3xl shadow-lg p-3 font-bold text-xl w-56 hover:bg-primary hover:text-secondary">Submit changes</button>
  </div>
        </div>

       


    </div>
  
)
}
export default Edite;