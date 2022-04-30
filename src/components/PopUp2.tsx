import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/costum.css";
import axios from "axios";

function PopUpp(props: any) {
  const [text, setText] = useState<string>();
  const closeModal = () => {
    props.setOpen(false);
  };

  return (
    <Popup
      open={props.open}
      closeOnDocumentClick
      onClose={closeModal}
      className="bg-cooldark"
    >
      <div className="flex flex-col ">
        <a
          className="justify-end text-right text-white text-2xl"
          onClick={closeModal}
        >
          &times;
        </a>
        <h1 className="text-center text-lg text-white mb-3">Add new task</h1>
        <div className="flex justify-center">
          <input type="text" className="w-20 rounded-lg mr-5" />
          <button className="bg-coolpurple rounded-lg p-1 px-2">ADD</button>
        </div>
      </div>
    </Popup>
  );
}

export default PopUpp;
