import Navbar from '../../components/navBar.jsx';
import img from "../../assets/aboutUs.svg";
import Footer from '../../components/Footer.jsx';
import arrow1 from "../../assets/arrow 4.svg";
import arrow from "../../assets/arrow5.svg";
const Us = () => {
  return (
    <div className={`py-6 pb-0 max-w-screen bg-back font-inter overflow-x-hidden `}>
         <div className="px-6 z-0"><Navbar /></div>
      
      <div className="mt-[5vh] ">
       <div className='relative'><img src={img} alt="aboutUs" className="mb-8" />
<p className='absolute border-b-8 border-cyan-300 top-1/2  left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-semibold text-[4vw]'>ContactUs</p></div> 
        <div className="relative  flex flex-col  items-center mx-2">
          <img src={arrow1} className="absolute left-0 bottom-0 h-full " />
          <img src={arrow} className=" w-[40vw]  absolute bottom-0 right-0   " />
          <div className='h-[100vh] w-[50vw] shadow-lg bg-white m-20'>
            
          </div>
        </div>

        
      </div>
      
      <Footer />
    </div>
  );
};

export default Us;
