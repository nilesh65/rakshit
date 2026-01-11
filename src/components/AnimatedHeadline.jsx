import { useEffect, useState } from "react";

const lines = [
  "Rakshit Interiors",
  "Luxury Redefined",
];

export default function AnimatedHeadline() {
  const [displayed, setDisplayed] = useState(["", ""]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typedDone, setTypedDone] = useState(false);
  const [underscore, setUnderscore] = useState(null);

  // Typing animation
  useEffect(() => {
    if (lineIndex >= lines.length) {
      setTypedDone(true);
      return;
    }

    const interval = setInterval(() => {
      setDisplayed((prev) => {
        const copy = [...prev];
        copy[lineIndex] = lines[lineIndex].slice(0, charIndex + 1);
        return copy;
      });

      setCharIndex((prev) => prev + 1);

      if (charIndex + 1 === lines[lineIndex].length) {
        clearInterval(interval);
        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
        }, 300);
      }
    }, 55);

    return () => clearInterval(interval);
  }, [charIndex, lineIndex]);

  // Random underscore replacement (skip spaces)
  useEffect(() => {
    if (!typedDone) return;

    const interval = setInterval(() => {
      const chars = displayed.join("").split("");
      const validIndexes = chars
        .map((c, i) => (c !== " " ? i : null))
        .filter((i) => i !== null);

      if (!validIndexes.length) return;

      const randomIndex =
        validIndexes[Math.floor(Math.random() * validIndexes.length)];

      setUnderscore(randomIndex);

      setTimeout(() => {
        setUnderscore(null);
      }, 600);
    }, 2000);

    return () => clearInterval(interval);
  }, [typedDone, displayed]);

  let globalIndex = -1;

  const renderLine = (text, className) => (
    <div className={`${className} flex flex-wrap justify-center`}>
      {text.split("").map((char, i) => {
        globalIndex++;
        const isSpace = char === " ";
        const showUnderscore = underscore === globalIndex && !isSpace;

        return (
          <span
            key={i}
            className="inline-block min-w-[0.6ch] text-center"
          >
            {isSpace ? "\u00A0" : showUnderscore ? "_" : char}
          </span>
        );
      })}
    </div>
  );

  return (
    <div className="text-center px-4 sm:px-6 md:px-8 lg:px-0">
      <h1 
      style={{ fontFamily: "'Playfair Display', serif" }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-snug md:leading-tight tracking-tight md:tracking-normal ">
        {renderLine(displayed[0], "font-extrabold text-white/90")}
        {renderLine(displayed[1], "mt-2 font-semibold text-white/40")}
      </h1>
    </div>
  );
}
