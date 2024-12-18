import NavBar from '../../components/navBar.jsx';
import FormUser from "../../components/FormUser.jsx";
import SideUser from '../../components/SideUser.jsx';
import { useState } from 'react';
import VerificationCode from '../../components/VerificationCode.jsx';




function PageSignUser (){
    const [showVerificationCode, setShowVerificationCode] = useState(false);
    const handleSuccess = () => {
        setShowVerificationCode(true );
      };
    
    return (
        <div className="flex flex-col bg-background gap-[30px] pt-6 font-inter ">
  <div className='px-9' >
  <NavBar/> 
  </div>

   <div className="flex flex-row   px-6 gap-[0px] justify-around">
   <SideUser />
   <FormUser onSuccess={handleSuccess}/>
   {showVerificationCode && (
       
            <VerificationCode />
      
      )}
   </div>
   

</div>


      
    );   

}

export default PageSignUser ;    
  