"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const NavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="w-full bg-[#05080F] text-[#e6e6e6b7] font-sans sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-1 hover:text-[#EFDO9E] transition-colors drop-shadow-[0_0_15px_#00f]"
        >
          <span className="text-[#D4AA7D] ">&lt;</span>
          My <span className="text-[#D4AA7D]">Portfolio</span>
          <span className="text-[#D4AA7D]">/&gt;</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {NavItems.map((item) =>
            item.href.startsWith("#") ? (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-[#1f2937] transition-colors duration-300"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-[#1f2937] transition-colors duration-300"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#1f2937] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#030A15] border-t border-gray-700 shadow-lg">
          <ul className="flex flex-col gap-2 p-4">
            {NavItems.map((item, index) =>
              item.href.startsWith("#") ? (
                <li key={item.href}>
                  <button
                    onClick={() => {
                      scrollToSection(item.href);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold hover:text-[#3178C6] transition-colors"
                  >
                    <span className="text-[#3178C6]">{`0${index + 1}.`}</span>
                    {item.label}
                  </button>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-semibold hover:text-[#3178C6] transition-colors"
                  >
                    <span className="text-[#3178C6]">{`0${index + 1}.`}</span>
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
}
