import React from 'react';
import { useState,useEffect } from 'react';
import Avatar from '../assets/Avatar.svg';
import { Link ,useLocation} from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db,Auth } from '../backend/firebaseconfig';
import Logo from "../assets/Logo.svg"
const Navbar = (type ) => {
  const [userType, setUserType] = useState(type);

  useEffect(() => {
    const unsubscribe = Auth.onAuthStateChanged(async(user) => {
      
        try {
          if(user){
          const docSnap = await getDoc(doc(db, 'roles', user.uid));
            setUserType(docSnap.data().role);
          } else {
            setUserType('guest')
          }
        } catch (error) {
          console.error('Error fetching user role:', error);
        }
      
    })

    // Assuming you have a way to get the current user from Auth
    

    return () => unsubscribe();
  }, [userType]);

  useEffect(() => {
    console.log(userType + ' hahaha');
  }, [userType]);

   let linkTo;

  if (userType === 'guest') {
    linkTo = '/logIn';
  } else if (userType === 'company') {
    linkTo = '/company/dashboard';
  } else if (userType === 'jobseeker') {
    linkTo = '/jobseeker/dashboard';
  }
    return (
     <nav className='flex flex-row items-center justify-between bg-transparent font-init text-primary px-[40px] z-40 '>
  
      
        <Link className=" text-xl font-bold"><img src={Logo} className='w-24' alt='LineUp'></img></Link>
  
        <div className="flex text-bold items-center text-lg  font-semibold gap-[30px]">
          <Link to="/" className= {location.pathname === "/" ? "border p-2 rounded-lg border-primary" : ""}>Home</Link>
          <Link to="/Jobs" className={location.pathname === "/Jobs" ||location.pathname.startsWith("/jobs") ? "border p-2 rounded-lg border-primary" : ""}>Jobs</Link>
          <Link to="/Companies" className={location.pathname === "/Companies" ? "border p-2 rounded-lg border-primary" : ""}>Companies</Link>
          <Link to="/aboutUs" className={location.pathname === "/aboutUs" ? "border p-2 rounded-lg border-primary" : ""}>About Us</Link>
        {userType==='guest' && (  <Link to ="/signUpEmployer"className={location.pathname === "/signUpEmployer" || location.pathname === "/signUpEmployee" ? "border p-2 rounded-lg border-primary" : ""}>Sign Up</Link>)}
          <Link to={linkTo} className=""><img src={Avatar} className='w-[3vw]' alt="avatar"/></Link>
        </div>
     
     </nav>
    );
  };
  
  export default Navbar;