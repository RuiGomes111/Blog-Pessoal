import { RiGitRepositoryCommitsFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

export default async function GithubAPI() {
  type gitFacts = {
    login: string;
    name: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
    avatar_url: string;
    html_url: string;
    repos_url: string;
  };

  const response = await fetch("https://api.github.com/users/ruigomes111", {
    next: { revalidate: 500 },
  });

  if (!response.ok) {
    throw new Error("falha ao carregar dados da API");
  }

  const data: gitFacts = await response.json();

  type reposFact = {
    id: number;
    name: string;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    visibility: string;
    updated_at: string;
  };
  const repos = await fetch("https://api.github.com/users/ruigomes111/repos", {
    next: { revalidate: 60 },
  });

  if (!repos.ok) {
    throw new Error("falha ao carregar dados da API");
  }

  const dados: reposFact[] = await repos.json();
  return (
    <>
      <div className="overflow-y-auto overflow-x-hidden w-105 h-120 mt-30 bg-[#0D1117] rounded-l-2xl font-sans absolute right-20 hidden sm:block ">
        <div className="flex bg-[#010409] p-2 ">
          <div>
            {" "}
            <Image
              src={data.avatar_url}
              alt={data.login}
              width={50}
              height={50}
              className="rounded-full border-2 border-[#E6E6E6]"
            />
          </div>

          <div>
            <p className="flex gap-1.5 justify-between">
              <span className="text-[#3178C6] font-bold pl-2 text-xl">
                {data.name}
              </span>{" "}
              ({data.login})
              <span className="text-2xl">
                <FaGithub />
              </span>
            </p>
            <div className="flex gap-x-4 text-sm ml-10 ">
              <p>
                {data.followers}:{" "}
                <span className="text-gray-400">followers</span>
              </p>
              <p>
                {data.following}:{" "}
                <span className="text-gray-400">Following</span>{" "}
              </p>
              <p className="flex items-center">
                <RiGitRepositoryCommitsFill /> : {data.public_repos}
              </p>
            </div>
          </div>
        </div>
        {/*Meus Repositórios*/}
        <div className="mx-auto items-center p-5">          
          {dados.map((repo) => (
            <div key={repo.id} className="border-b-1 border-gray-400 mb-3">
              <p className="font-bold text-[#3178C6]">
                {repo.html_url && (
                  <Link
                    href={repo.html_url}
                    className="hover:underline"
                    target="blank"
                  >
                    {repo.name}{" "}
                  </Link>
                )}
                <span className="text-gray-400 border-1 rounded-2xl text-sm ml-2">
                  {repo.visibility}
                </span>
              </p>
              <p className="text-sm">{repo.description}</p>
              <div className="flex items-center mt-3">
                <GoDotFill className="text-blue-600" />
                <p className=" text-sm text-gray-400"> {repo.language}</p>
              </div>
            </div>
          ))}          
            
          </div>
        </div>
      
    </>
  );
}
