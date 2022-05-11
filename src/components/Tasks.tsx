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
  const [reload, setReload] = useState<boolean>(true);

  const handleFirst = () => {
    props.setFirst(!props.first);
  };

  const handleSecond = () => {
    props.setSecond(!props.second);
  };
  useEffect(() => {
    const username = localStorage.getItem("displayName");
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .get(`http://localhost:8000/gettask/${username}`, config)
      .then((response) => {
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

        setReload(false);
        setReload(true);
      });
  }, [props.added]);

  return (
    <>
      {props.show && reload && (
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
                    setProgress={setProgress}
                    setCompleted={setCompleted}
                  />
                ))}
              {progress && progress.length == 0 && (
                <p className="text-xl text-white">No tasks to show</p>
              )}
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
                    setProgress={setProgress}
                    setCompleted={setCompleted}
                  />
                ))}
              {completed && completed.length == 0 && (
                <p className="text-xl text-white">No tasks to show</p>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}
