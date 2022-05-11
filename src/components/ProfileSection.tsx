import React, { useState, useEffect } from "react";
import "../styles/costum.css";
import axios from "axios";
import PopUp2 from "./PopUp2";
import { Link } from "react-router-dom";

export default function ProfileSection(props: any) {
  const [location, setLocation] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");

  const handleShow = () => {
    props.setShow(!props.show);
    props.setFirst(!props.first);
    props.setSecond(!props.second);
  };

  const handleAdd = () => {
    setOpen(true);
  };

  useEffect(() => {
    const userid = localStorage.getItem("user_id");
    const username = localStorage.getItem("displayName");
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    axios
      .get(`http://localhost:8000/getProfileData/:${userid}`, config)
      .then((response) => {
        setLocation(response.data.location);
      });
    if (username) {
      setUsername(username);
    }
  });

  return (
    <>
      <div className="profilebox">
        <div className="profileflexbox">
          <div className="profilepicture">
            <img
              src="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Profile Picture"
              className="profilepictureimg hover:shadow-md hover:shadow-white"
            />
          </div>
          <div className="profiletext">
            <h1 className="profiletitle">{username}</h1>
            <h3 className="profiledescripton">Desc</h3>
            <div className="flexbuttons">
              <Link to="/profilepage">
                <input
                  type="submit"
                  className="profilesubmitbutton hover:bg-coollightdark"
                  value="Profile"
                />
              </Link>

              <div className="profilesubmitbutton2">{`Location ${location}`}</div>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="profileflexbox2">
          <button
            className="profileshowtasks hover:text-white"
            onClick={handleShow}
          >
            Show tasks
          </button>
          <button
            className="profileshowall hover:text-white"
            onClick={handleShow}
          >
            All
          </button>
          <div className="profileshowadd hover:text-white" onClick={handleAdd}>
            <p>Add tasks</p>
          </div>
          <PopUp2 open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}
