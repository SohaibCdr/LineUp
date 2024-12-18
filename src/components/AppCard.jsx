import { useState } from "react";
import { MdRemoveCircleOutline } from "react-icons/md";
import { GoEye } from "react-icons/go";
import { IoDownloadOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowCounterclockwise } from "react-icons/bs";
import Details from "./UserInfoPopUp";

function AppCard({ appInfo, onDelete , onApprove, onReject,onReturn , onDownload}){

    const [showMore, setShowMore] = useState(false);
     
   
    const handleView = (id) => {
        console.log(id);
        setShowMore(true);
    };
  
    const handleClose = () => {
        setShowMore(false);
    };
    const handleReturn =()=>{
        onReturn (appInfo)
    }
    
     const handleApprove = () => {
        onApprove(appInfo);
    };

    const handleReject = () => {
        onReject(appInfo);
    };

     const handleRemove =()=>{
        onDelete();
     }
     const handleDownload =()=>{
        onDownload(appInfo)


     }


     return (
     
     <div className="flex justify-between h-[90px] p-4 border bg-white border-gray-300 rounded-20 items-start">
        {/* left  */}

         <div>
                    <div className="flex space-x-6 items-center " >
                <p className="font-bold text-[18px] text-primary">
                                {appInfo.appName}
                </p>
                <div className={`font-semibold text-[10px] px-2  py-1 text-center rounded-full text-white ${appInfo.appState==="Rejected" || appInfo.appState==="Pending" ? "hidden ": "bg-green-500"} `}>
               Accepted
                </div>
                <div className={`font-semibold text-[10px] px-2  py-1 text-center rounded-full text-white ${appInfo.appState==="Accepted" || appInfo.appState==="Pending" ? "hidden ": "bg-red-500"} `}>
                 Rejected
                </div>
                <div className={`font-semibold text-[10px] px-2  py-1 text-center rounded-full text-white ${appInfo.appState==="Rejected" || appInfo.appState==="Accepted" ? "hidden ": "bg-neutral-400"} `}>
                Pending
                </div>
                </div>
                <div>
                    <p className="font-normal text-black text-[14px]">
                            Applied date : {appInfo.appDate}
                    </p>   
                </div>
         </div>
        








        {/* right */}

        <div className="flex flex-row gap-1 place-self-center  ">
                <div className="group relative"> < GoEye onClick={handleView} className="w-6 h-6 rounded-md p-1 fill-primary hover:fill-white bg-blue-200 hover:bg-blue-600" />
                                <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2">
                                    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
                                    <p className="px-1 text-[8px] text-center"> Details </p>
                                    </div>
                                
                        </div>
                                
                   
                   <div className="group relative"> < AiOutlineCheck onClick={handleApprove} className={`w-6 h-6 rounded-md p-1 hover:fill-white  hover:bg-blue-600 ${appInfo.appState==="Accepted" || appInfo.appState==="Rejected" ? "hidden":" hover:fill-white bg-blue-200 hover:bg-blue-600"}`} />
                                <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2">
                                    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
                                    <p className="px-1 text-[8px] text-center">Approve</p>
                                    </div>
                                
                   </div>
                   <div className="group relative"> < MdRemoveCircleOutline  onClick={handleReject} className={`w-6 h-6 rounded-md p-1 fill-primary hover:fill-white bg-blue-200 hover:bg-blue-600 ${appInfo.appState==="Accepted" || appInfo.appState==="Rejected"? "hidden" : "hover:fill-white bg-blue-200 hover:bg-blue-600"}`} />
                                <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2">
                                    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
                                    <p className="px-1 text-[8px] text-center"> Reject</p>
                                    </div>
                                
                   </div>
                   <div className="group relative"> <IoDownloadOutline  onClick={()=>handleDownload(appInfo)}  className={`w-6 h-6 rounded-md p-1 hover:fill-white  hover:bg-blue-600 ${appInfo.appState==="Rejected"  ? "hidden":" hover:fill-white bg-blue-200 hover:bg-blue-600"}`} />
                                <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2">
                                    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
                                    <p className="px-1 text-[8px] text-center">Download CV</p>
                                    </div>
                                
                   </div>

                   


                <div className="group relative"> <BsArrowCounterclockwise  onClick={()=>handleReturn(appInfo)}  className={`w-6 h-6 rounded-md p-1 hover:fill-white  hover:bg-blue-600 ${appInfo.appState==="Pending"  ? "hidden":" hover:fill-white bg-blue-200 hover:bg-blue-600"}`} />
                        <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2">
                            <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
                            <p className="px-1 text-[8px] text-center"> Undo rejected</p>
                             </div>
                        
                </div>
                
                <div className="group relative"> < AiOutlineClose  onClick={onDelete} className="w-6 h-6 rounded-md p-1 fill-primary hover:fill-white bg-blue-200 hover:bg-blue-600" />
                                <div className="hidden group-hover:block bg-black text-white w-[70px] text-xs rounded p-1 absolute bottom-7 left-1/5 transform -translate-x-1/2">
                                    <div className="absolute top-full h-2 w-2 -mt-1 bg-black transform right-4 rotate-45"></div>
                                    <p className="px-1 text-[8px] text-center">Remove</p>
                                    </div>
                                
                   </div>
                         
                    
                </div>

        {showMore && (
            <div className="fixed inset-0 flex flex-col justify-center items-center bg-popUp bg-opacity-50">
                <Details onClose={handleClose} info={appInfo} />
            </div>
        )}


     </div>
     );
    
}
export default AppCard ;