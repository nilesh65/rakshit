import { FaWhatsapp, FaPhone } from "react-icons/fa";
import ScrollReveal from "./ScrollReveal";
import { FaPerson } from "react-icons/fa6";

export default function Contact() {
  const whatsappnumber = import.meta.env.VITE_PHONE_NUMBER;

  const sendWhatsApp = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    // ✅ Validation
    if (!name || !phone || !message) {
      alert("Please fill all fields.");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return;
    }
    if (!/^\d{10}$/.test(phone)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    // ✅ WhatsApp Message
    const whatsappMessage = `
New Customer Enquiry 🔔

Name: ${name}
Phone: ${phone}

Message:
${message}
    `;

    const whatsappUrl = `https://wa.me/${whatsappnumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
    form.reset();
    
  };

  return (
    <section id="contact" className="py-20 px-6 bg-yellow-50">
      <ScrollReveal>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
          {/* Left Side: Text */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-black">
              Get in Touch with Our Team
            </h2>
            <p className="text-black text-lg md:text-xl leading-relaxed">
              Rakshit Interiors – Redefining Luxury Interiors in Kolkata. We
              design and execute home interiors with perfection. From stunning
              modular kitchens, elegant wardrobes, bespoke furniture to
              luxurious living spaces, our expert craftsmen transform your
              dream home into reality.
            </p>
            <p className="text-black text-lg md:text-xl leading-relaxed">
              Based in Kolkata, we have been serving discerning clients for years,
              turning their visions of dream homes into tangible, beautiful
              spaces. Our interior designs go beyond aesthetics – we create
              harmonious, relaxing, and functional environments that feel truly
              like home.
            </p>
            <p className="text-black text-lg md:text-xl leading-relaxed">
              At Rakshit Interiors, client collaboration is at the heart of our
              process. Our talented team of designers works closely with each
              client to understand their style, lifestyle, and preferences. We
              ensure every design is aligned with your expectations, delivering
              nothing short of excellence.
            </p>
          </div>

          {/* Right Side: Form */}
          <form
            onSubmit={sendWhatsApp}
            className="md:w-1/2 bg-white p-8 rounded-xl shadow-xl space-y-4"
          >
            {/* Name */}
            <div className="relative">
              <FaPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                name="name"
                required
                placeholder="Your Name"
                className="w-full border border-black p-3 pl-10 rounded"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-black p-3 pl-10 rounded"
              />
            </div>

            {/* Message */}
            <textarea
              name="message"
              required
              minLength={10}
              placeholder="Message (minimum 10 characters)"
              className="w-full border border-black p-3 rounded h-28"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-yellow-400 py-3 font-bold rounded flex items-center justify-center gap-2 hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
