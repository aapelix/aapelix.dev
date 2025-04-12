"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex w-3/4 justify-center overflow-x-hidden text-5xl text-gray-500 items-center">
      <div className="flex flex-col gap-3">
        <Link className="hover:text-black duration-300" href="/socials">
          Socials
        </Link>
        <Link
          className="hover:text-black duration-300"
          href="https://aapelix.link/"
        >
          URL shortener
        </Link>
        <Link
          className="hover:text-black duration-300"
          href="https://jamix.aapelix.dev/"
        >
          JamixMenuV3
        </Link>
        <Link
          className="hover:text-black duration-300"
          href="https://github.com/aapelix/abrw6"
        >
          abrw6
        </Link>
        <Link
          className="hover:text-black duration-300"
          href="https://github.com/aapelix/a4"
        >
          a4
        </Link>
        <Link
          className="hover:text-black duration-300"
          href="https://modrinth.com/mod/blocksmined"
        >
          BlocksMined
        </Link>
        <Link
          className="hover:text-black duration-300"
          href="https://weather.aapelix.dev/"
        >
          weather
        </Link>
      </div>
    </main>
  );
}
