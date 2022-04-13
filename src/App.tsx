import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: "5rem" }}>
        <body>
          <Home />
        </body>
      </div>
    </div>
  );
}

export default App;
