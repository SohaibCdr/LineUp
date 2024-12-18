import { mapJobs } from "./getJobs";
import { db } from "../firebaseconfig";
import { orderBy, query, collection, getDocs } from "firebase/firestore";
const isemp = (filter) => {
  return filter == "";
};
const filterJobsClient = async ({
  category,
  jobType,
  jobLevel,
  remote,
  location,
  sortBy,
}) => {
  let q = query(collection(db, "offer"));
  let jobsArr = [];
  let res = [];
  if (sortBy !== "") {
    if (sortBy == "date") {
      q = query(q, orderBy("createdAt", "desc"));
    } else {
      q = query(q, orderBy(sortBy, "desc"));
    }
  }

  // Execute the query
  await getDocs(q).then((snapshot) => {
    // Process the query results here
    jobsArr = mapJobs(snapshot);
    console.log("jobsArr:", jobsArr);
  });
  jobsArr.forEach((job) => {
    if (
      (isemp(category) || category == job.category) &&
      (isemp(jobType) || jobType == job.jobType) &&
      (isemp(jobLevel) || jobLevel == job.jobLevel) &&
      (!remote || (remote && job.remote)) &&
      (isemp(location) || location == job.location)
    ) {
      res.push(job);
    }
  });
  console.log("Filtered jobs: ", res);
  return res;
};
export { filterJobsClient, isemp };
