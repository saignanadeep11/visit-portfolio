import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCv } from "../api/cvApi";
import Header from "./home/Header";
import Footer from "./home/Footer";
import "./styles/about.css";

function About() {
  const [cvData, setCvData] = useState("");
  const [skills, setSkills] = useState([]);
  const [contact, setContact] = useState("");
  const { uuid } = useParams();
  useEffect(() => {
    let Data;
    async function fetchData() {
      Data = await getCv(uuid);
      setCvData(Data);
      const skill = Data.skills.split(",");
      setSkills(skill);
      setContact(Data.contactInfo);
    }

    fetchData();
  }, []);
  return (
    <>
      <Header />
      <div className="cvMainDiv">
        <div></div>
        <div className="cvDiv">
          <div className="cvAboutDiv">{cvData.about}</div>

          <div className="skillsDiv">
            {skills.map((value, i) => {
              return (
                <span key={i} className="box">
                  {value}
                </span>
              );
            })}
          </div>
        </div>
        <div></div>
      </div>
      <Footer {...contact} />
    </>
  );
}

export default About;
