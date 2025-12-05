import { useState } from "react";

// using object

// const App = () => {
//   const [num,setNum] = useState({name:'ajay',age:23})

//   const btnClicked=()=>{
//     const newNum={...num};
//     newNum.name='vineet'
//     newNum.age=30
//     setNum(newNum)
//   }
//   return (
//     <div>
//       <h1>{num.name},{num.age}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// };

// using array

// const App = () => {
//   const [arr, setArr] = useState([10, 20, 30, 40]);

//   const btnClicked = () => {
//     const newArr = [...arr];
//     newArr.push(99);
//     setArr(newArr)
//   };

//   return (
//     <div>
//       <h1>{arr}</h1>
//       <button onClick={btnClicked}>Click</button>
//     </div>
//   );
// };

// update using prev 

const App=()=>{
  const [obj,setObj]=useState({name:'ajay',age:23})

  const btnClicked=()=>{
    setObj(prev=>({...prev,name:'vineet',age:23}))
  }
  return(
    <div>
      <h1>{obj.name},{obj.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}
export default App;
