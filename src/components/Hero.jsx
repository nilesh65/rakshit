import { motion } from "framer-motion";
import AnimatedHeadline from "./AnimatedHeadline";
import HeroVideoBackground from "./HeroVideoBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      
      {/* Video Background */}
      <HeroVideoBackground />

      {/* Foreground Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 text-center max-w-3xl"
      >
        {/* Animated Headline (UNCHANGED) */}
        <AnimatedHeadline />

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl mt-4 mb-8 text-yellow-100 leading-relaxed">
          Premium Interior Design Solutions in Kolkata
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-black px-8 py-4 font-bold rounded-lg hover:scale-105 transition-transform shadow-lg"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
