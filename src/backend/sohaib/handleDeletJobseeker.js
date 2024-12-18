import { Auth,db, storage } from "../firebaseconfig"; 
import {  deleteUser } from "firebase/auth";
import { collection, deleteDoc,doc, getDocs, query, where } from "firebase/firestore";
import { deleteApplicant } from "../ilyes/handleStateChange";
import { deleteObject, ref } from "firebase/storage";

const deletjobseeker = async ()=>{
    const user =Auth.currentUser
await deleteUser(Auth.currentUser).then(async () => {
  console.log( "User deleted")
  console.log("user.uid")
 deleteDoc(doc(db,'jobseeker',user.uid)).then(()=>{
    console.log('jobseeker doucement deleted')}
).catch((err)=>{ 
 console.log(err)
})
deleteDoc(doc(db,'roles',user.uid)).then(()=>{
    console.log('role doucement deleted')}
).catch((err)=>{ 
 console.log(err)
})
const colRef = collection(db, "applicants");
  const q = query(colRef, where("userId", "==", user.uid));
   await getDocs(q).then(async (snapshot) => {
 snapshot.forEach(async (applicant) => {
  deleteApplicant(applicant.id,applicant.data().cvId)
 })
   }).catch((error) => {
    console.log(error);
  // An error ocurred
  // ...
})
const desertRef = ref(storage,  `Imgs/${user.uid}`);
deleteObject(desertRef).then(() => {
  console.log('image deleted')
  // File deleted successfully
}).catch((error) => {
  console.log(error)
  // Uh-oh, an error occurred!
});
}).catch((error) => {
    console.log(error);
  // An error ocurred
  // ...
})}
export {deletjobseeker}