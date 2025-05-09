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
              image={"/musinsa.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"MUSINSA"}
              codeLink={"https://github.com/paili2/musinsa_next"}
              projectLink={"https://paili2.github.io/musinsa-clone/"}
              used1={"HTML"}
              used2={"CSS"}
              used3={"React"}
              used4={"Next.js"}
              outline={
                "Next.js를 활용하여 실제 서비스 구조에 가까운 웹 앱을 구현 중입니다. 현재는 프론트엔드 중심으로 작업하고 있으며 이후 백엔드 연동 예정"
              }
              implementation1={
                "페이지 라우팅을 통해 카테고리(예: 랭킹) 전환 구조 구현"
              }
              implementation2={"헤더, 메인, 푸터 컴포넌트 분리"}
              plan1={"API 연동을 통한 로그인/회원가입 및 상품 데이터 처리"}
              plan2={"장바구니 기능 구현 및 상태 관리 라이브러리 도입 예정"}
              learn1={"Next.js의 파일 기반 라우팅 및 서버 사이드 렌더링 이해"}
              learn2={"프로젝트 구조를 실제 서비스처럼 구성하는 경험"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <ProjectCard
              image={"/socar.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"SOCAR"}
              codeLink={"https://github.com/paili2/socar-clone"}
              projectLink={"https://paili2.github.io/socar-clone/"}
              used1={"HTML"}
              used2={"CSS"}
              used3={"JAVASCRIPT"}
              outline={
                "국민건강보험공단(NHIS) 공식 홈페이지의 메인 페이지를 클론한 프로젝트로, 정적인 웹 페이지 구조와 스타일링에 집중"
              }
              implementation1={
                "NHIS 홈페이지의 첫 진입 화면을 기준으로 헤더, 메인, 푸터 구조를 그대로 구현"
              }
              implementation2={"반응형 대응 없이 고정형 페이지로 작업"}
              learn1={"HTML/CSS를 활용한 웹 페이지 레이아웃 구성 능력 향상"}
              learn2={"시맨틱 태그와 BEM 방식의 클래스 네이밍 경험"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <ProjectCard
              image={"/ticketLink.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"TicketLink"}
              codeLink={"https://github.com/paili2/ticketlink_react.git"}
              projectLink={"https://paili2.github.io/ticketLink-clone/"}
              used1={"HTML"}
              used2={"CSS"}
              used3={"React"}
              outline={
                "티켓링크의 스포츠 예매 페이지를 리액트로 클론한 프로젝트로, 컴포넌트 중심의 UI 설계를 연습하기 위해 진행"
              }
              implementation1={
                "스포츠 경기 목록을 컴포넌트화하여 재사용 가능하게 설계"
              }
              implementation2={
                "예매 가능한 경기 정보를 배열로 관리하고 map()으로 리스트 렌더링"
              }
              learn1={"React의 컴포넌트 설계 및 상태 관리의 기본 개념 습득"}
              learn2={"JSX 문법과 props를 통한 데이터 전달 구조 이해"}
            ></ProjectCard>
          </SwiperSlide>
          <SwiperSlide className="project-slide">
            <ProjectCard
              image={"/nhis.png"}
              deviceSupport={"Web / MOBILE DEVELOPMENT"}
              projectName={"NHIS"}
              codeLink={"https://github.com/paili2/NHIS-Clone"}
              projectLink={"https://paili2.github.io/NHIS-Clone/"}
              used1={"HTML"}
              used2={"CSS"}
              outline={
                "국민건강보험공단(NHIS) 공식 홈페이지의 메인 페이지를 클론한 프로젝트로, 정적인 웹 페이지 구조와 스타일링에 집중"
              }
              implementation1={
                "NHIS 홈페이지의 첫 진입 화면을 기준으로 헤더, 메인, 푸터 구조를 그대로 구현"
              }
              implementation2={"반응형 대응 없이 고정형 페이지로 작업"}
              learn1={"HTML/CSS를 활용한 웹 페이지 레이아웃 구성 능력 향상"}
              learn2={"시맨틱 태그와 BEM 방식의 클래스 네이밍 경험"}
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
