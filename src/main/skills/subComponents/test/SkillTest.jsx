import Image from "next/image";
import SkillCard from "../SkillCard";
import SkillCardTest from "./SkillCardTest";

const SkillTest = () => {
  return (
    <section className="w-full bg-blue-400 overflow-hidden flex flex-col gap-20 py-30 px-25 justify-center items-center">
      <h1 className="text-6xl font-bold text-white">SKILLS</h1>

      <div className="w-full grid grid-cols-3 gap-10 ">
        <SkillCardTest image={"/html.png"} skilName={"HTML"}></SkillCardTest>
        <SkillCardTest image={"/css.png"} skilName={"CSS"}></SkillCardTest>
        <SkillCardTest
          image={"/javascript.png"}
          skilName={"JAVASCRIPT"}
        ></SkillCardTest>
        <SkillCardTest
          image={"/typescript.png"}
          skilName={"TYPESCRIPT"}
          // width={"w-[100px]"}
          // height={"h-[100px]"}
        ></SkillCardTest>
        <SkillCardTest image={"/react.png"} skilName={"REACT"}></SkillCardTest>
        <SkillCardTest
          image={"/nextjs.png"}
          skilName={"NEXT.JS"}
        ></SkillCardTest>
        <SkillCardTest
          image={"/java.png"}
          skilName={"JAVA"}
          // width={"w-[130px]"}
          // height={"h-[130px]"}
        ></SkillCardTest>
        <SkillCardTest
          image={"/springboot.png"}
          skilName={"SPRINGBOOT"}
        ></SkillCardTest>
      </div>
    </section>
  );
};

export default SkillTest;
