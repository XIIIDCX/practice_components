import React, { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let intervalId = null

  useEffect(() => {
    if (isRunning){
        if(isRunning){
          intervalId = setInterval(() => {
            setSeconds(seconds -1);
              if(seconds === 0){
                setMinutes(minutes -1);
                setSeconds(59);
                  if (minutes === 0 && seconds === 0) {
                    setIsRunning(false);
                    setMinutes(0);
                    setSeconds(0);
                  }
              }          
          }, 1000)
          return () => clearInterval(intervalId)
        }
    }
  })
    
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(!isRunning);
  };

  const handleRestart = () => {
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
    document.getElementById('seconds').value = null;
    document.getElementById('minutes').value = null;
    clearInterval(intervalId);
  };

  const handleSeconds = (event) => {
    setSeconds(event.target.value)
  };

  const handleMinutes = (event) => {
    setMinutes(event.target.value)
  };

  return (
    <>
      <input
        onChange={handleMinutes}
        placeholder='Minutes'
        id='minutes'
        type="number"
        min="0"
        max="999"
        className="border-solid border-2 border-sky-500 mr-1 pl-2 rounded"
      ></input>
      <input
        onChange={handleSeconds}
        placeholder='Seconds'
        id='seconds'
        type="number"
        min="0"
        max="59"
        className="border-solid border-2 border-sky-500 ml-1 pl-2 rounded"
      ></input>
      <h1
        className="text-4xl flex ml-11 mb-5 mt-3">
        {minutes < 10 ? "0" + minutes : minutes}:
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
      <button 
        onClick={handleStart}
        className="mr-2 border-solid border-2 border-sky-500 p-1 rounded bg-cyan-100">
        START
      </button>
      <button 
        onClick={handleStop}
        className="border-solid border-2 border-sky-500 p-1 rounded bg-cyan-100 mr-2">
        STOP
      </button>
      <button 
        onClick={handleRestart}
        className="border-solid border-2 border-sky-500 p-1 rounded bg-cyan-100">
        RESTART
      </button>
    </>
  );
};

export default Timer;
