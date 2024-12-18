import Navbar from '../../components/navBar';
import img from "../../assets/aboutUs.svg";
import Footer from '../../components/Footer.jsx';
import arrow1 from "../../assets/arrow 4.svg";
import arrow from "../../assets/arrow5.svg";
const FAQ = () => {
  return (
    <div className={`py-6 pb-0 max-w-screen bg-back font-inter overflow-x-hidden `}>
         <div className="px-6 z-0"><Navbar /></div>
      
      <div className="mt-[5vh] ">
       <div className='relative'><img src={img} alt="aboutUs" className="mb-8" />
<p className='absolute border-b-8 border-cyan-300 top-1/2  left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-white font-semibold text-[4vw]'>FAQs</p></div> 
        <div className="relative  flex flex-col  items-center mx-2">
          <img src={arrow1} className="absolute left-0 bottom-0 h-full " />
          <img src={arrow} className=" w-[40vw]  absolute bottom-0 right-0   " />
          <ul className="list-decimal mt-10 mb-20  max-w-[70vw]">
  <li className="text-blue-600 font-semibold text-lg m-2">How do I create an account on your platform?</li>
  <p className="  font-semibold text-md">You can easily create an account by clicking on the Sign Up button, selecting your role and following the prompts to provide your details.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">Are there any fees for using your services?</li>
  <p className="  font-semibold text-md">No, our basic services for job seekers are completely free of charge. However, there may be premium features available for a fee for companies and employers.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">How can I search for job opportunities on your website?</li>
  <p className="  font-semibold text-md">You can search for jobs by using keywords, location, category, or other criteria using our advanced search filters.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">How do I apply for a job through your platform?</li>
  <p className="  font-semibold text-md">Once you find a job listing that interests you, simply click on it to view the details, and follow the instructions to apply directly through our website.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">Can I upload my resume to your platform?</li>
  <p className="  font-semibold text-md">Yes, you can easily upload your resume when applying to a job offer, making it accessible to the employers. </p>
  <li className="text-blue-600 font-semibold text-lg m-2">How can I edit my profile information?</li>
  <p className="  font-semibold text-md">You can edit your profile information, including your contact details, by accessing your account settings.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">What if I forget my password?</li>
  <p className="  font-semibold text-md">If you forget your password, you can use the "Forgot Password" option on the login page to reset it.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">Are the job listings on your website up-to-date?</li>
  <p className="  font-semibold text-md">Yes, we strive to keep our job listings as current as possible by regularly updating them and removing expired listings.</p>
  <li className="text-blue-600 font-semibold text-lg m-2">How do I know if my application is accepted or not ?</li>
  <p className="  font-semibold text-md">You will receive notifications about the state of your applications on your account dashboard, just login and you will see them. </p>
  <li className="text-blue-600 font-semibold text-lg m-2">How can I contact customer support if I have further questions?</li>
  <p className="  font-semibold text-md">You can reach out to our customer support team through the "Contact Us" page or by sending an email to support@example.com. We're here to help!</p>
</ul>

        </div>

        
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;