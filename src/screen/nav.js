
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../images/images__1_-removebg-preview.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 bg-gradient-to-r bg-slate-800 flex justify-between items-center">
      <img src={logo} alt="logo" className="w-20 h-12" />
      <div className="ml-3 text-xl font-bold text-white">AirTrust</div>
      <button onClick={toggleMenu} className="text-white cursor-pointer">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <motion.div
        initial={{ opacity: 0, scale: 0.8,left:-400 }}
        animate={isMenuOpen ? { opacity: 1, scale: 1,left:50 } : { opacity: 0, scale: 0.5 ,left:-400}}
        transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.1 }}
        className={`absolute top-20 left-0 right-0 max-w-md mx-auto bg-slate-800 flex flex-col items-center rounded-xl shadow-lg border-none space-y-6 p-6 z-50`}
      >
        <button onClick={toggleMenu} className="text-white cursor-pointer">
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>
      <Link
  to="/"
  className="px-6 py-3 text-lg text-white font-bold bg-yellow-300 rounded-lg shadow-md hover:opacity-80 hover:shadow-lg transition-all duration-300 ease-in-out"
>
  Home
</Link>
<Link
  to="/forgot"
  className="px-6 py-3 text-base text-white font-bold bg-yellow-300 rounded-lg shadow-md hover:opacity-80 hover:shadow-lg transition-all duration-300 ease-in-out"
>
  Change
</Link>

      </motion.div>
      {isMenuOpen && (
        <div onClick={toggleMenu} className="fixed top-0 bottom-0 left-0 right-0 z-40 bg-black opacity-50" />
      )}
    </nav>
  );
};

export default Navbar;
