import { useEffect } from 'react';
import React, { useState } from 'react';
import Arrow from '../assets/arrowOpen.svg';
import Cicon from '../assets/categoryIcon.svg';
import SearchBar from './searchBar.jsx';
import arrow from"../assets/arrow5.svg";
import funnel from "../assets/Funnel.svg";
import locationOn from "../assets/MapPin.svg";
import lines from "../assets/background2.svg";
import Briefcase from "../assets/Briefcase.svg";
import ChartBar from "../assets/ChartBar.svg";
import Sliders from "../assets/Sliders.svg";
import JobCard from './jobCard.jsx';
import PopUp from './jobPopUp.jsx';
import exit from '../assets/Exit.svg';
import { getJobs } from '../backend/ilyes/getJobs.js';
import { filterJobsBy } from '../backend/ilyes/filterJobs.js';
import { filterJobsClient } from '../backend/ilyes/filterjobsClient-side.js';
import { useLocation} from 'react-router-dom';
import arrow1 from"../assets/arrow 4.svg";
const Filters = () => {
  const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const initialCategory = queryParams.get('category');
    const initialLocation=queryParams.get('location');
    useEffect(/*async*/() => {
      
      setFilters(prevFilters => ({
          ...prevFilters,
          category: initialCategory || '', // Update category in filters state
          location:initialLocation||''
      }));
    /*  const filterResult=await filterJobsClient({
        category: initialCategory,
        jobType: '',
        jobLevel: '',
        remote:false,
        location: initialLocation,
        sortBy: ''
      });
        setJobsList(filterResult);
  */
    }, [initialCategory,initialLocation]);
  
  //object of selected filters  to send to the backend 
  const [filters,setFilters]=useState({
    category:'',
    jobType:'',
    jobLevel:'',
    remote:false,
    location:'',
    sortBy:''
  })
  
  //set the filters selected from the search bar component (category,wilaya) 
 const  getter=(search)=>{
 setFilters(prevFilters => ({
  ...prevFilters,
  location: search.wilaya,
  category: search.value
}));

 }
 
//test object ,it supposed to be initialised to empty array and filled by backend data
 const [jobsList,setJobsList]=useState([])

 const fetchJobs = async () => {
  try {
      const jobsData = await getJobs();
   setJobsList(jobsData);
  
  } catch (error) {
      console.log("Error fetching jobs:", error);
  }
};
    useEffect(()=>{
        fetchJobs();
        
    },[])
    
//function to send data to backend 
async function fetchFilters () {
  try {
  const filterResult= await filterJobsBy(filters);
  setJobsList(filterResult);

  }
  catch (error) {
    console.log("Error fetching jobs:", error);
} 

}
async function fetchFiltersClient(){
  try {
    const filterResult= await filterJobsClient(filters);
    setJobsList(filterResult);
  
    }
    catch (error) {
      console.log("Error fetching jobs:", error);
  }
}
const findJob = ()=>{
  fetchFiltersClient();
 //fetchFilters();
}

 // function for styling 
 const [isOpen, setIsOpen] = useState([false, false, false, false,false]);
  const toggleMenu = (index) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);

  };

  //function to handle filter selection
  const handleFilterSelect = (filter, index) => {
    setFilters(prevFilters => {
      if (index === 'remote') {
       
        return {
          ...prevFilters,
          remote: !prevFilters.remote,
        };
      }  else {
       
        const newFilters = {
          ...prevFilters,
          [index]: prevFilters[index] === filter ? '' : filter,
      };

      // Update query parameters based on selected category
      if (prevFilters.category) {
          
          window.history.replaceState(null, '', `${window.location.pathname}`);
      }
      if (prevFilters.location) {
          
        window.history.replaceState(null, '', `${window.location.pathname}`);
    }

      return newFilters;
  
      }
    });
    

  };

  
 useEffect(() => {
    console.log(filters);
  
  }, [filters]);
  useEffect(() => {
    console.log(jobsList);
  
  }, [jobsList]);
  
  


  const clearData=async ()=>{
    setFilters({
      category: '',
      jobType: '',
      jobLevel: '',
      remote:false,
      location: '',
      sortBy: ''
    });
    const filterResult=await filterJobsClient({
      category: '',
      jobType: '',
      jobLevel: '',
      remote:false,
      location: '',
      sortBy: ''
    });
      setJobsList(filterResult);
  
  queryParams.set('category',"");
  queryParams.set('location',"");
  // Update the URL without the 'category' parameter
 
  window.history.replaceState(null, '', `${window.location.pathname}`);
}

