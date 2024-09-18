import { useState } from 'react';
import './login.css';
import { login } from '../api/userApi';
function Login(){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  async function loginClicked(e){
    e.preventDefault();
    // console.log(email,password)
    const data={email,password};
    await login(data).then(res=>console.log(res)).catch(err=>console.log("error",err))
  }
  return(
    <>
      <div className="loginDiv">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={(e)=>{loginClicked(e)}}>
          <input name="email" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)
          }}></input>
          <input name="password" placeholder="Password" type="password" required onChange={(e)=>{
            setPassword(e.target.value)
          }}/>
          <button>Login</button>
        </form>
      </div>
    </>
  )
}
export default Login;