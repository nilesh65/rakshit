import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
    {label: "Video Gallery", href: "#video"}
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-white/50  border-b border-yellow-400/40"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

       {/* Logo */}
<motion.a
  href="#"
  initial={{ opacity: 0, y: -5 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3 }}
  
>
  <img
    src={import.meta.env.VITE_LOGO}
    alt="Rakshit Interiors Logo"
    className="
      h-8 sm:h-9 md:h-10
      w-auto
      object-contain
    "
  />
</motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-yellow-300 font-semibold text-sm tracking-wide">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-yellow-400/10 transition"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <FontAwesomeIcon
            icon={open ? faXmark : faBars}
            className="w-5 h-5 text-yellow-300"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-white/10 border-t border-yellow-400/30"
          >
            <div className="flex flex-col items-center gap-6 py-6 text-yellow-300 font-semibold">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-yellow-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
