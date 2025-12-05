import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(1);

  // ******** Fetch data from API ********
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setData(response.data);
  };

  // ******** Call API whenever page index changes ********
  useEffect(() => {
    getData();
  }, [index]);


  // ******** Generate UI cards ********
  let printUserData = <h3 className="no-user">loading....</h3>;

  if (data.length > 0) {
    printUserData = data.map((elem, idx) => {
      return (
        <div key={idx} className="card">
          <a href={elem.url} target="_blank">
            <div className="img-wrapper">
              <img src={elem.download_url} alt="" />
            </div>
          </a>
          <h2 className="author">{elem.author}</h2>
        </div>
      );
    });
  }

  return (
    <div>

      <div className="app">
        <div className="grid">{printUserData}</div>
      </div>

      {/* ******** Pagination Buttons ******** */}
      <div className="pagination">

        <button
          onClick={() => {
            if (index > 1){
              setIndex(index - 1)
              setData([])
            };
          }}
          className="btn"
        >
          Prev
        </button>

        <h3>Page {index}</h3>

        <button onClick={() => {
          setIndex(index + 1)
          setData([])
        }} className="btn">
          Next
        </button>

      </div>
    </div>
  );
};

export default App;
