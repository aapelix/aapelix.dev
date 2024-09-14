"use client";

import { Github, Twitter, Youtube, SquareArrowOutUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [input, setInput] = useState("");
  const [limit, setLimit] = useState(3);

  const items = [
    {
      title: "abrw",
      description: "A fast and private browser made with rust and WebKit",
      url: "https://abrw.aapelix.dev/#THISDOESNTACTUALLYEXISTYET",
      git: "https://github.com/aapelix/abrw",
    },
    {
      title: "Aapelix's Weather App",
      description: "My very own weather app/website powered by WeatherApi",
      url: "https://weather.aapelix.dev",
      git: "https://github.com/aapelix/weather.aapelix.dev",
    },
    {
      title: "aocs",
      description: "Simple rust script to generate docs from .md files",
      git: "https://github.com/aapelix/aocs",
    },
    {
      title: "jamix.aapelix.dev",
      description: "Remake of the jamixmenu.com food menu app",
      url: "https://jamix.aapelix.dev",
      git: "https://github.com/aapelix/jamixmenuv3",
    },
    {
      title: "wikipedia-search",
      description: "A test to try to create a search engine",
      git: "https://github.com/aapelix/wikipedia-search",
    },
    {
      title: "Kvanttitietokone",
      description: "Work in progress chat bot powered by OpenAI",
      git: "https://github.com/aapelix/chatti-botti",
    },
    {
      title: "BlocksMined",
      description: "A minecraft mod that tracks blocks mined on a server/world",
      url: "https://modrinth.com/mod/blocksmined",
      git: "https://github.com/aapelix/blocksmined",
    },
    {
      title: "Project KTJNKEIO",
      description:
        "A WIP game. The letters KTJNKEIO mean 'Keksikää Tälle joku nimi koska en ite osaa' that translates to 'Come Up With a Name For This Because I Can't Myself'",
      git: "https://github.com/aapelix/project-ktjnkeio",
    },
    {
      title: "Argonium",
      description:
        "NPM Package for usign many popular command line commands 39.948 (just a random number, no science) times easier and faster",
      url: "https://argonium.net/",
    },
    {
      title: "Ilma",
      description: "A better version (🧢) of Wilma",
      git: "https://github.com/aapelix/project-ilma",
    },
    {
      title: "RealmiUtils",
      description:
        "Mineraft utility mod for a finnish minecraft server called Realmi",
      url: "https://modrinth.com/mod/realmiutils",
      git: "https://github.com/aapelix/realmiutils",
    },
    {
      title: "Cmd Weather App",
      description:
        "Like the name suggests, a cmd weather app. Who doesn't need one?",
      git: "https://github.com/aapelix/weather",
    },
    {
      title: "Aapelix's News app",
      description: "WIP News app",
      url: "https://news.aapelix.dev",
      git: "https://github.com/aapelix/news.aapelix.dev",
    },
  ];

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().startsWith(input.toLowerCase()),
  );

  return (
    <div className="w-full flex min-h-screen justify-center items-center text-white flex-col gap-y-4">
      <div className="lg:w-2/3 px-10 w-full py-10">
        <div className="flex md:flex-row flex-col md:justify-between">
          <div>
            <h1 className="md:text-6xl text-6xl font-black">
              It&apos;s me, aapelix
            </h1>
            <p className="mt-1">
              Hello there, I&apos;m aapelix, a programmer from Finland 🇫🇮 <br />
              Been programming since 2016, and passionate about 🦀 (rust)!{" "}
              <br />I use arch btw, and you should too ☠️
            </p>
          </div>
          <div className="flex flex-wrap lg:mt-0 mt-4 gap-3 md:flex-row flex-row items-center">
            <a href="https://github.com/aapelix">
              <button className="md:w-44 w-32 md:hover:w-96 duration-300 h-12 bg-white text-black rounded-full">
                Github
              </button>
            </a>
            <a href="https://youtube.com/@aapelix">
              <button className="md:w-44 w-32 md:hover:w-96 duration-300 h-12 bg-white text-black rounded-full">
                Youtube
              </button>
            </a>
          </div>
        </div>

        <div className="mt-10">
          <input
            type="search"
            autoComplete="false"
            className="focus:w-full w-56 duration-300 py-2 rounded-full px-5 bg-blue-500 placeholder:text-zinc-300"
            placeholder="Search my projects"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <ul className="bg-white text-black rounded-3xl px-5 py-2 mt-2">
            {filteredItems.slice(0, limit).map((project, index) => (
              <li
                className="my-0.5 flex justify-between items-center"
                key={index}
              >
                <div>
                  <h1 className="font-bold">{project.title}</h1>
                  <p className="-translate-y-1">{project.description}</p>
                </div>
                <div className="flex">
                  {project.git && (
                    <a
                      href={project.git}
                      className="hover:scale-110 duration-300"
                    >
                      <Github />
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      className="hover:scale-110 duration-300"
                    >
                      <SquareArrowOutUpRight />
                    </a>
                  )}
                </div>
              </li>
            ))}
            <button
              className="bg-blue-500 py-1 px-2 rounded-full text-white hover:scale-105 duration-300"
              onClick={() => setLimit(limit + 3)}
            >
              Show more
            </button>
            <button
              className="bg-blue-500 ml-2 py-1 px-2 rounded-full text-white hover:scale-105 duration-300"
              style={{ display: limit == 3 ? "none" : "" }}
              onClick={() => setLimit(3)}
            >
              Show less
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
