import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../api/userApi";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmailToken = async () => {
      console.log(token);
      if (token) {
        try {
          const k = await verifyEmail(token);
          console.log(k);
          if (k.status) {
            alert("Mail Verified Sucessfully");
            navigate("/");
          }
        } catch (error) {
          console.log(error);
          alert("Invalid or expired token.");
          navigate("/sendMail");
        }
      }
    };
    verifyEmailToken();
  }, []);

  return (
    <>
      <div className="verifyMailMainDiv">
        <div className="verifyMailDiv">
          <h5>Verifying...</h5>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
