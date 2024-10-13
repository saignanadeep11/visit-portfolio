import { useState } from "react";
import "./header.css";
import { useNavigate, useParams } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { uuid } = useParams();
  function Home() {
    navigate(`/${uuid}`);
  }
  function About() {
    navigate(`/${uuid}/About`);
  }
  function Experience() {
    navigate(`/${uuid}/Experience`);
  }
  return (
    <>
      <div className="headerDiv">
        <span className="homeSpan" onClick={Home}>
          Home
        </span>
        <span onClick={About}>About</span>
        <span onClick={Experience}>Experience</span>
      </div>
    </>
  );
}

export default Header;
