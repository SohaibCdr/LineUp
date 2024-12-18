import React from 'react';

import Dashboard from './pages/Esma/DashboardCom.jsx';
import {Routes, Route } from 'react-router-dom';
import MyJobs from './pages/Dadna/MyJobs';
import Applicants from "./pages/Esma/Applicants"
// import Applications from './Applications';
// import SubmitJob from './SubmitJob';
// import EditProfile from './EditProfile';
// import DeleteProfile from './DeleteProfile';
// import Logout from './Logout';
import SidebarCom from './components/sideBarCom.jsx';
import SubmitJob from './pages/Lydia/SubmitJob.jsx';
import DeleteCom from './pages/Lydia/DeleteCom.jsx';
import EditeCom from './pages/Lydia/EditeCom.jsx';

function App() {
  return (
    <Routes>
      
      
        
      <Route path="/" element={<Dashboard />} />

         <Route path="/MyJobs" element={<MyJobs/>} /> 
           <Route path="/Applicants" element={<Applicants/>} />
           <Route path="/SubmitJob" element={<SubmitJob/>}/>
           <Route path="/DeleteCom" element={<DeleteCom/>} />
         <Route path="/EditeCom" element={<EditeCom/>}/>

          {/* <Route path="/submit-job" component={SubmitJob} />
          <Route path="/edit-profile" component={EditProfile} />
          <Route path="/delete-profile" component={DeleteProfile} />
          <Route path="/logout" component={Logout} />  
        
       */}
    </Routes>
  );
}

export default App;
