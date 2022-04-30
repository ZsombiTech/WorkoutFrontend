import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/costum.css";
import axios from "axios";

function PopUpp(props: any) {
  const closeModal = () => {};
  return (
    <Popup open={props.open} closeOnDocumentClick onClose={closeModal}>
      <div className="modal">
        <a className="close" onClick={closeModal}>
          &times;
        </a>
        <h1>Add new task</h1>
      </div>
    </Popup>
  );
}

export default PopUpp;
