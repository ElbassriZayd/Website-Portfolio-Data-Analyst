import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { EXPERIENCES } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
         <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 flex items-center gap-3 justify-center md:justify-start"
        >
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Professional Journey
        </motion.h2>

        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Dot on timeline */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-background border-2 border-primary rounded-full">
                <div className="w-full h-full bg-primary rounded-full animate-pulse opacity-50"></div>
              </div>

              <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-primary/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Briefcase size={18} className="text-secondary" />
                    {exp.role}
                  </h3>
                  <span className="text-sm font-mono text-slate-400 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                    {exp.duration}
                  </span>
                </div>
                
                <p className="text-lg text-primary mb-4 font-medium">{exp.company}</p>
                
                <ul className="space-y-2">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="text-slate-300 flex items-start gap-2 text-sm md:text-base">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;