import React, { useContext } from "react";
import { themeContext } from "../provider/ThemeProvider";

const Home = () => {
  const { dark } = useContext(themeContext);
  return (
    <div
      className={
        dark
          ? "min-h-[100vh]  pt-[80px] text-center text-white bg-[#003744]   w-full "
          : "min-h-[100vh] text-center  pt-[80px]  w-full "
      }
    >
      <div className=" w-[100vw] h-[100%]  bg-slate-200 mt-5">
        
      </div>
    </div>
  );
};

export default Home;
