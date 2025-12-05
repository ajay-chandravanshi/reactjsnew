import { useEffect, useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(100);

  const val1 = () => {
    setNum(num + 1);
  };

  const val2 = () => {
    setNum2(num2 + 100);
  };

  useEffect(() => {
    val2()
  }, [num]);

  return (
    <div>
      <h1>num value:-{num}</h1>
      <h1>num2 value:-{num2}</h1>
      <button onClick={val1}>Click Num</button>
      {/* <button onClick={val2}>Click Num2</button> */}
    </div>
  );
};
export default App;
