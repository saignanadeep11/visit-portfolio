import { useEffect, useState } from "react";
import { getCv } from "../api/cvApi";
import { useParams } from "react-router-dom";
import "./styles/experience.css";
import Header from "./home/Header";
import Footer from "./home/Footer";

function Experience() {
  const [experience, setExp] = useState("");
  const [contact, setContact] = useState("");
  const { uuid } = useParams();
  useEffect(() => {
    async function fetchData() {
      const Data = await getCv(uuid);
      setExp(Data.experience);
      setContact(Data.contactInfo);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="expMainDiv">
        <div></div>
        <div className="expDiv">{experience}</div>
        <div></div>
      </div>
      <Footer {...contact} />
    </>
  );
}

export default Experience;
