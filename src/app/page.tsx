"use client";

import { Github, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("");
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(true);

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

    setTimeout(() => {
      setHidden(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="bg-[url('/grainy1.jpg')] w-screen h-screen absolute bg-cover" />

      <div
        style={{
          display: hidden ? "none" : "block",
        }}
      >
        <motion.div initial={{ y: -100 }} animate={{ y: 0 }}>
          <main className="w-screen flex justify-center min-h-screen bg-no-repeat text-background font-heading md:text-5xl antialiased tracking-[-0.015em] text-4xl font-bold">
            <div className="flex flex-col w-2/3 justify-start items-center">
              <section
                id="hero"
                className="flex flex-col items-center gap-6 flex-wrap justify-center h-[90vh] z-10"
              >
                <h1 className="md:mr-10 mr-0 md:text-9xl text-8xl text-center translate-y-24 lg:translate-y-0 font-black">
                  <p className="text-6xl">Its me,</p> <br />{" "}
                  <p className="-translate-y-32">aapelix</p>
                </h1>
                <div className="text-lg gap-2 flex justify-center lg:-translate-y-24 flex-wrap">
                  <a
                    href="mailto:aapelix@duck.com"
                    className="bg-[url('/button1.jpg')] rounded-full flex justify-center items-center cursor-pointer h-12 font-normal w-44 hover:w-56 duration-300"
                  >
                    Contact me!
                  </a>
                  <a className="bg-[url('/button2.jpg')] rounded-full flex justify-center items-center cursor-pointer h-12 font-normal w-44 hover:w-56 duration-300">
                    Who am i?
                  </a>
                  <a className="bg-[url('/button3.jpg')] rounded-full flex justify-center items-center cursor-pointer h-12 font-normal w-44 hover:w-56 duration-300">
                    My projects.
                  </a>
                </div>
              </section>
              <section id="about" className="md:mt-0 translate-y-44 z-50">
                <h1>Who am I?</h1>
                <p className="text-lg font-light">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia
                  id cum laudantium perspiciatis veniam amet error enim est
                  earum, consectetur veritatis animi incidunt quisquam sit unde
                  tenetur totam doloribus dolor. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quia id cum laudantium
                  perspiciatis veniam amet error enim est earum, consectetur
                  veritatis animi incidunt quisquam sit unde tenetur totam
                  doloribus dolor.
                </p>
              </section>
              <section
                id="socials"
                className="flex w-full flex-col items-center mt-24 translate-y-44"
              >
                <h1>Socials</h1>
                <div className="flex flex-wrap">
                  <button
                    className="text-xl bg-secondary md:block hidden p-2 px-4 rounded-full mx-1 w-28 hover:w-44 duration-300"
                    onClick={() => {
                      location.assign("https://github.com/aapelix/");
                    }}
                  >
                    GitHub
                  </button>
                  <button
                    className="text-xl bg-secondary md:block hidden p-2 px-4 rounded-full mx-1 w-[7.5rem] hover:w-44 duration-300"
                    onClick={() => {
                      location.assign("https://youtube.com/@aapelix");
                    }}
                  >
                    Youtube
                  </button>
                  <button
                    className="text-xl bg-secondary md:block hidden p-2 px-4 rounded-full mx-1 w-[7.5rem] hover:w-44 duration-300"
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
                          <p className="text-base text-accent">
                            {project.desc}
                          </p>
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
        </motion.div>
      </div>
    </>
  );
}
