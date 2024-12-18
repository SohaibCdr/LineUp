import accept from "../assets/Accept.svg";
import download from "../assets/downloadCv.svg";
import reject from "../assets/Reject.svg";
import remove from "../assets/remove.svg";
import view from "../assets/View.svg";
import back from "../assets/back.svg";
import { useState } from "react";
import Details from "./UserInfoPopUp";
import { MdRemoveCircleOutline } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { IoDownloadOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";

function ApplicantsCard({ appInfo, onDelete }) {
    const [showMore, setShowMore] = useState(false);
    const [Accept, setAccept] = useState(false);
    

    const handleView = (id) => {
        console.log(id);
        setShowMore(true);
    };
  
    const handleClose = () => {
        setShowMore(false);
    };

    let stateColorClass;

    switch (appInfo.appState) {
        case "Accepted":
            stateColorClass = "bg-green-500";
            break;
        case "Rejected":
            stateColorClass = "bg-red-500";
            break;
        case "Pending":
            stateColorClass = "bg-neutral-400";
            break;
    }

    const handleRemove = () => {
        // Call the onDelete function to remove the user card from the array
        onDelete(appInfo);
    };
  const handleReject = (id)=>{
    

  }
  

    return (
        <div className="flex justify-between h-[90px] p-4 border bg-white border-gray-300 rounded-20 items-start">
            {/* LEFT */}
            <div className="flex flex-col space-y-2 w-1/2">
                <div className="flex space-x-6 items-center ">
                    <p className="font-bold text-[18px] text-primary">
                        {appInfo.appName}
                    </p>
                    <div className={`font-semibold text-[10px] px-2 py-1 rounded-full text-white ${stateColorClass}`}>
                        {appInfo.appState}
                    </div>
                </div>
                <p className="font-normal text-black text-[14px]">
                    Applied date : {appInfo.appDate}
                </p>
            </div>
            {/* RIGHT */}
            <div className="flex justify-end w-1/2 h-[30px] gap-1 ">
                    <button onClick={()=>handleView(appInfo.id)} title="View" className= " bg-indigo-200 hover:text-white	rounded-[10px] hover:bg-blue-600 w-[65px] flex justify-center items-center">
                    < GoEye  className="w-5 h-5"/>
                    </button>
                    <button title="Go Back" className= " bg-indigo-200 hover:text-white	rounded-[10px] hover:bg-blue-600 w-[65px] flex justify-center items-center">
                    <BsArrowCounterclockwise />
                    </button>
                    <button title="Download"  className= " bg-indigo-200 hover:text-white	rounded-[10px] hover:bg-blue-600 w-[65px] flex justify-center items-center">
                    <IoDownloadOutline/> 
                    </button>
                    <button title="Accept"  className= " bg-indigo-200 hover:text-white	rounded-[10px] hover:bg-blue-600 w-[65px] flex justify-center items-center">
                    <AiOutlineCheck/> 
                    </button>
                    <button title="Reject" onClick={()=>handleReject(appInfo.id)} className= " bg-indigo-200 hover:text-white	rounded-[10px] hover:bg-blue-600 w-[65px] flex justify-center items-center">
                    <MdRemoveCircleOutline  width="60px"/>
                    </button>
                    <button onClick={handleRemove} title="Remove" className= " bg-indigo-200 hover:text-white	rounded-[10px] hover:bg-blue-600 w-[65px] flex justify-center items-center">
                    < AiOutlineClose width={"60px"}/>
                    </button>
        </div>
            {showMore && (
                <div className="fixed inset-0 flex flex-col justify-center items-center bg-popUp bg-opacity-50">
                    <Details onClose={handleClose} info={appInfo} />
                </div>
            )}
        </div>
    );
}

export default ApplicantsCard;
