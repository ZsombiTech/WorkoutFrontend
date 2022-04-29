import react, { useState, useEffect } from "react";
import "../styles/costum3.css";
import axios from "axios";
import Task from "./Task";

interface Taskint {
  id: number;
  description: string;
  completed: boolean;
}

export default function Tasks(props: any) {
  const [progress, setProgress] = useState<Array<Taskint>>();
  const [completed, setCompleted] = useState<Array<Taskint>>();
  const handleFirst = () => {
    props.setFirst(!props.first);
  };

  const handleSecond = () => {
    props.setSecond(!props.second);
  };
  useEffect(() => {
    const username = localStorage.getItem("username");
    axios.get(`http://localhost:8000/gettask/${username}`).then((response) => {
      setProgress(
        response.data[0].tasks.filter(
          (task: Taskint) => task.completed === false
        )
      );
      setCompleted(
        response.data[0].tasks.filter(
          (task: Taskint) => task.completed === true
        )
      );
    });
  }, []);

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
              {progress &&
                progress.length > 0 &&
                progress.map((element, index) => (
                  <Task
                    key={index}
                    description={element.description}
                    completed={false}
                  />
                ))}
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
              {completed &&
                completed.length > 0 &&
                completed.map((element, index) => (
                  <Task
                    key={index}
                    description={element.description}
                    completed={true}
                  />
                ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
