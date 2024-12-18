import { Auth, db, storage } from "../firebaseconfig";
import { collection, addDoc, doc, serverTimestamp ,setDoc} from "firebase/firestore";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import { ref, uploadBytes ,getDownloadURL} from "firebase/storage";
const signUpComp = async ({
  employerName,
  foundationDate,
  email,
  phoneNumber,
  website,
  companySize,
  friendlyAdress,
  wilaya,
  category,
  description,
  logo,
  logoFile,
  fileVal,
  password,
  network,
}) => {
  createUserWithEmailAndPassword(Auth, email, password).then(async (cred) => {
    console.log("User Signed up", cred.user);
  sendEmailVerification(Auth.currentUser)
  let i =0;
  const name= [] ;
  const url = [];
  network.forEach((net) => {
     name[i]=net.name;
     url[i]=net.url;
     i++;
       
  })
  const com = Auth.currentUser
      const imgs = ref(storage, `Imgs/${com.uid}`); //sets the name of the img to the id of the company document
      const verf = ref(storage, `VerFils/${com.uid}`); //same for the verification file
      await uploadBytes(imgs, logoFile).catch((err) => console.log(err.message));
      uploadBytes(verf, fileVal).catch((err) => console.log(err.message));
      let logourl ;
      await getDownloadURL(imgs)
  .then((url) => {
   logourl=url;
   console.log('logo url :'+logourl)
      })
  await setDoc(doc(db,"company",Auth.currentUser.uid),{
      companyId: cred.user.uid,
      createdAt: serverTimestamp(),
      username: employerName,
      foundationDate: foundationDate,
      email: email,
      phoneNumber: phoneNumber,
      website: website,
      companySize: companySize,
      friendlyAdress: friendlyAdress,
      wilaya: wilaya,
      category: category,
      description: description,
      profil:logourl,
      rating:0,
      ratingsum:0,
      ratingnb:0,
      availablePosts:0,
      networknames:name,
      networkurls:url,
      applicants:0
    }).then(() => {
      
      console.log("Saved user data to Data Base");
    });
    await setDoc(doc(db,"roles",Auth.currentUser.uid),{
      role:"company"
    })
    //console.log("LogoUrl",logo);
  });
};
export { signUpComp };