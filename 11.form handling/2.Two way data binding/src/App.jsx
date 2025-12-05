import { useState } from "react"

const App=()=>{

  const[title,setTitle]=useState('yash')

  const submitHandle=(e)=>{
    e.preventDefault()
    console.log('Form Submitted by',title)
    setTitle('')
  }
  return(
    <div>
      <form onSubmit={(e)=>{submitHandle(e)}}>

        <input 
        type="text"
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }} 
        placeholder="Enter your name"/>

        <button>Submit</button>

      </form>
    </div>
  )
}
export default App