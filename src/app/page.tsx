"use client";

import { Github, Twitter, Youtube, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const items = [
    {
      title: "Aapelix's News app",
      description: "WIP News app",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://news.aapelix.dev",
      className: "col-span-1",
      published: "2024",
    },
    {
      title: "Aapelix's Weather App",
      description: "My very own weather app/website powered by WeatherApi",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://weather.aapelix.dev",
      className: "col-span-1",
      published: "2024",
    },
    {
      title: "Project KTJNKEIO",
      description:
        "A WIP game. The letters KTJNKEIO mean 'Keksikää Tälle joku nimi koska en ite osaa' that translates to 'Come Up With a Name For This Because I Can't Myself'",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://github.com/aapelix/project-ktjnkeio",
      className: "row-span-1",
      published: "Coming soonTM",
    },
    {
      title: "Argonium",
      description:
        "NPM Package for usign many popular command line commands 39.948 (just a random number, no science) times easier and faster",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://argonium.net/",
      className: "row-span-1",
      published: "2023",
    },
    {
      title: "Jamix menu v2",
      description: "My own version of JAMIX food app (WIP)",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://jamix.aapelix.dev",
      className: "row-span-1",
      published: "Coming soonTM",
    },
    {
      title: "Ilma",
      description: "A better version (🧢) of Wilma",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://github.com/aapelix/project-ilma",
      className: "row-span-1",
      published: "Coming soonTM",
    },
    {
      title: "RealmiUtils",
      description:
        "Mineraft utility mod for a finnish minecraft server called Realmi",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://modrinth.com/mod/realmiutils",
      className: "row-span-1",
      published: "2023",
    },

    {
      title: "Cmd Weather App",
      description:
        "Like the name suggests, a cmd weather app. Who doesn't need one?",
      header: <img className="rounded-lg" src="/Gradient.png" />,
      url: "https://github.com/aapelix/weather",
      className: "row-span-1",
      published: "2024",
    },
  ];

  return (
    <>
      <div className="flex h-screen flex-wrap items-center justify-center gap-x-44">
        <h1 className="text-2xl text-zinc-400">
          <motion.p
            animate={{ y: 0, opacity: 100 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: 1.4 }}
          >
            It{"'"}s me,
            <span className="text-zinc-300 font-semibold"> Aapelix</span>.
          </motion.p>
          <motion.p
            animate={{ y: 0, opacity: 100 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: 1.6 }}
          >
            I{"'"}m a
            <span className="text-zinc-300 font-semibold"> programmer</span>{" "}
            working on
          </motion.p>
          <motion.p
            animate={{ y: 0, opacity: 100 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: 1.8 }}
          >
            my own projects for fun
          </motion.p>
        </h1>
        <motion.svg
          width="617"
          height="809"
          viewBox="0 0 617 809"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="px-5"
        >
          <motion.path
            d="M313.5 808L507.5 3.5M507.5 3.5L217.5 808M507.5 3.5L126.5 808M507.5 3.5L407 808M507.5 3.5L522.5 808M507.5 3.5L616 808M507.5 3.5L11 808"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M488.526 296.2C472.918 419.627 374.567 518 247 518C111.138 518 1 407.862 1 272C1 136.138 111.138 26 247 26C309.873 26 341.524 71.8443 369.345 124.767C373.634 132.925 377.834 141.254 382.042 149.602C391.445 168.253 400.892 186.992 411.482 204.105C426.827 228.901 444.664 250.45 468.469 263.618C480.815 270.447 490.25 282.566 488.526 296.2Z"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>
      <div className="flex justify-center flex-col w-screen pb-4">
        <p className="text-center text-zinc-400 mb-3">
          Section working progress
        </p>
        <div className="grid grid-cols-3 gap-3 mx-10">
          {items.map((item, index) => (
            <div
              className={
                "bg-[#1a1a1a] text-zinc-300 h-[30rem] p-4 flex flex-col rounded-3xl items-start relative hover:scale-[1.03] hover:shadow-xl duration-300" +
                " " +
                item.className
              }
              key={index}
            >
              {item.header}
              <h1 className="mt-3 text-lg font-bold">{item.title}</h1>
              <p className="text-zinc-400">{item.description}</p>
              <p className="text-zinc-400 absolute left-4 bottom-5">
                {item.published}
              </p>
              <a
                href={item.url}
                className="absolute bottom-5 right-5 hover:scale-105 duration-300"
              >
                <SquareArrowOutUpRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
