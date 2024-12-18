import{Auth,db}from '../firebaseconfig'
import { collection, addDoc, serverTimestamp,setDoc,doc, getDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
const  signupUser = async ({
          username,
          dateOfBirth,
          email,
          phoneNumber,
          password,  
})=>{
createUserWithEmailAndPassword(Auth,email,password).then(async (cred)=>{    
 console.log('user signUp',cred.user)
  sendEmailVerification(Auth.currentUser)
 await setDoc(doc(db,"jobseeker",Auth.currentUser.uid),{                       //send data to firestore (data base)
          username:username,
          dateOfBirth:dateOfBirth,
          email:email,
          phoneNumber:phoneNumber,
          userId:cred.user.uid,
          createdAt:serverTimestamp(),
          profil:"",
          Status : "",
          Adress :"",
         placeOfBirth : "",
         applications:0,
         
 })
 await setDoc(doc(db,"roles",Auth.currentUser.uid),{
    role:"jobseeker"
 }) 
})}
  
function sendagain (){                     
//send link to email again (you have to wait few secondes to be able to send again)
    sendEmailVerification(Auth.currentUser).then(()=>{
        alert('email sent ')
    }).catch(()=>{alert('email sent failed try again in few seconds')})
}
export {signupUser,sendagain}