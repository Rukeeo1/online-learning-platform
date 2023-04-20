import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
// import { Header } from "./components/Header/Header";
import { HomePage } from "./components/HomePage/homePage";
import { LoginForm } from "./components/LoginForm/loginForm";
import { NavLinkMenu } from "./components/Header/NavLinkMenu";
// import { ProfileModal } from "./components/Header/profileModal";
import {
  headerIcons,
  headerLinks,
  navLinks,
} from "./components/Header/HeaderDetails";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header headerLinks={headerLinks} headerIcons={headerIcons} />
      <NavLinkMenu navLinks={navLinks} />
      {/* <HomePage /> */}
      {/* <LoginForm /> */}
      {/* <ProfileModal /> */}
    </div>
  );
}

export default App;
