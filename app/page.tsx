"use client"

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Github, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const techIcons = [
  "/rust.png", "/csharp.png", "/astro.png", "/go.png", "/java.png", "/svelte.png", "/cpp.png", "/python.png", "/js.png", "/vue.png", "/c.png", "/react.png", "/ts.png",
];

const featuredProjects = [
  {
    title: "Jamix Menu v3",
    description: "A remake of the jamix.com food menu app with NextJS with DARK THEME!",
    technologies: ["NextJs", "Typescript", "motion.dev", "TailwindCSS"],
    icon: "/react.png",
    link: "https://jamix.aapelix.dev",
  },
  {
    title: "abrw6",
    description: "A hobby web browser made with Rust + gtk6 & webview6",
    technologies: ["Rust", "gtk6", "GtkWebView", "adblock-rust"],
    icon: "/rust.png",
    link: "https://github.com/aapelix/abrw6",
  },
  {
    title: "a4",
    description: "Fully working code editor with gtk4",
    technologies: ["Rust", "gtk4", "sourceview5", "Preact"],
    icon: "/rust.png",
    link: "https://github.com/aapelix/a4",
  },
  {
    title: "BlocksMined",
    description: "Fabric mod for Minecraft 1.21 tracking player block mining",
    technologies: ["Java", "Fabric", "Minecraft"],
    icon: "/java.png",
    link: "https://modrinth.com/mod/blocksmined",
  },
  {
    title: 'weather.aapelix.dev',
    description: 'A simple weather app inspired by Nothing',
    technologies: ['Deno', 'Fresh', 'TailwindCSS', 'Preact'],
    icon: '/ts.png',
    link: 'https://weather.aapelix.dev'
  },
  {
    title: 'aapelix.link',
    description: 'My own URL shortener',
    technologies: ['NextJS', 'Supabase', 'TailwindCSS', 'Vercel'],
    icon: '/ts.png',
    link: 'https://weather.aapelix.dev'
  },
];

const options = ["Stars", "Language", "Name", "null"];

