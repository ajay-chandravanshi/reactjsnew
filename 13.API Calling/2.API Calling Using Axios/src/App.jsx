import axios from "axios"
import { useState } from "react"

const App=()=>{

  const[data,setdata]=useState([])

  const getData=async()=>{
    const response= await axios.get('https://jsonplaceholder.typicode.com/users')
    setdata(response.data)
  }

  return(
    <div>
      <h1>Hello sir</h1>
      <div>
        {data.map(function(elem,idx){
          return <h1>{elem.name},{idx}</h1>
        })}
      </div>
      <button onClick={getData}>Click Here</button>
    </div>
  )
}
export default App