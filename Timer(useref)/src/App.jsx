import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const timeref = useRef(null);

  const start = () => {
    if (!timeref.current) {
      timeref.current = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(timeref.current);
    timeref.current = null;
   
  };


  
  const reset = () => {
    clearInterval(timeref.current);
    timeref.current = null;
    setTime(0);
  };

  return (
    <div className="container">
      <h1>Time: {time}</h1>
     
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
