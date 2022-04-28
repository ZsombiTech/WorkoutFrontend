import react, { useState } from "react";
import "../styles/costum3.css";

export default function Task(props: any) {
  return (
    <>
      <div className="flex border-2 border-white">
        <p>The task</p>
        <button>Done</button>
      </div>
    </>
  );
}
