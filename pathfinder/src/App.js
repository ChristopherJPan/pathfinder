import React, { useState } from "react";
import "./App.css";

function App() {
  const [hello, setHello] = useState("hello");
  return (
    <div className="App">
      <header className="App-header">
        <p>Hi Chris</p>
      </header>
    </div>
  );
}

export default App;
