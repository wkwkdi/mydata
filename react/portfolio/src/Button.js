import React, { useState } from 'react';
import './Button.css';
import css from "./assets/css.svg";
import figma from "./assets/figma.svg";
import firebase from "./assets/firebase.svg";
import html from "./assets/html.svg";
import java from "./assets/javascript.svg";
import jquery from "./assets/jquery.svg";
import react from "./assets/react.svg";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const handleTextClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 onClick={handleTextClick}>Front-End</h1>
        <div className={`image-container ${isClicked ? 'active' : ''}`}>
          <img src={css} />
          <img src={figma} />
          <img src={firebase} />
          <img src={html} />
          <img src={java} />
          <img src={jquery} />
          <img src={react} />
        </div>
      </div>
    </div>
  );
}

export default App;
