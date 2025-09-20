"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { MdOutlinePerson } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems=[
    {label: "Home", href:"/", icon: <AiOutlineHome/>},
    {label: "About", href:"#about", icon: <MdOutlinePerson/>},
    {label: "Skills", href:"/skill", icon: <GiSkills/>},
    {label: "Projects", href:"/project", icon: <FaProjectDiagram/>},
    {label: "contact", href:"/contact", icon: <IoIosContact/>}
  ]
  return (
    <header className="flex justify-between items-center w-full bg-[#030A15] text-[#e6e6e6b7] p-2 font-sans text-lg  ">
      
      <p className="font-bold pl-4">
        <Link href="/">
        <span className="text-[#3178C6]">&lt;</span>
        MyPortofolio
        <span className="text-[#3178C6]">/&gt;</span>
        </Link>
      </p>

      {/*Desktop */}
      <nav className="hidden md:flex items-center gap-8 pr-8">
        
        <ul className="flex gap-4 font-bold">
          {NavItems.map((item) => (
  <li
    key={item.href}
    className="items-center text-md rounded transition-colors duration-300 ease-in-out hover:text-[#E6E6E6] hover:bg-gray-700"
  >
    <Link href={item.href} className="flex px-4 py-2">
      {item.label}
    </Link>
  </li>
))}

          
        </ul>
      </nav>

      {/* Botão Mobile */}
      <button
        className="md:hidden pr-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile */}
{isOpen && (
  <div className="absolute top-[56px] right-4 bg-[#030A15] border border-[#3178C6] rounded-lg shadow-lg p-6 md:hidden z-50">
    <ul className="flex flex-col gap-4 font-bold mt-2">
      {NavItems.map((item, index) => (
        <li key={item.href} className="hover:text-[#3178C6] transition-colors duration-200">
          <Link href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2">
            <span className="text-[#3178C6]">{`0${index + 1}.`}</span>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
)}

    </header>
  );
}
