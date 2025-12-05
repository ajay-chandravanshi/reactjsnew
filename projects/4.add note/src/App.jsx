import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);

  const submitHandle = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title: title, detail: detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deletenote=(idx)=>{
    const copyTask=[...task]
    
    copyTask.splice(idx,1)
    setTask(copyTask)
    alert("Deleted successfully")
  }

  return (
    <div className="notes-app">
      <div className="panel left-panel">
        <h1 className="title">Add Notes</h1>

        <form
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <input
            className="note-input"
            type="text"
            placeholder="Enter Notes Here"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            className="note-textarea"
            placeholder="Enter Detail Here"
            value={detail}
            onChange={(e) => {
              setDetail(e.target.value);
            }}
          ></textarea>
          <button className="add-btn">Add Note</button>
        </form>
      </div>

      <div className="panel right-panel">
        <h1 className="title">Your Notes</h1>

        <div className="notes-grid">
          {task.map(function (elem, idx) {
            return (
              <div key={idx} className="note-card">
                <button onClick={()=>{
                  deletenote(idx)
                }} className="delete-btn">✕</button>
                <h3>{elem.title}</h3>
                <p>{elem.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default App;
