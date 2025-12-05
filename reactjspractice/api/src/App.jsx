import axios from "axios";
import { useState } from "react";

const App = () => {
  const[data,setData]=useState([])

  const apiData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(response.data);
    
  };
  return (
    <div>
      <h1>Hello sir</h1>
      <div>
        {data.map((elem,idx) => {
         return <h1>{elem.name},{idx}</h1>;
        })}
      </div>
      <button onClick={apiData}>Click Here</button>
    </div>
  );
};
export default App;
