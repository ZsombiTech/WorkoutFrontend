import React, { useState } from "react";
import ProfileSection from "./ProfileSection";
import HomeStats from "./HomeStats";
import Tasks from "./Tasks";
import "../styles/costum2.css";

export default function Home() {
  const [show, setShow] = useState<boolean>(true);
  const [first, setFirst] = useState<boolean>(true);
  const [second, setSecond] = useState<boolean>(true);

  return (
    <>
      <div className="pageflexbox">
        <ProfileSection setShow={setShow} show={show} />
        <HomeStats />
      </div>
      <Tasks
        show={show}
        first={first}
        second={second}
        setFirst={setFirst}
        setSecond={setSecond}
      />
    </>
  );
}
