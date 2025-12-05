
const Card=(props)=>{
    return(
        <div className="card_div">
            <h1>Name={props.name}</h1>
            <h1>Roll No={props.roll_no}</h1>
            <h1>Subject={props.subject}</h1>
            <h1>Branch={props.branch}</h1>
        </div>
    )
}
export default Card