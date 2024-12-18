import {
  doc,
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { Auth, db } from "../firebaseconfig";
import { getDate } from "./getJobs";

const getThisApplicants = async (offerId) => {
  //this function retruns an array of applicants who applied for
  //job offer with the id "offerId"
  const colRef = collection(db, "applicants");
  const q = query(colRef, where("offerId", "==", offerId));
  let applicants = [];
  let ids = [];
  await getDocs(q).then(async (snapshot) => {
    let i = 1;
    snapshot.forEach(async (applicant) => {
      ids.push(applicant.data().userId);

      applicants.push({
        id: i++,
        userId: applicant.data().userId,
        applicantId: applicant.id,
        appName: applicant.data().appName,
        appState: applicant.data().appState,
        //appDate: applicant.data().createdAt,
         appDate: getDate(applicant.data().createdAt),
        //replace this when you have a serverTimestamp in the createdAt field
        cv: applicant.data().cv,
        cvId:applicant.data().cvId,
      offerId:applicant.data().offerId
      });
    });
  });
  if(ids.length>0){
  let quer = query(collection(db, "jobseeker"), where("__name__", "in", ids));
  await getDocs(quer).then((snap) => {
    let i = 0;
    snap.forEach((seeker) => {
      applicants[i] = {
        ...applicants[i],
        email: seeker.data().email,
        phoneNumber: seeker.data().phoneNumber,
        birthDay: seeker.data().dateOfBirth,
        adresse: seeker.data().Adress,
        profil:seeker.data().profil
      };
      i++;
    });
  });}
  return applicants;
};
const getMyoffers = async (uid) => {
  let jobOffers = [];
  await getDocs(query(collection(db, "offer"), where("companyID", "==", uid)))
    .then((snapshot) => {
      let i = 1;
      snapshot.forEach((offer) => {
        jobOffers.push({
          id: i++,
          offerid: offer.id,
          jobName: offer.data().name,
        });
      });
    })
    .catch((err) => {
      console.log("error", err.message);
    });
  return jobOffers;
};

export { getThisApplicants, getMyoffers };
