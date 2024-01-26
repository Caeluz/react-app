import React, { useState, useEffect } from "react";
import "./increment.css";

const Increment: React.FC = () => {
  const [score, setScore] = useState(1000);
  const [clickValue, setClickValue] = useState(1);
  const [autoIncrementValue, setAutoIncrementValue] = useState(0);
  const [autoIncrementSpeed, setAutoIncrementSpeed] = useState(1000);

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [baseCost, setBaseCost] = useState(100);
  const [calculatedCost, setCalculatedCost] = useState(0);

  const handleClick = () => {
    setScore(score + clickValue);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScore((prevScore) => prevScore + autoIncrementValue);
    }, autoIncrementSpeed);

    return () => clearInterval(intervalId);
  }, [autoIncrementValue]);

  const handleUpgradeClick = () => {
    if (score >= 10) {
      setScore((prevScore) => prevScore - 10);
      setClickValue((prevClickValue) => prevClickValue + 1);
    } else {
      setModalMessage("Not enough points to upgrade click value!");
      setShowModal(true);
    }
  };

  const handleAutoIncrementClick = (multiplier: number) => {
    // const cost = (20 * multiplier) * (autoIncrementValue + 1);
    setBaseCost(20 * multiplier * (autoIncrementValue + 1));

    if (score >= baseCost) {
      setScore((prevScore) => prevScore - baseCost);
      setAutoIncrementValue(
        (prevAutoIncrementValue) => prevAutoIncrementValue + multiplier
      );
    } else {
      setModalMessage("Not enough points to buy auto increment!");
      setShowModal(true);
    }
  };

  const handleIncreaseAutoIncrementSpeed = () => {
    // setCalculatedCost(baseCost * (autoIncrementSpeed / 10));
    setCalculatedCost(100);

    if (score >= calculatedCost) {
      setScore((prevScore) => prevScore - calculatedCost);
      setAutoIncrementSpeed(
        (prevAutoIncrementSpeed) => prevAutoIncrementSpeed - 100
      );
    } else {
      setModalMessage("Not enough points to increase auto increment speed!");
      setShowModal(true);
    }
  };

  // const handleStopAutoIncrementSpeed = () => {

  //   setAutoIncrementSpeed(100000000);
  // };

  // const handleStartAutoIncrementSpeed = () => {
  //   setAutoIncrementSpeed(autoIncrementSpeed)
  // }

  return (
    <div className="App">
      <h1>Increment Game</h1>
      <p>Score: {score}</p>
      <p>Auto Increment Value: {autoIncrementValue}</p>
      <p>cost: {baseCost}</p>
      {/* <p>Auto Increment Speed: {autoIncrementSpeed} </p> */}
      <button onClick={handleClick}>Click Me (+{clickValue})</button>
      <br />
      <button onClick={handleUpgradeClick}>
        Upgrade Click Value (Cost: 10)
      </button>
      <br />

      <div>
        <button onClick={() => handleAutoIncrementClick(1)}>
          Buy x1 Auto Increment (Cost: 20)
        </button>

        <button onClick={() => handleAutoIncrementClick(10)}>
          Buy x10 Auto Increment cost {20 * (autoIncrementValue + 1)}
        </button>

        <button onClick={() => handleAutoIncrementClick(100)}>
          Buy x100 Auto Increment (Cost: 2000)
        </button>

        <button onClick={() => handleAutoIncrementClick(10000)}>
          Buy x10000 Auto Increment (Cost: 200000)
        </button>
      </div>

      <br />
      {autoIncrementSpeed < 1 ? (
        <button disabled={true}>Auto Increment Speed is already at max</button>
      ) : (
        <button
          onClick={handleIncreaseAutoIncrementSpeed}
          disabled={autoIncrementSpeed < 1}
        >
          Increase Auto Increment Speed (Cost: 100): {calculatedCost} points
        </button>
      )}

      {showModal && (
        <div className="modal-popup" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Warning</h2>
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Increment;
