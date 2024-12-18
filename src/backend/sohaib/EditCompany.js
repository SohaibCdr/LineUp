import { ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { db, Auth, storage} from "../firebaseconfig";
import { getDoc, doc, updateDoc } from "firebase/firestore";

const getCompany = async ()=> {
  const inf={
    name:'',
        email:'',
     phone:'',
    wilaya:'',
      friendly:'',
      date:'',
    category:'',
    size:'',
    logo:'',
    description:'',
}   
if (!(Auth.currentUser==null))
    {
    await getDoc(doc(db, "company", Auth.currentUser.uid))
    .then((docSnap)=>{
      inf.name=docSnap.data().username;
      inf.email=docSnap.data().email;
      inf.phone=docSnap.data().phoneNumber;
      inf.friendly=docSnap.data().friendlyAdress;
      inf.date=docSnap.data().foundationDate;
      inf.category=docSnap.data().category; 
      inf.size=docSnap.data().companySize
      inf.logo=docSnap.data().profil
      inf.description=docSnap.data().description
      inf.wilaya=docSnap.data().wilaya
      inf.netnames=docSnap.data().networknames
        inf.neturls=docSnap.data().networkurls
    })
}
return inf;
  
};
const editCom = async (newDoc,pic)=>{
  if(pic==false){
  const com = Auth.currentUser
      const imgs = ref(storage, `Imgs/${com.uid}`); //sets the name of the img to the id of the company document
      await uploadBytes(imgs, newDoc.profil).catch((err) => console.log(err.message)); 
   let logourl ;
      await getDownloadURL(imgs)
  .then((url) => {
   logourl=url;
   console.log('logo url :'+logourl)
      })
      newDoc.profil=logourl
    }
    await updateDoc(doc(db, "company", Auth.currentUser.uid),newDoc)
    .then(()=>{
        console.log("edited succesfully");
    })
    .catch(er=>{alert(er)})
}
export {getCompany,editCom}
