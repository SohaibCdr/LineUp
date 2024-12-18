import { collection, query, where,getDocs,orderBy } from "firebase/firestore";
import { db } from "../firebaseconfig";
import { getDate,mapJobs } from "./getJobs";

//const jobsRef=collection(db,"offer");
 const filterJobsBy = async ({
    category,
    jobType,
    jobLevel,
    remote,
    location,
    sortBy,
  })=>{
    let q = query(collection(db,'offer'));
    let filters = [];
    let jobsArr=[];
    if (category !== '') {
        filters.push(where('category', '==', category));
      }
      if (jobType !== '') {
        filters.push(where('jobType', '==', jobType));
      }
      if (jobLevel !== '') {
        filters.push(where('jobLevel', '==', jobLevel));
      }
      if (remote !== '') {
        filters.push(where('remote', '==', remote === 'true'));
      }
      if (location !== '') {
        filters.push(where('location', '==', location));
      }
    
      // Apply sorting
      if (sortBy !== '') {
        if (sortBy == 'date'){filters.push(orderBy("createdAt","desc"));}
        else{
            filters.push(orderBy(sortBy,"desc"));}
      }
    
      // Apply filters if at least one filter is selected
      if (filters.length > 0) {
        q = query(q, ...filters);
      }
      // Execute the query
      return getDocs(q).then(snapshot => {
        // Process the query results here
        return jobsArr=mapJobs(snapshot);
      });
    }
    
 




 export {filterJobsBy}