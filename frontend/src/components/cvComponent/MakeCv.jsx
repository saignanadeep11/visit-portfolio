import "./styles/makeCv.css";
import { createCv, getCv } from "../api/cvApi";
import UserHeader from "../userHomeComponent/UserHeader";
import { useEffect, useState } from "react";
function MakeCv() {
  // const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [headLine, setHeadLine] = useState("");
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [emailId, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");

  async function handleSubmit(e) {
    // This part to acheck if cv present useEffect(()=>{
    //   as
    // },[])
    e.preventDefault();
    const contactInfo = { phoneNo, emailId, linkedIn };
    const data = {
      name,
      headLine,
      about,
      skills,
      experience,
      contactInfo,
    };
    await createCv(data)
      .then((res) => {
        console.log(res);
        alert(res);
      })
      .catch((err) => {
        console.log("error", err);
        alert(err);
      });
  }

  return (
    <>
      <UserHeader />
      <div className="mainDiv">
        <div></div>
        <div>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <h2>Fill the Form</h2>
            {/* <div className="selectModel">
            <div className="dropdown">
              <button
                className="btn btn-primary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                name="model"
              >
                {model ? model : modelText}
              </button>
              <ul className="dropdown-menu">
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => {
                      setModel("Kalki Model");
                    }}
                  >
                    Kalki Model
                  </div>
                </li>
                <li>
                  <div
                    className="dropdown-item"
                    onClick={(e) => {
                      setModel("Krishna Model");
                    }}
                  >
                    Krishna Model
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
            <div className="name">
              <label>Name</label>
              <input
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="headline">
              <label>Head Line</label>
              <input
                placeholder="Head Line"
                onChange={(e) => setHeadLine(e.target.value)}
              />
            </div>
            <div id="aboutId" className="input-group">
              <span className="input-group-text">About</span>
              <textarea
                className="form-control"
                aria-label=""
                onChange={(e) => setAbout(e.target.value)}
              ></textarea>
            </div>
            <div id="skills" className="input-group">
              <span className="input-group-text">Skills</span>
              <textarea
                className="form-control"
                aria-label=""
                placeholder="skill 1, skill 2, skill 3"
                onChange={(e) => setSkills(e.target.value)}
              ></textarea>
            </div>
            {/* <div className="skills">
            <label>Skills</label>
            <input
              placeholder="skill 1, skill 2, skill 3"
              className="skillsInput"
              onChange={(e) => setSkills(e.target.value)}
            />
          </div> */}
            <div>
              <h6>Seperate each skill with comma(,)</h6>
            </div>
            <div className="input-group">
              <span className="input-group-text">Experience</span>
              <textarea
                className="form-control"
                aria-label="Experience write here"
                onChange={(e) => setExperience(e.target.value)}
              ></textarea>
            </div>

            <div className="contactInfo">
              <div>
                <label>Phone No</label>
                <input
                  placeholder="Phone No"
                  className="phoneInput"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <label>Email Id</label>
                <input
                  placeholder="Email Id"
                  className="emailInput"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>LindedIn Link</label>
                <input
                  placeholder="LinkedIn link"
                  className="linkedInput"
                  onChange={(e) => setLinkedIn(e.target.value)}
                />
              </div>
            </div>
            <div className="noteWarning">
              Please check once agian! You can submit only <span>once.</span>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
}
export default MakeCv;