export default function Home() {
  interface Repo {
    name: string;
    url: string;
    description: string;
    language: string;
    stars: number;
    fork: boolean;
  }

  const [repos, setRepos] = useState<Repo[]>([]);
  const [limit, setLimit] = useState(5);
  const [y, setY] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const sortedRepos = [...repos].sort((a, b) => {
    if (selectedOption === "Stars") {
      return b.stars - a.stars;
    } else if (selectedOption === "Language") {
      return (a.language || "").localeCompare(b.language || "");
    } else if (selectedOption === "Name") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    //onSelect();
    setIsOpen(false);
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch("https://api.github.com/users/aapelix/repos");
        const data = await res.json();
        setRepos(
          data.map((repo: { name: string; html_url: string; description: string; language: string; stargazers_count: number; fork: boolean; }) => ({
            name: repo.name,
            url: repo.html_url,
            description: repo.description,
            language: repo.language,
            stars: repo.stargazers_count,
            fork: repo.fork,
          }))
        );
      } catch (error) {
        console.error("Failed to fetch repos", error);
      }
    };

    fetchRepos();

    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-[#000000] text-white min-h-screen overflow-x-hidden font-mono">
      <nav className="absolute top-0 left-0 w-full z-50 flex gap-4 justify-center items-center mt-4 nav">
        <a href="#about" className="hover:font-bold hover:scale-105 duration-300">About</a>
        <a href="#projects" className="hover:font-bold hover:scale-105 duration-300">Projects</a>
        <a href="https://github.com/aapelix" target="_blank" className="hover:font-bold hover:scale-105 duration-300">Github</a>
      </nav>

      <header id="about" className="relative h-screen flex items-center justify-center overflow-hidden bg-black text-white z-0">
        <motion.div
          className="max-w-4xl px-6 text-center relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="text-6xl md:text-[8rem] font-bold tracking-tight text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #A5B4FC, #B0B4FF)" }}
          >
            aapelix
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 font-light opacity-80">
            Finn & Software Developer
          </p>
          <motion.div
            className="mt-8 flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <a href="#projects" className="px-6 py-3 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-300">
              My projects
            </a>
            <a
              href="https://github.com/aapelix"
              target="_blank"
              className="px-6 py-3 bg-[#A5B4FC] font-bold border border-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </header>

      <section className="py-16">
        <motion.div
          className="overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex"
            animate={{ x: [0, -techIcons.length * 120] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {techIcons.concat(techIcons).map((icon, index) => (
              <Image
                key={index}
                src={icon}
                alt="Tech Icon"
                className="w-24 h-24 mx-4 transition-all duration-300 object-contain cursor-pointer tech-icon"
              />
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        {y > 350 && (
          <motion.h2
            className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, rgba(165,180,252,1), rgba(129,140,248,1))" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Featured Projects
          </motion.h2>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              className="bg-[#111111] rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#A5B4FC]/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center mb-4 gap-4">
                <Image src={project.icon} alt={project.title} className="w-12 h-12 rounded-xl object-contain" />
                <h3 className="text-2xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs px-3 py-1 rounded-full bg-[#181818] text-[#A5B4FC]">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between">
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="bg-[#111111] rounded-2xl w-56 p-4 text-left border border-[#222222] transition-all duration-300 hover:border-[#A5B4FC]/20"
            >
              {"Sort by: " + selectedOption || "Sort by"}
            </button>
            {isOpen && (
              <ul className="absolute z-10 mt-2 w-56 bg-[#111111] rounded-2xl border border-[#222222]">
                {options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="px-4 py-2 text-gray-400 cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, rgba(165,180,252,1), rgba(129,140,248,1))" }}>
            All Repos
          </h2>

          <div className="w-56" />
        </div>
        <div className="space-y-6">
          {sortedRepos.slice(0, limit).map((repo, index) => (
            <a key={index} href={repo.url} target="_blank"
               className="block bg-[#111111] rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#A5B4FC]/20">
              <div className="flex items-center gap-4 mb-4">
                <Github className="text-[#A5B4FC] w-8 h-8" />
                <h3 className="text-2xl font-semibold">{repo.name}</h3>
              </div>
              {repo.description && <p className="text-gray-400 mb-4">{repo.description}</p>}
              <div className="flex gap-4">
                {repo.language && <span className="text-xs px-3 py-1 rounded-full bg-[#181818] text-[#A5B4FC]">{repo.language}</span>}
                <span className="text-xs px-3 py-1 rounded-full bg-[#181818] text-gray-400">{repo.stars} stars</span>
                {repo.fork && <span className="text-xs px-3 py-1 rounded-full bg-[#181818] text-gray-400">Forked</span>}
              </div>
            </a>
          ))}
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={() => setLimit(Math.min(limit + 5, repos.length))}
                    className="px-6 py-3 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#A5B4FC]/20 transition-all duration-300">
              Show more
            </button>
            <button onClick={() => setLimit(Math.max(5, limit - 5))} disabled={limit <= 5}
                    className="px-6 py-3 rounded-xl bg-[#111111] border border-[#222222] hover:border-[#A5B4FC]/20 transition-all duration-300 disabled:opacity-50">
              Show less
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(to right, rgba(165,180,252,1), rgba(129,140,248,1))" }}>
          Socials
        </h2>
        <div className="flex justify-center md:gap-8 gap-2 flex-wrap">
          <a href="https://github.com/aapelix" target="_blank"
             className="group flex items-center gap-4 bg-[#111111] rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-110 hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#A5B4FC]/20">
            <Github className="text-[#A5B4FC] w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
          <a href="https://youtube.com/@aapelix" target="_blank"
             className="group flex items-center gap-4 bg-[#111111] rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-110 hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#A5B4FC]/20">
            <Youtube className="text-[#A5B4FC] w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>YouTube</span>
          </a>
          <a href="https://x.com/@aapelix1" target="_blank"
             className="group flex items-center gap-4 bg-[#111111] rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-110 hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#A5B4FC]/20">
            <Twitter className="text-[#A5B4FC] w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>Twitter</span>
          </a>
        </div>
      </section>
    </main>
  );
}
