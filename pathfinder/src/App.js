import React, { useState } from "react";
import "./App.css";
import Dropdown from "./Dropdown.js"

  const items = [
    {
      id: 1,
      value: "Pulp Fiction",
    },
    {
      id: 2,
      value: "The Prestige",
    },
    {
      id: 3,
      value: "Blade Runner 2049",
    },
  ];

function App() {
  const [hello, setHello] = useState("hello");

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>
        Buy Movies{' '}
        <span role="img" aria-label="Movie projector">
          🎥
        </span>
      </h1>
      <Dropdown title="Select movie" items={items} multiSelect />
    </div>

  );
}

export default App;
