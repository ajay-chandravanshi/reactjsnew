import Home from './components/Home'
import Navbar from './components/Navbar'


const App=()=>{
  const name="Ajay"
  const age=24

  return(
    <div className='container'>
      <h1>Hello My name is {name}</h1>
      <h2>and my age is {age}</h2>
      <Home />
      <Navbar />
    </div>
  )
}

export default App