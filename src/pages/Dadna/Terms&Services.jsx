import Navbar from '../../components/navBar';
import img from "../../assets/aboutUs.svg";
import Footer from '../../components/Footer.jsx';
import arrow1 from "../../assets/arrow 4.svg";
import arrow from "../../assets/arrow5.svg";
const TS = () => {
  return (
    <div className={`py-6 pb-0 max-w-screen bg-back font-inter overflow-x-hidden `}>
         <div className="px-6 z-0"><Navbar /></div>
      
      <div className="mt-[5vh] ">
       <div className='relative'><img src={img} alt="aboutUs" className="mb-8" />
<p className='absolute border-b-8 border-cyan-300 top-1/2  left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-semibold text-[4vw]'>Terms & Services</p></div> 
        <div className="relative  flex flex-col  items-center mx-2">
          <img src={arrow1} className="absolute left-0 bottom-0 h-full " />
          <img src={arrow} className=" w-[40vw]  absolute bottom-0 right-0   " />
          <ul className='grid grid-cols-2 list-decimal gap-10 max-w-[80vw] m-10 mb-20 text-justify'>
         <div> <li className="text-blue-600 font-semibold text-lg m-2">Acceptance of Terms</li>
  <p className="  font-semibold text-md">By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms or the Privacy Policy, you may not access or use the Site.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2">Use of the Site</li>
  <p className="  font-semibold text-md">You must be at least 18 years old to use the Site. You agree to use the Site only for lawful purposes and in accordance with these Terms. You are responsible for ensuring the confidentiality of your account and password and for restricting access to your computer.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2">Intellectual Property</li>
  <p className="  font-semibold text-md">The Site and its entire contents, features, and functionality are owned by LineUp.com and are protected by copyright, trademark, and other intellectual property laws.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2"> User Content</li>
  <p className="  font-semibold text-md">You retain ownership of any content you submit or upload to the Site ("User Content"). By submitting User Content, you grant us a non-exclusive, royalty-free, worldwide, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such User Content.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2">Limitation of Liability</li>
  <p className="  font-semibold text-md">In no event shall LineUp.com, its affiliates, or their respective directors, officers, employees, or agents be liable to you or any third party for any indirect, consequential, exemplary, incidental, special, or punitive damages.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2">Modification of Terms</li>
  <p className="  font-semibold text-md">We reserve the right to amend these Terms at any time. All amendments will be effective immediately upon posting to the Site. Your continued use of the Site following the posting of amended Terms constitutes your acceptance of such amendments.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2">Governing Law</li>
  <p className="  font-semibold text-md">These Terms shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.</p>
  </div>
  <div> <li className="text-blue-600 font-semibold text-lg m-2">Contact us</li>
  <p className="  font-semibold text-md">If you have any questions about these Terms, please contact us at info@example.com.</p>
  </div>
  
          </ul>
        </div>

        
      </div>
      
      <Footer />
    </div>
  );
};

export default TS;
