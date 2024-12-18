import { Auth,db,storage } from "../firebaseconfig"; 
import {  deleteUser } from "firebase/auth";
import { deleteDoc,doc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";

const deletcompany = async ()=>{
    const user =Auth.currentUser
await deleteUser(Auth.currentUser).then(() => {
  console.log( "User deleted")
  console.log("user.uid")
 deleteDoc(doc(db,'company',user.uid)).then(()=>{
    console.log('jobseeker doucement deleted')}
).catch((err)=>{ 
 console.log(err)
})
deleteDoc(doc(db,'role',user.uid)).then(()=>{
    console.log('role doucement deleted')}
).catch((err)=>{ 
 console.log(err)
})
// Create a reference to the file to delete
const desertRef = ref(storage,  `Imgs/${user.uid}`);
const verf = ref(storage, `VerFils/${user.uid}`);
// Delete the file
deleteObject(desertRef).then(() => {
  console.log('image deleted')
  // File deleted successfully
}).catch((error) => {
  console.log(error)
  // Uh-oh, an error occurred!
});
deleteObject(verf).then(() => {
  console.log('file deleted')
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
export {deletcompany}