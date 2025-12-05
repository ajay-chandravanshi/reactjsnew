
const App=()=>{
  
  // **********4 IMP Method Of LocalStorage*******

  localStorage.clear()

  localStorage.setItem('user','ajay')
  localStorage.setItem('age',22)
  localStorage.setItem('address','Bhopal')

  const name=localStorage.getItem('user')
  const add=localStorage.getItem('address')

  localStorage.removeItem('age')
  
  console.log(name)
  console.log(add)

  // ********store the object in local storage*******
  const user={
    'name':'ajay',
    'age':20,
    'address':'Bhopal'
  }
  localStorage.setItem('user',JSON.stringify(user))
  const userr=JSON.parse(localStorage.getItem('user'))
  console.log(userr)

  return(
    <div>

    </div>
  )
}
export default App