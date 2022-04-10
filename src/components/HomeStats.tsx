import * as React from "react";
import "../styles/costum2.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import "../styles/package.css";

export default function HomeStats() {
  const percentage = 55;
  return (
    <>
      <div className="profilebox3">
        <div className="pageflexboxtext">
          <h1 className="profiletitle2">Activity</h1>
          <p className="randomtext">Checkout</p>
        </div>

        <div className="profilebox2">
          <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                strokeLinecap: "butt",
                textSize: "16px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: "#8761E6",
                textColor: "#8761E6",
                trailColor: "#2b2e43",
                backgroundColor: "##2f334a",
              })}
            />
          </div>
        </div>
      </div>
    </>
  );
}
