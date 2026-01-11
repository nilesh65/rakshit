import { useRef, useState } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef(null);
  const [videoReady, setVideoReady] = useState(false);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">

      {/* Poster image (first frame screenshot) */}
      <img
        src={import.meta.env.VITE_VIDEO_HERO_POSTER}
        alt="Hero Background"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* High-quality video */}
      <video
        ref={videoRef}
        src={import.meta.env.VITE_VIDEO_HERO}
        muted
        loop
        playsInline
        preload="auto"
        autoPlay
        onCanPlayThrough={() => setVideoReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Premium contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

      {/* Optional vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />

    </div>
  );
}
