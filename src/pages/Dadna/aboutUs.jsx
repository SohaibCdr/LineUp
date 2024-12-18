import Navbar from '../../components/navBar';
import img from "../../assets/aboutUs.svg";
import Footer from '../../components/Footer.jsx';
import arrow1 from "../../assets/arrow 4.svg";
import arrow from "../../assets/arrow5.svg";
const AboutUs = () => {
  return (
    <div className={`py-6 pb-0 max-w-screen bg-back font-inter overflow-x-hidden `}>
         <div className="px-6 z-0"><Navbar /></div>
      
      <div className="mt-[5vh] ">
       <div className='relative'><img src={img} alt="aboutUs" className="mb-8" />
<p className='absolute border-b-8 border-cyan-300 top-1/2  left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-semibold text-[4vw] '>About Us</p></div> 
        <div className="relative  flex flex-col  items-center mx-2">
          <img src={arrow1} className="absolute left-0 bottom-0 h-full " />
          <img src={arrow} className=" w-[40vw]  absolute bottom-0 right-0   " />
          <p className="font-inter font-bold text-justify justify-self-center text-lg mx-[10vw] max-w-3xl m-20">
            At our website LineUp, we're committed to bridging top talent with premier career opportunities. Drawing from our extensive recruitment expertise, we understand the pivotal importance of perfect alignment between candidates and companies. Our mission is to streamline the job search process by providing an intuitive, efficient platform for job seekers to discover roles matching their skills and aspirations. We strive to deliver high-quality service, emphasizing transparency, integrity, and user satisfaction. With a dedication to innovation and excellence, we aim to be the preferred partner for those seeking career advancement and professional success
          </p>
        </div>

        
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
