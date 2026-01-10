import ScrollReveal from "./ScrollReveal";
import ImageSlider from "./ImageSlider";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-6 sm:px-10 md:px-20 bg-black text-yellow-400"
    >
      <ScrollReveal>
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          Our Work
        </h2>

        {/* Slider Container */}
        <div className="max-w-6xl mx-auto">
          <ImageSlider />
        </div>
      </ScrollReveal>
    </section>
  );
}
