import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 relative">
       <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-1 bg-primary rounded-full"></span>
          Education
        </motion.h2>

        <div className="grid gap-6">
          {/* Master */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start gap-4"
          >
            <div className="p-3 bg-primary/10 rounded-lg text-primary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Master: Decision Informatics & Intelligent Vision</h3>
              <p className="text-slate-400 mt-1">2022 – 2024</p>
              <p className="text-sm text-slate-500 mt-2">Specialized in Advanced Data Science, Machine Learning, and Decision Support Systems.</p>
            </div>
          </motion.div>

          {/* Bachelor */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 border border-white/5 p-6 rounded-xl flex items-start gap-4"
          >
            <div className="p-3 bg-secondary/10 rounded-lg text-secondary">
              <GraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Bachelor: Mathematics & Computer Science</h3>
              <p className="text-slate-400 mt-1">2019 – 2022</p>
              <p className="text-sm text-slate-500 mt-2">Strong foundation in linear algebra, calculus, statistics, and algorithmic complexity.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;