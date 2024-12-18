import './Login.css'
// import ForgotPassword from '../ForgotPassword';
import { useEffect, useState } from 'react';
import {Link,NavLink, useNavigate} from 'react-router-dom';
import logo from '../assets/email 1.png'
import txt from '../assets/text header.png'
import done from '../assets/review 1.png'
import back from '../assets/greenLines.svg'
import{IsEmailverified,signout,sendagain} from '../backend/sohaib/handleloginBackend' 
// import back from '../assets/background1.png'
import Navbar from './navBar';
import { handleloginBackend } from '../backend/sohaib/handleloginBackend';
import { handleForgotPasswordBackend } from '../backend/sohaib/handleloginBackend';


const IsVerifiedMiddleware = ({ onLogin, children }) => {
  const [isverified, setisverified] = useState(false);

  useEffect

  if(isverified) return children


  return (
    <div>Please verify your account</div>
  )
}

export default IsVerifiedMiddleware
