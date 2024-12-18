import React from "react";
import NavBar from "../components/navBar";
import Job from "../components/Job";
import Sidebar from "../components/sidebar";
import Counter1 from "../components/counter1";
import Delete from "../components/Delete";
import Edite from "../components/Edite";


// Corrected declaration of Home component as a function
const Home = () => (
    <div className="flex flex-col h-auto bg-background gap-[40px] p-6   ">
        {/* <NavBar /> */}
       
        <div className=" space-x-80">
        {/* <Sidebar/>
<Delete/> */}
        {/* <Delete/> */}
        {/* <div className="p-10">
        <h2 className="text-2xl font-bold">Welcome in your logo Jobseeker’s dashboard  ,</h2>
        </div> */}
        
        {/* <div className="flex space  justify-around ">
            <Job/>
         <Counter1/>
        </div> */}
         
        </div>
     
    </div>
)

export default Home;

