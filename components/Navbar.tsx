import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SectionId.HERO);

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background transparency
      setScrolled(window.scrollY > 50);

      // Handle Scroll Spy (Active Section Highlighting)
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          const currentId = section.getAttribute('id');
          if (currentId) {
            setActiveSection(currentId);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: `#${SectionId.ABOUT}`, id: SectionId.ABOUT },
    { name: 'Skills', href: `#${SectionId.SKILLS}`, id: SectionId.SKILLS },
    { name: 'Experience', href: `#${SectionId.EXPERIENCE}`, id: SectionId.EXPERIENCE },
    { name: 'Projects', href: `#${SectionId.PROJECTS}`, id: SectionId.PROJECTS },
    { name: 'Education', href: `#${SectionId.EDUCATION}`, id: SectionId.EDUCATION },
    { name: 'Contact', href: `#${SectionId.CONTACT}`, id: SectionId.CONTACT },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a 
          href={`#${SectionId.HERO}`} 
          className="text-xl font-bold tracking-tighter font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer"
          onClick={scrollToTop}
        >
          ZE.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`text-sm font-medium transition-all duration-200 relative cursor-pointer
                ${activeSection === link.id ? 'text-primary' : 'text-slate-300 hover:text-white'}
              `}
            >
              {link.name}
              {/* Active Indicator Dot */}
              {activeSection === link.id && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl h-screen">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-2xl font-bold py-4 border-b border-white/5 transition-colors duration-200 block
                ${activeSection === link.id ? 'text-primary' : 'text-slate-300 hover:text-white'}
              `}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;