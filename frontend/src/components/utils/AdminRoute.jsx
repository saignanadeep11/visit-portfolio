import { Navigate, Outlet } from "react-router-dom";
import { isUserLogin } from "../api/userApi";
import { useEffect, useState } from "react";
function AdminRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetch() {
      const cuser = await isUserLogin();
      if (cuser) {
        if (cuser.email === import.meta.env.VITE_ADMIN_MAIL) {
          setUser(cuser);
          setLoading(false);
          console.log("user admin");
        } else {
          setLoading(false);
        }
      }
    }
    fetch();
  }, []);
  if (loading) {
    return <div className="animationDiv">Loading...</div>;
  }
  if (user) {
    return <Outlet />;
  }
  return <Navigate to="/" />;
}

export default AdminRoute;
