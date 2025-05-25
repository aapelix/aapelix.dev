import { Asciifier } from "ascify-solid";

import rick from "./assets/Rick Astley - Never Gonna Give You Up (Official Music Video).mp4";
import { createSignal, onMount } from "solid-js";

export default function Rick() {
  let videoRef!: HTMLVideoElement;

  const [playing, setPlaying] = createSignal(false);

  onMount(() => {
    videoRef.play();
    focus();
    videoRef.play();

    setInterval(() => {
      if (!playing()) {
        videoRef.play();
      }
    }, 10);
  });

  return (
    <div class="flex w-screen h-screen items-center justify-center overflow-hidden">
      {playing() && <Asciifier src={rick} width={window.innerWidth / 10} />}
      {!playing() && <p>Click anywhere you want</p>}

      <video
        ref={(el) => {
          videoRef = el;
          el.muted = true;
          el.play();
          el.muted = false;
        }}
        onPlaying={() => setPlaying(true)}
        src={rick}
        hidden
        playsinline
      />
    </div>
  );
}
