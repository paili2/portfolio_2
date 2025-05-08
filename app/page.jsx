import Parallax from "@/src/main/parallax/Parallax";
import ParallaxIntro from "@/src/main/parallax/ParallaxIntro";
import SkillSwiper from "@/src/main/skills/SkillSwiper";

export default function Home() {
  return (
    <>
      <ParallaxIntro></ParallaxIntro>
      <Parallax></Parallax>
      <SkillSwiper></SkillSwiper>
    </>
  );
}
