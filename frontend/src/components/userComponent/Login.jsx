
function Login(){
  return(
    <>
      <h1>Login</h1>
      <form>
        <input name="email" placeholder="Email" required></input>
        <input name="password" placeholder="Password" type="password" required/>
        <button>Login</button>
      </form>
    </>
  )
}
export default Login;