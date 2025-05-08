import Image from "next/image";
import Link from "next/link";
import { SiHtmx } from "react-icons/si";

const ProjectCard = ({ image, deviceSupport, projectName, projectLink }) => {
  return (
    <div
      className={`w-full h-full border-none rounded-4xl absolute flex flex-col items-start py-20 px-10 gap-20`}
    >
      <div className="w-full h-1/2 flex gap-10 items-center">
        <div className="relative w-[450px] h-[270px] overflow-hidden border-none rounded-2xl">
          <Image
            className="object-cover border-none rounded-2xl"
            src={image}
            alt=""
            fill
          ></Image>
        </div>
        <div className="h-[230px] flex flex-col justify-between">
          <strong className="text-white">{deviceSupport}</strong>
          <h3 className="font-bold text-5xl">{projectName}</h3>
          <div className="flex gap-3">
            <button className="border-none rounded-3xl bg-white text-black py-1 px-3 font-bold text-lg">
              HTML
            </button>
            <button className="border-none rounded-3xl bg-white text-black py-1 px-3 font-bold text-lg">
              CSS
            </button>
          </div>
          <div className="flex gap-3">
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-white p-2 font-bold text-lg text-black"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              코드 보기
              <SiHtmx className="text-xl" />
            </Link>
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-white p-2 font-bold text-lg text-black"
              href={projectLink}
            >
              사이트 보기
              <SiHtmx className="text-xl" />
            </Link>
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-white p-2 font-bold text-lg text-black"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              댓글 달기
              <SiHtmx className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <p>기본 HTML과 CSS를 기반을 중심으로 구성한 개인 프로젝트</p>
    </div>
  );
};

export default ProjectCard;
