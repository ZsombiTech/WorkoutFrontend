import react, { useState, useEffect } from "react";
import "../styles/costum3.css";
import axios from "axios";
import Task from "./Task";

interface Taskint {
  id: number;
  description: string;
}

export default function Tasks(props: any) {
  const [list, setList] = useState<Array<Taskint>>();
  const handleFirst = () => {
    props.setFirst(!props.first);
  };

  const handleSecond = () => {
    props.setSecond(!props.second);
  };
  useEffect(() => {
    const username = localStorage.getItem("username");
    axios.get(`http://localhost:8000/gettask/${username}`).then((response) => {
      setList(response.data[0].tasks);
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
              {list &&
                list.length > 0 &&
                list.map((element, index) => (
                  <Task key={index} description={element.description} />
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
            </div>
          )}
        </>
      )}
    </>
  );
}
