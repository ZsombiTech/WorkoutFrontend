import * as React from "react";
import "../styles/costum.css";

export default function Steps() {
  return (
    <>
      <div className="ran">
        <div className="profilebox">
          <div className="profileflexbox4">
            <div className="profiletext2">
              <h1 className="profiletitle">Steps</h1>
            </div>
          </div>
          <hr />
          <div className="profileflexbox2">
            <button className="profileshowtasks">Show tasks</button>
            <button className="profileshowall">All</button>
            <div className="profileshowadd">
              <p>Add tasks</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
