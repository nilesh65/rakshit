export default function HeroVideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        className="w-full h-full object-cover"
        src={import.meta.env.VITE_VIDEO_HERO}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Premium contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/30" />

      {/* Optional vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.9)]" />
    </div>
  );
}
