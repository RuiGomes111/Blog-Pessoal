import Link from "next/link";
import { AccordionIcons } from "@/_components/AccordionIcons";
import { MdOutlinePerson } from "react-icons/md";
export default function About() {
  return (
    <>
      <div
        id="about"
        className="bg-[#030A15] min-h-screen text-[#E6E6E6] max-w-5xl items-center mx-auto mt-20 px-4"
      >
        <div className="flex text-4xl">
          <span className="text-[#3178C6] font-bold mr-3">
            <MdOutlinePerson />
          </span>
          <span className="uppercase tracking-wider font-semibold mr-3 ">
            About
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-600 p-6 gap-10">
          {/* Resumo */}
          <div className="p-4 space-y-4">
            <h1 className="font-bold">Graduado em Engenharia Informática</h1>
            <p>
              com experiência prática em desenvolvimento web, redes e suporte
              técnico. Tenho interesse em projetos que unam tecnologia e impacto
              real, sempre buscando aprender novas ferramentas e técnicas.
            </p>
            <p>
              Apaixonado por criar soluções eficientes e inovadoras, com foco em
              aprendizado contínuo e evolução profissional. Disponível para
              desafios remotos ou presenciais.
            </p>

            {/*botões */}
            <div className="flex gap-3">
              <button className="bg-blue-600 p-2 rounded">
                Entrar em Contacto
              </button>
              <Link
                download
                href="/curriculum.pdf"
                className="bg-gray-600 p-2 rounded"
              >
                Baixar CV
              </Link>
            </div>
          </div>

          {/* Texto */}
          <div className="lg:text-justify mt-5 font-sans">
            <h2 className="font-bold text-2xl">Carreira + Desenvolvimento</h2>

            <AccordionIcons />
          </div>
        </div>
      </div>
    </>
  );
}
