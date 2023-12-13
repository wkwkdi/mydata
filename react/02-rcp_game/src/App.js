import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import "./HandIcon.css";
import reset from "./assets/ic-reset.svg";
import { compareHand, generateRandomHand } from "./utils";
import "./App.css"
import { useState } from "react";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if(comparison > 0) return "승리";
  if(comparison < 0) return "패배";
  return "무승부";
}


function App() {
  const [Hand, setHand] = useState("rock");
  const [OtherHand, setOtherHand] = useState("rock");
  const [gameHistory, setGameHistory]= useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  const [isWin, setIsWin] = useState(0);

  const handleButtonClick = (value) => {
    const nextOtherHand = generateRandomHand();
    const nextHistory = getResult(value, nextOtherHand);
    const comparison = compareHand(value, nextOtherHand);
    setIsWin(comparison);
    setHand(value);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistory]);
    if(comparison > 0) setScore(score + bet);
    if(comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if(num > 9) num %=10;
    if(num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  }

  const handleClearClick = ()=>{
    setHand("rock");
    setOtherHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
    setIsWin(0);
  }
  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img className="App-reset" src={reset} alt="초기화" onClick={handleClearClick}/>
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{score}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{otherScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는곳 */}
          <div className="App-hands">
            <div className={`Hand ${isWin == 0 ? "": isWin == 1 ? "winner": ""}`}>
              <HandIcon value={Hand} className="Hand-icon" />
            </div>
            <div className="App-versus">VS</div>
            <div className={`Hand ${isWin == 0 ? "": isWin == 1 ? "": "winner"}`}>
              <HandIcon value={OtherHand} className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div className="App-bet">
            <span>배점</span>
            <input type="number" min={1} max={9} value={bet} onChange={handleBetChange} />
            <span>배</span>
          </div>
          {/* 기록 */}
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(",")}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
