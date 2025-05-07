"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./subComponents/test/SkillCardTest";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./skillSwiperTest.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const SkillSwiperTest = () => {
  return (
    <section className="w-full bg-blue-400 overflow-hidden flex flex-col gap-20 py-30 px-25 justify-center items-center">
      <h1 className="text-6xl font-bold text-white">SKILLS</h1>

      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>

      <div className="w-full grid grid-cols-3 gap-10 ">
        <SkillSwiperTest
          image={"/html.png"}
          skilName={"HTML"}
        ></SkillSwiperTest>
        <SkillSwiperTest image={"/css.png"} skilName={"CSS"}></SkillSwiperTest>
        <SkillSwiperTest
          image={"/javascript.png"}
          skilName={"JAVASCRIPT"}
        ></SkillSwiperTest>
        <SkillSwiperTest
          image={"/typescript.png"}
          skilName={"TYPESCRIPT"}
          // width={"w-[100px]"}
          // height={"h-[100px]"}
        ></SkillSwiperTest>
        <SkillSwiperTest
          image={"/react.png"}
          skilName={"REACT"}
        ></SkillSwiperTest>
        <SkillSwiperTest
          image={"/nextjs.png"}
          skilName={"NEXT.JS"}
        ></SkillSwiperTest>
        <SkillSwiperTest
          image={"/java.png"}
          skilName={"JAVA"}
          // width={"w-[130px]"}
          // height={"h-[130px]"}
        ></SkillSwiperTest>
        <SkillSwiperTest
          image={"/springboot.png"}
          skilName={"SPRINGBOOT"}
        ></SkillSwiperTest>
      </div>
    </section>
  );
};

export default SkillSwiperTest;
