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
    <div className="w-full h-screen flex justify-center items-center text-white flex-col gap-y-4">
      <h1 className="text-6xl font-black">It's me, aapelix</h1>
      <div className="flex flex-wrap gap-3 md:flex-row flex-col justify-center items-center">
        <a href="https://github.com/aapelix">
          <button className="w-44 hover:w-96 duration-300 h-12 bg-white text-black rounded-full">
            Github
          </button>
        </a>
        <a href="https://weather.aapelix.dev">
          <button className="w-44 hover:w-96 duration-300 h-12 bg-white text-black rounded-full">
            Weather
          </button>
        </a>
      </div>
    </div>
  );
}
