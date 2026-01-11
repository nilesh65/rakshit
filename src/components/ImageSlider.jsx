import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  import.meta.env.VITE_PORTFOLIO_IMG1,
  import.meta.env.VITE_PORTFOLIO_IMG2,
  import.meta.env.VITE_PORTFOLIO_IMG3,
  import.meta.env.VITE_PORTFOLIO_IMG4,
  import.meta.env.VITE_PORTFOLIO_IMG5,
  import.meta.env.VITE_PORTFOLIO_IMG6,
  import.meta.env.VITE_PORTFOLIO_IMG7,
  import.meta.env.VITE_PORTFOLIO_IMG8
];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(images.map(() => false));

  // Preload images
  useEffect(() => {
    images.forEach((src, i) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded((prev) => {
          const newArr = [...prev];
          newArr[i] = true;
          return newArr;
        });
      };
    });
  }, []);

  // Slider interval
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2000); // 2s per image
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[2/1] rounded-xl overflow-hidden shadow-lg">
      <AnimatePresence>
        {images.map(
          (img, i) =>
            i === index && loaded[i] && (
              <motion.img
                key={i}
                src={img}
                alt={`Portfolio ${i + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )
        )}
      </AnimatePresence>
    </div>
  );
}
