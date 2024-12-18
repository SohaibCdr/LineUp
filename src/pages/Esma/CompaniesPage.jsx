
import verticalArrow from "../../assets/arrow 4.svg";

import Navbar from '../../components/navBar';
import Companies from '../../components/Companies';
import Footer from "../../components/Footer";
import SearchBar from "../../components/searchBar";
import lines from "../../assets/background2.svg";
function CompaniesPage() {
    return( 
        <div className="relative my-auto  pb-0 bg-background ">
        {/* Search bar component  */}
   <div className="p-6  "><Navbar/></div> 
   <div className="absolute left-[24vw] top-[22vh] z-10  " ><SearchBar /> </div> 
   <img src={lines}  className=' absolute  top-[22vh]  w-[100vw] p-0'/>
    <div className=" relative">
      
 <img src={verticalArrow} className='absolute child left-4 bottom-0 h-[80%] z-20' /> 
    <div className="mt-[23vh] z-5"> <Companies/></div>
    
    </div>
    <Footer/>
    
</div>
       
       
       
        
   
    );
        
           

        
    
    }

export default  CompaniesPage ;
