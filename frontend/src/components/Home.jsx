import React,{useContext} from "react";
import {themeContext} from "../provider/ThemeProvider"

const Home = () => {
  const {dark}=useContext(themeContext);
  return (
    <div className= {dark ?'min-h-[100vh]  pt-[60px] text-center text-white bg-[#003744]   w-full ':'h-[100%]  pt-[60px]  w-full ' }>

    home page
    
      </div>

  );
};

export default Home;
