import React, { useState, useEffect } from 'react';
import './index.css'
function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsActive(false);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isActive, minutes, seconds]);

  const startTimer = () => {
    setMinutes(inputMinutes);
    setSeconds(0);
    setIsActive(true);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(0);
    setSeconds(0);
    setInputMinutes(0);
  };

  const handleChange = (event) => {
    setInputMinutes(parseInt(event.target.value));
  };

  return (
    <div className='btn'>
      <div className='text'>
        <h1>CountDown Timer {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')} </h1>
      </div>
      <input type="number" value={inputMinutes} onChange={handleChange} />
      <button onClick={startTimer}>Start</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default App;