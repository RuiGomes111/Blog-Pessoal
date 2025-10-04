import HomePresentation from "@/components/HomePresentation";
import About from "../components/About/About";
import SparklesCore from "@/components/SparklesPreview";
import Contact from "@/components/Contact/Contact";
import SkillsSection from "@/components/Skills/skills";
import Projects from "@/components/Projets/Projects";
export default async function HomePage() {
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
