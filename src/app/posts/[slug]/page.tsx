import { notFound } from "next/navigation";
import Link from "next/link";
import { posts } from "../../lib/posts";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="max-w-2xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 text-[#3178C6]">{post.title}</h1>
      <p className=" text-sm mb-6">{post.date}</p>
      <div className="prose prose-invert mb-6">
        <p>{post.content}</p>
      </div>

      {/* Botão voltar */}
      <div className="mt-8">
        <Link
          href="/"
          className="inline-block px-4 py-2 rounded-xl text-white bg-gray-800 hover:bg-gray-700 transition"
        >
          ← Voltar ao blog
        </Link>
      </div>
    </main>
  );
}
