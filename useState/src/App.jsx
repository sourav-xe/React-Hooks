import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const Increase = ()=>{
    setCount(count +1);
    
  };

  const Decrease = ()=>{
    if(count>0){
      setCount(count - 1);
    }
    else{
      alert("value cant be less than 0")
    }
    
  };

  const Reset = ()=>{
   setCount (count = 0)
  }


  return (
    <>
      <h2>Counter {count}</h2>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease}>Increase</button>
      <button onClick={Reset}>Reset</button>
    </>
  )
}

export default App
