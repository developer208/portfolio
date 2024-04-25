import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume";
import { themeContext } from "./provider/ThemeProvider";
import Cube from "./components/Cube";

function App() {
  const [dark, setDark] = useState(false);
  const [screen, setScreen] = useState(true);

  return (
    // screen ? <div className="bg-[black] h-[100vh]">
    //   <button onClick={() => { setScreen(false) }} className="mt-[30px] text-white h-[40px] w-[150px] bg-gradient-to-r from-indigo-700 to-transparent ">Enter</button>
    //   <Cube />

    // </div> :
      <div>
        <themeContext.Provider value={{ dark, setDark }} >

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/projects" element={<Projects />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/resume" element={<Resume />} />

          </Routes>
        </themeContext.Provider>
      </div>

  );
}

export default App;
