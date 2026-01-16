import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { SOCIAL_LINKS } from '../constants';
import { ArrowRight, Download } from 'lucide-react';
import profileImg from './profile.png';

const Hero: React.FC = () => {
  
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById(SectionId.CONTACT);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id={SectionId.HERO} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-0 md:pb-0">
      {/* Background Blobs - Adjusted positioning for 2-column layout */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-mono mb-6 backdrop-blur-sm">
              Available for Hire
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Zayd Elbassri</span>
            </h1>
            
            <div className="h-12 md:h-16 overflow-hidden mb-8">
              <motion.div
                animate={{ y: [0, -64, -128, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
                className="text-xl md:text-3xl font-light text-slate-400"
              >
                <div className="h-16 flex items-center justify-center lg:justify-start">Business Intelligence Consultant</div>
                <div className="h-16 flex items-center justify-center lg:justify-start">Data Analyst</div>
                <div className="h-16 flex items-center justify-center lg:justify-start">Data Scientist</div>
                <div className="h-16 flex items-center justify-center lg:justify-start">Business Intelligence Consultant</div> 
              </motion.div>
            </div>

            <p className="max-w-2xl mx-auto lg:mx-0 text-slate-400 text-lg mb-10 leading-relaxed">
              Expert in translating complex data into actionable strategic insights. 
              Bridging the gap between raw data and decision-making through end-to-end BI solutions and advanced Machine Learning models.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`#${SectionId.CONTACT}`}
                onClick={handleScrollToContact}
                className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2 cursor-pointer"
              >
                Contact Me <ArrowRight size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.resume}
                download="DATA ANALYST ELBASSRI ZAYD.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2 cursor-pointer"
              >
                Download Resume <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-64 h-80 md:w-80 md:h-96 lg:w-[400px] lg:h-[500px]"
            >
              {/* Glowing Gradient Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-[2rem] blur-2xl opacity-60 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 bg-surface/50 shadow-2xl">
                {/* Overlay for tint (optional) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                
                <img 
                  src={profileImg} 
                  alt="Zayd Elbassri" 
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 backdrop-blur-md rounded-2xl border border-white/10 -z-10 animate-bounce delay-700"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary/20 backdrop-blur-md rounded-full border border-white/10 -z-10 animate-pulse"></div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
