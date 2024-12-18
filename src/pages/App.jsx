import  { useState} from "react";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import EmployerProfile from '../components/EmployerProfile';
import JobSeekerProfile from '../components/JobSeekerProfile';
import Login from '../components/Login';
import { db, Auth } from '../backend/firebaseconfig';
import { getDoc, doc } from 'firebase/firestore';
import { IsEmailverified } from '../backend/sohaib/handleloginBackend';
import IsVerifiedMiddleware from "../components/IsVerifiedMiddleware";
import Delete from "../components/Delete";
import Edite from "../components/Edite";
import Dash from '../components/Dash';
import Applications from "../components/Applications";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [userType, setUserType] = useState('');
  const [isverified, setisverified] = useState(true);
  // const navigate =  useNavigate()

  const handleLogin = async () => {
    const docsnap = await getDoc(doc(db, "roles", Auth.currentUser.uid));
    const userType = docsnap.data().role;
    console.log("usertype :" + userType);
    setisverified(IsEmailverified());
    setUserType(userType);
  };

  // if(isverified){
  //   if(userType ==='jobseeker' )
  //     navigate("/jobseeker-profile")
  //   else navigate("/employer-profile")
  // }
  // else navigate("/")

  return (
    <Router>
      
        {/* {isverified ? (
          userType === 'jobseeker' ? (
            <Navigate to="/jobseeker-profile" />
          ) : (
            <Navigate to="/employer-profile" />
          )
        ) : (
          <Login onLogin={handleLogin} />
        )} */}
        <Routes>
        <Route path="/Login" element={<IsVerifiedMiddleware><Login /></IsVerifiedMiddleware>} />
        <Route path="/Delete" element ={<IsVerifiedMiddleware><Delete/></IsVerifiedMiddleware>}/>
        <Route path="/Edit" element ={<IsVerifiedMiddleware><Edite/></IsVerifiedMiddleware>}/>
        <Route path="/Applications" element={<IsVerifiedMiddleware><Applications/></IsVerifiedMiddleware>}/>
        <Route path="/Dash" element={<IsVerifiedMiddleware><Dash/></IsVerifiedMiddleware>}/>

          <Route path="/employer-profile" element={<IsVerifiedMiddleware><Element /></IsVerifiedMiddleware>} />
          <Route path="/Dash" element={<IsVerifiedMiddleware><Dash /></IsVerifiedMiddleware>    }  />
          <Route exact path="/" render={() => <Redirect to="/Login" />} />
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
        </Routes>
      
    </Router>
  );
}

export default App;
