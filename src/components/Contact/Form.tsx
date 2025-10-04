export default function ContactForm() {
  return (
    <div className="bg-[#0B111E] shadow-xl rounded-2xl p-8 w-full max-w-md">
      {/* Título */}
      <h2 className="text-2xl font-bold text-white mb-6 text-center border-b-2 border-cyan-500 pb-2">
        Talk to me
      </h2>

      {/* Form */}
      <form className="flex flex-col gap-4">
        {/* Nome */}
        <input
          type="text"
          placeholder="Digite o seu nome"
          required
          className="px-4 py-2 border border-gray-600 rounded-lg bg-[#121828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="example@gmail.com"
          required
          className="px-4 py-2 border border-gray-600 rounded-lg bg-[#121828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />

        {/* Mensagem */}
        <textarea
          placeholder="Digite sua mensagem"
          required
          className="px-4 py-2 border border-gray-600 rounded-lg bg-[#121828] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
          rows={4}
        />

        {/* Botão */}
        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
