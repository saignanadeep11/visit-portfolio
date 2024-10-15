import { useEffect, useState } from "react";
import { getCv } from "../api/cvApi";
import { useParams } from "react-router-dom";
import NameAnimation from "./NameAnimation";
import "./styles/getcv.css";
import Header from "./home/Header";
import { useNavigate } from "react-router-dom";

function GetCv() {
  const { uuid } = useParams();
  const [cvData, setCvData] = useState([]);
  // const [name, setName] = useState("");
  const [isHeadLineLoaded, setHeadLineLoaded] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const cv = await getCv(uuid);
      // console.log(cv);
      if (cv === null) {
        navigate("/PageNotFound");
      }
      setCvData(cv);
      // setName(cvData.name);
    };
    fetchData();
    delayHeadLine();
  }, []);
  function delayHeadLine() {
    setTimeout(() => {
      setHeadLineLoaded(true);
    }, 3500);
  }
  const name = cvData.name;
  return (
    <div className="topDiv">
      <Header />
      <div className="mainGetDiv">
        <div></div>
        <div>
          {cvData.name ? (
            <div className="nameDiv">
              <div className="nameInDiv">
                <NameAnimation name={cvData.name || name} />
                {isHeadLineLoaded ? (
                  <span className="headlineDiv">{cvData.headLine}</span>
                ) : (
                  <div className="dot">.</div>
                )}
              </div>
            </div>
          ) : (
            <div>Loading</div>
          )}

          {/* {cvData.about} */}
          {/* {JSON.stringify(cvData)} */}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default GetCv;
