import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faIndianRupee,
  faBoxOpen,
  faHammer,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Consultation", icon: faComments },
  { id: 2, title: "Budgeting", icon: faIndianRupee },
  { id: 3, title: "Sourcing", icon: faBoxOpen },
  { id: 4, title: "Execution", icon: faHammer },
  { id: 5, title: "Handover", icon: faCheckCircle },
];

export default function Process() {
  const [currentStep, setCurrentStep] = useState(0);
  const [linesFilled, setLinesFilled] = useState([]);
  const [phase, setPhase] = useState("glow");
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Glow + line logic (same as horizontal)
  useEffect(() => {
    const timer = setInterval(() => {
      if (phase === "glow") {
        if (currentStep < steps.length - 1) setPhase("line");
        else {
          setCurrentStep(0);
          setLinesFilled([]);
          setPhase("glow");
        }
      } else {
        setLinesFilled((prev) => [...prev, currentStep]);
        setCurrentStep((prev) => prev + 1);
        setPhase("glow");
      }
    }, 1200);

    return () => clearInterval(timer);
  }, [phase, currentStep]);

  return (
    <section className="py-20 bg-yellow-400 text-black">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Our Process
      </h2>

      <div className="relative flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4 md:px-0 gap-12 md:gap-0">
        {steps.map((step, i) => {
          const isActive = i === currentStep;
          const nextStep = i < steps.length - 1 ? i + 1 : null;

          return (
            <div key={step.id} className="flex-1 flex flex-col items-center relative">
              {/* Step circle */}
              <motion.div
                animate={{
                  scale: isActive ? 1.4 : 1,
                  boxShadow: isActive
                    ? "0 0 20px 5px rgba(0,0,0,0.4)"
                    : "0 0 0px 0px rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-2 z-10
                  ${isActive ? "bg-black text-yellow-400" : "bg-yellow-200 text-black"}`}
              >
                <FontAwesomeIcon icon={step.icon} className="text-2xl" />
              </motion.div>

              {/* Step title */}
              <span className="text-center font-semibold text-sm sm:text-base md:text-lg">
                {step.title}
              </span>

              {/* Horizontal dotted line (existing, untouched) */}
              {nextStep !== null && !isMobile && (
                <div className="absolute top-7 md:top-8 left-1/2 w-0 md:w-full h-1 md:h-0.5 z-0 overflow-hidden">
                  <div className="w-0 md:w-full h-1">
                    {(linesFilled.includes(i) || (currentStep === i && phase === "line")) && (
                      <motion.div
                        className="absolute top-0 left-0 h-1 md:h-0.5 border-t-2 border-dotted border-black"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.2, ease: "linear" }}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* Vertical dotted line for mobile */}
              {nextStep !== null && isMobile && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 w-0.5 h-16 overflow-hidden z-0"
                >
                  {(linesFilled.includes(i) || (currentStep === i && phase === "line")) && (
                    <motion.div
                      className="w-0.5 border-l-2 border-dotted border-black absolute top-0 left-0"
                      initial={{ height: 0 }}
                      animate={{ height: "100%" }}
                      transition={{ duration: 1.2, ease: "linear" }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
