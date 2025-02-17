import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [listData, setListData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.length) {
      setListData((prevList) => [...prevList, inputValue]);
      setInputValue("");
    }
  };
  const removeItem = () => {
    setListData([]);
  };

  return (
    <div className="App">
      <input
        type={"text"}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddItem}>add </button>
      <div style={{ paddingTop: "15px solid black" }} onClick={removeItem}>
        <button>Reset</button>
      </div>
      {listData.length > 0 && (
        <ol>
          {listData.sort().map((t) => {
            return <li>{t} </li>;
          })}
        </ol>
      )}
    </div>
  );
}
