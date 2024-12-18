import { useEffect, useState } from "react";
import Company from "./Company";
import { getCompanies } from "../backend/sohaib/CompaniesBackend";
import ReadMore from "./ReadMore";
import exit from "../assets/Exit.svg";
import horizontalArrow from "../assets/arrow5.svg";


function Companies() {
    const [data, setdata] = useState([]);
    
         const fetchData = async () => {
            try {
                const companiesData = await getCompanies();
             setdata(companiesData);
            
            } catch (error) {
                console.error("Error fetching companies:", error);
            }
        };
    const res= getCompanies();
    useEffect(()=>{
        fetchData();
        
},[])
  
    const [companies, setCompanies] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    
  
    const handleReadMoreClick = (company) => {
        setSelectedCompany(company);
        setIsPopupOpen(true);
    };

    const handleExit = () => {
        setIsPopupOpen(false);
    };

    const companiesPerPage = 16;
    // const totalPages = Math.ceil(data.length / companiesPerPage);
    // const indexOfLastCompany = currentPage * companiesPerPage;
    // const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    // const currentCompanies = data.slice(indexOfFirstCompany, indexOfLastCompany);

    
    const indexOfLastCompany = currentPage * companiesPerPage;
    const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
    const currentCompanies = data.slice(indexOfFirstCompany, indexOfLastCompany);

    const totalPages = Math.ceil(data.length / companiesPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };
    // const handleNextPage = () => {
    //     setCurrentPage((prevPage) => prevPage + 1);
    // };

    // const handlePreviousPage = () => {
    //     setCurrentPage((prevPage) => prevPage - 1);
    // };
    const shwodata= currentCompanies.map((company,n)=>{
        return(<div key={n} className="w-1/4">
                  <Company company={company} onReadMoreClick={() => handleReadMoreClick(company)}/>
                </div>

        )
    })
    return (
        <div>
            <div className="w-[900px] mx-auto flex justify-center flex-col">
                <div className="flex flex-wrap justify-start">
                    
              
              {shwodata}
                </div>
            </div>

            {/* Render the popup conditionally */}
        {isPopupOpen && selectedCompany && (
                <div className="fixed inset-0  z-50 flex flex-col justify-center items-center bg-popUp bg-opacity-50">
                    <button className="h-10 w-10 absolute top-[10vh] bg-white rounded-full z-30 p-2 right-[18vw]" onClick={handleExit}>
                        <img src={exit} alt="exit" className="w-6 h-6" />
                    </button>
                    <ReadMore company={selectedCompany} />
                </div>
            )}

            <div className="absolue left-1/2 bottom-0 py-4 flex justify-end items-end">
                <div className="flex justify-center mt-4 w-1/5">
                    <button disabled={currentPage === 1} onClick={handlePreviousPage} className="bg-primary rounded-xl text-costumGreen  font-semibold  px-auto w-1/2  text-[10px] py-1 text-center mr-1">Previous</button>
                    <button disabled={currentPage === totalPages} onClick={handleNextPage} className="bg-primary rounded-xl text-costumGreen  font-semibold  px-auto w-1/2 text-[10px] py-1 text-center ml-1 ">Next</button>
                </div>
                <div className="w-2/5">
                    <img src={horizontalArrow} alt="" className="w-full" />
                </div>
            </div>
          
        </div>
    );
}

export default Companies;
