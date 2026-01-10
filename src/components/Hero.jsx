import { motion } from "framer-motion";
import AnimatedHeadline from "./AnimatedHeadline";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 bg-yellow-50">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center max-w-3xl"
      >
        {/* Animated Headline */}
        <AnimatedHeadline />

        {/* Subtext */}
        <p className="text-lg sm:text-xl md:text-2xl mt-4 mb-8 text-black/90 leading-relaxed">
          Premium Interior Design Solutions in Kolkata
        </p>

        {/* CTA Button */}
        <a
          href="#contact"
          className="inline-block bg-black text-yellow-400 px-8 py-4 font-bold rounded-lg hover:scale-105 transition-transform shadow-lg"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}
