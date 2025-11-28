const App = () => {
  // function user(){
  //   console.log("Button is clicked")
  // }

  function input(elem) {
    console.log(elem);
  }

  return (
    <div>
      <button onClick={function(){console.log("button is clicked")}}>click here</button>
      <button onClick={()=>{console.log("button is clicke again")}}>Explore now</button>

      <input
        onChange={function(elem){
          input(elem.target.value)
        }}
        type="text"
        placeholder="Enter your name"
      />
    </div>
  );
};
export default App;
