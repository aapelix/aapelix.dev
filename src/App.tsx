import type { Component } from "solid-js";

import aapelix from "./assets/aapelix.png";

const App: Component = () => {
  return (
    <div class="bg-base-200 h-full min-h-screen flex items-start pt-80 justify-center">
      <div class="max-w-[800px] w-full">
        <div class="flex md:flex-row flex-col gap-y-10 justify-between items-center">
          <div>
            <h1 class="text-3xl font-bold">It's me, aapelix</h1>
            <div class="flex md:justify-start justify-center gap-2 mt-2">
              <a
                href="https://github.com/aapelix"
                target="_blank"
                class="btn bg-base-100"
              >
                Github
              </a>
              <a
                href="https://youtube.com/@aapelix"
                target="_blank"
                class="btn bg-base-100"
              >
                YouTube
              </a>
            </div>
          </div>
          <img
            class="w-96 h-96 rotate-4 translate-x-3 aspect-square"
            src={aapelix}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
