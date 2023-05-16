import React from "react";
import { useState } from "react";

const App = () => {
 
  const [count, setCount] = useState(0);

  const increment = () => {

    setCount(count + 1);
    console.log(count);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;
