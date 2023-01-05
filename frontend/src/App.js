import React,{useState} from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Resume from "./components/Resume";
import { themeContext } from "./provider/ThemeProvider";

function App() {
  const [dark,setDark]=useState(false);
  return (

    <div>
      <themeContext.Provider value={{dark,setDark}} >

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/resume" element={<Resume/>} />

      </Routes>
      </themeContext.Provider>
    </div>

  );
}

export default App;
