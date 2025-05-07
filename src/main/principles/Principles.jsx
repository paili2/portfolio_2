"use client";

import { motion } from "motion/react";

const Principles = () => {
  return (
    <section className="h-screen bg-blue-400 py-30 overflow-hidden relative flex flex-col justify-center items-center">
      <div className="w-max-6xl text-blue-600 font-bold text-[100px] leading-none flex flex-col justify-between text-justify gap-3">
        <motion.h1
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-[180px] text-white"
        >
          Self-Learner
        </motion.h1>
        <motion.h2>자기 주도적으로 탐구하고</motion.h2>
        <motion.h1 className="text-[180px] text-white"> 継続的改善</motion.h1>
        <motion.h2>더 나은 코드를 고민합니다</motion.h2>
      </div>
    </section>
  );
};

export default Principles;
