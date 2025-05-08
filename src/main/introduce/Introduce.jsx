"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "motion/react";

const Introduce = () => {
  return (
    <section className="h-screen bg-blue-400 px-10 pt-15 overflow-hidden relative flex flex-col justify-center items-center">
      <motion.h1
        initial={{ y: 500 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
        style={{ textShadow: "-12px 0px 0px rgba(64, 64, 64, 0.7)" }}
        className="text-white font-bold text-[200px] leading-none absolute top-25 right-35 z-2 text-shadow-amber-300"
      >
        Full Stack
      </motion.h1>
      <div className="flex flex-col justify-start">
        <motion.h1
          initial={{ x: -700 }}
          animate={{ x: 0, transition: { duration: 0.3 } }}
          className="text-blue-600 font-bold text-[200px] leading-none"
        >
          JEONG
        </motion.h1>
        <motion.h1
          initial={{ x: 700 }}
          animate={{ x: 0, transition: { duration: 0.3 } }}
          className="text-blue-600 font-bold text-[200px] leading-none"
        >
          SOERYEONG
        </motion.h1>
      </div>
    </section>
  );
};

export default Introduce;
