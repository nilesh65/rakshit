import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";

export default function Footer() {
    const mail = import.meta.env.VITE_MAIL
    const mobile_number = import.meta.env.VITE_FULL_PHONE
    const address = import.meta.env.VITE_ADDRESS
    const address_link = import.meta.env.VITE_GADDRESS
    const fb_link = import.meta.env.VITE_FB
    return (
        <footer className="bg-black text-yellow-400 py-12 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                {/* About Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">About Rakshit Interiors</h3>
                    <p className="text-sm md:text-base text-yellow-200">
                        At Rakshit Interiors, every project is thoughtfully crafted to combine aesthetics with functionality, delivering interiors that are timeless, elegant, and truly inspiring.
                    </p>
                </div>

                {/* Contact Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Contact Us</h3>
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-yellow-400" />
                        <a
                            href={address_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline text-yellow-200"
                        >
                            {address}
                        </a>

                    </div>
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-yellow-400" />
                        <a href={`mailto:${mail}`} className="hover:underline text-yellow-200">
                             {mail}
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone className="text-yellow-400" />
                        <a href={`tel:${mobile_number}`} className="hover:underline text-yellow-200">
                            {mobile_number}
                        </a>
                    </div>
                </div>

                {/* Social / Extra Info Section */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Follow Us</h3>
                    <p className="text-yellow-200 text-sm md:text-base">
                        Stay connected for our latest projects and updates.
                    </p>
                    {/* Add social icons here if needed */}
                    <a
  href={fb_link}
  target="_blank"
  rel="noopener noreferrer"
  alt="facebook-link"
  className="
    w-10 h-10
    flex items-center justify-center
    rounded-full
    border border-yellow-400
    text-yellow-400
    hover:bg-yellow-400 hover:text-black
    transition duration-300
  "
>
  <FaFacebookF className="text-lg" />
</a>
                </div>

            </div>

            <div className="mt-10 border-t border-yellow-600 pt-4 text-center text-yellow-200 text-sm">
                © {new Date().getFullYear()} Rakshit Interiors. All rights reserved.
            </div>
        </footer>
    );
}
