import{Auth,db}from '../firebaseconfig'
import {
 collection, getDocs,
  addDoc, doc ,setDoc,updateDoc,getDoc,
  query,
  where,
  orderBy
} from 'firebase/firestore'
import{signOut} from 'firebase/auth'
import { getDate } from '../ilyes/getJobs'
// collection ref
const colRef = collection(db, 'company')
const ColRefOff=collection(db, 'offer')
const getCompanies =async ()=>{
 let Companies = []
// get collection data
await getDocs(colRef)
  .then(snapshot => {
    // console.log(snapshot.docs)
   
    snapshot.docs.forEach(doc => {
      Companies.push({ ...doc.data(), id: doc.id })
    })
  })
  .catch(err => {
    console.log(err.message)
  })
  return Companies;
}
const addreview = async ({
       name,
        date,
        rating,
        comment,
        logo,
},companyId)=>{
const docRef =doc(db,"company",companyId)
const reviewCol=collection(docRef,"reviews")
let c=0;
let s=0;
let r=0;
 addDoc(reviewCol,{
        name : name,
        date :date,
        rating : rating,
        comment : comment,
        userid:Auth.currentUser.uid,
        logo :logo,
})
  await getDoc(docRef).then((doc)=>{
   r = doc.data().rating 
   s= doc.data().ratingsum
   c = doc.data().ratingnb
})
  s += rating
  c++
  r=s/c;
 await updateDoc(docRef,{
  ratingsum : s,
  ratingnb :c,
  rating:r,
 })
}
const companyreviews =async (company)=>{
  let reviews = []
const docRef =doc(db,"company",company.companyId)
const reviewCol=collection(docRef,"reviews")
await getDocs(reviewCol)
  .then(snapshot => {
    // console.log(snapshot.docs)
   
    snapshot.docs.forEach(doc => {
      reviews.push({ ...doc.data(), id: doc.id })
    })
  })
  .catch(err => {
    console.log(err.message)
  }) 
return reviews;
}
const reviewinfo = async ()=>{
  let info  = new Object()
  if (Auth.currentUser == null){
    info.email=""
    info.profil=""
    info.name=""
  }else{
  const  docsnap = await getDoc(doc(db,"roles",Auth.currentUser.uid))
 const userType =  docsnap.data().role;
 //console.log("usertype :" +userType)
 let docRef;
 if(userType=="jobseeker"){
  docRef =doc(db,"jobseeker",Auth.currentUser.uid)}else{
  docRef =doc(db,"company",Auth.currentUser.uid)
 }
 await getDoc(docRef).then((doc)=>{
  info.email =doc.data().email
  info.profil = doc.data().profil
  info.name=doc.data().username
 })}
 return info 
}
const getsocialmedia = async (company)=>{
  let socialmedia = {instgram:"",facebook:"",linkedin:""}
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
       }
    }
    i++
})
//console.log(socialmedia)
return socialmedia
}
const posts = async (companyId)=>{
    let Jobs = []
    
// queries
const q =query(ColRefOff, where("companyID", "==",companyId), orderBy('createdAt'))
    
// realtime collection data
 await getDocs(q).then((snapshot) => {
  snapshot.docs.forEach(doc => {
    Jobs.push({ ...doc.data(), id: doc.id ,  postingDate: getDate(doc.data().createdAt) })
  })}).then(()=>{
    console.log('jobs fetched succesfuly')
  })
  .catch(err => {
    console.log(err.message)
  })
  console.log('jobs :'+Jobs[0])
  return Jobs
}
export{getCompanies,addreview,companyreviews,reviewinfo,getsocialmedia,posts}