import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-4xl font-extrabold logo-text">RIO</span>
          <div className="ml-2 border-l border-gray-300 pl-2 leading-tight">
            <span className="block text-[11px] font-bold tracking-widest text-[#5e5e5e]">INTERNATIONAL</span>
            <span className="block text-[11px] font-bold tracking-widest text-[#5e5e5e]">DESIGN STUDIO</span>
          </div>
        </Link>
        <ul className="flex space-x-10 text-[13px] font-bold text-[#444444]">
          {['HOME', 'SERVICES', 'ABOUT', 'WORKS', 'BLOGS', 'CONTACT'].map((item) => (
            <li key={item}>
              <Link
                to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                className="hover:text-rio-pink transition-colors tracking-wide"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
