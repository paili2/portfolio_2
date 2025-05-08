"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./../projects/styles.css";
import { EffectCards } from "swiper/modules";
import ProjectCard from "./subComponents/ProjectCard";

const Projects = () => {
  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariant = {
    hidden: { y: 50 },
    visible: { y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.section
      variants={containerVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="w-full h-screen bg-blue-300 px-10 py-15 overflow-hidden relative flex flex-col justify-center items-center"
    >
      <motion.div
        variants={childVariant}
        className="w-full max-w-5xl mx-auto flex flex-col items-center gap-5"
      >
        <h1 className="text-6xl font-bold text-white">PROJECTS</h1>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper !w-full !h-[600px]"
        >
          <SwiperSlide>
            <ProjectCard
              image={"/nhis.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"NHIS"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
