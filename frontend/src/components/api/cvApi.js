import axios from "axios";

export const createCv=async(data)=>{
  axios.post('http://localhost:8000/cv/api/createCv',data,{withCredentials:true}).then(res=>{console.log(res.data)}).catch(err=>{console.error(err)})
}

export const getCv=async()=>{
  let cvData;
  await axios.get('http://localhost:8000/cv/api/getCv',{withCredentials:true}).then(res=>{
    cvData=(res.data);
    // return res.data 
    }).catch(err=>{console.error(err)})
    return cvData;
}
