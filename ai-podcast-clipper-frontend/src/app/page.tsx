"use client";

import Link from "next/link";
import Aurora from "~/components/ui/aurora";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col text-white overflow-hidden">
      {/* Aurora background */}
      <div className="absolute bg-black inset-0 -z-10">
        <Aurora
          colorStops={["#ff00ff", "#66ffff", "#3366ff"]}
          blend={5}
          amplitude={1.0}
          speed={0.7}
        />
      </div>

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center flex-grow text-center px-4 pt-100 sm:pt-70">
        <h1 className="text-3xl sm:text-6xl font-extrabold leading-tight max-w-4xl">
          Turn Podcasts into Viral Clips with{" "}
          <span className="text-[hsl(280,100%,70%)]">AI Podcast Clipper</span>
        </h1>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col pt-20 sm:flex-row items-center justify-center gap-4 pb-10">
        <Link
          href="/dashboard"
          className="rounded-full hover:scale-105 hover:translate-y-1 transition-all duration-200 bg-[hsl(280,100%,70%)] px-6 py-3 text-lg font-semibold text-white hover:bg-[hsl(280,100%,60%)]"
        >
          Get Started
        </Link>
      </div>

      {/* How it works section */}
      <section id="how-it-works" className="w-full max-w-5xl cursor-default py-20 px-4 text-center z-10 mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">How It Works</h2>
        <div className="grid gap-8 sm:grid-cols-3 text-left">
          <div className="rounded-sm hover:translate-y-2 hover:scale-105 duration-200 bg-white/10 p-6 hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">1. Upload Your Podcast</h3>
            <p className="text-sm text-gray-300">
              Drag and drop your full podcast video — we support MP4, MOV and more.
            </p>
          </div>
          <div className="rounded-sm hover:translate-y-2 hover:scale-105 duration-200 bg-white/10 p-6 hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">2. Let AI Work</h3>
            <p className="text-sm text-gray-300">
              Our AI scans the video, finds engaging clips, punchlines, and visual hooks, along with the subtitles.
            </p>
          </div>
          <div className="rounded-sm hover:translate-y-2 hover:scale-105 duration-200 bg-white/10 p-6 hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">3. Download & Share</h3>
            <p className="text-sm text-gray-300">
              Instantly download vertical-ready short clips optimized for social media.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
