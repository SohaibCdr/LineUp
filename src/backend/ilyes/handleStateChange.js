import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { db ,storage} from "../firebaseconfig"
import { deleteObject, ref } from "firebase/storage"

const updateState = (id,val)=>{
   const docRef= doc(db,"applicants",id)
   updateDoc(docRef,{appState:val})
}






const deleteApplicant=async (id,cvid,offerId,uid)=>{

let app2=0
   await getDoc(doc(db,"offer",offerId)).then((doc1)=>{
app2=doc1.data().appliances
app2--
 updateDoc(doc(db, "offer", offerId),{
    appliances:app2,
    })})
    let app1=0
   await getDoc(doc(db,"jobseeker",uid)).then((doc1)=>{
app1=doc1.data().applications
app1--
 updateDoc(doc(db, "jobseeker", uid),{
     applications:app1,
    })
    })


    const verf = ref (storage, `CVs/${cvid}`);
// Delete the file
deleteObject(verf).then(() => {
  console.log("cv deleted")
  // File deleted successfully
}).catch((error) => {
  console.log(error)
  // Uh-oh, an error occurred!
});
    deleteDoc(doc(db,"applicants",id))
    const refdd = doc(db,"offer",offerId)
  await getDoc(refdd).then(
    async(doc2)=>{
  await getDoc(doc(db,"company",doc2.data().companyID)).then((docc)=>{
    let app=docc.data().applicants
    app--
    console.log('hhhh :'+app)
    updateDoc(doc(db, "company", docc.data().companyId),{
     applicants:app,
    })
  })
  })
}
export {updateState,deleteApplicant};