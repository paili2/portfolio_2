"use client";
import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import "./../projects/projects.css";
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
      className="w-full h-screen bg-transparent px-10 pb-10 overflow-hidden relative flex flex-col justify-center items-center project-section"
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
          className="mySwiper project-swiper"
        >
          <SwiperSlide className="project-slide">
            <ProjectCard
              image={"/nhis.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"MUSINSA"}
              projectLink={"https://paili2.github.io/musinsa-clone/"}
              used1={"HTML"}
              used2={"CSS"}
              used3={"React"}
              used4={"Next.js"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <ProjectCard
              image={"/nhis.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"TicketLink"}
              projectLink={"https://paili2.github.io/ticketLink-clone/"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <ProjectCard
              image={"/nhis.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"NHIS"}
              projectLink={"https://paili2.github.io/NHIS-Clone/"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            추후 추가 예정입니다.
          </SwiperSlide>
          {/* <SwiperSlide>추후 추가 예정입니다.</SwiperSlide>
          <SwiperSlide className="project-slide">추후 추가 예정입니다.</SwiperSlide>
          <SwiperSlide className="project-slide">추후 추가 예정입니다.</SwiperSlide>
          <SwiperSlide className="project-slide">추후 추가 예정입니다.</SwiperSlide>
          <SwiperSlide className="project-slide">추후 추가 예정입니다.</SwiperSlide> */}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
