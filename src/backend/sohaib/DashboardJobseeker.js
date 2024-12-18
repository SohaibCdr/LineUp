import { Auth,db } from "../firebaseconfig"
import {getDoc,doc} from 'firebase/firestore'
const getJobseekerInfo = async ()=>{
    const userinfo = {
    fullname: "",
    email:"",
    phone:"",
    b_date:"",
    b_place:"",
    adress:"",
    status:"",
    password:"",
    applications :""}
    if (!(Auth.currentUser == null)){
   const docRef =doc(db,"jobseeker",Auth.currentUser.uid)
await getDoc(docRef).then((doc)=>{
    userinfo.fullname= doc.data().username
    userinfo.email=doc.data().email
    userinfo.phone=doc.data().phoneNumber
    userinfo.b_date=doc.data().dateOfBirth
    userinfo.b_place=doc.data().placeOfBirth
    userinfo.adress=doc.data().Adress
    userinfo.status=doc.data().Status
    userinfo.applications = doc.data().applications
    userinfo.imageUrl=doc.data().profil
}) .catch(err => {
    console.log(err.message)
  }) 
   }else{
     
    console.log('your not log in ')
  }
  return userinfo
}
export{getJobseekerInfo}