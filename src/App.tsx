import {
  createMemo,
  createSignal,
  onCleanup,
  onMount,
  type Component,
} from "solid-js";

import aapelix from "./assets/aapelix.png";
import aapelixD from "./assets/aapelix.dev.png";
import eye from "./assets/eye.png";
import { Asciifier } from "ascify-solid";

function Eye({
  offsetX,
  offsetY,
  imgRef,
}: {
  offsetX: number;
  offsetY: number;
  imgRef: HTMLImageElement | undefined;
}) {
  const [mouse, setMouse] = createSignal({ x: 0, y: 0 });

  const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
  window.addEventListener("mousemove", onMove);
  onCleanup(() => window.removeEventListener("mousemove", onMove));

  const pupilOffset = createMemo(() => {
    if (!imgRef) return { x: 0, y: 0 };
    const rect = imgRef.getBoundingClientRect();
    const centerX = rect.left + offsetX;
    const centerY = rect.top + offsetY;
    const dx = mouse().x - centerX;
    const dy = mouse().y - centerY;
    const angle = Math.atan2(dy, dx);
    const offset = 10;
    return {
      x: Math.cos(angle) * offset,
      y: Math.sin(angle) * offset,
    };
  });

  return (
    <div
      class="absolute w-10 h-10 rounded-full flex items-center justify-center"
      style={{
        left: `${offsetX - 20}px`,
        top: `${offsetY - 20}px`,
      }}
    >
      <img
        src={eye}
        class="w-2.5 h-2.5 duration-75"
        style={{
          transform: `translate(${pupilOffset().x}px, ${pupilOffset().y}px)`,
        }}
      />
    </div>
  );
}

const App: Component = () => {
  const [imgRef, setImgRef] = createSignal<HTMLImageElement>();

  return (
    <>
      <div class="navbar justify-between pr-5 bg-base-200 md:border md:border-base-300 z-50 fixed md:w-[60vw] w-screen md:left-1/2 md:-translate-x-1/2 mt-2 rounded-3xl">
        <a class="btn btn-ghost">aapelix.dev</a>
        <div class="flex gap-4">
          <a
            href="https://github.com/aapelix?tab=repositories"
            class="link link-hover"
            data-umami-event="github-projects-link"
          >
            Projects
          </a>
          <a href="/rick" class="link link-hover">
            Rick Ascii
          </a>
        </div>
      </div>
      <div class="bg-base-200 h-full overflow-x-hidden min-h-screen flex flex-col items-center pt-80 justify-center pb-10">
        <div class="max-w-[800px] w-full">
          <div class="flex md:flex-row flex-col gap-y-10 justify-between items-center">
            <div>
              <h1 class="text-3xl font-bold">It's me, aapelix</h1>
              <div class="flex md:justify-start justify-center gap-2 mt-2">
                <a
                  href="https://github.com/aapelix"
                  target="_blank"
                  class="btn bg-base-100"
                  data-umami-event="github-link"
                >
                  Github
                </a>
                <a
                  href="https://youtube.com/@aapelix"
                  target="_blank"
                  class="btn bg-base-100"
                  data-umami-event="youtube-link"
                >
                  YouTube
                </a>
              </div>
            </div>
            <div class="relative w-96 h-96">
              <img
                ref={setImgRef}
                class="w-full h-full rotate-4 translate-x-3 aspect-square"
                style={{ "image-rendering": "pixelated" }}
                src={aapelix}
              />
              <Eye offsetX={190} offsetY={99} imgRef={imgRef()} />
              <Eye offsetX={233} offsetY={90} imgRef={imgRef()} />
            </div>
          </div>
          <div class="mt-14 flex flex-col gap-2">
            <label class="label">Projects</label>
            <div class="card bg-base-100 border border-base-300">
              <div class="card-body">
                <div class="card-title">
                  <h2>abrw</h2>
                </div>
                <p>fast & private web browser made with Rust</p>
                <div class="card-actions justify-end">
                  <a
                    href="https://github.com/aapelix/abrw-min"
                    class="btn"
                    data-umami-event="github-abrw-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>

            <div class="card bg-base-100 border border-base-300">
              <div class="card-body">
                <div class="card-title">
                  <h2>bootstrap</h2>
                </div>
                <p>
                  launch minecraft from rust. load libs, natives assets mods and
                  everything else you need.
                </p>
                <div class="card-actions justify-end">
                  <a
                    href="https://github.com/aapelix/bootstrap"
                    class="btn"
                    data-umami-event="github-bootstrap-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
            <div class="card bg-base-100 border border-base-300">
              <div class="card-body">
                <div class="card-title">
                  <h2>downloader</h2>
                </div>
                <p>
                  download minecraft from rust. supports all the avaible
                  versions, mod loaders
                </p>
                <div class="card-actions justify-end">
                  <a
                    href="https://github.com/aapelix/downloader"
                    class="btn"
                    data-umami-event="github-downloader-link"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer class="mt-32 flex w-screen justify-center">
          <div class="max-w-[60vw] w-screen flex justify-center items-center gap-2">
            <Asciifier
              transparentBg
              src={aapelixD}
              width={Math.min(window.innerWidth / 10, 100)}
            />
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
