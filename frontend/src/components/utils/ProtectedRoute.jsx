import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isMailVerified, isUserLogin } from "../api/userApi";

function ProtectedRoute() {
  const [user, setUserLog] = useState(null);
  const [userVerified, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchUser() {
      try {
        const mailVerified = await isMailVerified();
        const loggedInUser = await isUserLogin();
        setUser(mailVerified);
        setUserLog(loggedInUser);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) {
    return <div className="animationDiv">Loading...</div>;
  }
  if (user && userVerified) {
    // return (userVerified) ? <Outlet /> : <Navigate to={"/sendMail"} />;}
    return <Outlet />;
  } else if (user && !userVerified) {
    return <Navigate to={"/sendMail"} />;
  } else {
    return <Navigate to={"/login"} />;
  }
}

export default ProtectedRoute;
