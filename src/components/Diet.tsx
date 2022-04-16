import * as React from "react";
import Table from "./Table";

export default function Diet() {
  return (
    <div className="ran">
      <h1 className="profiletitle">What I ate?</h1>
      <div className="profilebox5">
        <Table />
      </div>
      <div className="profilebox5">
        <div className="profileflexbox4">
          <div className="profiletext2">
            <h1 className="profiletitle">Add meal</h1>
            <br />
          </div>
        </div>
        <hr />
        <div className="flexbuttons5">
          <input
            type="text"
            placeholder="Food name"
            className="stepinput foodinput"
          />
          <input
            type="text"
            placeholder="Calories"
            className="stepinput foodinput"
          />
          <input
            type="text"
            placeholder="Amount"
            className="stepinput foodinput"
          />
          <button className="stepbutton">Add</button>
        </div>
        <br />
      </div>
    </div>
  );
}
