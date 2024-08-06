
import { useEffect, useState, useRef } from 'react';
import './App.css';


function App() {
  const timerRef = useRef(null)
  const[times, setTimes] = useState(0)
  const[minutes, setMinutes] = useState(0)
  const[seconds, setSeconds] = useState(0)
  //we can use useRef to store value, so it will not be lost after re-render
  const intervalRef = useRef(null)
  const [isRunning, setIsRunning] = useState(false)


  // count down
  useEffect(()=>{
    if(isRunning) {
      timerRef.current = setInterval(() => {
        setTimes(prevSeconds => {
          if(prevSeconds <=0) {
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0
          
        } return prevSeconds - 1})
      },1000)
    } else {
      clearInterval(timerRef.current)
    }
    return () => {
      clearInterval(timerRef.current)
    }
  },[isRunning])

  const handleResume = () => {
  setIsRunning(!isRunning)
  }
  


  const handleMinuteChange = (e) => {
    const value = parseInt(e.target.value,10)
    if(value>=0) {
      setMinutes(value)
      setTimes(value * 60 + seconds)
    }
  
  }
  
  const handleSecondChange = (e) => {
    const value = parseInt(e.target.value,10)
    if (value >= 0) {
      setSeconds(value)
      setTimes(minutes * 60 + value)
    }
  }

  const handleStart = () => {
   
      setIsRunning(true)
    
  }
  
  const handleReset = () => {
    setIsRunning(false)
    setTimes(0)
    setMinutes(0)
    setSeconds(0)
  }


  const formatTime = (seconds) => {
    const minute = Math.floor(seconds / 60)
    const second = Math.floor(seconds % 60)
   
    return (
       minute >= 0 && second >= 0 ? 
       `${String(minute).padStart(2,'0')}: ${String(second).padStart(2,'0')}` :
       `${String(0).padStart(2,'0')}: ${String(0).padStart(2,'0')}`
       
    )
  }
  return (
    <div>
      <h1>Timer</h1>
      <div style={{display:'flex'}}>
      <input type="text" onChange={(e) => handleMinuteChange(e)} placeholder='0' value={minutes}/> 
      <div>Minutes</div>
      <input type="text" onChange={(e) => handleSecondChange(e)} placeholder='0' value={seconds} /> 
      <div>Second</div>
      <button onClick={handleStart}>START</button>
      </div>
 
      <button onClick={handleResume}>PAUSE/RESUME</button>
      <button onClick={handleReset}>RESET</button>
      <h1>{formatTime(times)}</h1>
    </div>
  );
}

export default App;




