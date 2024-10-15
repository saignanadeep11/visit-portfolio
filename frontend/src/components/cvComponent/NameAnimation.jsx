import React, { useState, useEffect } from "react";
import "./styles/nameAnimation.css";

const NameAnimation = ({ name = "" }) => {
  const [displayedName, setDisplayedName] = useState([]);
  const [shakeIndex, setShakeIndex] = useState(-1);

  const getRandomDevanagariCharacter = () => {
    const min = 0x0905;
    const max = 0x097f;
    const randomChar = Math.floor(Math.random() * (max - min) + min);
    return String.fromCharCode(randomChar);
  };

  const getRandomTeluguCharacter = () => {
    const min = 0xd000;
    const max = 0xd7a3;
    const randomChar = Math.floor(Math.random() * (max - min) + min);
    return String.fromCharCode(randomChar);
  };
  const getRandomCharacter = () => {
    return Math.random() > 0.5
      ? getRandomDevanagariCharacter()
      : getRandomTeluguCharacter();
  };
  useEffect(() => {
    const initialChars = Array.from(
      { length: name.length },
      getRandomCharacter
    );
    setDisplayedName(initialChars);
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setShakeIndex(currentIndex + 1);
      let index = currentIndex;
      setTimeout(() => {
        setDisplayedName((prevName) => {
          index = currentIndex;
          const updatedName = [...prevName];
          updatedName[index - 1] = name[index - 1];
          return updatedName;
        });

        currentIndex += 1;
        if (index >= name.length) {
          clearInterval(intervalId);
        }
        setShakeIndex(-1);
      }, 20);
    }, 220);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="animationDiv">
      {displayedName.map((char, index) => (
        <span
          key={index}
          className={shakeIndex === index + 2 ? "shaking" : ""}
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          {char}
          {/* <>{shakeIndex}</>
          <>{index}</> */}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;
