import { motion } from "framer-motion";

const services = [
  {
    title: "Complete Home Interiors",
    img: import.meta.env.VITE_SERVICE_IMG1
  },
  {
    title: "Commercial Interior Design",
    img: import.meta.env.VITE_SERVICE_IMG2
  },
  {
    title: "Customised Interior Solutions",
    img: import.meta.env.VITE_SERVICE_IMG3
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-yellow-50">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="group relative bg-white rounded-xl overflow-hidden shadow-xl"
          >
            {/* Image */}
            <img
              src={s.img}
              alt={s.title}
              className="w-full aspect-[4/3] object-cover"
            />

            {/* GOLD LUXURY GLASS WIPE */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className="
      absolute top-0 left-[-130%]
      w-[130%] h-full
      bg-gradient-to-r
      from-transparent
      via-yellow-300/40
      to-transparent
      skew-x-[-20deg]
      group-hover:left-[130%]
      transition-all duration-[1000ms] ease-linear
    "
              />
            </div>


            {/* Title */}
            <div className="p-6">
              <h3 className="text-xl font-bold">{s.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
