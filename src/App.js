import React, { useState, useCallback } from "react";
import './App.css';
import Button from "./Button";


function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  const increment = () => setCount(c => c + 1);

  const handleClick = useCallback(() => {
    console.log("Child Button Clicked!")
  }, [])

  return (
    <div style={{ textAlign: "center", padding: "2rem" }} className="App">
      <h1>useCallback Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment Count</button>
      <br />
      <button onClick={() => setOther(o => !o)}>Toggle Other State</button>
      <Button handleClick={handleClick} label="Child Button" />

    </div>
  );
}

export default App;
