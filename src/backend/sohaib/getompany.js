import { db } from '../firebaseconfig'
import { doc,getDoc } from 'firebase/firestore'
const getcompany = async (job)=>{
 const  docRef =doc(db,"company",job.companyID)
 let company
   await getDoc(docRef).then((doc)=>{
    company=doc.data();
   })
   return company
}
export {getcompany}