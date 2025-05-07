import Parallax from "@/src/main/parallax/Parallax";
import ParallaxIntro from "@/src/main/parallax/ParallaxIntro";
import Projects from "@/src/main/projects/Projects";
import Slide from "@/src/main/projects/Slide";
import SlideTest from "@/src/main/projects/SlideTest";
import SkillTest from "@/src/main/skills/subComponents/test/SkillTest";

export default function Home() {
  return (
    <>
      <ParallaxIntro></ParallaxIntro>
      <Parallax></Parallax>
      {/* <Skills></Skills> */}
      <SkillTest></SkillTest>
      {/* <Projects></Projects>
      <Slide></Slide> */}
      <SlideTest></SlideTest>
    </>
  );
}
