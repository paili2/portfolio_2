import Image from "next/image";
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { RiNotionFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-blue-400 w-full py-7 text-2xl">
      <div className="w-full max-w-screen-xl flex justify-between items-center mx-auto">
        <h1 className="text-xl font-extrabold">Contect</h1>
        <ul className="flex gap-5 items-center text-lg">
          <li className="text-2xl">
            <Link href="https://github.com/paili2">
              <GrGithub />
            </Link>
          </li>
          <li className="text-2xl">
            <Link href="https://www.notion.so/1-1a88c6e91be080d08cbcff54be7a8e2d">
              <RiNotionFill />
            </Link>
          </li>
          <li className="flex items-center gap-1.5">
            <IoCall />
            <span>010.2300.0091</span>
          </li>
          <li className="flex items-center gap-1.5">
            <IoMail />
            <span>zxcv7502@naver.com</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
