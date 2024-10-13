import { useState } from "react";
import { sendEmail } from "../api/userApi";
import "./styles/mail.css";
import { useNavigate } from "react-router-dom";
const MailLink = () => {
  const [clicked, setClick] = useState(false);
  const navigate = useNavigate();
  async function sendMail() {
    await sendEmail();
    setClick(true);
  }
  function toLogin() {
    navigate("/");
  }
  return (
    <>
      <div className="verifyMailMainDiv">
        <div className="verifyMailDiv">
          {clicked ? (
            <h5
              onClick={() => {
                toLogin();
              }}
            >
              If you have verified Click here
            </h5>
          ) : (
            <h5 onClick={() => sendMail()}>
              Click here to send verification link to your email
            </h5>
          )}
        </div>
      </div>
    </>
  );
};
export default MailLink;
