
import { useNavigate } from "react-router-dom";
import returnArrow from "../assets/arrow_forward.png"
import donepic from '../assets/email.svg' 
import { reload } from "firebase/auth";

function DoneUser (){
     const navigate = useNavigate()
    const handlegotoprofil = ()=>{
        navigate('/jobseeker/dashboard')
        location.reload()
    }
    return (
        <div className="flex flex-col relative text-primary shadow-sdw  px-2 py-10  rounded-3xl items-center w-[300px] bg-back">

            <div className="absolute left-8 ">
                <a href="#SignUpUser">
                <img  className="w-7" src={returnArrow}>
                </img>
                </a>
               
            </div>

            
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
             <p className="text-[10px] font-bold mb-[-2px]">
             Welcome to LineUp jobseeker's dashboard
             </p>
             <p className="text-[10px] font-bold">
             You are one step closer to your dream job
             </p>


            </div>
            <div  className="mt-8">
                <button  type="button"  className=" rounded-full bg-primary text-xl px-8  py-1 font-bold  text-costumGreen  "  onClick={handlegotoprofil}>
                    
                    Go to your Profile
                
                </button>
            </div>


        </div>
    );
}
export default DoneUser 