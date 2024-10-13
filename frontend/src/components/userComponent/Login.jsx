import { useState } from "react";
import "./login.css";
import { login } from "../api/userApi";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function loginClicked(e) {
    e.preventDefault();
    // console.log(email,password)
    const data = { email, password };
    await login(data)
      .then((res) => {
        console.log(res);
        if (res.return) {
          navigate("/");
        } else {
          alert(res.error);
        }
        // window.location.reload();
      })
      .catch((err) => console.log("error", err));
  }
  const navigate = useNavigate();
  function redirect() {
    navigate("/SignUp");
  }
  return (
    <div className="loginTopDiv">
      <div className="loginDiv">
        <h1>Login</h1>
        <form
          className="loginForm"
          onSubmit={(e) => {
            loginClicked(e);
          }}
        >
          <input
            name="email"
            placeholder="Email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            name="password"
            placeholder="Password"
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>Login</button>
        </form>
        <div className="redirectS" onClick={redirect}>
          Click here for Sign Up
        </div>
      </div>
    </div>
  );
}
export default Login;
