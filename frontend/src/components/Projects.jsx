import React,{useContext} from 'react'
import {themeContext} from "../provider/ThemeProvider"

const Projects = () => {
  const {dark}=useContext(themeContext);
  return (
    <div className= {dark ?'min-h-[100%]  pt-[60px] text-center text-white bg-[#003744]   w-full ':'h-[100%] text-center pt-[60px]  w-full ' }>

    Project page
    
      </div>
  )
}

export default Projects