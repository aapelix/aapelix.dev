"use client";

import { Github, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { BackgroundGradientAnimation } from "./components/ui/background-gradient-animation";
import { CardBody, CardContainer, CardItem } from "./components/ui/3d-card";
import Link from "next/link";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("");
  const [input, setInput] = useState("");

  const projects = [
    {
      name: "weather.aapelix.dev",
      desc: "My weather app powered by OpenWeatherMap",
      site: "https://weather.aapelix.dev",
      gh: "https://github.com/aapelix/weather.aapelix.dev",
    },
    {
      name: "Project Ilma",
      desc: "(WIP) My version of wilma.fi",
      site: "https://ilma.aapelix.dev",
      gh: "https://github.com/aapelix/project-ilma",
    },
  ];

  const filteredProjects = projects.filter((e) =>
    e.name.toLowerCase().startsWith(input.toLowerCase())
  );

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch("/api/daily-image");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setImageSrc(url);
    };

    fetchImage();
  }, []);

  return (
    <>
      <div className="w-screen md:h-screen h-[120vh] absolute top-[100vh] bg-[#1a1a1a]" />
      <main className="w-screen flex justify-center min-h-screen bg-[#1a1a1a] bg-no-repeat text-background font-heading md:text-5xl antialiased tracking-[-0.015em] text-4xl font-bold">
        <BackgroundGradientAnimation />
        <div className="flex flex-col w-2/3 justify-start items-center">
          <section
            id="hero"
            className="flex items-center gap-6 flex-wrap justify-center w-full h-[90vh] z-10"
          >
            <h1 className="md:mr-10 mr-0 text-6xl translate-y-24 lg:translate-y-0 font-bold">
              Its me, <br /> aapelix
            </h1>
            {imageSrc && (
              <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                  >
                    Random image from me
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <img className="rounded-3xl" src={imageSrc} alt="" />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    <a href={imageSrc} target="_blank">
                      <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                      >
                        View raw img
                      </CardItem>
                    </a>
                  </div>
                </CardBody>
              </CardContainer>
            )}
          </section>
          <img
            src="/wave-haikei.png"
            className="w-screen absolute h-min object-fill bottom-0 pixelated"
          />
          <section id="about" className="md:mt-0 translate-y-44">
            <h1>Who am I?</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia id
              cum laudantium perspiciatis veniam amet error enim est earum,
              consectetur veritatis animi incidunt quisquam sit unde tenetur
              totam doloribus dolor. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Quia id cum laudantium perspiciatis veniam amet
              error enim est earum, consectetur veritatis animi incidunt
              quisquam sit unde tenetur totam doloribus dolor.
            </p>
          </section>
          <section
            id="socials"
            className="flex w-full flex-col items-center mt-24 translate-y-44"
          >
            <h1>Socials</h1>
            <div className="flex flex-wrap">
              <button
                className="text-xl bg-secondary md:block hidden p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://github.com/aapelix/");
                }}
              >
                GitHub
              </button>
              <button
                className="text-xl bg-secondary md:block hidden p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://youtube.com/@aapelix");
                }}
              >
                Youtube
              </button>
              <button
                className="text-xl bg-secondary md:block hidden p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://x.com/@aapelix1");
                }}
              >
                Twitter
              </button>

              <button
                className="text-xl bg-secondary md:hidden block p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://github.com/aapelix/");
                }}
              >
                <Github />
              </button>
              <button
                className="text-xl bg-secondary md:hidden block p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://youtube.com/@aapelix");
                }}
              >
                <Youtube />
              </button>
              <button
                className="text-xl bg-secondary md:hidden block p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://x.com/@aapelix1");
                }}
              >
                <Twitter />
              </button>
            </div>
          </section>
          <section
            id="projects"
            className="text-xl w-full mt-10 p-3 rounded-xl translate-y-44"
          >
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent outline-none"
            />

            {filteredProjects && (
              <>
                {filteredProjects.map((project) => (
                  <div
                    className="flex justify-between w-full my-3 flex-wrap"
                    key={project.name}
                  >
                    <div>
                      <h1>{project.name}</h1>
                      <p className="text-base text-accent">{project.desc}</p>
                    </div>
                    <div className="flex justify-end items-center flex-wrap">
                      <button
                        className="mx-1 md:my-0 my-1 border-zinc-500 border p-1 rounded-full px-4 hover:px-14 text-zinc-500 hover:text-background hover:border-background duration-300"
                        onClick={() => {
                          location.assign(project.site);
                        }}
                      >
                        site
                      </button>
                      <button
                        className="mx-1 md:my-0 my-1 border-zinc-500 border p-1 rounded-full px-4 hover:px-14 text-zinc-500 hover:text-background hover:border-background duration-300"
                        onClick={() => {
                          location.assign(project.gh);
                        }}
                      >
                        github
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
