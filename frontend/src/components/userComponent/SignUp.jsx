import { useState } from 'react';
import './signup.css';
import { signUp } from '../api/userApi';

function SignUp(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function signSubmit(e){
    e.preventDefault();
    const data={name,email,password};
    await signUp(data).then(res=>console.log(res)).catch(err=>console.log("error",err))
  }

return(
<>
  <div className='signUpDiv'>
    <h1>Sign Up</h1>
    <form className="signUpForm" method='post' onSubmit={(e)=>{
      signSubmit(e)
    }}>
      <input name="userName" placeholder="Name" required onChange={(e)=>{setName(e.target.value)}}
      ></input>
      <input name="email" placeholder="Email" required onChange={(e)=>{setEmail(e.target.value)}}/>
      <input name="password" placeholder="password" type="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
      <button type='submit'>Sign Up</button>
    </form>
  </div>
</>
)
}

export default SignUp;