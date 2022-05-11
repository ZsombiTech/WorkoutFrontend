import react, { useState } from "react";
import "../styles/costum3.css";
import axios from "axios";

interface Taskint {
  id: number;
  description: string;
  completed: boolean;
}

export default function Task(props: any) {
  const handleDone = () => {
    const username = localStorage.getItem("displayName");
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios.delete("http://localhost:8000/deletetask", {
      data: {
        description: props.description,
        username: username,
      },
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    axios
      .get(`http://localhost:8000/gettask/${username}`, config)
      .then((response) => {
        props.setProgress(
          response.data[0].tasks.filter(
            (task: Taskint) => task.completed === false
          )
        );
        props.setCompleted(
          response.data[0].tasks.filter(
            (task: Taskint) => task.completed === true
          )
        );
      });
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-between border-2 border-white p-5 items-center inditask mb-5">
        <p className="ml-10 text-lg text-white inditasktext">
          {props.description}
        </p>
        {!props.completed && (
          <button
            className="mr-10 text-lg text-white bg-coolpurple p-3 pl-4 pr-4 rounded-xl inditaskbutton"
            onClick={handleDone}
          >
            Done
          </button>
        )}
      </div>
    </>
  );
}
