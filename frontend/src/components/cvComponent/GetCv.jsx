import { useEffect, useState } from 'react';
import { getCv } from '../api/cvApi';
import NameAnimation from './NameAnimation';
import Header from '../home/header';
import './getcv.css'

function GetCv(){
  useEffect(()=>{
    const fetchData=async()=>{
      const cv=await getCv()
      setCvData(cv)
    }
    fetchData()
  },[])
  const [cvData,setCvData]=useState([])
  const name=cvData.name;

return(
  <div className='mainDiv'>
    <div></div>
      <div>
        <Header/>
        <div className="nameDiv">
          <div className="nameInDiv">

            <NameAnimation name={name} />
          </div>
        </div>
        {cvData.about}
        {JSON.stringify(cvData)}
      </div>
    <div></div>
  </div>
)
}

export default GetCv;