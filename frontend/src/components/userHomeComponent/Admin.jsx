import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";

import { getAdminUser } from "../api/userApi";
import { getAdmin } from "../api/cvApi";
import "./styles/admin.css";

function Admin() {
  const [users, setUser] = useState(null);
  const [cvList, setCv] = useState(null);

  useEffect(() => {
    async function fetch() {
      const k = await getAdminUser();
      setUser(k);
      const cv = await getAdmin();
      setCv(cv);
    }
    fetch();
  }, []);
  function openCv(uuid) {
    window.open(`http://localhost:5173/${uuid}`, "_blank");
  }
  return (
    <>
      <div className="adminMainDiv">
        <UserHeader />
        <div className="adminInDiv">
          <h1>Admin Home</h1>
          <h1>All Users</h1>
          {users ? (
            users.map((value, i) => {
              return (
                <>
                  <div className="mainAllUserDiv">
                    <div key={i} className="userDiv">
                      <div>Name: {value.name}</div>
                      <div>Email: {value.email}</div>
                      <div>createdAt: {value.createdAt}</div>
                      <div>updatedAt: {value.updatedAt}</div>
                      <div>
                        Mail Verification: {String(value.isMailVerified)}
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>Loading...</>
          )}
          <h1>All CVS</h1>
          {cvList ? (
            cvList.map((value, i) => {
              return (
                <>
                  <div className="mainAllUserDiv">
                    <div
                      key={i}
                      className="userDiv"
                      onClick={() => {
                        openCv(value.uuid);
                      }}
                    >
                      <div>Name: {value.name}</div>
                      <div>email:{value.contactInfo.emailId}</div>
                      <div>head line:{value.headLine}</div>
                      <div>link:{value.uuid}</div>
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </>
  );
}
export default Admin;
