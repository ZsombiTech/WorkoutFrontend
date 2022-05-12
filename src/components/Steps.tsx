import React, { useState, useEffect } from "react";
import "../styles/costum.css";
import axios from "axios";

export default function Steps() {
  const [daily, setDaily] = useState<any>();
  const [message, setMessage] = useState<string>("");
  const [exist, setExist] = useState<boolean>(false);
  const [stepcount, setStepCount] = useState<number>();
  const [average, setAverage] = useState<number>();
  const [overall, setOverall] = useState<number>();

  useEffect(() => {
    const username = localStorage.getItem("displayName");
    const data = { username: username };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .post("http://workoutbackendd.herokuapp.com/getsteps", data, config)
      .then((response) => {
        if (response.data == "no") {
          setExist(true);
          setMessage("No data");
        } else {
          setDaily(response.data.stepcount);
        }
      });
    axios
      .post("http://workoutbackendd.herokuapp.com/getavg", data, config)
      .then((response) => {
        if (response.data == "no") {
          setExist(true);
          setMessage("No data");
        } else {
          setAverage(Math.round(response.data));
        }
      });
    axios
      .post("http://workoutbackendd.herokuapp.com/getoverall", data, config)
      .then((response) => {
        if (response.data == "no") {
          setExist(true);
          setMessage("No data");
        } else {
          setOverall(Math.round(response.data));
        }
      });
  }, []);

  const handleAddStep = () => {
    const username = localStorage.getItem("displayName");
    const data = { username: username, stepcount: stepcount };
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .post("http://workoutbackendd.herokuapp.com/addsteps", data, config)
      .then((response) => {
        console.log("juhe");
      });
    window.location.reload();
  };

  const handlechange = (event: any) => {
    setStepCount(event.target.value);
  };
  return (
    <>
      <div className="ran">
        <div className="profilebox5">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Steps</h1>
              <br />
            </div>
          </div>
          <hr />
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Daily</button>
            <div className="profileshowadd5">
              {exist ? message : <p>{daily}</p>}
            </div>
          </div>
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Average</button>
            <div className="profileshowadd5">
              {exist ? message : <p>{average}</p>}
            </div>
          </div>
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Overall</button>
            <div className="profileshowadd5">
              {exist ? message : <p>{overall}</p>}
            </div>
          </div>
        </div>
        <div className="profilebox5">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Add steps</h1>
              <br />
            </div>
          </div>
          <hr />
          <div className="flexbuttons2">
            <input
              type="text"
              placeholder="Steps today"
              className="stepinput"
              value={stepcount}
              onChange={handlechange}
            />
            <button className="stepbutton" onClick={handleAddStep}>
              Add
            </button>
          </div>
          <br />
        </div>
      </div>
      <br />
    </>
  );
}
