import Image from "next/image";
import Link from "next/link";
import { SiHtmx } from "react-icons/si";
import Button from "./Button";
import ProjectDescription from "./ProjectDescription";

const ProjectCard = ({
  image,
  deviceSupport,
  projectName,
  used1,
  used2,
  used3,
  used4,
  used5,
  used6,
  projectLink,
  description1,
  description2,
  description3,
}) => {
  return (
    <div
      className={`w-full h-full border-none rounded-4xl absolute flex flex-col items-start py-20 px-10 gap-15`}
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
            {used1 ? <Button used={used1} /> : null}
            {used2 ? <Button used={used2} /> : null}
            {used3 ? <Button used={used3} /> : null}
            {used4 ? <Button used={used4} /> : null}
            {used5 ? <Button used={used5} /> : null}
            {used6 ? <Button used={used6} /> : null}
          </div>
          <div className="flex gap-3">
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-white p-2 font-bold text-sm text-black"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              코드 보기
              <SiHtmx className="text-xl" />
            </Link>
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-white p-2 font-bold text-sm text-black"
              href={projectLink}
            >
              사이트 보기
              <SiHtmx className="text-xl" />
            </Link>
            <Link
              className="w-fit flex justify-center items-center gap-2 border-none rounded-sm bg-white p-2 font-bold text-sm text-black"
              href="https://paili2.github.io/NHIS-Clone/"
            >
              댓글 달기
              <SiHtmx className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
      <ProjectDescription></ProjectDescription>
    </div>
  );
};

export default ProjectCard;
