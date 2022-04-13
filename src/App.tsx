import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Steps from "../src/components/Steps";
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
            <Route exact path="/">
              <body>
                <Home />
              </body>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
