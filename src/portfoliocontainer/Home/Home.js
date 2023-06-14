import React from "react";
import footer from "./footer/footer";
import Profile from "./profile";
export default function Home() {
  return (
    <div className="home-con">
      <Profile />
      <footer />
    </div>
  );
}
