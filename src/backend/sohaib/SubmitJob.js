import { addDoc, collection, getDoc, serverTimestamp,doc, updateDoc } from 'firebase/firestore'
import{Auth,db,storage}from '../firebaseconfig'
import { ref,getDownloadURL} from "firebase/storage";
const ColREfOffer= collection(db,'offer')
const submitjob = async ({
JobName,
    Category,
   Jobtype,
Level,
Wilaya,
  friendly, 
    gendre,
     respons, 
    Salary,   
         descreption,
        skills, 
        posts,
        preferences
})=>{
 if(!(Auth.currentUser==null)){
    const imgs = ref(storage, `Imgs/${Auth.currentUser.uid}`);
    let logourl="";
   await getDownloadURL(imgs)
  .then((url) => {
   logourl=url;
   console.log('logo url :'+logourl)
      })
      let companyname;
      let p;
      const docRef =doc(db,"company",Auth.currentUser.uid)
      await getDoc(docRef).then((doc)=>{
     companyname=doc.data().username
   p=doc.data().availablePosts
      })
      let sal = Number(Salary)
    await addDoc(ColREfOffer,{
     name:JobName,
     category: Category,
  jobType:Jobtype,
jobLevel:Level,
location:Wilaya,
  adress:friendly, 
   gender:gendre,
     keyResponsibilities:respons, 
    salary:sal,   
        jobDescription:descreption,
       qualification:skills, 
        availablePosts:posts,
        appliances :0,
        companyID:Auth.currentUser.uid,
        createdAt:serverTimestamp(),
        filled:false,
         logo:logourl,
         remote:preferences.remote,
         company:companyname
 }).then(async()=>{
    p++
    console.log('form submited succesfuly')
 await updateDoc(docRef,{
 availablePosts:p,
 })
 })
 }else{
  console.log('your not loged in ')
 }
}
export{submitjob}