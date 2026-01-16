import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';

const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-surface/50 border border-white/5 p-8 md:p-12 rounded-2xl backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-tl-2xl" />
          
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            About Me
          </h2>

          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a dedicated <strong className="text-white">Business Intelligence & Data Analyst</strong> expert 
              with a Master’s degree in <span className="text-primary">Decision Informatics & Intelligent Vision</span>.
            </p>
            <p>
              My expertise lies in building end-to-end BI solutions, mastering the flow from 
              Data Warehousing and rigorous Modeling to impactful Visualization.
            </p>
            <p>
              I focus heavily on defining clear KPIs and driving data-driven strategy to empower stakeholders. 
              Whether it's optimizing operations through Machine Learning or creating intuitive Power BI dashboards, 
              my goal is always to deliver clarity and measurable value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;