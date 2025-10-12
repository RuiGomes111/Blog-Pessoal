"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(""); 

  async function handleSubmit(e) {
    e.preventDefault(); 
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formsubmit.co/ruisoft01@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset(); // limpa os campos
        setTimeout(()=>{
          setStatus("")
        }, 2000)
      } else {
        setStatus("error");
        setTimeout(()=>{
          setStatus("")
        }, 2000);
      }
    } catch (err) {
      setStatus("error");
      setTimeout(()=>{
          setStatus("")
        }, 2000);
    }
  }

  return (
    <div className="bg-[#0B111E] shadow-xl rounded-2xl p-8 w-full max-w-md">
      {/* Título */}
      <h2 className="text-2xl font-bold text-white mb-6 text-center border-b-2 border-cyan-500 pb-2">
        Talk to me
      </h2>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <input
          type="hidden"
          name="_captcha"
          value="false"
        />
        <input
          type="hidden"
          name="_subject"
          value="Nova mensagem do portfólio!"
        />

        {/* Nome */}
        <input
          type="text"
          name="nome"
          placeholder="Enter your name"
          required
          className="px-4 py-2 border border-gray-600 rounded-lg bg-[#121828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          required
          className="px-4 py-2 border border-gray-600 rounded-lg bg-[#121828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Mensagem */}
        <textarea
          name="mensagem"
          placeholder="Enter your message"
          required
          className="px-4 py-2 border border-gray-600 rounded-lg bg-[#121828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          rows={4}
        />

        {/* Botão */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send"}
        </button>
      </form>

      {/* Mensagem de feedback */}
      
      {status === "success" && (
        <p className="text-green-400 text-center mt-4">
          ✅ Mensagem enviada com sucesso!
        </p>
        
      )}
      {status === "error" && (
        <p className="text-red-400 text-center mt-4">
          ❌ Ocorreu um erro. Tente novamente.
        </p>
      )}
    </div>
  );
}
