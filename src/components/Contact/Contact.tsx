import ProfileCard from "../ProfileCard/ProfileCard";
import Form from "./Form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-4 py-12 min-h-screen flex flex-col gap-12 mb-12"
    >
      {/* Título da seção */}
      <div className="flex justify-center mb-8">
        <h2 className="text-white text-3xl font-bold border-b-4 border-cyan-500 pb-2">
          Contact <span className="text-[#D8C99B]">Me</span>
        </h2>
        
      </div>
      <div>
        <p className="text-gray-300 text-center mb-6  mx-auto max-w-3xl ">
  I’m always open to new challenges, collaboration opportunities, and exciting projects. 
  If you’d like to discuss ideas, partnerships, or just say hi, 
  send me a message! I’ll be happy to respond as soon as possible. 🚀
</p>

      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Card */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ProfileCard
            name="Rui Gomes"
            title="Fullstack Developer | Criador de Soluções Digitais"
            handle="@ruigomes-dev"
            status="Disponível"
            avatarUrl="/gomes.webp"
          />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Form />
        </div>
      </div>
    </section>
  );
}
