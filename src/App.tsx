import React, { useState } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Steps from "../src/components/Steps";
import Calories from "../src/components/Calories";
import Diet from "../src/components/Diet";
import Timer from "../src/components/Timer";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [logged, setLogged] = useState<boolean>(false);

  return (
    <Router>
      <Switch>
        <div className="App">
          {logged && <Navbar />}
          <Route path="/login">
            <body>
              <Login setLogged={setLogged} />
            </body>
          </Route>
          <Route path="/register">
            <body>
              <Register setLogged={setLogged} />
            </body>
          </Route>
          <div style={{ marginTop: "5rem" }}>
            <Route path="/steps">
              <body>{logged ? <Steps /> : <h1>d</h1>}</body>
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
                <Diet />
              </body>
            </Route>
            <Route path="/timer">
              <body>
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
