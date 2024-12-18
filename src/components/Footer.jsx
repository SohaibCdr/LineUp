import Logo from "../assets/Logo.svg";
import tel from "../assets/footerPhone.svg" 
import location from "../assets/footerLocation.svg"
import letter from "../assets/footerEmail.svg"
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";
import linkedln from "../assets/LinkedIn.svg";
import { Link } from 'react-router-dom';
function Footer (){
    return (
    <div className="flex bg-lightGry h-auto p-14   justify-evenly">
        {/* logo section */}
        <div className="flex flex-col w-2/6 justify-center p-6 items-center  "> 
             <div className="mb-4">
                <img src={Logo} alt="logo " className="w-28 rounded-2xl">
                </img>
             </div>
             <div className="mt-4">
                <p className="text-md font-semibold ">
                          Algeria's premier job portal, 
                        bridging unemployment gaps 
                        towards national prosperity.  
                </p>
             </div>
        </div>
        {/*  contact us section */}
        <div className="flex flex-col w-2/5 font-semibold items-center justify-center">
            <div >
            <h1 className="ml-0">Contact Us </h1>
            <div className="flex flex-col mt-4 ">
            {/* r1 */}
            <div  className="flex  m-2 ml-0">
                <img src={letter}  className="mr-8 w-6 rounded-full"/>
                <p>
                 LineUp@email.com
                </p>
            </div>
            {/* r2 */}
            <div  className="flex m-2 ml-0">
                <img src={tel}  className="mr-8 w-6 rounded-full"/>

                <p>
                 0732234554
                </p>
            </div>
            {/* r3 */}
            <div className="flex  m-2 ml-0 "> 
                <img src={location} className="mr-8 w-6 rounded-full"/>
                <p>
                Sidi Bel Abbes 
                </p>
            </div>
            </div>
         
            {/* r4 */}
            <div className="flex items-center mx-0 w-full justify-center ">
            <a  className="mx-3 my-2 w-1/3" href={`https://instagram.com`}>
                          <img src={instagram} alt="instagram"  className="w-10"/>
                     </a>
                     <a className="mx-3 my-2 w-1/3"  href={`https://facebook.com/`} >
                          <img src={facebook} alt="facebook" className="w-10" />
                     </a>
                     <a className="mx-3 my-2 w-1/3"  href={`https://linkedin.com/in/`}>
                          <img src={linkedln} alt="linkedIn" className="w-10" />
                     </a>
                      
            </div>

          </div>

        </div>
        {/*pages section  */}
      
          {/* p1 */}
            
             <div className="flex flex-col mt-4 w-1/5 justify-around font-semibold">
                    <Link to="/" className=" hover:underline">Home</Link>
                    <Link to="/CompaniesPage" className="hover:underline">Companies</Link>
                    <Link to="/Jobs" className=" hover:underline">Jobs</Link>
                    <Link to="/AboutUs" className=" hover:underline">About Us</Link>
                    
            </div>
            {/* blogs and reviews */} 
            <div  className="flex flex-col mt-4 w-1/5 justify-around font-semibold">
                <Link to="/FAQs" className=" hover:underline">FAQs</Link>
                <Link to="/Terms&Services" className="hover:underline">Terms&Services</Link>
                <Link to="/ContactUs" className=" hover:underline">ContactUs</Link>


            </div>

            
         
          


    </div>
    );  
}
export default Footer ;