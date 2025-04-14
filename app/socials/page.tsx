import { Github12, Twitter12, Youtube12 } from "@aapelix/pixels";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen flex w-3/4 justify-center overflow-x-hidden text-5xl text-gray-500 items-center">
      <div className="flex flex-col gap-3">
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://github.com/aapelix"
        >
          <Github12 className="w-10 h-10 -translate-y-1.5" />
          Github
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://youtube.com/@aapelix"
        >
          <Youtube12 className="w-10 h-10 -translate-y-1.5" />
          YouTube
        </Link>
        <Link
          className="hover:text-black duration-300 flex items-center gap-2"
          href="https://x.com/@aapelix1"
        >
          <Twitter12 className="w-10 h-10 -translate-y-1.5" />
          Twitter
        </Link>
      </div>
    </main>
  );
}
