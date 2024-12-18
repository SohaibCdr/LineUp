import { Await } from "react-router-dom";
import { db ,Auth} from "../firebaseconfig"
import { getJobs,mapJobs } from "./getJobs"
import { getDoc,doc,query,collection,where,getDocs } from "firebase/firestore";
const getApps = async (documentIds)=>{
    const documents = [];
    const q = query(collection(db, "offer"), where('__name__', 'in', documentIds));

    try {
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        if (doc.exists()) {
          documents.push({ id: doc.id, ...doc.data() });
        } else {
          // Handle the case where the document doesn't exist
        }
      });
      
      return documents;
    } catch (error) {
      console.error('Error fetching documents:', error);
      throw error;
    }
  };
const getMyApps=async()=>{
   let apps=[];
  if (!(Auth.currentUser==null)){
   
    await getDoc(doc(db, "jobseeker", Auth.currentUser.uid))
    .then(async (doc)=>{
        await getDocs(query(collection(db,'applicants'),where("userId","==",Auth.currentUser.uid)))
        .then(async(docs)=>{
            let docsIds=[];
            let docsStates=[]
            docs.forEach(d=>{docsIds.push(d.data().offerId);docsStates.push(d.data().appState)})
            const q = query(collection(db, "offer"), where('__name__', 'in', docsIds));
            await getDocs(q)
                .then(async (snapshot)=>{

                    return mapJobs(snapshot);
                })
                .then(temp=>{
                    for (let index = 0; index < temp.length; index++) {
                        apps.push({...temp[index],state:docsStates[index]});
                        
                    }
                })
            
        })
    })
    
  }
  return apps
}

export {getApps,getMyApps}