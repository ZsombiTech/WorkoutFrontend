import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "../styles/costum.css";

function PopUp(props: any) {
  const [open, setOpen] = useState<boolean>(false);
  const closeModal = () => props.setOpen(false);
  return (
    <div>
      <Popup open={props.open} closeOnDocumentClick onClose={closeModal}>
        <a className="closepopup" onClick={closeModal}>
          &times;
        </a>
        <div className="popupmodal">{props.text}</div>
      </Popup>
    </div>
  );
}

export default PopUp;
