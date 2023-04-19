import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/Home/Home";
import { CourseDetails } from "./components/Home/CourseDetails";
// import { CourseReview } from "./components/Home/CourseReview";
// import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage courses={CourseDetails} />
      {/* <CourseReview /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
