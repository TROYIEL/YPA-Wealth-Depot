"use client";

import { useEffect, useRef, useState } from "react";

const tiktokVideos = [
  // Latest → Oldest
  "7568504570653986104",
  "7570651860655213880",
  "7666003251644435730",
  "7584788306521541944",
  "7648200904532872466",
];

export default function TikTokCard() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const nextVideo = () => {
    setCurrentVideo((prev) => {
      if (prev >= tiktokVideos.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (!event.origin.includes("tiktok.com")) return;

      try {
        const data =
          typeof event.data === "string"
            ? JSON.parse(event.data)
            : event.data;

        // TikTok state:
        // 0 = ended
        // 1 = playing
        // 2 = paused
        // 3 = buffering

        if (
          data?.["x-tiktok-player"] === true &&
          data?.type === "onStateChange" &&
          data?.value === 0
        ) {
          nextVideo();
        }
      } catch {
        // Ignore non-TikTok messages
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  if (!tiktokVideos.length) return null;

  const videoId = tiktokVideos[currentVideo];

  return (
    <div className=" flex items-center justify-center overflow-hidden">

      {/* TikTok Mobile View */}
      <div className="relative w-full max-w-75 aspect-9/16 rounded-[28px] overflow-hidden bg-black shadow-2xl">

        <iframe
          ref={iframeRef}
          key={videoId}
          src={`https://www.tiktok.com/player/v1/${videoId}?autoplay=1&loop=0&controls=1&description=0&music_info=0&rel=0`}
          className="absolute inset-0 w-full h-full border-0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="YPA Wealth Depot TikTok"
        />

      </div>

    </div>
  );
}