import { useState } from "react";

const App = () => {

  const[count,setCount]=useState(0)

  const Increase=()=>{
    setCount(count+1)
  }
  const decrease=()=>{
    if(count>0){
      setCount(count-1)
    }
    }

  const reset=()=>{
    setCount(0)
  }
  return (
    <div className="box">
      <h1>Counter App</h1>

      <div className="minibox">
        <button onClick={Increase} className="increase">+</button>

        <h1 className="count">{count}</h1>
        
        <button onClick={decrease} className="decrease">-</button>
      </div>

      <button onClick={reset} className="reset">Reset</button>
    </div>
  );
};
export default App;
