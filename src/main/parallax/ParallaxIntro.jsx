"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Introduce from "../introduce/Introduce";
import LicenseEducation from "../introduce/LicenseEducation";

const ParallaxIntro = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // introduce 서서히 사라지기
  const introduceOpacity = useTransform(scrollYProgress, [0.15, 0.23], [1, 0]);

  // licenseEducation 올라오면서 보이기
  const licenseEducationY = useTransform(scrollYProgress, [0, 0.05], [100, 0]);
  const licenseEducationOpacity = useTransform(
    scrollYProgress,
    [0.3, 0.4],
    [0, 1]
  );

  return (
    <section className="h-[200vh] w-full bg-blue-400">
      <motion.div
        style={{ opacity: introduceOpacity }}
        className="sticky top-0 h-screen"
      >
        <Introduce></Introduce>
      </motion.div>
      <motion.div
        style={{ y: licenseEducationY }}
        viewport={{ once: true, amount: 0.5 }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="sticky top-0 w-full h-screen z-10"
      >
        <LicenseEducation></LicenseEducation>
      </motion.div>
    </section>
  );
};

export default ParallaxIntro;
