import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div
  id="about"
  className="bg-[#030A15] min-h-screen text-[#E6E6E6] max-w-5xl items-center mx-auto mt-20 px-4"
>
  <span className="text-[#3178C6] font-bold mr-3">02</span>
  <span className="uppercase tracking-wider font-semibold mr-3">
    About
  </span>

  <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-600 p-6 gap-10">
    {/* Imagem */}
    <div className="p-2 rounded-2xl bg-black shadow-[0_0_20px_4px_rgba(0,255,255,0.7)] flex justify-center">
      <Image
        src="/gomes.webp"
        alt="image Gomes"
        width={500}
        height={500}
        className="rounded-2xl w-full max-w-sm h-auto object-contain"
      />
    </div>

    {/* Texto */}
    <div className="lg:text-justify mt-5 font-sans">
        <h1 className="font-bold mb-5 text-lg sm:text-2xl md:text-3xl lg:text-3xl">
  [Carreira | Transformação]
</h1>

      <p>
        Sou desenvolvedor fullstack em início de carreira, apaixonado por
        tecnologia e pelo impacto que ela pode gerar na vida das pessoas.
        Tenho experiência em desenvolvimento web com{" "}
        <span className="underline">Next.js</span>,{" "}
        <span className="underline">React</span>,{" "}
        <span className="underline">TailwindCSS</span> e integração de
        APIs. Atualmente participo do{" "}
        <Link
          href="https://desenvolve.grupoboticario.com.br/"
          target="blank"
          className="text-[#3178C6] hover:underline"
        >
          Programa Desenvolve
        </Link>
        , uma iniciativa do{" "}
        <Link
          href="https://www.grupoboticario.com.br/"
          target="blank"
          className="text-[#3178C6] hover:underline"
        >
          Grupo Boticário
        </Link>{" "}
        em parceria com a{" "}
        <Link
          href="https://escolakoru.com.br/"
          target="blank"
          className="text-[#3178C6] hover:underline"
        >
          Koru
        </Link>
        , onde estou a aprofundar os meus conhecimentos em desenvolvimento
        e boas práticas do mercado de tecnologia. Essa experiência tem
        sido fundamental para acelerar minha evolução técnica e expandir
        minha visão de carreira.
      </p>
    </div>
  </div>
</div>

    </>
  );
}
