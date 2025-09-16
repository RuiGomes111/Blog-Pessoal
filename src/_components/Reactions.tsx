"use client";
import { IoIosHeart } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { useEffect, useState } from "react";

  export default function Reactions(){

    const [love, setLove] = useState< number | null>(null);
    const [like, setLike] = useState< number | null>(null);

  useEffect(() => {
    const savedLove = localStorage.getItem("love");
    const savedLike = localStorage.getItem("like");
    
    setLove(savedLove? JSON.parse(savedLove): 0)
    setLike(savedLike? JSON.parse(savedLike): 0)
    
  }, []);

  useEffect(() => {
    if (love != null) {
      localStorage.setItem("dados", JSON.stringify(love));
    }
  }, [love]);

  useEffect(()=>{
    if(like != null){
        localStorage.setItem("dados", JSON.stringify(like))
    }
  },[like])
    return(
        <>
        <div className="flex items-center gap-x-3 ">
                  <button
                    onClick={() => setLove(love + 1)}
                    className="flex items-center gap-x-1"
                  >
                    <IoIosHeart className="text-red-500" />
                    {love}Love
                  </button>
                  <button onClick={() => setLike(like + 1)} className="flex items-center gap-x-1">
                    <AiOutlineLike />
                    {like}Like
                  </button>
                </div></>
    )
  }