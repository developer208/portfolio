import React, { useContext } from 'react';
import { themeContext } from '../provider/ThemeProvider';
import Skills from './Skills';

const Home = () => {
  const { dark } = useContext(themeContext);

  return (
    <div
      className={
        dark
          ? 'min-h-[100vh]  pt-[80px] text-center text-white  bg-[#003459]   w-full '
          : 'min-h-[100vh] text-center  pt-[80px]  w-full '
      }
    >
      <Skills />
    </div>
  );
};

export default Home;
