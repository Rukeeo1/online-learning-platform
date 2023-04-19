import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";
import { LoginForm } from "./components/LoginForm/loginForm";
import { NavLinkBar } from "./components/Header/navLinkBar";
import { ProfileModal } from "./components/Header/profileModal";
import {
  headerIcons,
  headerLinks,
  navLinks,
} from "./components/Header/headerDetails";
import HeaderAlternate from "./components/Header/HeaderAlternate";

function App() {
  return (
    <div className="App">
      <Header headerLinks={headerLinks} headerIcons={headerIcons} />
      <NavLinkBar navLinks={navLinks} />
      <HeaderAlternate  />
      {/* <HomePage /> */}
      {/* <LoginForm /> */}
      {/* <ProfileModal /> */}
    </div>
  );
}

export default App;
