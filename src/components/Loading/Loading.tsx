import { BeatLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#05080F] relative overflow-hidden">
      
      {/* Glow background */}
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Conteúdo */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        <BeatLoader color="#3B82F6" size={15} />
        
        <h1 className="text-blue-400 text-sm tracking-widest uppercase animate-pulse">
          Loading...
        </h1>
      </div>
    </div>
  );
}
