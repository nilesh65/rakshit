import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowLeft, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const videos = [
  import.meta.env.VITE_VIDEO1,
  import.meta.env.VITE_VIDEO2,
  import.meta.env.VITE_VIDEO3,
  import.meta.env.VITE_VIDEO4,
  import.meta.env.VITE_VIDEO5
];

export default function VideoSlider() {
  const [index, setIndex] = useState(0);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const nextVideo = () => {
    setIndex((prev) => (prev + 1) % videos.length);
    setMuted(true); // reset mute
  };

  const prevVideo = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setMuted(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section id="videos" className="py-20 px-6 sm:px-10 bg-yellow-50 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Video Gallery
      </h2>

      <div className="relative w-full max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.video
            key={index}
            ref={videoRef}
            src={videos[index]}
            muted={muted}
            controls
            autoPlay
            playsInline
            className="w-full aspect-[9/16] sm:aspect-[16/9] rounded-xl shadow-lg object-cover"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.8 }}
          />
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevVideo}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-yellow-400 p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextVideo}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-yellow-400 p-3 rounded-full hover:bg-black/60 transition"
        >
          <FaArrowRight />
        </button>

        {/* Mute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-4 right-4 bg-black/50 text-yellow-400 p-2 rounded-full hover:bg-black/70 transition"
        >
          {muted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </section>
  );
}
