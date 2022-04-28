import react, { useState } from "react";
import "../styles/costum3.css";
import Task from "./Task";

export default function Tasks(props: any) {
  const handleFirst = () => {
    props.setFirst(!props.first);
  };

  const handleSecond = () => {
    props.setSecond(!props.second);
  };

  return (
    <>
      {props.show && (
        <>
          {props.first && (
            <div className="taskscontainer">
              <div className="pageflexboxtext ">
                <h3 className="profiletitle2">Progress</h3>
                <h3 className="taskscontainertext" onClick={handleFirst}>
                  Close
                </h3>
              </div>
              <Task />
              <Task />
              <Task />
            </div>
          )}
          {props.second && (
            <div className="taskscontainer">
              <div className="pageflexboxtext ">
                <h3 className="profiletitle2">Completed</h3>
                <h3 className="taskscontainertext2" onClick={handleSecond}>
                  Close
                </h3>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
