import React, { useState, useEffect } from "react";

const users = [
  { email: "a@a.com", password: "a" },
  { email: "b@b.com", password: "b" },
  { email: "c@c.com", password: "c" },
];

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [messageInt, setMessageInt] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setMessage({ text: "Match found successfully", color: "green" });
    } else {
      setMessage({ text: "Match not found", color: "red" });
    }

    let counter = 3;
    const interval = setInterval(() => {
      setMessageInt({
        text: `This message will disappear in ${counter}`,
        color: "black",
      });
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        setMessage(null);
        setMessageInt(null);
      }
    }, 1000);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {message && <h2 style={{ color: message.color }}>{message.text}</h2>}
      {messageInt && <h3>{messageInt.text}</h3>}
    </div>
  );
}

export default App;
