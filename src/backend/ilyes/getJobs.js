import { db } from "../firebaseconfig";
import {getDocs,collection} from "firebase/firestore"
const jobsRef =collection(db,"offer");
//consider using onSnapshot in the future

//getDate turns a serverTimeStamp into a Date String "MMM DD YYYY"
const getDate =({seconds,nanoseconds})=>{
    return new Date(
        seconds * 1000 + nanoseconds / 1000000
      ).toDateString().substring(4)
}
const mapJobs=(snapshot)=>{
    const result=[];
    snapshot.docs.forEach(doc => {
        result.push({
            ...doc.data(),
            id: doc.id,
            postingDate: getDate(doc.data().createdAt)
        });
    });
    return result;
}
const getJobs = async()=>{
    let jobsArr=[];
    await getDocs(jobsRef)
    .then((snapshot)=>{
      jobsArr= mapJobs(snapshot);
    })
    .catch((err)=>{
        console.log(err.message)
    })
    //console.log(jobsArr)
    return jobsArr;
    
}

export {getJobs,getDate,mapJobs};