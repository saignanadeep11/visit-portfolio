import './makeCv.css'
import { createCv, getCv } from '../api/cvApi';
import { useState } from 'react';
function MakeCv(){
  const [model,setModel]=useState("")
  const [name,setName]=useState("")
  const [headLine,setHeadLine]=useState("")
  const [about,setAbout]=useState("")
  const [skills,setSkills]=useState("")
  const [experience,setExperience]=useState("")
  const [phoneNo,setPhone]=useState("")
  const [emailId,setEmail]=useState("")
  const [linkedIn,setLinkedIn]=useState("")
  const modelText="Select prefered model"
  
  async function handleSubmit(e){
    e.preventDefault()
    const contactInfo={phoneNo,emailId,linkedIn};
    const data={name,headLine,about,skills,experience,contactInfo,model};
    await createCv(data).then(res=>console.log(res)).catch(err=>console.log("error",err))
  }
  
  
  return(
    <>
      <div className="mainDiv">
        <div></div>
        <form method='post' onSubmit={(e)=>handleSubmit(e)}>
          <div className="selectModel">
          
          <div class="dropdown">
              <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"
              name='model'
              > 
              {model ? (model):(modelText)}
              </button>
              <ul class="dropdown-menu">
                <li><div class="dropdown-item"
                onClick={(e)=>{setModel("Kalki Model")}} >Kalki Model</div></li>
                <li><div class="dropdown-item" 
                onClick={(e)=>{setModel("Krishna Model")}}
                >Krishna Model</div></li>
          
              </ul>
            </div>
          </div>
          <div className="name">
            <label >Name</label>
            <input placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
          </div>
          <div className="headline">
            <label >Head Line</label>
            <input placeholder="Head Line"
            onChange={(e)=>setHeadLine(e.target.value)}/>
          </div>
          <div id="aboutId" class="input-group">
            <span class="input-group-text">About</span>
            <textarea class="form-control" aria-label="" onChange={(e)=>setAbout(e.target.value)}></textarea>
          </div>
          <div className="skills">
            <label>Skills</label>
            <input placeholder="skill 1, skill 2, skill 3" className="skillsInput" onChange={(e)=>setSkills(e.target.value)}/>
          </div>
          <div>
            <h7>Seperate each skill with comma(,)</h7>
          </div>
          <div class="input-group">
            <span class="input-group-text">Experience</span>
            <textarea class="form-control" aria-label="Experience write here" onChange={(e)=>setExperience(e.target.value)}></textarea>
          </div>
          
          <div className="contactInfo">
            <div>
            <label>Phone No</label>
            <input placeholder="Phone No" className="phoneInput" onChange={(e)=>setPhone(e.target.value)}/>
            </div>
            <div>
            <label>Email Id</label>
            <input placeholder="Email Id" className="emailInput" onChange={(e)=>setEmail(e.target.value)}/>
            </div>

            <div>
            <label>LindedIn Link</label>
            <input placeholder="LinkedIn link" className="linkedInput"
            onChange={(e)=>setLinkedIn(e.target.value)}/>
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
        <div></div>
      </div>
    </>
  )
}
export default MakeCv;