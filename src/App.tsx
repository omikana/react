import React, { useState } from "react";
import "./app.css";
// import styles from "./app.module.css";
function App() {
  const [count, setCout] = useState(0);

  //増えるは5まで
  //減るは0まで
  console.log(count);
  return (
    <div>
      <div className="App">{count}</div>
      <button
        type={"button"}
        disabled={count >= 5}
        onClick={() => {
          setCout((prevState) => prevState + 1);
        }}
      >
        増える
      </button>
      <button
        type={"button"}
        disabled={count <= 0}
        onClick={() => {
          setCout((prevState) => prevState - 1);
        }}
      >
        減る
      </button>
      <button
        type={"button"}
        onClick={() => {
          setCout(0);
        }}
      >
        リセット
      </button>
    </div>
  );
}

export default App;
