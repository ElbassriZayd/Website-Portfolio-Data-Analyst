import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionId } from '../types';
import { SKILL_CATEGORIES, RADAR_DATA } from '../constants';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from 'recharts';

const Skills: React.FC = () => {
  const [chartVisible, setChartVisible] = useState(false);

  return (
    <section id={SectionId.SKILLS} className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-16 flex items-center gap-3"
        >
          <span className="w-8 h-1 bg-secondary rounded-full"></span>
          Technical Arsenal
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Charts Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            onViewportEnter={() => setChartVisible(true)}
            className="h-[400px] w-full bg-background/50 rounded-2xl border border-white/5 p-4 flex items-center justify-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent rounded-2xl pointer-events-none" />
            
            {chartVisible ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RADAR_DATA}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Proficiency"
                    dataKey="A"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fill="#8b5cf6"
                    fillOpacity={0.3}
                  />
                  <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', color: '#fff' }}
                      itemStyle={{ color: '#8b5cf6' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <div className="text-slate-500 animate-pulse font-mono text-sm">Loading Visualization...</div>
            )}
          </motion.div>

          {/* Skill Bars */}
          <div className="space-y-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                  <span className="text-secondary font-mono">{category.level}%</span>
                </div>
                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden mb-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                  />
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;