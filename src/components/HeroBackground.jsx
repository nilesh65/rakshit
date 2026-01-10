import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/master bed room 3d view 001.jpg",
  "/LIVING AND DINING AREA 3D VIEW 005.jpg",
  "/BED ROOM (2) 3D VIEW 003.jpg",
  "/BED ROOM (1) 3D VIEW 001.jpg",
];

export default function HeroBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500); // cinematic timing
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {/* Image Layer */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={images[index]}
          alt="Interior background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/55" />
    </div>
  );
}
