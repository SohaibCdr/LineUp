import { Auth, db } from '../firebaseconfig'
import {
   collection,
  query, where,
  orderBy, getDocs,doc,updateDoc,
  deleteDoc,
  getDoc

} from 'firebase/firestore'
import { getDate } from '../ilyes/getJobs'
// collection ref
const colRef = collection(db, 'offer')

const GetJobs = async ()=>{
    let Jobs = []
    if(!(Auth.currentUser == null)){
// queries
const q =query(colRef, where("companyID", "==", Auth.currentUser.uid), orderBy('createdAt'))
    
// realtime collection data
 await getDocs(q).then((snapshot) => {
  snapshot.docs.forEach(doc => {
    Jobs.push({ ...doc.data(), id: doc.id ,  postingDate: getDate(doc.data().createdAt) })
  })}).catch(err => {
    console.log(err.message)
  })}
  //console.log(Jobs)
  return Jobs
}
const updatefilled =async(jobID,f)=>{
  const docRef =doc(db,"offer",jobID)
await updateDoc(docRef,{
    filled:!f
})}

const deletjob = async (jobID)=>{
const docRef= doc(db,'offer',jobID) 
let companyid

await getDoc(docRef).then(async (doc2)=>{
  companyid=doc2.data().companyID

await deleteDoc(docRef).then(async ()=>{
    console.log('job deleted succesfuly')
    let Posts
    let appcom
  await getDoc(doc(db,'company',companyid)).then((doc1)=>{
  Posts=doc1.data().availablePosts
  appcom=doc1.data().applicants
})
appcom-=doc2.data().appliances
Posts--
await updateDoc(doc(db,'company',companyid),{
 availablePosts:Posts,
 applicants:appcom
 })
  
}).catch((err)=>{
  console.log(err)
})})
}

export {GetJobs,updatefilled,deletjob}
