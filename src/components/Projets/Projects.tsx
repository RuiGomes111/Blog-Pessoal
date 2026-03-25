import React from "react";
import Image from "next/image";
import { CiShare1 } from "react-icons/ci";

export default function Projects() {
  const skills = [
    {
      name: "Quiz Sadc",
      stak: ["Next.js", "TailwindCSS", "Framer Motion"],
      icon: [CiShare1],
      linkOpen: "https://sinal-sadc.vercel.app/",
      img: "/sadc.webp",
      description:
        "Interactive educational platform about traffic signs in the SADC region.",
    },
    {
      name: "DEVersidade",
      stak: ["Next.js", "TailwindCSS"],
      icon: [CiShare1],
      linkOpen: "https://ruigomes111.github.io/website-deversidade/",
      img: "/deversidade.webp",
      description: "Landing page for a developer community.",
    },
    {
      name: "CV Generator",
      stak: ["React.js", "TypeScript", "TailwindCSS"],
      icon: [CiShare1],
      linkOpen: "https://ruigomes111.github.io/Gerador-de-CV-Inteligente/",
      img: "/cv.webp",
      description: "Intelligent Resume Builder.",
    },
    {
      name: "Lacrei Saúde — Frontend Challenge",
      stack: ["next.js", "TypeScript", "Styled Component"],
      icon: [CiShare1],
      linkOpen: "https://desafio-lacrei-saude-alpha.vercel.app/",
      img: "/lacrei.webp",
      description: "Project developed as part of a technical challenge proposed by the Lacrei Saúde platform. The goal was to create a responsive and accessible landing page focused on digital inclusion and LGBTQIAPN+ representation. Built with Next.js, React, and Styled Components, emphasizing UI/UX best practices and high performance.",
    },
    {
      name: "ACHAEL - Comércio e Prestação de Serviços, LDA",
      stack: ["React.js", "TypeScript", "TailwindCSS"],
      icon: [CiShare1],
      linkOpen: "https://achael.vercel.app/",
      img: "/achael.webp",
      description: "This project consists of a modern and responsive institutional website, designed to clearly and attractively showcase the services offered while providing a direct contact channel for clients. The design was created to deliver a smooth experience on both desktop and mobile devices, ensuring all information is easily accessible without compromising aesthetics.",
    }
  ];

  return (
    <section id="project" className="max-w-6xl mx-auto min-h-screen px-4 py-12">
      {/* Título */}
      <div className="flex justify-center mb-12">
        <h2 className="text-white text-3xl font-bold border-b-4 border-cyan-500 pb-2">
          Featured <span className="text-[#D8C99B]">Projects</span>
        </h2>
      </div>

      <div className="text-white max-w-3xl mx-auto mb-6 text-center">
        <p>
          Here are some of the projects I&apos;ve developed with dedication and
          creativity. Each one represents challenges overcome, lessons learned,
          and solutions designed to create real impact. 🚀 Explore and see how I
          turn ideas into digital experiences.
        </p>
      </div>

      {/* Grid de projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#0B111E] flex flex-col items-center text-gray-100 p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto"
          >
            {/* Imagem */}
            {skill.img && (
              <div className="relative h-48 w-full rounded-md overflow-hidden">
                <Image
                  src={skill.img}
                  alt={skill.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105 rounded-md"
                />
              </div>
            )}

            {/* Stack */}
            {skill.stak && (
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {skill.stak.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-[#7584a5e0] text-white text-xs px-2 py-1 rounded-full shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Nome */}
            <p className="mt-4 font-semibold text-lg text-center">
              {skill.name}
            </p>

            {/* Descrição */}
            {skill.description && (
              <p className="text-gray-100 text-sm mt-3 text-center max-h-20 overflow-auto">
                {skill.description}
              </p>
            )}

            {/* Ícones */}
            {skill.icon && (
              <div className="flex gap-4 mt-3 justify-center">
                <a href={skill.linkOpen} target="_blank" rel="noopener noreferrer">
                  {skill.icon.map((Icon, idx) => (
                    <Icon
                      key={idx}
                      className="text-gray-100 text-2xl hover:text-cyan-500 cursor-pointer transition-colors"
                    />
                  ))}
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
