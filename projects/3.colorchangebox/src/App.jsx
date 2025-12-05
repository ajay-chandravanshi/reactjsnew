import { useState } from "react";

const App = () => {
  
  const[color,setColor]=useState("white")

  const red=()=>{
    setColor("red")
  }
  const blue=()=>{
    setColor("blue")
  }
  const green=()=>{
    setColor("green")
  }
  return (
    <div>
      <div className="container">
        <div className="first" style={{backgroundColor:color}}>{color}</div>
      </div>
      
      <button onClick={red}>RED</button>
      <button onClick={blue}>BLUE</button>
      <button onClick={green}>GREEN</button>
    </div>
  );
};
export default App;
