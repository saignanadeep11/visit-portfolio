import axios from 'axios';

export const signUp=async(data)=>{
  axios.post('http://localhost:8000/user/api/SignUp',data,{withCredentials:true}).then(res=>{console.log(res.data)}).catch(err=>{console.error(err)})
}
export const login=async(data)=>{
  axios.post("http://localhost:8000/user/api/login",data,{withCredentials:true}).then(res=>{console.log(res.data)}).catch(err=>{console.error(err)})
}

