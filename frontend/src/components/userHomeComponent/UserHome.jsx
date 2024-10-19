import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";
import "./styles/userHome.css";
import { getMyCv, deleteMyCv } from "../api/cvApi";
import { useNavigate } from "react-router-dom";

function UserHome() {
  const [myCv, setMyCv] = useState("");
  useEffect(() => {
    async function fetchData() {
      const cv = await getMyCv();
      setMyCv(cv);
    }
    fetchData();
  }, []);
  async function deleteCv() {
    await deleteMyCv();
    window.location.reload();
  }
  const navigate = useNavigate();
  function openMyCv() {
    const uuid = myCv.uuid;
    navigate(`/${uuid}`);
  }
  function create() {
    navigate("/MakeCv");
  }
  // console.log(myCv);
  return (
    <>
      <UserHeader />
      <div className="userHomeMainDiv">
        <div></div>
        <div className="userHomeDiv">
          {myCv ? (
            <div className="userCvDiv">
              <div onClick={openMyCv} className="userMyCv">
                Your Cv
              </div>
              <div onClick={openMyCv}>{myCv.name}</div>
              {myCv.contactInfo.emailId ? (
                <div onClick={openMyCv}>{myCv.contactInfo.emailId}</div>
              ) : (
                <></>
              )}
              <div>
                Your CV Link:https://career-folio.onrender.com/{myCv.uuid}
              </div>
              <div onClick={deleteCv} className="userCvDelete">
                Delete Cv
              </div>
            </div>
          ) : (
            <div className="userCvDiv" onClick={create}>
              You Haven't yet created your CV to show. Click Here to create
            </div>
          )}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default UserHome;
