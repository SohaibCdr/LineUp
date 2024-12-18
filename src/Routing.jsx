import Home from'./pages/Esma/Home.jsx';
import { useState ,useEffect,Navigate} from 'react';
import SignInEmployee  from"./pages/Esma/PageUserSign.jsx";
import SignInEmployer from "./pages/Dadna/signUp.jsx"
import CompaniesPage from "./pages/Esma/CompaniesPage.jsx";
import Jobs from "./pages/Dadna/jobs.jsx";
import Dashboard from './pages/Esma/DashboardCom.jsx';
import AboutUs from './pages/Dadna/aboutUs.jsx';
import TS from './pages/Dadna/Terms&Services.jsx';
import FAQs from './pages/Dadna/FAQs.jsx';
import MyJobs from './pages/Dadna/MyJobs';
import Applicants from "./pages/Esma/Applicants"
import ContactUs from './pages/Dadna/contact.jsx';
import {Routes, Route } from 'react-router-dom';
import { db, Auth } from './backend/firebaseconfig';
import { getDoc, doc } from 'firebase/firestore';
import Login from './components/Login.jsx';
import ProtectedJobseeker from'./pages/Dadna/protectedJobseeker.jsx';
import ProtectedCompany from './pages/Dadna/protectedCompany.jsx';
import SubmitJob from './pages/Lydia/SubmitJob.jsx';
import Edite from'./components/Edite.jsx';
import Delete from "./components/Delete";
import Dash from "./components/Dash";
import Applications from "./components/Applications";
import Edit from "./pages/Lydia/EditeCom.jsx";
import Deletec from './pages/Lydia/DeleteCom.jsx';
import IsVerifiedMiddleware from "./components/IsVerifiedMiddleware.jsx";
//import { IsEmailverified } from './backend/sohaib/handleloginBackend.js';
function Routing () {
  const IsEmailverified = () => {
    const user = Auth.currentUser;
    if(!(user==null)){
   console.log("email verified :",user.emailVerified)
   return user.emailVerified;}else{
     return false
   }
   }
        const [userType, setUserType] = useState('guest');

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
    console.log(userType + ' kkkkkk');
  }, [userType]);

    return(
        <>
<Routes>
 <Route path="/" element={<Home />} />
 <Route path="/Jobs" element={<Jobs />}/>
 <Route path="/Companies" element={<CompaniesPage />} />
 <Route
          path="/signUpEmployee"
          element={!IsEmailverified() ? <SignInEmployee />: <div className='text-3xl bg-back'>you don't have access to this page</div>}
        />
        <Route
          path="/signUpEmployer"
          element={!IsEmailverified() ? <SignInEmployer /> :<div className='text-3xl bg-back'>you don't have access to this page</div>}
        />
        <Route
          path="/LogIn"
          element={!IsEmailverified() ? <Login /> : <div className='text-3xl bg-back'>you don't have access to this page</div>}
        />
 <Route path="/Companies" element={<CompaniesPage />} />

<Route path="/aboutUs" element={<AboutUs/>}/>
<Route path="/FAQs" element={<FAQs/>}/>
<Route path="/Terms&Services" element={<TS/>}/>
<Route path="/ContactUs" element={<ContactUs/>}/>
{/*<Route path="/signIn" element={< />} />*/}
<Route path="/jobseeker" element={<ProtectedJobseeker userType={userType} />}>
<Route path="/jobseeker/Edite"element={<IsVerifiedMiddleware><Edite/></IsVerifiedMiddleware>}/>
<Route path="/jobseeker/dashboard"element={<IsVerifiedMiddleware><Dash/></IsVerifiedMiddleware>}/>
<Route path="/jobseeker/deleteAccount"element={<IsVerifiedMiddleware><Delete/></IsVerifiedMiddleware>}/>
<Route path="/jobseeker/Applications"element={<IsVerifiedMiddleware><Applications/></IsVerifiedMiddleware>}/>
        </Route>
        <Route path="/company" element={<ProtectedCompany userType={userType} />}>
<Route path="/company/job" element={<IsVerifiedMiddleware><MyJobs/></IsVerifiedMiddleware>} /> 
<Route path="/company/Applicants" element={<IsVerifiedMiddleware><Applicants/></IsVerifiedMiddleware>} />
<Route path="/company/dashboard" element={<IsVerifiedMiddleware><Dashboard /></IsVerifiedMiddleware>} />
<Route path="/company/submitJob" element={<IsVerifiedMiddleware><SubmitJob/></IsVerifiedMiddleware>}/>
<Route path="/company/deleteAccount"element={<IsVerifiedMiddleware><Deletec/></IsVerifiedMiddleware>}/>
<Route path="/company/Edite"element={<IsVerifiedMiddleware><Edit/></IsVerifiedMiddleware>}/>
        </Route>       
        <Route path="*" element={<div className='text-3xl bg-back'>Page Not Found</div>}/> 
</Routes>
        </>
    );
}
export default Routing