import { motion } from "motion/react";
import { useEffect, useState } from "preact/hooks";

const maxO = 100;

export function App() {
  const [addO, setAddO] = useState(false);
  const [o, setO] = useState(1);

  useEffect(() => {
    if (!addO) return;

    const interval = setInterval(() => {
      setO((prev) => {
        if (prev >= maxO) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 5);

    return () => clearInterval(interval);
  }, [o, addO]);

  return (
    <main class="flex h-screen w-screen items-center justify-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          class={"text-2xl font-bold"}
        >
          aapelix.dev
        </motion.h1>
        <motion.p
          class={"font-light text-lg"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          Aar
          <button class="cursor-pointer" onClick={() => setAddO(!addO)}>
            {Array(o).fill("o").join("")}
          </button>
        </motion.p>
        <div class={"flex flex-col gap-3 mt-6 w-96"}>
          <motion.a
            href="https://github.com/aapelix"
            target="_blank"
            className="
              relative text-sm font-mono text-gray-400 hover:text-white transition-colors
              before:content-[''] before:absolute before:bottom-0 before:left-0
              before:h-[1px] before:w-0 before:bg-white before:transition-all
              hover:before:w-full pb-2
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            github
          </motion.a>
          <motion.a
            href="https://bg.aapelix.dev"
            target="_blank"
            className="
              relative text-sm font-mono text-gray-400 hover:text-white transition-colors
              before:content-[''] before:absolute before:bottom-0 before:left-0
              before:h-[1px] before:w-0 before:bg-white before:transition-all
              hover:before:w-full pb-2
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            bg.aapelix.dev
          </motion.a>
          <motion.a
            href="https://aromi.aapelix.dev"
            target="_blank"
            className="
              relative text-sm font-mono text-gray-400 hover:text-white transition-colors
              before:content-[''] before:absolute before:bottom-0 before:left-0
              before:h-[1px] before:w-0 before:bg-white before:transition-all
              hover:before:w-full pb-2
            "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            aromi
          </motion.a>
        </div>
      </div>
    </main>
  );
}
