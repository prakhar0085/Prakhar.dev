import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const logoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoMouseMove = (e) => {
    if (!logoRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = logoRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    
    gsap.to(logoRef.current, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out"
    });
  };

  const handleLogoMouseLeave = () => {
    gsap.to(logoRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)"
    });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5' 
            : 'py-6 bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo: prakhar.dev */}
          <motion.div 
            ref={logoRef}
            className="flex items-center cursor-pointer group relative z-[210] py-2 px-4" 
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveLink('Home');
            }}
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={handleLogoMouseLeave}
          >
            <span className="text-white text-xl md:text-2xl font-bold tracking-tight relative z-10">
                prakhar<span className="text-gray-400 font-normal group-hover:text-cyan-400 transition-colors duration-300">.dev</span>
            </span>
            <motion.div 
                className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <ul className="flex items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeLink === link.name 
                        ? 'bg-zinc-800/80 text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/95 z-[190] flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ul className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-2xl font-semibold tracking-wide transition-all duration-300 ${
                  activeLink === link.name ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
