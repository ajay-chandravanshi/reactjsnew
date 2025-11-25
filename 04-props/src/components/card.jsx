const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img}/>
      <h1>{props.user}</h1>
      <h1>age:-{props.age}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates.</p>
      <button>View Profile</button>
    </div>
  );
};
export default Card;
