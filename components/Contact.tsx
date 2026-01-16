import React from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';
import { Github, Linkedin, Mail, FileText, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-gradient-to-t from-black to-surface/50 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">Let's Connect</h2>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto">
            Currently open to new opportunities in Data Analysis and Data Science. 
            Feel free to reach out for collaborations or just a chat.
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-primary/20 group-hover:border-primary transition-all duration-300">
                <Github size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-xs text-slate-500 group-hover:text-primary transition-colors">GitHub</span>
            </a>
            
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-blue-600/20 group-hover:border-blue-500 transition-all duration-300">
                <Linkedin size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-xs text-slate-500 group-hover:text-blue-500 transition-colors">LinkedIn</span>
            </a>

            <a href={`mailto:${SOCIAL_LINKS.email}`} className="group flex flex-col items-center gap-2">
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-red-500/20 group-hover:border-red-500 transition-all duration-300">
                <Mail size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-xs text-slate-500 group-hover:text-red-500 transition-colors">Email</span>
            </a>

            <a 
              href={SOCIAL_LINKS.resume} 
              download="DATA ANALYST ELBASSRI ZAYD.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 cursor-pointer"
            >
              <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:bg-green-500/20 group-hover:border-green-500 transition-all duration-300">
                <FileText size={24} className="text-slate-300 group-hover:text-white" />
              </div>
              <span className="text-xs text-slate-500 group-hover:text-green-500 transition-colors">Resume</span>
            </a>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-500 text-sm">
             <div className="flex items-center gap-2">
                <Mail size={16} /> {CONTACT_INFO.email}
             </div>
             <div className="hidden md:block w-1 h-1 bg-slate-700 rounded-full"></div>
             <div className="flex items-center gap-2">
                <MapPin size={16} /> {CONTACT_INFO.location}
             </div>
          </div>
          
          <p className="mt-16 text-slate-700 text-xs">
            © {new Date().getFullYear()} Zayd Elbassri. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;