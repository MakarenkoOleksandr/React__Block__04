import { useState, useEffect } from "react";
import InputAmount from "./InputAmount";
import Convert from "./Convert";
import getRate from "./getRate";

function App() {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    getRate().then((data) => setRate(data));
  }, []);

  const [amount, setAmount] = useState(0);

  return (
    <div className="App">
      <Convert amount={amount} rate={rate} />
      <InputAmount onChange={setAmount} />
    </div>
  );
}

export default App;
