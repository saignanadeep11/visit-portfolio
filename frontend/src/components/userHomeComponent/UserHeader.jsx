import { logOut } from "../api/userApi";
import "./styles/userHeader.css";
import { useNavigate } from "react-router-dom";

function UserHeader() {
  const navigate = useNavigate();
  function homeFunction() {
    navigate("/");
  }
  function kalamSir() {
    navigate("/kalam-sir");
  }
  function createCv() {
    navigate("/makeCv");
  }
  async function logout() {
    await logOut();
    window.location.reload();
  }
  return (
    <>
      <div className="userHeaderDiv">
        <span onClick={homeFunction}>Home</span>
        <span onClick={kalamSir}>Sample CV</span>
        <span onClick={createCv}>Create CV</span>
        <span onClick={logout}>Log Out</span>
      </div>
    </>
  );
}

export default UserHeader;
