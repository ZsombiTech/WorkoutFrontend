import * as React from "react";

export default function Steps() {
  return (
    <>
      <div>
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
              <h1 className="profiletitle">Username</h1>
              <h3 className="profiledescripton">Desc</h3>
              <div className="flexbuttons">
                <input
                  type="submit"
                  className="profilesubmitbutton"
                  value="Profile"
                />
                <div className="profilesubmitbutton2">{`Followers ${2}`}</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="profileflexbox2">
            <button className="profileshowtasks">Show tasks</button>
            <button className="profileshowall">All</button>
            <div className="profileshowadd">
              <p>Add tasks</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
