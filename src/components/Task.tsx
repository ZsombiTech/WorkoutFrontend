import react, { useState } from "react";
import "../styles/costum3.css";

export default function Task(props: any) {
  return (
    <>
      <div className="flex justify-between border-2 border-white p-5 items-center inditask mb-5">
        <p className="ml-10 text-lg text-white inditasktext">
          {props.description}
        </p>
        <button className="mr-10 text-lg text-white bg-coolpurple p-3 pl-4 pr-4 rounded-xl inditaskbutton">
          Done
        </button>
      </div>
    </>
  );
}
