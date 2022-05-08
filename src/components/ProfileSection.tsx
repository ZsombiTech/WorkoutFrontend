import React, { useState, useEffect } from "react";
import "../styles/costum.css";
import axios from "axios";
import PopUp2 from "./PopUp2";
import { Link } from "react-router-dom";

export default function ProfileSection(props: any) {
  const [followers, setFollowers] = useState<number>(0);
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
    axios
      .get(`http://localhost:8000/getProfileData/:${userid}`)
      .then((response) => {
        setFollowers(response.data.followers);
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
              className="profilepictureimg"
            />
          </div>
          <div className="profiletext">
            <h1 className="profiletitle">{username}</h1>
            <h3 className="profiledescripton">Desc</h3>
            <div className="flexbuttons">
              <Link to="/profilepage">
                <input
                  type="submit"
                  className="profilesubmitbutton"
                  value="Profile"
                />
              </Link>

              <div className="profilesubmitbutton2">{`Followers ${followers}`}</div>
            </div>
          </div>
        </div>
        <hr />
        <div className="profileflexbox2">
          <button className="profileshowtasks" onClick={handleShow}>
            Show tasks
          </button>
          <button className="profileshowall">All</button>
          <div className="profileshowadd" onClick={handleAdd}>
            <p>Add tasks</p>
          </div>
          <PopUp2 open={open} setOpen={setOpen} />
        </div>
      </div>
    </>
  );
}
