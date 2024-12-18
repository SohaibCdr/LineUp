import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";

import { MdOutlineBusinessCenter } from "react-icons/md";
import { GrBarChart } from "react-icons/gr";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signout } from "../backend/sohaib/handleloginBackend";

const Sidebar = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically


    const handleLogout = () => {
        signout()    
        // Then navigate to the home page
        navigate('/');
    };

    const Links = [
        { linksName: 'Dashboard', icon: <GrBarChart/>, path: '/jobseeker/dashboard' },
        { linksName: 'Applications', icon: <MdOutlineBusinessCenter  />, path: '/jobseeker/Applications' },
        { linksName: 'Edit Profile', icon: <PiWarningCircleBold/>, path: '/jobseeker/Edite' },
        { linksName: 'Delete Profile', icon: <FaRegTrashAlt/>, path: '/jobseeker/deleteAccount' },
        { linksName: 'log out', icon: <FaPowerOff/>, path: '/' }, // Log out should navigate to the home page
    ];

    const showLinks = Links.map((link, index) => (
        <li key={index} className="flex bg-primary bgLinks w-full ps-3">
            <div className={`flex m-4 space-x-3 bgLinks`}  onClick={link.path === '/' ? handleLogout : () => navigate(link.path)}>
                {/* <img className="text-white" src={link.icon} alt="" /> */}
            <div className=" flex  items-center  space-x-4">
                <div className="text-white icon ">
                {link.icon}
                </div>
                <span className="text-white">{link.linksName}</span>
            </div>
               
            </div>
        </li>
    ));

    return (
        <div className="fixed left-0 top-0 primary h-screen w-64 pt-16 bg-primary">
            <div className="navigation flex justify-between items-center">
                <ul className="w-full">
                    {showLinks}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
