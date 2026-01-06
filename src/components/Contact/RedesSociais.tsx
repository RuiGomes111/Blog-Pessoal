"use client";
import { FiGithub } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { RiTiktokLine } from "react-icons/ri";
import Link from "next/link";

export default function RedesSociais() {
  return (
    <>
      <div className="text-3xl pt-4 text-[#e6e6e6b7]">
        <ul className="flex gap-4 cursor-pointer">
          <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
            <Link href="https://github.com/RuiGomes111" target="blank">
              <FiGithub />
            </Link>
          </li>
          <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
            <Link
              href="https://www.tiktok.com/@rui_gomes_dev?_t=ZM-8zjVoCJSMjg&_r=1"
              target="blank"
            >
              <RiTiktokLine />
            </Link>
          </li>
          <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
            <Link href="https://www.youtube.com/@ruigomes2024" target="blank">
              <CiYoutube />
            </Link>
          </li>
          <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
            <Link
              href="https://www.linkedin.com/in/rui-gomes-28bb173a0/"
              target="blank"
            >              
            <SlSocialLinkedin />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
