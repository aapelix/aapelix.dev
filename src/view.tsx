import { Asciifier } from "ascify-solid";
import { createSignal, onCleanup } from "solid-js";

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });

export default function View() {
  let fileIRef!: HTMLInputElement;
  const [img, setImg] = createSignal<string | null>(null);
  const [stream, setStream] = createSignal<MediaStream | null>(null);
  let videoEl!: HTMLVideoElement;

  const [progress, setProgress] = createSignal(0);

  const handleRangeChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    const value = Number(target.value);
    setProgress(value);
    if (videoEl! && videoEl.duration) {
      videoEl.currentTime = (videoEl.duration * value) / 100;
    }
  };

  let canvasEl!: HTMLCanvasElement;
  let ctx!: CanvasRenderingContext2D;

  const drawToCanvas = () => {
    if (!videoEl! || videoEl.paused || videoEl.ended) return;
    ctx.drawImage(videoEl, 0, 0, canvasEl.width, canvasEl.height);
    requestAnimationFrame(drawToCanvas);
  };

  const setupCanvasStream = () => {
    if (!canvasEl) return;
    ctx = canvasEl.getContext("2d")!;
    canvasEl.width = videoEl!.videoWidth;
    canvasEl.height = videoEl!.videoHeight;

    drawToCanvas();

    const canvasStream = canvasEl.captureStream();
    setStream(canvasStream);
  };

  const onVideoLoaded = () => {
    setupCanvasStream();
  };

  onCleanup(() => {
    stream()
      ?.getTracks()
      .forEach((track) => track.stop());
  });

  const handleFileChange = async (e: Event) => {
    setStream(null);
    setImg(null);
    const file = (e.target as HTMLInputElement).files?.[0];
    if (file && file.type.startsWith("image/")) {
      const base64String = await fileToBase64(file);
      setImg(base64String);
    } else if (file && file.type.startsWith("video/")) {
      const url = URL.createObjectURL(file);
      videoEl!.src = url;
      videoEl!.play();
    }
  };

  return (
    <div class="flex justify-center w-screen py-5">
      <div class="max-w-[60vw] w-full pt-80 flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">
          View nearly anything you want in ASCII
        </h1>
        <div class="flex justify-center mt-10">
          <input
            type="file"
            class="file-input"
            accept="image/*,video/*"
            ref={fileIRef}
            onChange={handleFileChange}
          />
        </div>
        <video
          ref={videoEl!}
          onLoadedMetadata={onVideoLoaded}
          onPlay={onVideoLoaded}
          style={{ display: "none" }}
          onTimeUpdate={() => {
            if (!videoEl!.duration) return;
            setProgress((videoEl!.currentTime / videoEl!.duration) * 100);
          }}
        />

        {stream() && (
          <div class="flex w-full gap-2 justify-center items-center py-5">
            <button class="btn" onClick={() => videoEl!.play()}>
              Play
            </button>
            <button class="btn" onClick={() => videoEl!.pause()}>
              Pause
            </button>
            <input
              type="range"
              min={0}
              max={100}
              value={progress()}
              class="range"
              onInput={handleRangeChange}
            />
          </div>
        )}

        <canvas ref={canvasEl!} style={{ display: "none" }} />
        {img() && <Asciifier src={img()!} width={window.innerWidth / 10} />}
        {stream() && (
          <Asciifier src={stream()!} width={window.innerWidth / 10} />
        )}
      </div>
    </div>
  );
}
