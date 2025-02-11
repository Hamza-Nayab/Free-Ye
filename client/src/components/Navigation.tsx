import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "./imgs/logo.png"; // Import the logo image

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 glass" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 text-2xl font-bold gradient-text"
          onClick={closeMobileMenu}
        >
          <img src={logo} alt="FREE-YE Logo" className="h-14 w-14" /> FREE-YE
        </ScrollLink>

        <div className="hidden md:flex items-center gap-8">
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="reviews"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Community Reviews
          </ScrollLink>
          <ScrollLink
            to="roadmap"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            Roadmap
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className="text-gray-300 hover:text-primary transition-colors"
          >
            FAQ
          </ScrollLink>
          <Button className="glow">Buy Now</Button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-300 hover:text-primary transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 glass py-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-4">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Features
              </ScrollLink>
              <ScrollLink
                to="reviews"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Community Reviews
              </ScrollLink>
              <ScrollLink
                to="roadmap"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                Roadmap
              </ScrollLink>
              <ScrollLink
                to="faq"
                smooth={true}
                duration={500}
                className="text-gray-300 hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                FAQ
              </ScrollLink>
              <Button className="glow w-[200px]">Buy Now</Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
