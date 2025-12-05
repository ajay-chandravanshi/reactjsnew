import First from "./componenets/First";

const App = () => {
  const obj = [
    {
      name: "ajay",
      age: 23,
    },
    {
      name: "gourav",
      age: 21,
    },
  ];
  return (
    <div>
      {obj.map(function (elem) {
        return (
          <First name={elem.name} age={elem.age} />
      );
      })}
      <h1>Hello sir</h1>
    </div>
  );
};
export default App;
