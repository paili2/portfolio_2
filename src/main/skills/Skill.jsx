import Image from "next/image";
import SkillCard from "./subComponents/SkillCard";

const Skills = () => {
  return (
    <section className="w-full bg-blue-400 overflow-hidden flex flex-col gap-20 py-30 px-25 justify-center items-center">
      <h1 className="text-6xl font-bold text-white">SKILLS</h1>

      <div className="w-full grid grid-cols-2 gap-10 ">
        <SkillCard
          image={"/html.png"}
          skilName={"HTML"}
          description={
            "웹 문서의 구조를 설계하고 시맨틱 태그를 활용해 접근성과 SEO를 고려한 마크업 작성"
          }
          translate={"translate-y-[-11px]"}
        ></SkillCard>
        <SkillCard
          image={"/css.png"}
          skilName={"CSS"}
          description={
            "반응형 디자인과 유틸리티 클래스(Tailwind CSS 등)를 활용해 사용자 친화적인 UI 스타일 구현"
          }
          translate={"translate-y-[-10px]"}
        ></SkillCard>
        <SkillCard
          image={"/javascript.png"}
          skilName={"JAVASCRIPT"}
          description={
            "동적 기능과 이벤트 기반 로직을 구현하여 사용자 경험을 향상시키는 클라이언트 로직 개발"
          }
          translate={"translate-y-[-9px]"}
        ></SkillCard>
        <SkillCard
          image={"/typescript.webp"}
          skilName={"TYPESCRIPT"}
          description={
            "TypeScript로 타입 안전성을 강화하고, 코드의 안정성을 높여 협업 효율 개선"
          }
          width={"w-[100px]"}
          height={"h-[100px]"}
        ></SkillCard>
        <SkillCard
          image={"/react.png"}
          skilName={"REACT"}
          description={
            "React를 사용 컴포넌트 기반 UI를 개발, 상태 관리, 라우팅을 통해 효율적인 웹 구축"
          }
        ></SkillCard>
        <SkillCard
          image={"/nextjs.png"}
          skilName={"NEXT.JS"}
          description={
            "SSR(서버 사이드 렌더링)과 SSG(정적 사이트 생성)를 활용해 최적화된 React 기반 웹 애플리케이션 구축"
          }
        ></SkillCard>
        <SkillCard
          image={"/java.png"}
          skilName={"JAVA"}
          description={
            "객체지향 프로그래밍 원칙에 기반해 안정적인 백엔드 로직을 개발하고, 다양한 API와 시스템 연동 구현"
          }
          width={"w-[130px]"}
          height={"h-[130px]"}
        ></SkillCard>
        <SkillCard
          image={"/springboot.png"}
          skilName={"SPRINGBOOT"}
          description={
            " Spring Boot 기반의 RESTful API 서버를 구축하고, 보안 및 예외 처리를 적용해 안정적인 서비스 환경 개발"
          }
        ></SkillCard>
      </div>
    </section>
  );
};

export default Skills;
