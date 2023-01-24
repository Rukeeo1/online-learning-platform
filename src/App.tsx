import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";
import firstBillboard from "./assets/images/first-billboard-banner.jpg";
import secondBillboard from "./assets/images/second-billboard-banner.jpg";

import { LoginForm } from "./components/LoginForm/loginForm";

// import './App.css'

function App() {
  const [currentBillboard, setCurrentBillboard] = useState(0);

  const images = [
    {
      title: "Unlock the power of your people",
      subtitle:
        "Udemy Business is trusted by 12.5K+ companies around the world",
      anchorText: "Find out what we can do for yours",
      dot: ".",
      img: `${firstBillboard}`,
    },

    {
      title: "Learning that gets you",
      content:
        "Skills for your present (and your future). Get started with us.",
      img: `${secondBillboard}`,
    },
  ];

  return (
    <div className="App">
      <Header />

      <HomePage
        images={images}
        currentBillboard={currentBillboard}
        setCurrentBillboard={setCurrentBillboard}
      />

      <LoginForm />

    </div>
  );
}

export default App;
