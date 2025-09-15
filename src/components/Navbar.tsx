"use client";
import Link from "next/link";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center w-full bg-[#030A15] text-[#e6e6e6b7] p-3 font-sans text-lg border-b-1 ">
      
      <p className="font-bold pl-4">
        <Link href="/">
        <span className="text-[#3178C6]">&lt;</span>
        Rui-Gomes
        <span className="text-[#3178C6]">/&gt;</span>
        </Link>
      </p>

      {/*Desktop */}
      <nav className="hidden md:flex items-center gap-8 pr-8">
        <LanguageSwitcher />
        <ul className="flex gap-6 font-bold">
          <li className="hover:text-[#E6E6E6]">
            <Link href="/">
            <span className="text-[#3178C6]">01.</span> Home
            </Link>
          </li>
          <li className="hover:text-[#E6E6E6]" >
            <Link href="/about">
            <span className="text-[#3178C6]">02.</span> About
            </Link>
          </li>
          <li className="hover:text-[#E6E6E6]">
            <Link href={""}>
            <span className="text-[#3178C6]">03.</span> Projects
            </Link>
          </li>
          <li className="hover:text-[#E6E6E6]">
            <Link href={""}>
            <span className="text-[#3178C6]">04.</span> Contacts
            </Link>
          </li>
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

      {/*Mobile */}
      {isOpen && (
        <div className="absolute top-13 right-4 bg-[#030A15] border border-[#3178C6] rounded-lg shadow-lg p-6 md:hidden">
          <LanguageSwitcher />
          <ul className="flex flex-col gap-4 font-bold mt-4">
            <li>
              <Link href="/">
              <span className="text-[#3178C6]">01.</span> Home
              </Link>
            </li>
            <li>
              <Link href="/about"> 
              <span className="text-[#3178C6]">02.</span> About
              </Link>
            </li>
            <li>
              <span className="text-[#3178C6]">03.</span> Projects
            </li>
            <li>
              <span className="text-[#3178C6]">04.</span> Contacts
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
