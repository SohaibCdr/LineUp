import arrow3 from '../assets/arrow1.svg'
import arrow2 from '../assets/arrow2.svg'
import arrow1 from '../assets/arrow3.svg'
import { Link, useLocation } from "react-router-dom";

function SideUser (){
return(
    <div className="flex flex-col items-center font-inter  text-primary  basis-1/3">
        <div className=" w-[26vw] font-bold  text-[28px]">
                      <span className="text-[22px]  ">Join For Free</span>
                       <br />
                      <span> Unleash the soldier <span className="text-secondary text-[32px] drop-shadow-2xl">inside you</span>, Start the greatest battle of yours</span>
        </div>
        <div className='flex flex-row gap-[10px] items-center justify-center' >
           <img src={arrow1} className='color-primary w-[12px] ' alt="arrow"/>
         <p className='font-bold text-[12px]'>Take the right option and fill the form</p>
     </div>
                 <div className='flex flex-row justify-center items-center font-bold my-4'>
                  <div className=' flex  gap-[20px] ml-[80px]'>
                  <Link 
                to="/signUpEmployee" 
                className={`w-[120px] h-[35px] p-2 textshadow-xl rounded-[45px] border bg-back border-primary  font-inter text-center text-[12px] m-2 
                            ${location.pathname === "/signUpEmployee" ? "bg-secondary border-none" : ""}`}
            >
                Jobseeker
            </Link>
            <Link 
                to="/signUpEmployer" 
                className={`w-[120px] h-[35px] shadow-xl p-2 rounded-[45px] border bg-back border-primary  font-inter text-center text-[12px] m-2 
                            ${location.pathname === "/signUpEmployer" ? "bg-secondary border-none" : ""}`}
            >
                Employer
            </Link>
                    </div>
                     <img src={arrow2} alt="arrow" className='w-[100px] ml-[60px]'/>

                 </div>
                 <div className='flex flex-col items-center justify-center mt-[25px] gap-[20px]'>
                 <p className='font-bold text-[12px]'>Already have an account? <Link to="/logIn" className='text-blue-600'>Sign in</Link></p>
                 <img src={arrow3} alt="arrow" className='w-[11px]' />
                 </div> 
    </div>
)





}
export default SideUser ;