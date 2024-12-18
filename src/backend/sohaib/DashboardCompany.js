import { Auth,db } from "../firebaseconfig"
import {getDoc,doc} from 'firebase/firestore'
import { getsocialmedia } from "./CompaniesBackend"
import { sendPasswordResetEmail } from "firebase/auth"

const getCompanyInfo = async ()=>{
    const userinfo = {
    username: "",
     profil :"",
    email:"",
    category:"",
    description:"",
    foundedDate:"",
    wilaya: '',
    adresse : "", //friendly adresse of the form 
    companySize: '',
    rating : 0,
    phoneNumber: '',
    socialmedia: {
            instgram : '',
            facebook: '',
            linkedin: '',
            twitter :'',
                 }  }
    if (!(Auth.currentUser == null)){
   const docRef =doc(db,"company",Auth.currentUser.uid)
await getDoc(docRef).then((doc)=>{
    userinfo.username= doc.data().username
      userinfo.email= doc.data().email
      userinfo.profil= doc.data().profil
     userinfo.category= doc.data().category
     userinfo.description= doc.data().description
     userinfo.foundationDate= doc.data().foundationDate
    userinfo. wilaya= doc.data().wilaya
     userinfo.adresse = doc.data(). friendlyAdress
     userinfo.companySize= doc.data().companySize
     userinfo.rating= doc.data().rating
     userinfo.phoneNumber= doc.data().phoneNumber
     userinfo.companyId=doc.data().companyId
     userinfo.networknames=doc.data().networknames
      userinfo.networkurls=doc.data().networkurls
      userinfo.availablePosts=doc.data().availablePosts
      userinfo.applicants=doc.data().applicants

     const company =doc.data()
      //userinfo.socialmedia=getsocialmedia(user)
      let socialmedia = {instgram:"",facebook:"",linkedin:"", twitter:""}
  let i=0;
company.networknames.forEach(net => {
  //console.log("net name :"+net);
    if (net == "Instagram" &&  socialmedia.instgram==""){
      socialmedia.instgram=company.networkurls[i]
      //console.log("social media url :"+company.networkurls[i])
    }else{
       if (net == "Facebook" &&  socialmedia.facebook==""){
        socialmedia.facebook=company.networkurls[i]
        //console.log("social media url :"+company.networkurls[i])
       }else{
        if (net == "LinkedIn" &&  socialmedia.linkedin==""){
        socialmedia.linkedin=company.networkurls[i]
        //console.log("social media url :"+company.networkurls[i])
       }
       else{
        if (net == "Twitter" &&  socialmedia.twitter==""){
        socialmedia.twitter=company.networkurls[i]
        //console.log("social media url :"+company.networkurls[i])
       }
       }
    }}
    i++ 
})
    userinfo.socialmedia=socialmedia;
      
}) .catch(err => {
    console.log(err.message)
  }) 
   }else{
     
    console.log('your not log in ')
  }
  return userinfo
}
const handleForgotPasswordBackend = async (email) => {
    await sendPasswordResetEmail(Auth,email)
    
};
export{getCompanyInfo,handleForgotPasswordBackend}