import React, { useState, useEffect } from 'react';
import collegeLogo from '../assets/img/DPU_logo.png';

export default function App() {
  return (
    <div className="font-sans">
      {/* The Navbar component */}
      <Navbar />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `
    fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
    ${scrolled ? 'bg-white shadow-md' : 'bg-gray-100'}
  `;

  const navBottomClasses = `
    bg-blue-600 text-white py-3 transition-all duration-300 ease-in-out
    ${scrolled ? 'bg-blue-700' : 'bg-blue-600'}
  `;

  //dropdowns
  const navItems = [
    { name: 'Home', link: '/welcome' },
    {
      name: 'About',
      link: '#about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', link: '/aboutus' },
        { name: 'Our Vision & Mission', link: '/visionpage' },
      //  { name: 'Mission', link: '#mission' },
      ],
    },
    {
      name: 'Committee',
      link: '#committee',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Organizing Committee', link: '/organizingCommittee' },
        { name: 'Technical Program Committee', link: '/technicalProgramCommittee' },
      ],
    },
    { name: 'Call For Papers', link: '/callforpaper' },
    {
      name: 'Co-Located Events',
      link: '#co-located-events',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Workshops', link: '#workshops' },
        { name: 'Tutorials', link: '#tutorials' },
      ],
    },
    { name: 'Registration', link: '#registration' },
    {
      name: 'Program',
      link: '#program',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Conference Schedule', link: '/conferenceSchedule' },
        { name: 'Keynote Speakers', link: '#keynote' },
      ],
    },
    {
      name: 'Downloads',
      link: '#downloads',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Brochure', link: '#brochure' },
        { name: 'Templates', link: '#templates' },
      ],
    },
    { name: 'Contact', link: '#contact' },
  ];

  return (
    <nav className={navbarClasses}>
      {/* Top Section of the Navbar */}
      {/* Changed justify-between to justify-center and added space-x for spacing */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-center space-x-8">
        {/* Left Logo */}
        <div className="flex-shrink-0">
          <img
            src={collegeLogo}
            alt="Institute Logo"
            className="h-24 w-44"
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/60x60/cccccc/333333?text=Logo"; }}
          />
        </div>

        {/* Center Text Content */}
        {/* Removed flex-grow and mx-4 as space-x on parent handles spacing */}
        <div className="text-center">
          <h1 className="text-xl md:text-2xl font-bold text-orange-800">
            DR. D.Y PATIL UNITECH SOCIETY'S <p>DR. D.Y. PATIL ARTS, COMMERCE & SCIENCE COLLEGE, AKURDI, PUNE-41 044 </p>
             <p>DR. D.Y PATIL SCIENCE AND COMPUTER SCIENCE COLLEGE, AKURDI, PUNE-411 044</p>
           
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-1">
            1<sup>st</sup> International Conference on Emerging Trends and Innovations in DYP-DPU (ICEI-2025)
          </p>
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className={navBottomClasses}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex flex-grow justify-center space-x-6 lg:space-x-8`}>
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.link}
                  className="flex items-center text-white hover:text-gray-200 transition duration-200 ease-in-out text-sm lg:text-base font-medium py-2 px-3 rounded-md relative"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg
                      className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  )}
                  {/* Underline on hover */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-blue-950 group-hover:w-full group-hover:left-0 transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:translate-x-0"></span>
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 z-50">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.link}
                        className="block px-4 py-2 text-sm hover:bg-blue-800 rounded-md"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu (conditionally rendered) */}
        {isMenuOpen && (
          <div className="md:hidden bg-blue-700 pb-4">
            <div className="flex flex-col items-center">
              {navItems.map((item) => (
                <div key={item.name} className="w-full">
                  <a
                    href={item.link}
                    className="block text-white hover:text-gray-200 transition duration-200 ease-in-out py-2 px-4 w-full text-center hover:bg-blue-800"
                    onClick={() => {
                      if (!item.hasDropdown) setIsMenuOpen(false);
                    }}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <span className="ml-1 inline-block">▼</span>
                    )}
                  </a>
                  {item.hasDropdown && (
                    <div className="bg-blue-800 text-white py-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.link}
                          className="block px-6 py-2 text-sm hover:bg-blue-900 w-full text-center"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}