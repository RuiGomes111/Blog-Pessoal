import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaArrowDown } from "react-icons/fa6";
import { RiTiktokLine } from "react-icons/ri";
import Link from "next/link";
import ShinyText from './ShineText/ShinyText';

export default function HomePresentation() {
  return (
    <>
      <div className="flex flex-col justify-center   items-center mx-auto">
        <Image
          src="/avatar.png"
          alt=""
          height={250}
          width={250}
          className="rounded-full"
        />
        <div className="text-3xl pt-4">
          <ul className="flex gap-4 cursor-pointer">
            <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
             <Link href="https://github.com/RuiGomes111" target="blank"><FiGithub /></Link> 
            </li>
            <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
              <Link href="https://www.tiktok.com/@rui_gomes_dev?_t=ZM-8zjVoCJSMjg&_r=1" target="blank"><RiTiktokLine /></Link>
              
            </li>
            <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
              <Link href="https://www.youtube.com/@ruigomes2024" target="blank"><CiYoutube /></Link>
              
            </li>
            <li className="hover:drop-shadow-[0_0_10px_#ffffff] transition">
              <Link href="https://www.linkedin.com/in/ruigomes-dev/" target="blank"> </Link>
              <SlSocialLinkedin />
            </li>
          </ul>
        </div>
        <h1 className="text-5xl sm:text-7xl lg:text-7xl pt-4 font-bold">
          <ShinyText 
            text="Rui Gomes" 
            disabled={false} 
            speed={3} 
            className='custom-class' 
          />
          
        </h1>
        <span className="text-lg">Software Developer</span>
        <Link
          href={"#about"}
          className="bg-[#3178C6] p-2 flex items-center rounded-xl mt-3 hover:bg-[#1e5da1] "
        >
          {" "}
          Check Out My Blog <FaArrowDown />
        </Link>
      </div>
    </>
  );
}
