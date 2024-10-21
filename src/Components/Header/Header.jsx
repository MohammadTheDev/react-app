import React from "react";
import TopBar from "../TopBar/TopBar";
import NavBar from "../NavBar/NavBar";
import Landing from "../Landing/Landing";

export default function Header() {
  return (
    <header className="header">
      <TopBar />
      <NavBar />
      <Landing />
    </header>
  );
}
