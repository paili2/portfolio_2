import Image from "next/image";
import Link from "next/link";
import { SiHtmx } from "react-icons/si";

const ProjectCard = ({ z, rotate, bg, deviceSupport, projectName }) => {
  return (
    <div
      className={`w-[900px] h-[500px] border-none rounded-4xl ${bg} ${rotate} absolute ${z} flex flex-col items-start p-10 gap-30`}
    >
      <div className="w-full h-1/2 flex gap-10 items-center">
        <div className="relative w-[400px] h-[230px] overflow-hidden border-none rounded-2xl">
          <Image
            className="object-cover border-none rounded-2xl"
            src="/nhis.png"
            alt=""
            fill
          ></Image>
        </div>
        <div className="h-[230px] flex flex-col justify-between">
          <strong className="text-gray-500">{deviceSupport}</strong>
          <h3 className="font-bold text-5xl">{projectName}</h3>
          <div className="flex gap-3">
            <button className="border-none rounded-3xl bg-blue-100 py-1 px-3 font-bold text-lg">
              HTML
            </button>
            <button className="border-none rounded-3xl bg-blue-100 py-1 px-3 font-bold text-lg">
              CSS
            </button>
          </div>
          <div className="flex gap-3">
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-slate-200 p-2 font-bold"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              코드 보기
              <SiHtmx className="text-xl" />
            </Link>
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-slate-200 p-2 font-bold"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              사이트 보기
              <SiHtmx className="text-xl" />
            </Link>
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-slate-200 p-2 font-bold"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              댓글 달기
              <SiHtmx className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <p className="w-1/2 h-1/2">
        기본 HTML과 CSS를 기반을 중심으로 구성한 개인 프로젝트
      </p>
    </div>
  );
};

export default ProjectCard;
