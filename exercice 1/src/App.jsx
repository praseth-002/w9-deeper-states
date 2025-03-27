import React, { useState } from "react";

export default function App() {
  const [stateNum, setNum] = useState(0);
  // const [stateBar, setBar] = useState(0);

  function onNum (event) {
    console.log(stateNum);
    setNum(event.target.value);
  }

  const getScoreBarStyle = () => {
    // 1- Compute width
    const scoreWidth = (stateNum * 656.5) / 10 ;

    // 2- Compute color (optional)
    let scoreColor = ``;

    if (stateNum > 7) {
      scoreColor = `#a3c45d`;
    } else if (stateNum > 4) {
      scoreColor = `#cee66c`;
    } else if (stateNum > 2) {
      scoreColor = `#bcc45e`;
    } else {
      scoreColor = `#eabe5d`;
    }

    // 3 - Return the style object
    return {
      width: scoreWidth,
      backgroundColor: scoreColor,
    };
  };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" value={stateNum} onChange={onNum}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
