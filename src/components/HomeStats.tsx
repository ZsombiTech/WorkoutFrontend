import react, { useState, useEffect } from "react";
import "../styles/costum2.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import VisibilitySensor from "react-visibility-sensor";
import axios from "axios";

import "../styles/package.css";

export default function HomeStats() {
  const [close, setClose] = useState<boolean>(true);
  const [activity, setActivity] = useState<number>(0);
  const [percen, setPercen] = useState<number>(0);

  const op = () => {
    setClose(!close);
  };

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios.get("http://localhost:8000/getrandom", config).then((response) => {
      setActivity(response.data);
    });
  }, []);

  const handleTrig = () => {
    setPercen(activity);
  };
  return (
    <>
      {close && (
        <div className="profilebox3">
          <div className="pageflexboxtext">
            <h1 className="profiletitle2">Activity</h1>
            <p className="randomtext" onClick={op}>
              Close
            </p>
          </div>

          <div className="profilebox2">
            <div style={{ width: 200, height: 200 }}>
              {activity && (
                <VisibilitySensor>
                  {({ isVisible }) => {
                    if (isVisible) handleTrig();
                    return (
                      <CircularProgressbar
                        value={percen}
                        text={`${percen}%`}
                        styles={buildStyles({
                          strokeLinecap: "butt",
                          textSize: "16px",
                          pathTransitionDuration: 1,
                          pathColor: "#8761E6",
                          textColor: "#8761E6",
                          trailColor: "#2b2e43",
                          backgroundColor: "##2f334a",
                        })}
                      />
                    );
                  }}
                </VisibilitySensor>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
