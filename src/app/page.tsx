import HomePresentation from "@/_components/HomePresentation";
import GithubAPI from "@/_components/GithubAPI";
import About from "../_components/About/About";
import  SparklesCore  from "@/_components/SparklesPreview";


export default function Home() {
  return (
    <div className="bg-[#030A15]  font-sans relative overflow-hidden">
      
         
         
        <SparklesCore />
      
     
      
      
      <section className=" min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 text-[#E6E6E6] ">
        <HomePresentation />
        <GithubAPI/>
      </section>
      <section className="min-h-screen">
        <About />
      </section>
    </div>
  );
}
