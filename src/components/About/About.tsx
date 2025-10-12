"use client";

import Link from "next/link";
import { AccordionIcons } from "@/components/AccordionIcons";
import { MdOutlinePerson } from "react-icons/md";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: false,     
      easing: "ease-in-out",
    });
    AOS.refresh();    // garante que o AOS detecte todos os elementos
    setMounted(true); // indica que o cliente montou
  }, []);

  if (!mounted) return null; // evita renderizar antes do cliente

  return (
    <div
      data-aos="fade-up"
      id="about"
      className="bg-[#030A15] min-h-screen text-[#E6E6E6] max-w-5xl mx-auto px-4 flex flex-col justify-center"
    >
      {/* Header */}
      <div className="flex text-xl sm:text-2xl lg:text-3xl mb-6 items-center">
        <span className="text-[#D8C99B] font-bold mr-3">
          <MdOutlinePerson />
        </span>
        <span className="tracking-wider font-semibold mr-3">About</span>
      </div>

      {/* Grid principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-600 p-6 gap-10">
        {/* Resumo */}
        <div
          data-aos="fade-right"
          data-aos-delay="100"
          className="p-4 space-y-4"
        >
          <h1 className="font-bold text-2xl">Graduate in Computer Engineering</h1>
          <p>
            With hands-on experience in web development, networking, and technical support. I’m interested in projects that combine technology and real-world impact, always striving to learn new tools and techniques.
          </p>
          <p>
            Passionate about creating efficient and innovative solutions, with a focus on continuous learning and professional growth. Open to remote or on-site challenges.
          </p>

          {/* Botões */}
          <div className="flex gap-3 mt-4">
            <Link
              href="#contact"
              className="bg-[#d8973cd7] p-2 rounded transition-colors hover:bg-[#d8973cab] cursor-pointer"
            >
              Get in Touch
            </Link>
            <Link
              download
              href="/curriculum.pdf"
              className="border p-2 rounded transition-transform hover:scale-105"
            >
              Download CV
            </Link>
          </div>
        </div>

        {/* Texto adicional */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="lg:text-justify mt-5 font-sans"
        >
          <h2 className="font-bold text-2xl mb-4">Career + Development</h2>
          <AccordionIcons />
        </div>
      </div>
    </div>
  );
}
