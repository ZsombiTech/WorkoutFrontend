import React, { useState, useEffect } from "react";
import "../styles/costum.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Calories() {
  const history = useHistory();
  const [daily, setDaily] = useState<any>();
  const [message, setMessage] = useState<string>("");
  const [exist, setExist] = useState<boolean>(false);
  const [calories, setCalories] = useState<number>();
  const [average, setAverage] = useState<number>();
  const [overall, setOverall] = useState<number>();

  useEffect(() => {
    const username = localStorage.getItem("displayName");
    const data = { username: username };
    axios.post("http://localhost:8000/getcalories", data).then((response) => {
      if (response.data == "no") {
        setExist(true);
        setMessage("No data");
      } else {
        setDaily(response.data.calorie);
      }
    });
    axios.post("http://localhost:8000/getavgcal", data).then((response) => {
      if (response.data == "no") {
        setExist(true);
        setMessage("No data");
      } else {
        setAverage(Math.round(response.data));
      }
    });
    axios.post("http://localhost:8000/getoverallcal", data).then((response) => {
      if (response.data == "no") {
        setExist(true);
        setMessage("No data");
      } else {
        setOverall(Math.round(response.data));
      }
    });
  }, []);

  const handleAddCalorie = () => {
    const username = localStorage.getItem("displayName");
    const data = { username: username, calories: calories };
    axios.post("http://localhost:8000/addcalories", data).then((response) => {
      console.log("juhe");
    });
    window.location.reload();
  };

  const handlePageDirect = () => {
    history.push("/diet");
  };

  const handlechange = (event: any) => {
    setCalories(event.target.value);
  };

  return (
    <>
      <div className="ran">
        <div className="profilebox5">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Burned calories</h1>
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
              <h1 className="profiletitle">Add calories</h1>
              <br />
            </div>
          </div>
          <hr />
          <div className="flexbuttons2">
            <input
              type="text"
              placeholder="Calories today"
              className="stepinput"
              value={calories}
              onChange={handlechange}
            />
            <button className="stepbutton" onClick={handleAddCalorie}>
              Add
            </button>
          </div>
          <br />
        </div>

        <br />
        <div
          className="profilebox5 hover:bg-coollightdark mb-10"
          onClick={handlePageDirect}
        >
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Check out my meals</h1>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
