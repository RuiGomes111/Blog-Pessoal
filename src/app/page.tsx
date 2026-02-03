"use client";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading/Loading"
import HomePresentation from "@/components/HomePresentation";
import About from "../components/About/About";
import SparklesCore from "@/components/SparklesPreview";
import Contact from "@/components/Contact/Contact";
import SkillsSection from "@/components/Skills/skills";
import Projects from "@/components/Projets/Projects";



  export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoading(false)
    } else {
      window.addEventListener("load", () => {
        setIsLoading(false)
      })
    }
  }, [])

  if (isLoading) {
    return <Loading />
  }
  
  return (
    <div className="bg-[#05080F] font-sans relative overflow-hidden">
      <div>
        <SparklesCore />

        <section className="min-h-screen flex justify-center ">
          <HomePresentation />
        </section>

        <section className="min-h-screen flex justify-center items-center">
          <About />
        </section>

        {/* Grid de skills */}
        <section>
          <SkillsSection />
        </section>

        {/* Grid de projects */}
        <section>
          <Projects />
        </section>

        <section className="max-w-5xl mx-auto min-h-screen px-4">
          <Contact />
        </section>
      </div>
    </div>
  );
}