//test if there's anything selected
const allNullOrFalse = Object.values(filters).every(value => value === '' || value === false ||(Array.isArray(value) && value.length === 0));
 //static arrays for filters
const categories =["Health & Care" ,"education & Training","Human ressources","Creative Design","Developpement & Tech",
  "Marketing","Finance & Acounting","Automatisation & Engineering" ,"Management & Administration","Commercial"];
  const jobs=["internership","full time","part time","temporary"];
  const levels=["entry level","mid-level","sunior level","managerial/supervisor"];
  const wilayas = [ "01. Adrar", "02. Chlef", "03. Laghouat", "04. Oum El Bouaghi", "05. Batna",
    "06. Béjaïa", "07. Biskra", "08. Béchar", "09. Blida", "10. Bouira",
    "11. Tamanrasset", "12. Tébessa", "13. Tlemcen", "14. Tiaret", "15. Tizi Ouzou",
    "16. Algiers", "17. Djelfa", "18. Jijel", "19. Sétif", "20. Saïda",
    "21. Skikda", "22. Sidi Bel Abbès", "23. Annaba", "24. Guelma", "25. Constantine",
    "26. Médéa", "27. Mostaganem", "28. M'Sila", "29. Mascara", "30. Ouargla",
    "31. Oran", "32. El Bayadh", "33. Illizi", "34. Bordj Bou Arréridj", "35. Boumerdès",
    "36. El Tarf", "37. Tindouf", "38. Tissemsilt", "39. El Oued", "40. Khenchela",
    "41. Souk Ahras", "42. Tipaza", "43. Mila", "44. Aïn Defla", "45. Naâma",
    "46. Aïn Témouchent", "47. Ghardaïa", "48. Relizane", "49. Timimoun", "50. Bordj Badji Mokhtar",
    "51. Ouled Djellal", "52. Beni Abbes", "53. In Salah", "54. In Guezzam", "55. Touggourt",
    "56. Djanet", "57. El M'Ghair", "58. El Meniaa"
  ];
  const sorts=["date","appliances","salary"];
  //pagination manipulation
  const [currentPage, setCurrentPage] = useState(1);
const a=9; //items per page 
  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * a;
  const endIndex = startIndex +a;

  // Get the items for the current page
  const currentItems = jobsList.slice(startIndex, endIndex);

  // Function to handle "Next" button click
  const nextPage = () => {
    const totalPages = Math.ceil(jobsList.length / a);
    setCurrentPage(prevPage => (prevPage === totalPages ? prevPage : prevPage + 1));
  };

  // Function to handle "Previous" button click
  const prevPage = () => {
    setCurrentPage(prevPage => (prevPage === 1 ? prevPage : prevPage - 1));
  };
 
