import * as React from "react";
import ProfileSection from "./ProfileSection";
import HomeStats from "./HomeStats";
import "../styles/costum2.css";

export default function Home() {
  return (
    <>
      <div className="pageflexbox">
        <ProfileSection />
        <HomeStats />
      </div>
    </>
  );
}
