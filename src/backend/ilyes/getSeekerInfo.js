import { db, Auth, storage} from "../firebaseconfig";
import { getDoc, doc, updateDoc } from "firebase/firestore";
import { signout } from "../sohaib/handleloginBackend";
import { ref, uploadBytes ,getDownloadURL} from "firebase/storage";
const logout = ()=>{
    signout(Auth);
    console.log("logged out");
}

const getJobseekerInfo = async () => {

  const re={
    name:'',
        email:'',
     phone:'',
    wilaya:'',
      friendly:'',
      date:'',
    place:'',
    logo:''
}
//console.log("Auth.currentuser.uid is: "+Auth.currentUser.uid); 
if (!(Auth.currentUser==null))
    {
    await getDoc(doc(db, "jobseeker", Auth.currentUser.uid))
    .then((docSnap)=>{
      re.name=docSnap.data().username;
      re.email=docSnap.data().email;
      re.phone=docSnap.data().phoneNumber;
      re.friendly=docSnap.data().Adress;
      re.date=docSnap.data().dateOfBirth;
      re.place=docSnap.data().placeOfBirth;
       re.logo=docSnap.data().profil 
    })
}
return re;
  
};
const updateInfo = async (newDoc,pic)=>{
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
    await updateDoc(doc(db, "jobseeker", Auth.currentUser.uid),newDoc)
    .then(()=>{
        console.log("edited succesfully");
    })
    .catch(er=>{alert(er)})
}
export { getJobseekerInfo,updateInfo,logout };
