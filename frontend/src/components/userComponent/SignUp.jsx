import { useState } from "react";
import "./signup.css";
import { signUp } from "../api/userApi";
import { useNavigate } from "react-router-dom";
import validator from "email-validator";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signSubmit(e) {
    e.preventDefault();
    try {
      if (!validator.validate(email)) {
        alert("Invalid Email");
        return;
      }
    } catch (error) {
      alert("Invalid Email");
    }
    const data = { name, email, password };
    await signUp(data)
      .then((res) => {
        console.log(res);
        alert(res);
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
        alert(err);
      });
  }
  const navigate = useNavigate();
  function redirect() {
    navigate("/login");
  }
  return (
    <>
      <div className="signUpDiv">
        <h1>Sign Up</h1>
        <form
          className="signUpForm"
          method="post"
          onSubmit={(e) => {
            signSubmit(e);
          }}
        >
          <input
            name="userName"
            placeholder="Name"
            required
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <input
            name="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            name="password"
            placeholder="password"
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit">Sign Up</button>
        </form>
        <div className="redirectS" onClick={redirect}>
          Click here for login page
        </div>
      </div>
    </>
  );
}

export default SignUp;
