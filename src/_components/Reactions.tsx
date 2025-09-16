"use client";
import { IoIosHeart } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Reactions() {
  const [love, setLove] = useState<number>(0);
  const [like, setLike] = useState<number>(0);

  useEffect(() => {
    const savedLove = localStorage.getItem("love");
    const savedLike = localStorage.getItem("like");

    if (savedLove) setLove(JSON.parse(savedLove));
    if (savedLike) setLike(JSON.parse(savedLike));
  }, []);

  useEffect(() => {
    localStorage.setItem("love", JSON.stringify(love));
  }, [love]);

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  return (
    <div className="flex items-center gap-x-3">
      <button
        onClick={() => setLove(love + 1)}
        className="flex items-center gap-x-1"
      >
        <IoIosHeart className="text-red-500" />
        {love} Love
      </button>
      <button
        onClick={() => setLike(like + 1)}
        className="flex items-center gap-x-1"
      >
        <AiOutlineLike />
        {like} Like
      </button>
    </div>
  );
}
