import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { Auth, db, storage } from "../firebaseconfig";
import { v4 } from "uuid";
import {
  doc,
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
  getDoc,
  updateDoc,
} from "firebase/firestore";

const applyForJob = async (jobid, cv,companyid) => {
   let app1=0
   await getDoc(doc(db,"offer",jobid)).then((doc1)=>{
app1=doc1.data().appliances
app1++
 updateDoc(doc(db, "offer", jobid),{
    appliances:app1,
    })})
  //uploading the cv
  let cvId=v4();
  const refrence = ref(storage, `CVs/${cvId}`);
  let CVurl;
  await uploadBytes(refrence, cv).then(async () => {
    console.log("uploaded CV succesfully");
    CVurl = await getDownloadURL(refrence);
  });
  //creating the application document
  let userData;
  await getDoc(doc(db, "jobseeker", Auth.currentUser.uid))
  .then((snap) => {
    userData = snap.data();
    addDoc(collection(db, "applicants"), {
      appName: userData.username,
      appState: "Pending",
      createdAt: serverTimestamp(),
      cv: CVurl,
      offerId: jobid,
      userId: Auth.currentUser.uid,
      cvId:cvId,
    });
    let app=userData.applications
    app++
    updateDoc(doc(db, "jobseeker", Auth.currentUser.uid),{
      applications:app,
    })
  })
  await getDoc(doc(db, "company", companyid)).then((doc1)=>{
   let app=doc1.data().applicants
   app++

updateDoc(doc(db, "company", companyid),{
     applicants:app,
    })
  })
  
};
const applyState = async (jobid) => {
  let applied = false;
  let q = query(
    collection(db, "applicants"),
    where("userId", "==", Auth.currentUser.uid),
    where("offerId", "==", jobid)
  );
  await getDocs(q).then((snapshot) => {
    applied = !snapshot.empty;
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  });
  return applied;
};
export { applyForJob, applyState };
