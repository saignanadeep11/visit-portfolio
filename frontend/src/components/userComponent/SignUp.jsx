import { useState } from 'react';
import './signup.css'
function SignUp(){
  const {name,setName}=useState("")
  const {email,setEmail}=useState("")
  const {password,setPassword}=useState("")
  function namefun(){

      }
return(
<>
  <div className='signUpDiv'>
    <h1>Sign Up</h1>
    <form className="signUpForm">
      <input name="userName" placeholder="Name" required 
      ></input>
      <input name="email" placeholder="Email" required/>
      <input name="password" placeholder="password" type="password" required/>
      <button >Sign Up</button>
    </form>
  </div>
</>
)
}

export default SignUp;