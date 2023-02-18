import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";

import { LoginForm } from "./components/LoginForm/loginForm";
import { SignUpForm } from "./components/SignUpForm/signUpForm";

// import './App.css'

function App() {
  return (
    <div className="App">
      <Header />

      {/* <HomePage
        images={images}
        currentBillboard={currentBillboard}
        setCurrentBillboard={setCurrentBillboard}
      /> */}

      {/* <LoginForm /> */}
      <SignUpForm />
    </div>
  );
}

export default App;
