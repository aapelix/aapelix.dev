"use client";

import { Github, Twitter, Youtube } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "./components/ui/bento-grid";

export default function Home() {
  const [imageSrc, setImageSrc] = useState("");
  const [input, setInput] = useState("");
  const [hidden, setHidden] = useState(true);

  const items = [
    {
      title: "Aapelix's Weather App",
      description: "My very own weather app/website powered by WeatherApi",
      header: <img src="/Gradient2.png" />,
      className: "md:col-span-2",
      url: "https://weather.aapelix.dev",
    },
    {
      title: "Aapelix's News app",
      description: "WIP News app",
      header: <img src="/Gradient.png" />,
      className: "md:col-span-1",
      url: "https://news.aapelix.dev",
    },
    {
      title: "Project KTJNKEIO",
      description:
        "A WIP game. The letters KTJNKEIO mean 'Keksikää Tälle joku nimi koska en ite osaa' that translates to 'Come Up With a Mame For This Because I Can't Myself'",
      header: (
        <>
          <img className="md:block hidden" src="/Gradient3.png" alt="" />
          <img className="md:hidden block" src="/Gradient.png" />
        </>
      ),
      className: "md:row-span-2",
      url: "https://github.com/aapelix/project-ktjnkeio",
    },
    {
      title: "Jamix menu v2",
      description: "My own version of JAMIX food app (WIP)",
      header: <img src="/Gradient2.png" />,
      className: "md:col-span-2",
      url: "https://jamix.aapelix.dev",
    },
    {
      title: "Ilma",
      description: "A better version (🧢) of Wilma",
      header: <img src="/Gradient.png" />,
      className: "md:row-span-1",
      url: "https://github.com/aapelix/project-ilma",
    },
    {
      title: "RealmiUtils",
      description:
        "Mineraft utility mod for a finnish minecraft server called Realmi",
      header: <img src="/Gradient.png" />,
      className: "md:row-span-1",
      url: "https://github.com/aapelix/realmiutils",
    },
  ];

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
    e.name.toLowerCase().startsWith(input.toLowerCase()),
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
      <div className="bg-[url('/Gradientt.png')] w-screen h-screen fixed bg-cover" />

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
                  <p className="text-6xl md:-translate-y-0 -translate-y-6">
                    Its me,
                  </p>{" "}
                  <br /> <p className="-translate-y-32">aapelix</p>
                </h1>
                <div className="text-lg gap-2 flex justify-center lg:-translate-y-24 flex-wrap">
                  <a
                    href="mailto:aapelix@duck.com"
                    className="bg-[url('/button1.jpg')] rounded-full flex justify-center items-center cursor-none h-12 font-normal w-44 hover:w-56 duration-300"
                  >
                    Contact me!
                  </a>
                  <a
                    href="/#about"
                    className="bg-[url('/button2.jpg')] rounded-full flex justify-center items-center cursor-none h-12 font-normal w-44 hover:w-56 duration-300"
                  >
                    Who am i?
                  </a>
                  <a
                    href="/#projects"
                    className="bg-[url('/button3.jpg')] rounded-full flex justify-center items-center cursor-none h-12 font-normal w-44 hover:w-56 duration-300"
                  >
                    My projects.
                  </a>
                </div>
              </section>
              <section id="projects" className="z-50 text-base -translate-y-44">
                <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
                  {items.map((item, i) => (
                    <BentoGridItem
                      key={i}
                      title={item.title}
                      description={item.description}
                      header={item.header}
                      className={item.className}
                      url={item.url}
                    />
                  ))}
                </BentoGrid>
                <p className="text-center cursor-none mt-2 font-light">
                  More on my GitHub page
                </p>
              </section>
              <section
                id="about"
                className="md:mt-12 mt-5 z-50 -translate-y-44"
              >
                <h1>Who am I?</h1>
                <p className="text-lg font-light">
                  Haha too lazy to write anything for now. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit. Quia id cum laudantium
                  perspiciatis veniam amet error enim est earum, consectetur
                  veritatis animi incidunt quisquam sit unde tenetur totam
                  doloribus dolor. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit.
                </p>
              </section>
              <section
                id="socials"
                className="flex w-full flex-col items-center z-50 -translate-y-24"
              >
                <h1>Socials</h1>
                <div className="flex flex-wrap">
                  <button
                    className="text-xl bg-secondary md:block hidden cursor-none p-2 px-4 rounded-full mx-1 w-28 hover:w-44 duration-300"
                    onClick={() => {
                      location.assign("https://github.com/aapelix/");
                    }}
                  >
                    GitHub
                  </button>
                  <button
                    className="text-xl bg-secondary md:block hidden cursor-none p-2 px-4 rounded-full mx-1 w-[7.5rem] hover:w-44 duration-300"
                    onClick={() => {
                      location.assign("https://youtube.com/@aapelix");
                    }}
                  >
                    Youtube
                  </button>
                  <button
                    className="text-xl bg-secondary md:block hidden cursor-none p-2 px-4 rounded-full mx-1 w-[7.5rem] hover:w-44 duration-300"
                    onClick={() => {
                      location.assign("https://x.com/@aapelix1");
                    }}
                  >
                    Twitter
                  </button>

                  <button
                    className="text-xl bg-secondary md:hidden block cursor-none p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                    onClick={() => {
                      location.assign("https://github.com/aapelix/");
                    }}
                  >
                    <Github />
                  </button>
                  <button
                    className="text-xl bg-secondary md:hidden block cursor-none p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                    onClick={() => {
                      location.assign("https://youtube.com/@aapelix");
                    }}
                  >
                    <Youtube />
                  </button>
                  <button
                    className="text-xl bg-secondary md:hidden cursor-none block p-2 px-4 rounded-full mx-1 hover:scale-105 duration-300"
                    onClick={() => {
                      location.assign("https://x.com/@aapelix1");
                    }}
                  >
                    <Twitter />
                  </button>
                </div>
              </section>
            </div>
          </main>
        </motion.div>
      </div>
    </>
  );
}
