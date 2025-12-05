
const App=()=>{

  // *********using normal function******
  async function getdata(){
    const promise=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await promise.json()
    console.log(data)
  }

  // *********using map function******

  const getData=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data=await response.json()
    console.log(data)

  }
  return(
    <div>
      <h1>Hello sir</h1>
      <button onClick={getData} >Click Map Function Here</button>
      <button onClick={getdata} >Click normal Function Here</button>
    </div>
  )
}
export default App