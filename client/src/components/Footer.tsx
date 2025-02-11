import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import {
  FaTwitter,
  FaDiscord,
  FaInstagram,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa"; // Import the social media icons from react-icons

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-4">FREE-YE</h3>
            <p className="text-gray-400">The Freedom of Speech Memecoin</p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-6">Quick Links</h4>
            <div className="flex flex-col space-y-4">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="reviews"
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Community Reviews
              </ScrollLink>
              <ScrollLink
                to="roadmap"
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Roadmap
              </ScrollLink>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold mb-6">Community</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <motion.a
                href="https://x.com/freeye666"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://discord.gg/VTwubTEABN"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaDiscord className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/freeyeeofficial?igsh=MTF2YWJwcW5jOGo2eg%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://t.me/freeyecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaTelegram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@free.ye?_t=ZS-8tpIHaPL55M&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaTiktok className="h-6 w-6" />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm pt-8 border-t border-white/5">
          <p>© {new Date().getFullYear()} FREE-YE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
