import React, { useContext } from 'react';
import { themeContext } from '../provider/ThemeProvider';

const Contact = () => {
  const { dark } = useContext(themeContext);
  return (
    <div
      className={
        dark
          ? 'min-h-[100vh]  pt-[80px] text-center text-white bg-[#003459]   w-full '
          : 'h-[100vh] text-center  pt-[80px]  w-full '
      }
    >
      contact page
    </div>
  );
};

export default Contact;
