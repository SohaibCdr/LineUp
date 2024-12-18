import React, { useState ,useEffect} from'react';
import Arrow from '../assets/arrowOpen.svg';
import searchIcon from '../assets/searchIcon.svg';
import location from '../assets/localisationIcon.svg';
import arrow from "../assets/arrowForward.svg";


const SearchBar=({ setter = () => {}, searcher = () => {}, sas={category:'',location:''}})=>{
 
  const [val, setVal] = useState('');
const [search, setSearch] = useState({
  value: '',
  wilaya: '',
});
const  [isOpen,setIsOpen]=useState(false);

  //function to open location menu(styling)
  const toggleMenu = () => {
    setIsOpen(!isOpen);

  };

  const changeVal = (val, index) => {
    if (index === 0) {
      // Toggle value selection
      if (search.value === val) {
        // If the value is already selected, deselect it
        setVal('');
         setSearch(prevFilters => ({ ...prevFilters, value: '' }));
        // Pass deselected valueto parent component
        setter({ ...search, value: '' });
      } else if (suggestions.includes(val)) {
        // Update value
        setVal(val);
        setSearch(prevFilters => ({ ...prevFilters, value: val }));
        // Pass updated value to parent component
        setter({ ...search, value: val });
      }
    } else if (index === 1) {
      // Toggle wilaya selection
      const newWilaya = search.wilaya === val ? '' : val;
      setSearch(prevFilters => ({ ...prevFilters, wilaya: newWilaya }));
      // Pass updated wilaya to parent component
      setter({ ...search, wilaya: newWilaya });
    } 
  };
   useEffect(() => {
    console.log(search);
  
  }, [search]);
  
useEffect(() => {
  if (val === '') {
    setSearch((prevSearch) => ({
      ...prevSearch,
      value: '',
    }));
    setter({ ...search, value: '' });
  }
}, [val]);

if (window.location.pathname === "/Jobs") {
useEffect(() => {
  // Update the search data in the child component when it changes in the parent
  setSearch(prevSearch=>({...prevSearch,value:sas.category,wilaya:sas.location}));
  setVal(sas.category);
}, [sas]);



  
 
   //testing
  /*console.log(search);
  console.log(val);*/
  
} 
  const handleClick = () => {
    if (window.location.pathname === "/Jobs") {
      searcher();
    } else {
    const queryParams = new URLSearchParams();
    if (search.value) queryParams.append('category', search.value);
    if (search.wilaya) queryParams.append('location', search.wilaya);
    const queryString = queryParams.toString();
    window.location.href = `/Jobs${queryString ? `?${queryString}` : ''}`;
    searcher();
  
  }}
    const categories =["Health & Care" ,"education & Training","Human ressources","Creative Design","Developpement & Tech",
    "Marketing","Finance & Acounting","Automatisation & Engineering" ,"Management & Administration","Commercial"];
    
    //suggestions based on written input

      const suggestions = categories.filter(suggestion =>
          suggestion.toLowerCase().startsWith(val.toLowerCase())
      );
  
    // Array of 58 wilayas in Algeria
   
  const wilayas = [
    "01. Adrar", "02. Chlef", "03. Laghouat", "04. Oum El Bouaghi", "05. Batna",
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
    return(
        <div className='flex flex-wrap  gap-[5px]  items-start  relative'>
       
      <div className="w-[30vw]   bg-white text-sm rounded-t-[18px] rounded-b-[18px] shadow-md ">
      <div className="flex items-center relative ">
      <img src={searchIcon} alt="search" className="absolute left-2 h-5 w-5" />
     <input type="text"  onChange={(e)=>setVal(e.target.value)} value={val} placeholder="Job title or keyword" className='bg-white z-2 shadow-md w-[30vw] py-2.5 px-8 rounded-full font-semibold placeholder-primary'/>
</div>
{val !== search.value  && (
  <ul className={`bg-white overflow-y-auto no-scrollbar rounded-[8px] max-h-[150px] m-2 p-2 font-semibold text-sm `}>
    {suggestions.length > 0 ? (
      suggestions.map((suggestion, index) => (
        val !== suggestion && (
        <li
          key={index}
          onClick={()=>changeVal(suggestion, 0)}
          className={`px-2 pb-2 cursor-pointer hover:text-secondary `}
        >
          {suggestion}
        </li>
      )))
    ) : (
      <li className=''>Your search is not available</li>
    )}
  </ul>
)}
    </div>
    <div className="w-[16vw]   bg-white text-sm rounded-t-[18px] rounded-b-[18px] shadow-md ">
          <div className={`flex flex-row items-center justify-between bg-white z-2 shadow-md w-[16vw] py-2 px-1 rounded-full ${isOpen && 'border  border-2 border-primary'}`}>
      <div className='flex flex-row items-center justify-between gap-[5px]'><img src={location} className='w-6 h-6'/>
      <p className='font-semibold '>{search.wilaya===''?"location":search.wilaya}</p></div>
      <button
         onClick={()=>toggleMenu()}
      >
       <img src={Arrow} alt="arrow" className={`w-5 h-5 transition-transform transform  ${isOpen? 'rotate-180' : 'rotate-0'}`}/>
      </button>
      </div>
      {isOpen  &&(
        <ul className={`  bg-white overflow-y-auto no-scrollbar  rounded-[8px] h-[150px]  m-2 p-2 font-semibold text-sm`}>
            {/* <li
                onClick={() => handleFilterSelect('remote',3)}
      className={`px-4 py-2 cursor-pointer   ${selectedFilter[3]==='remote'?'text-secondary':''}`}>remote</li>*/}
            {wilayas.map((wilayaa, index) => (
              <li
                key={index}
                onClick={()=>{changeVal(wilayaa,1);toggleMenu()}}
            className={`px-2 pb-2 cursor-pointer ${search.wilaya==wilayaa?'text-secondary':''}`}
              >
                {wilayaa}
              </li>
            ))}
          </ul>
        
      )}
    </div>
    <img src={arrow} onClick={handleClick} className='w-10 h-10 p-3  rounded-full  bg-secondary'/>
 
      </div>
    )};
    export default SearchBar;