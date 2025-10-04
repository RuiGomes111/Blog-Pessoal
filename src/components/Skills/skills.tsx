import React from "react";
import { FaHtml5, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss,SiTypescript,SiVercel  } from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "HTML / CSS", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600 text-3xl" /> },
    { name: "React.js", icon: <FaReact className="text-blue-400 text-3xl" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-800 text-3xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
    { name: "MySQL", icon: <FaDatabase className="text-blue-600 text-3xl" /> },
    { name: "Python", icon: <FaPython className="text-yellow-500 text-3xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-black text-3xl" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-400 text-3xl" /> },
    { name: "Vercel", icon: <SiVercel className="text-black text-3xl" /> },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto min-h-screen px-4 py-12 ">
      {/* Título */}
      <div className="flex justify-center mb-12">
        <h2 className="text-white text-3xl font-bold border-b-4 border-cyan-500 pb-2">
          My <span className="text-[#D8C99B]">Skills</span>
        </h2>
      </div>

      {/* Grid de skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 flex flex-col items-center justify-center text-gray-900 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition transform"
          >
            {skill.icon}
            <p className="mt-3 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
