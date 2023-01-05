import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { CiDark } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { themeContext } from "../provider/ThemeProvider";

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const { dark, setDark } = useContext(themeContext);

  const trigger = () => {
    setIcon(!icon);
  };

  return (
    <div className="w-full h-[60px] fixed">
      <div
        className={
          dark
            ? "w-[100%] text-white bg-[#003744]/10 backdrop-blur-sm   flex justify-between h-[60px]"
            : "w-[100%]   backdrop-blur-sm bg-white/30  flex justify-between h-[60px]"
        }
      >
        <div className="w-[150px]  text-center box-border pt-3 list-none cursor-pointer font-sans ">
          <li className=" text-2xl font-moon font-extrabold">
            <Link to="/">Developer208</Link>
          </li>
        </div>
        <div className="sm:hidden pt-2 w-[50px]  ">
          {icon ? (
            <div onClick={trigger} className="w-[30px] mx-auto cursor-pointer">
              <AiOutlineClose size={28} />
            </div>
          ) : (
            <div onClick={trigger} className="w-[30px] mx-auto cursor-pointer">
              <RxHamburgerMenu size={28} />
            </div>
          )}
        </div>
        <div className="sm:flex hidden ">
          <div className="w-[120px] text-center box-border pt-3  list-none cursor-pointer font-sans ">
            <li className="text-lg font-bold hover:underline">
              <Link to="/projects">Projects</Link>
            </li>
          </div>
          <div className="w-[120px] text-center box-border pt-3 list-none cursor-pointer font-sans ">
            <li className="text-lg font-bold hover:underline">
              <Link to="/resume">Resume</Link>
            </li>
          </div>
          <div className="w-[120px] text-center box-border  pt-3  list-none cursor-pointer font-sans ">
            <li className="text-lg font-bold hover:underline">
              <Link to="/about">About</Link>
            </li>
          </div>
          <div className="w-[120px] text-center box-border pt-3 list-none cursor-pointer font-sans ">
            <li className="text-lg font-bold hover:underline">
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </div>
        <div className="w-[60px] hidden sm:block ">
          {dark ? (
            <div
              onClick={() => setDark(!dark)}
              className="w-[35px] h-[35px] mx-auto mt-2 cursor-pointer "
            >
              <CiDark size={30} />
            </div>
          ) : (
            <div
              onClick={() => setDark(!dark)}
              className="w-[35px] h-[35px] mx-auto mt-2 cursor-pointer "
            >
              <MdDarkMode size={30} />
            </div>
          )}
        </div>
        <div
          className={
            icon
              ? dark
                ? " sm:hidden h-[100vh] w-[220px] absolute  ease-in-out duration-500 border-r-[1px] border-black bg-[#003744] left-[0px] "
                : " sm:hidden h-[100vh] w-[220px] absolute  ease-in-out duration-500  bg-[#fbfbfb] left-[0px] "
              : "fixed left-[-100%]"
          }
        >
          <div className="w-[150px] mb-4  text-center box-border pt-3 list-none cursor-pointer font-sans ">
            <li
              onClick={trigger}
              className=" text-2xl font-moon font-extrabold"
            >
              <Link to="/">Developer208</Link>
            </li>
          </div>
          <hr className="text-black h-2" />
          <div
            onClick={trigger}
            className="h-[40px] mb-5 font-bold w-[150px] pl-5 text-xl"
          >
            <Link to="/projects">Projects</Link>
          </div>
          <hr className="text-black h-2" />
          <div
            onClick={trigger}
            className="h-[40px] mb-5 font-bold w-[150px] pl-5 text-xl"
          >
            <Link to="/resume">Resume</Link>
          </div>
          <hr className="text-black h-2" />
          <div
            onClick={trigger}
            className="h-[40px] mb-5 font-bold w-[150px] pl-5 text-xl"
          >
            <Link to="/about">About</Link>
          </div>
          <hr className="text-black h-2" />
          <div
            onClick={trigger}
            className="h-[40px] mb-5 font-bold w-[150px] pl-5 text-xl"
          >
            <Link to="/contact">Contact</Link>
          </div>
          <hr className="text-black h-2" />
          <div className="w-[60px] pl-3 ">
            {dark ? (
              <div
                onClick={() => {
                  setDark(!dark);
                  trigger();
                }}
                className="w-[35px] h-[35px] mx-auto  cursor-pointer "
              >
                <CiDark size={30} />
              </div>
            ) : (
              <div
                onClick={() => {
                  setDark(!dark);
                  trigger();
                }}
                className="w-[35px] h-[35px] mx-auto  cursor-pointer "
              >
                <MdDarkMode size={30} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
