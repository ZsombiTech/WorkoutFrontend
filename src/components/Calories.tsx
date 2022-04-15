import * as React from "react";
import "../styles/costum.css";

export default function Calories() {
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
              <p>18</p>
            </div>
          </div>
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Weekly</button>
            <div className="profileshowadd5">
              <p>18</p>
            </div>
          </div>
          <div className="profileflexbox5">
            <button className="profileshowtasks5">Monthy</button>
            <div className="profileshowadd5">
              <p>18</p>
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
            />
            <button className="stepbutton">Add</button>
          </div>
          <br />
        </div>
        <br />
        <div className="profilebox5">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">My meals</h1>
              <br />
            </div>
          </div>
          <hr />
          <div className="flexbuttons2">
            <p className="profileshowtitle">Day</p>
            <p className="profileshowtitle">Food</p>
            <p className="profileshowtitle">Full calories</p>
          </div>

          <br />

          <div className="flexbuttons2">
            <p className="profileshowtasks">Monday</p>
            <p className="profileshowtasks">Hamburger</p>
            <p className="profileshowtasks">270kcl</p>
          </div>
        </div>
      </div>
    </>
  );
}
