import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Alumni from "../Alumni/Alumni";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Jobs from "../Jobs/Jobs";
import Contact from "./Contact/Contact";
import Signup from "./Signup/Signup";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/alumni" element={<Alumni />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
