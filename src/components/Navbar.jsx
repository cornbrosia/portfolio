import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled more than 50px
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 p-4 transition-all duration-300 ${
        hasScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>

        <ul className="hidden md:flex space-x-6">
          <li><a href="#home" className="hover:text-gray-400">Home</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/ben-watson-5a82b11bb/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
