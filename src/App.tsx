import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Steps from "../src/components/Steps";
import Calories from "../src/components/Calories";
import Table from "../src/components/Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ marginTop: "5rem" }}>
          <Switch>
            <Route path="/steps">
              <body>
                <Steps />
              </body>
            </Route>
            <Route path="/home">
              <body>
                <Home />
              </body>
            </Route>
            <Route path="/calories">
              <body>
                <Calories />
              </body>
            </Route>
            <Route path="/diet">
              <body>
                <Table />
              </body>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
