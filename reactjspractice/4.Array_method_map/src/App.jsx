import Card from "./components/Card"

const App=()=>{
  const arr=[
    {
      name:"ajay",
      roll_no:20,
      subject:"Maths",
      branch:"mechanical"
    },
    {
      name:"yuvraj",
      roll_no:21,
      subject:"computer",
      branch:"cse"
    },
    {
      name:"Nisa",
      roll_no:22,
      subject:"agriculture",
      branch:"civil"
    }
  ]
  return(
    <div className="container">
      {arr.map(function(elem,idx){
        return <div key={idx}> <Card name={elem.name} roll_no={elem.roll_no} subject={elem.subject} branch={elem.branch}/>
        </div>
      })}
      
    </div>
  )
}
export default App