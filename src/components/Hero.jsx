import { motion } from "framer-motion";
import AnimatedHeadline from "./AnimatedHeadline";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 bg-yellow-50">
      {/* <HeroBackground /> */}
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
// import HeroBackground from "./HeroBackground";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
//       <HeroBackground />

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.5 }}
//         className="relative z-10 px-6 max-w-4xl"
//       >
//         <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
//           Luxury Interiors <br />
//           <span className="text-yellow-400">Redefined</span>
//         </h1>

//         <p className="mt-6 text-lg md:text-xl text-gray-200">
//           Transforming homes into elegant, functional living spaces with timeless design.
//         </p>

//         <a
//           href="#contact"
//           className="inline-block mt-8 bg-yellow-400 text-black px-8 py-4 font-bold rounded hover:scale-105 transition"
//         >
//           Book Free Consultation
//         </a>
//       </motion.div>
//     </section>
//   );
// }
