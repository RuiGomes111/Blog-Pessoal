import Navabar from "@/components/Navbar";
import HomePresentation from "@/components/HomePresentation";
import GithubAPI from "@/components/GithubAPI";
import About from "./about/page";
import Link from "next/link";
import { posts } from "./lib/posts"

export default function Home() {
  return (
    <div className="bg-[#030A15]  font-sans">      
      <section className="min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 text-[#E6E6E6] ">
        <HomePresentation />
        <GithubAPI />
      </section>
      <section className="min-h-screen">
        <div id="posts" className="min-h-screen text-[#E6E6E6] max-w-5xl items-center mx-auto mt-20 px-4"
>
          <span className="text-[#3178C6] font-bold mr-3">##</span>
          <span className="uppercase tracking-wider font-semibold mr-3"> Meus Posts </span>

        <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-gray-600 p-6 gap-10"></div>
            <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-700 pb-4">
            <h2 className="text-2xl font-semibold mb-2">
              <Link
                href={`/posts/${post.slug}`}
                className=" text-[#3178C6] hover:text-cyan-400 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-400">{post.date}</p>
            <p className="text-gray-300 mt-2">{post.excerpt}</p>
            <p className="text-gray-300 mt-2">{post.content}</p>
            {/* Botão Ler mais */}
            <div className="mt-4">
              <Link
                href={`/posts/${post.slug}`}
                className="inline-block px-4 py-2 rounded-xl  bg-cyan-600 hover:bg-cyan-500 transition"
              >
                Ler mais →
              </Link>
            </div>

          </article>
        ))}
      </div>
        </div>
      </section>
      
    </div>
  );
}
