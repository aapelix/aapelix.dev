"use client";

//import { motion } from "motion/react";
import Link from "next/link";
import {
  Archive12,
  Cable12,
  Cloud12,
  Compass12,
  FileCode212,
  Link12,
  Pickaxe12,
  SquareMenu12,
} from "@aapelix/pixels";

export default function Home() {
  return (
    <main className="min-h-screen flex w-3/4 justify-center overflow-x-hidden text-5xl text-gray-500 items-center">
      <div className="flex flex-col gap-3">
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="/socials"
        >
          <Link12 className="w-10 h-10 -translate-y-1.5" />
          Socials
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://aapelix.link/"
        >
          <Cable12 className="w-10 h-10 -translate-y-1.5" />
          URL shortener
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://jamix.aapelix.dev/"
        >
          <SquareMenu12 className="w-10 h-10 -translate-y-1.5" />
          JamixMenuV3
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://github.com/aapelix/abrw6"
        >
          <Compass12 className="w-10 h-10 -translate-y-1.5" />
          abrw6
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://github.com/aapelix/a4"
        >
          <FileCode212 className="w-10 h-10 -translate-y-1.5" />
          a4
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://modrinth.com/mod/blocksmined"
        >
          <Pickaxe12 className="w-10 h-10 -translate-y-1.5" />
          BlocksMined
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://github.com/aapelix/gracias"
        >
          <Archive12 className="w-10 h-10 -translate-y-1.5" />
          Lucide Pixel
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://weather.aapelix.dev/"
        >
          <Cloud12 className="w-10 h-10 -translate-y-1.5" />
          weather
        </Link>
      </div>
    </main>
  );
}
