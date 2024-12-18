import { useState,useEffect } from "react";
import ApplicantsCard from "./ApplicantCard";
import AppCard from "./AppCard";
import Details from "./UserInfoPopUp";
import { deleteApplicant, updateState } from "../backend/ilyes/handleStateChange";
function MyPostApp({initialApplicants,jobName}) {
    let initialApplicant=[...initialApplicants]
    const [applicants, setApplicants] = useState(initialApplicant);
    const [acceptedApplicants, setAcceptedApplicants] = useState([]);
    const [rejectedApplicants, setRejectedApplicants] = useState([]);

    // Use useEffect to update accepted and rejected applicants whenever applicants change
    useEffect(() => {
      
        const approvedApplicants = applicants.filter(applicant => applicant.appState === "Accepted");
        setAcceptedApplicants(approvedApplicants);
        
        const rejectedApplicants = applicants.filter(applicant => applicant.appState === "Rejected");
        setRejectedApplicants(rejectedApplicants);
    }, [applicants]); // Depend on applicants array
    
    const handleApproved = () => {
        // Update the applicants array only
        setApplicants(initialApplicant.filter(applicant => applicant.appState === "Accepted"));
    };

    const handleRejected = () => {
        // Update the applicants array only
        setApplicants(initialApplicant.filter(applicant => applicant.appState === "Rejected"));
    };

    const handleTotal = () => {
        // Update the applicants array only
        setApplicants(initialApplicant);
    };
      
    const handleDelete = (applicantToRemove) => {
        // Update the applicants array only
        console.log(applicantToRemove);
        const updatedApplicants = applicants.filter(applicant => applicant.id !== applicantToRemove.id);
        setApplicants(updatedApplicants);

        initialApplicant.forEach(app => {
            if (app.id === applicantToRemove.id){app.appState="Pending"}
        }); 

        //for testing purposes we set it to Removed wich shows up on screen
        //updateState(applicantToRemove.applicantId,"Pending")
        //later we will use this which deletes the applicants for real
        deleteApplicant(applicantToRemove.applicantId,applicantToRemove.cvId,applicantToRemove.offerId,applicantToRemove.userId)
    };
    const handleApprove = (applicant) => {
        // Update the applicant's state to "Approved"
        const updatedApplicants = applicants.map((app) =>
            app.id === applicant.id ? { ...app, appState: "Accepted" } : app
        );
        initialApplicant.forEach(app => {
            if (app.id === applicant.id){app.appState="Accepted"}
        });
        updateState(applicant.applicantId,"Accepted")
        setApplicants(updatedApplicants);
    };
    const handleReject = (applicant) => {
        // Update the applicant's state to "Rejected"
        const updatedApplicants = applicants.map((app) =>
            app.id === applicant.id ? { ...app, appState: "Rejected" } : app
        );
        initialApplicant.forEach(app => {
            if (app.id === applicant.id){app.appState="Rejected"}
        });
        updateState(applicant.applicantId,"Rejected")
        setApplicants(updatedApplicants);
    };


 // Toggle the applicant's state between "Accepted" and "Rejected"
    const handleReturn = (applicant) => {
          const updatedApplicants = applicants.map((app) => {
            if (app.id === applicant.id) {
                return {
                    ...app,
                    appState: app.appState === "Accepted" ? "Rejected" : "Accepted"
                };
            }
            
            return app;
        });
        initialApplicant.forEach(app => {
            if (app.id === applicant.id)
                {updateState(applicant.applicantId,applicant.appState === "Accepted" ? "Rejected" : "Accepted")
                    app.appState=applicant.appState === "Accepted" ? "Rejected" : "Accepted"
            }
        });
        setApplicants(updatedApplicants);
    };
    //function to download cv 
    const handleDownload =(applicant)=>{
         // Assume CV URL is stored in appInfo.cvUrl, replace it with the actual property name
    const cvUrl = applicant.cv;

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.target = '_blank'; 
    downloadLink.download = 'CV'; 

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Trigger the click event to start the download
    downloadLink.click();

    // Remove the anchor element from the DOM
    setTimeout(() => {
        document.body.removeChild(downloadLink);
    }, 100);
};
        

    
    return (
        <div className="flex flex-col p-4 space-y-6 bg-white h-[370px] overflow-scroll no-scrollbar hover:shadow-sdw">
            {/* Top card */}
            <div className="flex justify-between">
                <div>
                    <p className="font-bold text-[24px]">
                        {jobName}
                    </p>
                </div>
                <div className="font-semibold text-[14px] flex space-x-2">
                    <button onClick={handleTotal} className="text-blue-500 hover:bg-blue-500 hover:text-white px-2 rounded-l-lg">
                        Total(s):{applicants.length}
                    </button>
                    <button onClick={handleApproved} className="text-green-500 hover:bg-green-500 hover:text-white px-2 ">
                        Approved:{acceptedApplicants.length}
                    </button>
                    <button onClick={handleRejected} className="text-red-500 hover:bg-red-500 hover:text-white px-2 rounded-r-lg">
                        Rejected:{rejectedApplicants.length}
                    </button>
                </div>
            </div>
            {/* Bottom: applicants cards */}
            <div className="flex flex-col space-y-2">
                {applicants.map((applicant, index) => (
                    <AppCard
                        key={index}
                        appInfo={applicant}
                        onDelete={()=>handleDelete(applicant)} 
                        onApprove={handleApprove}
                        onReject={handleReject}
                        onReturn={handleReturn}
                        onDownload={handleDownload}
                    

                    />
                ))}
            </div>

          
              
        </div>
    );
}

export default MyPostApp;