"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("");
  const [imgFocus, setImgFocus] = useState(false);
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
      {imageSrc && imgFocus && (
        <div
          className="w-screen fixed h-screen bg-background flex justify-center items-center z-50"
          onClick={() => setImgFocus(false)}
        >
          <div className="aspect-video md:w-auto md:h-[90vh] h-auto w-[80vw]">
            <img
              className="object-cover w-full h-full rounded-3xl hover:scale-[1.02] duration-300 cursor-pointer"
              src={imageSrc}
              alt="Daily image"
            />
          </div>
        </div>
      )}
      <main className="w-screen flex justify-center min-h-screen bg-background text-text font-heading text-5xl font-bold">
        <div className="flex flex-col w-2/3 justify-start items-center">
          <section
            id="hero"
            className="flex items-center gap-6 flex-wrap justify-center w-full h-[90vh] z-10"
          >
            <h1>
              Its me, <br /> aapelix
            </h1>
            {imageSrc && (
              <div className="w-96 h-96">
                <img
                  className="object-cover w-full h-full rounded-3xl hover:scale-[1.02] duration-300 cursor-pointer"
                  src={imageSrc}
                  alt="Daily image"
                  onClick={() => setImgFocus(true)}
                />
                <p className="text-xs text-center text-zinc-600 font-normal">
                  random img from me
                </p>
              </div>
            )}
          </section>
          <section id="about">
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
            id="links"
            className="flex w-full flex-col items-center mt-24"
          >
            <h1>My socials</h1>
            <div>
              <button
                className="text-xl bg-secondary p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://github.com/aapelix/");
                }}
              >
                GitHub
              </button>
              <button
                className="text-xl bg-secondary p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://youtube.com/@aapelix");
                }}
              >
                Youtube
              </button>
              <button
                className="text-xl bg-secondary p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                onClick={() => {
                  location.assign("https://twitch.tv/aapelix_");
                }}
              >
                Twitch
              </button>
            </div>
          </section>
          <section
            id="projects"
            className="text-xl w-full mt-10 p-3 rounded-xl"
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
                    className="flex justify-between w-full my-3"
                    key={project.name}
                  >
                    <div>
                      <h1>{project.name}</h1>
                      <p className="text-base text-accent">{project.desc}</p>
                    </div>
                    <div className="flex justify-end items-center flex-wrap">
                      <button
                        className="mx-1 md:my-0 my-1 border-zinc-500 border p-1 rounded-xl text-zinc-500 hover:text-text hover:border-text duration-300"
                        onClick={() => {
                          location.assign(project.site);
                        }}
                      >
                        site
                      </button>
                      <button
                        className="mx-1 md:my-0 my-1 border-zinc-500 border p-1 rounded-xl text-zinc-500 hover:text-text hover:border-text duration-300"
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
