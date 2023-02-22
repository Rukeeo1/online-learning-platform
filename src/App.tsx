import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";
import { LoginForm } from "./components/LoginForm/loginForm";
import { ProfileModal } from "./components/Header/ProfileModal";

// import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      {/* <LoginForm /> */}
      <ProfileModal />
    </div>
  );
}

export default App;
