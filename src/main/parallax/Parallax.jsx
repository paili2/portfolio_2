"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Principles from "../principles/Principles";
import Projects from "../projects/Projects";

const Parallax = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Principles 서서히 사라지기
  const principlesOpacity = useTransform(scrollYProgress, [0.4, 0.5], [1, 0]);

  // Projects 올라오면서 보이기
  const projectsY = useTransform(scrollYProgress, [0.3, 0.4], [100, 0]);
  const projectsOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  return (
    <section className="h-[200vh] w-full bg-blue-400">
      <motion.div
        style={{ opacity: principlesOpacity }}
        className="sticky top-0 h-screen"
      >
        <Principles></Principles>
      </motion.div>
      <motion.div
        style={{ y: projectsY }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sticky top-0 w-full h-screen z-10 flex items-center justify-center"
      >
        <Projects></Projects>
      </motion.div>
    </section>
  );
};

export default Parallax;
