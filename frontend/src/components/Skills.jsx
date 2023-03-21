import React, { useContext } from 'react';
import { themeContext } from '../provider/ThemeProvider';
import { arr } from '../resources/skillls';
import { motion } from 'framer-motion';

const Skills = () => {
  const { dark } = useContext(themeContext);
  return (
    <div className="min-h-[200px] md:w-[60%] mx-auto ">
      <div className="flex justify-center">
        <hr className="text-black  h-1  mt-5 w-[20%]" />
        <h1
          className={
            dark
              ? 'text-3xl text-white font-bold mx-4 md:mx-10'
              : 'text-3xl text-[#006400] font-extrabold mx-4 md:mx-10'
          }
        >
          Technology{' '}
          <span
            className={dark ? 'text-white' : 'text-[#7678ed] font-extrabold'}
          >
            Used
          </span>
        </h1>
        <hr className="text-black h-1  mt-5 w-[20%]" />
      </div>
      <div className="flex mx-12 justify-center mt-5 flex-wrap z-10 ">
        {arr.map((item, key) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 100 }}
              transition={{ duration: 2 }}
              key={key}
              className={
                dark
                  ? ' md:w-[100px] md:h-[100px] w-[50px] h-[50px] border-[#bfd7ea] flex justify-center items-center rounded-full overflow-hidden opacity-90 bg-[#bfd7ea] mx-3 my-3 '
                  : ' md:w-[100px] md:h-[100px] w-[50px] h-[50px] border-r-2 border-l-2 rounded-full flex justify-center items-center overflow-hidden bg-[#fdfffc] opacity-90 mx-3 my-3 -z-10'
              }
            >
              <img className="w-[40px] md:w-[80px]" src={item} alt="skill" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
