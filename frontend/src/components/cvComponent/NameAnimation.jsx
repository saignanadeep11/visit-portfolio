import React, { useState, useEffect } from "react";
import "./styles/NameAnimation.css"; // Import the CSS file for animation

const NameAnimation = ({ name = "" }) => {
  const [displayedName, setDisplayedName] = useState([]); // Initial state is empty
  const [shakeIndex, setShakeIndex] = useState(-1); // To track which letter is shaking
  // console.log(name)
  const getRandomDevanagariCharacter = () => {
    const min = 0x0905;
    const max = 0x097f;
    const randomChar = Math.floor(Math.random() * (max - min) + min);
    return String.fromCharCode(randomChar);
  };

  // Function to generate a random Telugu character
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
    // Initialize the name with random Chinese characters
    const initialChars = Array.from(
      { length: name.length },
      getRandomCharacter
    );
    setDisplayedName(initialChars);

    let currentIndex = 0;

    // Define an interval to gradually replace Chinese characters with the actual name
    const intervalId = setInterval(() => {
      setShakeIndex(currentIndex); // Trigger the shaking effect for the current letter
      let index = 0;
      setTimeout(() => {
        // After shaking, replace the character with the actual one
        setDisplayedName((prevName) => {
          const updatedName = [...prevName];
          updatedName[currentIndex] = name[currentIndex]; // Replace with the actual letter
          currentIndex += index;
          index += 1;
          if (currentIndex >= name.length) {
            clearInterval(intervalId); // Stop the interval after all letters are replaced
          }

          return updatedName;
        });

        setShakeIndex(-1); // Remove shaking after the character has been updated
      }, 50); // Shaking duration
    }, 220); // Delay between each character update

    return () => clearInterval(intervalId);
  }, [name]);

  return (
    <div className="animationDiv">
      {displayedName.map((char, index) => (
        <span
          key={index}
          className={shakeIndex === index ? "shaking" : ""}
          style={{ transition: "all 0.5s ease" }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default NameAnimation;
