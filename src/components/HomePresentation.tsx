import Link from "next/link";
import ShinyText from "./ShineText/ShinyText";
import { FaArrowDown } from "react-icons/fa6";
import ScrollIndicator from "./scroll/ScrollIndicator";

export default function HomePresentation() {
  const text = (
    <p>
      Hi, I&apos;m <span className="text-[#d8973cd7]">Rui Gomes</span>
    </p>
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl sm:text-7xl lg:text-6xl pt-4 font-bold pb-2">
          <ShinyText
            text={text}
            disabled={false}
            speed={3}
            className="custom-class "
          />
        </h1>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl font-sans text-[#E1E7EF]">
          Fullstack Developer | Digital Solutions Creator
        </span>

        <Link
          href={"#about"}
          className="text-[#272727] bg-[#D8C99B] p-2 flex items-center rounded-xl mt-3 hover:bg-[#e9daae] mb-20"
        >
          {" "}
          Check Out My Blog <FaArrowDown />
        </Link>
        <div>
          <ScrollIndicator />
        </div>
      </div>
    </>
  );
}
