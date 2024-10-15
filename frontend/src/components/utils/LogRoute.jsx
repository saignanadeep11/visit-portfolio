import { Navigate, Outlet } from "react-router-dom";
import { isUserLogin } from "../api/userApi";
import { useEffect, useState } from "react";

function LogRoute() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetch() {
      setUser(await isUserLogin());
      setLoading(false);
    }
    DataObject;
    fetch();
  }, []);
  if (loading) {
    return <div className="animationDiv">Loading...</div>;
  }
  return user ? <Navigate to={"/home"} /> : <Outlet />;
}

export default LogRoute;
