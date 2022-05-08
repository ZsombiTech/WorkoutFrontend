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
import ProfilePage from "../src/components/ProfilePage";
import axios from "axios";
import "reactjs-popup/dist/index.css";
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
        <Route exact path="/login">
          <body>
            <Login setLogged={setLogged} />
          </body>
        </Route>
        <Route exact path="/register">
          <body>
            <Register setLogged={setLogged} />
          </body>
        </Route>
        <Route exact path="/steps">
          <div style={{ marginTop: "5rem" }}>
            {logged && <Navbar setLogged={setLogged} />}
            <body>{logged ? <Steps /> : <Error />}</body>
          </div>
        </Route>
        <Route exact path="/home">
          <div style={{ marginTop: "5rem" }}>
            {logged && <Navbar setLogged={setLogged} />}
            <body>{logged ? <Home /> : <Error />}</body>
          </div>
        </Route>
        <Route exact path="/calories">
          <div style={{ marginTop: "5rem" }}>
            {logged && <Navbar setLogged={setLogged} />}
            <body>{logged ? <Calories /> : <Error />}</body>
          </div>
        </Route>
        <Route exact path="/diet">
          <div style={{ marginTop: "5rem" }}>
            {logged && <Navbar setLogged={setLogged} />}
            <body>{logged ? <Diet /> : <Error />}</body>
          </div>
        </Route>
        <Route exact path="/timer">
          <div style={{ marginTop: "5rem" }}>
            {logged && <Navbar setLogged={setLogged} />}
            <body>{logged ? <Timer /> : <Error />}</body>
          </div>
        </Route>
        <Route exact path="/profilepage">
          <div style={{ marginTop: "5rem" }}>
            {logged && <Navbar setLogged={setLogged} />}
            <body>{logged ? <ProfilePage /> : <Error />}</body>
          </div>
        </Route>
        <Route>
          <body>
            <Error />
          </body>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
