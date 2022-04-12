import * as React from "react";
import "../styles/costum3.css";

export default function Tasks() {
  return (
    <>
      <div className="taskscontainer">
        <div className="pageflexboxtext ">
          <h3 className="profiletitle2">Done</h3>
          <h3 className="taskscontainertext">Close</h3>
        </div>
      </div>
      <div className="taskscontainer">
        <div className="pageflexboxtext ">
          <h3 className="profiletitle2">Progress</h3>
          <h3 className="taskscontainertext2">Close</h3>
        </div>
      </div>
    </>
  );
}
