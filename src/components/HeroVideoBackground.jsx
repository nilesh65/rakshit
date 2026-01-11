import { useEffect, useState } from "react";

export default function HeroVideoBackground() {
  const [fullVideoLoaded, setFullVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = import.meta.env.VITE_VIDEO_HERO; // full video
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.oncanplaythrough = () => setFullVideoLoaded(true);
    video.load();
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        key={fullVideoLoaded ? "full" : "sprite"}
        src={
          fullVideoLoaded
            ? import.meta.env.VITE_VIDEO_HERO
            : import.meta.env.VITE_VIDEO_HERO_SPRITE
        }
        poster={import.meta.env.VITE_VIDEO_HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
    </div>
  );
}
