
import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const[time, setTime] = useState(0)
  const[minute, setMinute] = useState(0)
  const[second, setSecond] = useState(0)

  // useEffect(() => {

  // }, 1000)

  const handleMinuteChange = (e) => {
    const value = parseInt(e.target.value)
    if(value>=0) {
      setMinute(value)
      setTime(value * 60 + second)
    }
  
  }
  
  const handleSecondChange = (e) => {
    const value = parseInt(e.target.value)
    if (value >= 0) {
      setSecond(value)
      setTime(minute * 60 + value)
    }
  }

  const formatTime = (seconds) => {
    const minute = Math.floor(seconds / 60)
    const second = Math.floor(seconds % 60)
    return `${String(minute)}: ${String(second)}`
  }
  return (
    <div>
      <h1>Timer</h1>
      <div style={{display:'flex'}}>
      <input type="text" onChange={(e) => handleMinuteChange(e)} placeholder='0'/> 
      <div>Minutes</div>
      <input type="text" onChange={(e) => handleSecondChange(e)} placeholder='0'/> 
      <div>Second</div>
      <button>START</button>
      </div>
 
      <button>PAISE/RESUME</button>
      <button>RESET</button>
      <h1>{formatTime(time)}</h1>
    </div>
  );
}

export default App;
