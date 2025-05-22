import { createMemo, createSignal, onCleanup, type Component } from "solid-js";

import aapelix from "./assets/aapelix.png";
import eye from "./assets/eye.png";

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
        class="w-2.5 h-2.5"
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
      </div>
    </div>
  );
};

export default App;
