import React from "react";

import Navbar from "../Navbar/Navbar";
import Profile from "./Profile";
import Aboutme from "../Aboutme/Aboutme";
import ContactMe from "../Contactme/Contactme";
export default function Home() {
  return (
    <div className="home-con">
      <Navbar />
      <Profile />
      <Aboutme />
      <ContactMe />
    </div>
  );
}
