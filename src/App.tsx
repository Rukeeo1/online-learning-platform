import { useState } from "react";
import Button from "@mui/material/Button";
import Login from "./components/Login";
import { Header } from "./components/Header/header";
import { HomePage } from "./components/HomePage/homePage";
import { CourseData } from "./components/HomePage/courseData";
// import { CourseReview } from "./components/Home/CourseReview";

// import './App.css'

const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage courses={CourseData} />
      {/* <CourseReview /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
