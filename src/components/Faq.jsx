import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "Where can I get the best home interior decorators in Kolkata?",
    answer:
      "Rakshit Interiors provides top-notch interior decorating services in Kolkata. Our team is experienced in creating elegant and functional living spaces tailored to your taste and lifestyle.",
  },
  {
    question: "What is the cost of the services of the best interior design company in Kolkata?",
    answer:
      "Our pricing is competitive and depends on the scale and scope of your project. We provide personalized quotes after understanding your requirements, ensuring value for your investment.",
  },
  {
    question: "Are your top interior designers in Kolkata experienced?",
    answer:
      "Yes! Our interior designers have years of professional experience working on residential and commercial projects, blending creativity with practical functionality.",
  },
  {
    question: "What interior design services do you offer?",
    answer:
      "We offer a wide range of services including complete home interiors, modular furniture design, bathroom and kitchen design, custom storage solutions, and more, all tailored to your needs.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-yellow-50 text-black">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>

        {/* Intro */}
        <p className="text-yellow-900 text-base sm:text-lg md:text-xl leading-relaxed mb-12">
          Our experts combine creativity, functionality, and elegance to transform your space into a home that reflects your style and lifestyle. It's time for luxurious living.
        </p>

        {/* Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-yellow-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold bg-yellow-100 hover:bg-yellow-200 transition"
                onClick={() => toggleFAQ(i)}
              >
                {faq.question}
                {openIndex === i ? (
                  <FaChevronUp className="ml-2 text-yellow-900" />
                ) : (
                  <FaChevronDown className="ml-2 text-yellow-900" />
                )}
              </button>
              {openIndex === i && (
                <div className="px-5 py-4 bg-yellow-50 text-yellow-900 text-sm md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
