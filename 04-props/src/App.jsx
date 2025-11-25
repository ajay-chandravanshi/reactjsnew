import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">

      <Card  user='Ajay' age={18} img="https://static.vecteezy.com/system/resources/previews/022/653/879/non_2x/fantasy-island-with-waterfalls-3d-illustration-elements-of-this-image-furnished-by-nasa-generative-ai-free-photo.jpg"/>
      
      <Card user="Gourav" age={16} img="https://cdn.mos.cms.futurecdn.net/g3RtAqBvLgYp5G2g922M8c.jpg"/>

    </div>
  );
};
export default App;
