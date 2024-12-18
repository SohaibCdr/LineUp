import React from "react";
import {Routes, Route } from 'react-router-dom';

import Delete from "./Delete";
import Dash from "./Dash";
import Applications from "./Applications";
import Edite from "./Edite";
const Rout =() =>{
    return (
        <Routes>
          
            
          
              <Route path="/" element={<Dash/>} />
              <Route path="/Delete" element={<Delete/>} />
              <Route path="/Applications" element={<Applications/>} />
              <Route path="/Edite" element={<Edite/>} />
            
           
      
        </Routes>
      );
}
export default Rout;