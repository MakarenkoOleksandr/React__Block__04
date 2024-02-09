import React, { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [oddNumber, setOddNumber] = useState(0);

  useEffect(() => {
    if (counter % 2 !== 0) {
      setOddNumber(counter);
    }
  }, [counter]);

  return (
    <div>
      <h2>{oddNumber}</h2>
      <button onClick={() => setCounter(counter + 1)}>Count</button>
    </div>
  );
}

export default App;