//popUp for job's post
    const [popUp,setPopUp]=useState(false);
    const[openJob,setOpenJob]=useState(null);

 const open=(job)=>{
  setPopUp(!popUp);
  setOpenJob(job);}

  return (
    <div className=''>   <img src={lines}  className=' absolute  top-[8vh]  '/>
    <img src={arrow1} className='absolute child left-4 bottom-0 h-[60%] z-20' />
<div className='flex flex-col bg-background   gap-[10px] mt-[10vh]'> 

  <div className='flex flex-row items-start justify-start z-10 mx-12'>
    <div className='  font-init mx-2 font-bold text-primary text-sm w-[22vw] max-h-[80vh] flex flex-col items-center    bg-white shadow-md rounded-20'>
      <div className='mb-4 mt-2  text-left w-[18vw] flex flex-row items-center gap-[10px]'><img src={Sliders} className='w-6 h-6'/><p>Filter by</p></div>
<div className='px-2 m-0  w-[20vw] max-h-[70vh] overflow-y-auto scrollBar border border-primary rounded-[8px] '>
    <div className="my-2 py-2 border-b border-primary" >
          <div className='flex flex-row items-center justify-between '>
      <div className='flex flex-row items-center justify-between gap-[10px]'><img src={Cicon} className='w-6 h-6'/>
      <p className='font-bold'>category</p></div>
      <button
        onClick={()=>toggleMenu(0)}
      >
       <img src={Arrow} alt="arrow" className={`w-5 h-5 transition-transform transform  ${isOpen[0] ? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      </div>
      {isOpen[0] && (
        <div className="h-[180px]  bg-white overflow-y-auto no-scrollbar my-2 border border-secondary rounded-[8px] h-[150px] font-semibold text-sm ">
          <ul className="">
            {categories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleFilterSelect(category,'category')}
                className={`px-4 py-2 cursor-pointer  ${filters.category===category?'text-secondary':''}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <div className=" border-b border-primary my-2 py-2  ">
          <div className='flex flex-row items-center justify-between '>
      <div className='flex flex-row items-center justify-between gap-[10px]'><img src={Briefcase} className='w-6 h-6'/>
      <p className='font-bold '>Job type</p></div>
      <button
        onClick={()=>toggleMenu(1)}
      >
       <img src={Arrow} alt="arrow" className={`w-5 h-5 transition-transform transform  ${isOpen[1] ? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      </div>
      {isOpen[1] && (
        <div className="h-[180px]  bg-white overflow-y-auto no-scrollbar my-2 border border-secondary rounded-[8px] h-[150px] font-semibold text-sm">
          <ul className="">
            {jobs.map((job, index) => (
              <li
                key={index}
                onClick={() => handleFilterSelect(job,'jobType')}
                className={`px-4 py-2 cursor-pointer  ${filters.jobType===job?'text-secondary':''}`}
              >
                {job}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <div className=" border-b border-primary my-2 py-2 ">
          <div className='flex flex-row items-center justify-between '>
      <div className='flex flex-row items-center justify-between gap-[10px]'><img src={ChartBar} className='w-6 h-6'/>
      <p className='font-bold'>Job level</p></div>
      <button
        onClick={()=>toggleMenu(2)}
      >
       <img src={Arrow} alt="arrow" className={`w-5 h-5 transition-transform transform  ${isOpen[2] ? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      </div>
      {isOpen[2] && (
        <div className="h-[180px]  bg-white overflow-y-auto no-scrollbar my-2 border border-secondary rounded-[8px] h-[150px] font-semibold text-sm ">
          <ul className="">
            {levels.map((level, index) => (
              <li
                key={index}
                onClick={() => handleFilterSelect(level,'jobLevel')}
                className={`px-4 py-2 cursor-pointer  ${filters.jobLevel===level?'text-secondary':''}`}
              >
                {level}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    <div className={` ${isOpen[0]||isOpen[1]||isOpen[2]||isOpen[3]?'border-b border-primary':''}  my-2 py-2 `}>
          <div className='flex flex-row items-center justify-between '>
      <div className='flex flex-row items-center justify-between gap-[10px]'><img src={locationOn} className='w-6 h-6 '/>
      <p className='font-bold'>Location</p></div>
      <button
        onClick={()=>toggleMenu(3)}
      >
       <img src={Arrow} alt="arrow" className={`w-5 h-5 transition-transform transform  ${isOpen[3] ? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      </div>
      {isOpen[3] && (
        <div className={`h-[180px]  bg-white overflow-y-auto no-scrollbar my-2 rounded-[8px] h-[150px] border border-secondary font-semibold text-sm`}>
          <ul className="flex flex-col justify-start">
          <label className=" flex gap-[5px] px-4 py-2 cursor-pointer">
      <input
        type="checkbox"
        checked={filters.remote === true}
        onChange={() => handleFilterSelect(true, 'remote')}
        className=''
      />
     <span className=''>remote</span>
    </label>
             {wilayas.map((wilaya, index) => (
    <li key={index}   onClick={() => handleFilterSelect(wilaya,'location')} className={`px-4 py-2 cursor-pointer   ${filters.location===wilaya?'text-secondary':''}`}>
      {wilaya}
    </li>
      ))}
      </ul>
        </div>
      )}
    </div>
   
    
    </div>
    <div><button onClick={findJob} className='w-[20vw] h-[30px] text-white bg-primary rounded-[8px] mt-8 my-12'>Find job</button></div>

    </div>
    <div className='flex flex-col gap-[10px]'>
    <div className='flex flex-row gap-[10px]  absolute z-10 '>
    <SearchBar setter={getter} searcher={findJob}  sas={filters}  />
    <div className={` w-[10vw] self-start  bg-white text-sm rounded-t-[18px] rounded-b-[18px] shadow-md  ${!isOpen[4] && 'h-0'}`}>
          <div className={`flex flex-row items-center justify-between bg-white z-2 shadow-md w-[10vw] py-2 px-1 rounded-full ${isOpen[4] && 'border  border-2 border-primary'}`}>
      <div className='flex flex-row items-center justify-between gap-[5px]'><img src={funnel} className='w-6 h-6'/>
      <p className='font-semibold'>sort by</p></div>
      <button
       onClick={()=>toggleMenu(4)}
      >
       <img src={Arrow} alt="arrow" className={`w-5 h-5 transition-transform transform  ${isOpen[4]? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      </div>
      {isOpen[4] && (
        <ul className={`  bg-white overflow-y-auto no-scrollbar  rounded-[8px] h-[90px]   p-2 font-semibold text-sm`}>
           
            {sorts.map((sort, index) => (
              <li
                key={index}
                onClick={()=>{handleFilterSelect(sort, 'sortBy');toggleMenu(4)}}
            className={`px-2 pb-2 cursor-pointer ${filters.sortBy==sort?'text-secondary':''}`}
              >
                {sort}
              </li>
            ))}
          </ul>
        
      )}
      </div>
      </div>
      {!allNullOrFalse && (
  <div className='flex flex-row justify-between w-[60vw] mt-14 '>
    <div className='flex flex-row items-center gap-[10px] text-sm font-bold '>
      <p className='text-gray'>You selected:</p>
      <ul className='flex flex-wrap text-xs font-semibold'>
        {Object.entries(filters).map(([key, value], index) => {
          if (Array.isArray(value)) {
            return value.map((item, itemIndex) => (
              <li key={itemIndex} className='bg-green-200 rounded-md p-1 m-1 text-blue-600'>
                {item}
              </li>
            ));
          } else if (value !== '' && value !== false) {
            return (
              <li key={index} className='bg-green-200 rounded-md p-1 m-1 text-blue-600'>
                {value === true ? 'remote' : value}
              </li>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </div>
    <p onClick={clearData} className='text-red-600 cursor-pointer text-sm'>clear all x</p>
  </div>
)}

      
        
    
      
<div className={`grid grid-cols-3 mx-4 w-[60vw] justify-center ${allNullOrFalse && 'mt-12'}`}>
  {currentItems.map((job, index) => (<div key={index} >
   
   <JobCard data={job} openPopUp={()=>open(job)}/>
    {popUp && openJob &&(
      <div key={`popup-${index}`} className=''>  <div className='fixed inset-0 z-10 flex flex-col justify-center items-center bg-popUp bg-opacity-40'>
      <img onClick={()=>open(job)} src={exit} className='h-10 w-10 absolute top-[10vh] bg-white rounded-full z-30 p-2 right-[18vw]'/><PopUp job={openJob}/></div> </div>)}

    </div>
  ))}
</div>

    </div>
      </div>
      <div className='flex flex-row justify-end my-6 gap-[10px]'>
        <button onClick={prevPage}  disabled={currentPage === 1} className='px-6 py-1 font-bold'>
          Previous
        </button>
        <button onClick={nextPage}  disabled={endIndex >= jobsList.length} className='font-bold py-[3px] px-6 bg-secondary  hover:bg-primary hover:text-white rounded-full'>
          Next
        </button>
        <img src={arrow} className='w-[40vw]' />
      </div>
      
    </div>
    </div>
  );
};

export default Filters;
