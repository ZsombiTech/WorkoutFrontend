import React from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Steps from "../src/components/Steps";
import Calories from "../src/components/Calories";
import Diet from "../src/components/Diet";
import Timer from "../src/components/Timer";
import Login from "../src/components/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const time = new Date();
time.setSeconds(time.getSeconds() + 600);

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/login">
            <body>
              <Login />
            </body>
          </Route>

          <div style={{ marginTop: "5rem" }}>
            <Route path="/steps">
              <body>
                <Navbar />
                <Steps />
              </body>
            </Route>
            <Route path="/home">
              <body>
                <Navbar />
                <Home />
              </body>
            </Route>
            <Route path="/calories">
              <body>
                <Navbar />
                <Calories />
              </body>
            </Route>
            <Route path="/diet">
              <body>
                <Navbar />
                <Diet />
              </body>
            </Route>
            <Route path="/timer">
              <body>
                <Navbar />
                <Timer />
              </body>
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
