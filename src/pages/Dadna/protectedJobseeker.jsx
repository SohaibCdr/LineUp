import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRouteJob = ({ userType, ...props }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (userType !== "jobseeker") {
        navigate(-1);
      }
    }, 2000); //

    // Clear the timeout when the component unmounts or when userType changes
    return () => clearTimeout(timeoutId);
  }, [userType, navigate]);

  if (userType === "jobseeker") {
    return <Outlet {...props} />;
  }

  return null;
};

export default ProtectedRouteJob;
