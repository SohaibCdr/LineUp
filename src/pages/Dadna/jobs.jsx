import Navbar from '../../components/navBar';
import Filters from '../../components/filters.jsx';
import Footer from '../../components/Footer.jsx';
const Jobs=()=>{
 
  
 
  return(
      <div className={`flex flex-col   bg-background  max-w-[100vw] relative my-auto py-6 pb-0 `}>
        <div className="px-6 z-0"><Navbar /></div>
        <div className='parent relative '>
   

   <div className=''> <Filters  /></div>
   </div>
      
      <Footer/>
      </div> 
    );

};
export default Jobs;