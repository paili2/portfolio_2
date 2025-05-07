import Footer from "@/src/common/footer/Footer";
import Parallax from "@/src/main/parallax/Parallax";
import ParallaxIntro from "@/src/main/parallax/ParallaxIntro";
import SkillTest from "@/src/main/skills/subComponents/test/SkillTest";

export default function Home() {
  return (
    <>
      <ParallaxIntro></ParallaxIntro>
      <Parallax></Parallax>
      {/* <Skills></Skills> */}
      <SkillTest></SkillTest>
    </>
  );
}
