"use client"

import Image from "next/image";
import ball_with_text from "@/public/ball_with_text.png"

export default function Home() {
  return (
    <div>
      <div className="flex w-screen flex-col h-screen justify-center items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Image className="md:h-[60vh] md:w-auto" alt="Aapelix logo" src={ball_with_text}/>
      </div>
      <footer className="flex gap-2 absolute bottom-5 text-lg left-1/2 transform -translate-x-1/2">
        <a href="https://aapelix.link/gh">Github</a>
        <a href="https://aapelix.link/yt">Youtube</a>
      </footer>
    </div>
  );
}
