import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Steps from "../src/components/Steps";
import Calories from "../src/components/Calories";
import Diet from "../src/components/Diet";
import Timer from "../src/components/Timer";
import Login from "../src/components/Login";
import Register from "../src/components/Register";
import Error from "../src/components/404";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [logged, setLogged] = useState<boolean>(false);

  useEffect(() => {
    const log = localStorage.getItem("logged");
    setLogged(log == "true");
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios.post("http://localhost:8000/auth/verify", {}, config).then(
      (res) => {
        if (res.data.response === "Good") {
          setLogged(true);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }, [logged]);

  return (
    <Router>
      <Switch>
        <div className="App">
          {logged && <Navbar setLogged={setLogged} />}
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
              <body>{logged ? <Steps /> : <Error />}</body>
            </Route>
            <Route path="/home">
              <body>{logged ? <Home /> : <Error />}</body>
            </Route>
            <Route path="/calories">
              <body>{logged ? <Calories /> : <Error />}</body>
            </Route>
            <Route path="/diet">
              <body>{logged ? <Diet /> : <Error />}</body>
            </Route>
            <Route path="/timer">
              <body>
                {logged ? <Timer /> : <Error />}
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
