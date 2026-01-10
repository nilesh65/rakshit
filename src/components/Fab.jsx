import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Fab() {
  const [open, setOpen] = useState(false);
  const mobile_number = import.meta.env.VITE_FULL_PHONE
  const whatsappnumber = import.meta.env.VITE_PHONE_NUMBER
  const message =
    "Hi Rakshit Interiors, I am interested in connecting with you for interior design services.";

  const whatsappUrl = `https://wa.me/${whatsappnumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* WhatsApp Option */}
      {open && (
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-105 transition transform"
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline font-medium">WhatsApp</span>
        </a>
      )}

      {/* Call Option */}
      {open && (
        <a
          href={`tel:${mobile_number}`}
          className="flex items-center gap-3 bg-black text-yellow-400 px-4 py-3 rounded-full shadow-lg hover:scale-105 transition transform"
        >
          <FontAwesomeIcon icon={faPhone} className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="hidden sm:inline font-medium">Call Now</span>
        </a>
      )}

      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Contact Us"
        className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full shadow-xl hover:scale-110 transition transform"
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-800"
        />
      </button>
    </div>
  );
}
