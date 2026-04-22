import React, { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import { Users, Database, Server, ArrowRight, Activity, Globe, HardDrive } from "lucide-react";

const FlowArrow = () => (
    <div className="relative flex items-center justify-center w-16">
        <div className="h-0.5 w-full bg-zinc-800" />
        <motion.div
            className="absolute left-0 w-2 h-0.5 bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
            animate={{ 
                x: [0, 60],
                opacity: [0, 1, 0]
            }}
            transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "linear"
            }}
        />
        <ArrowRight className="absolute right-0 text-zinc-600 w-4 h-4 translate-x-3" />
    </div>
);

const ArchNode = ({ icon: Icon, label, colorClass, delay }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 group cursor-default relative"
    >
        {/* Hover Glow */}
        <div className={`absolute inset-0 ${colorClass.bg} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500 rounded-full`} />
        
        <div className={`w-16 h-16 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shadow-sm relative z-10 
            group-hover:-translate-y-1 ${colorClass.border} transition-all duration-300`}>
            {Icon && <Icon size={24} className={`group-hover:${colorClass.text} transition-colors duration-300`} />}
        </div>
        <span className="text-xs text-zinc-500 font-mono tracking-wider uppercase group-hover:text-zinc-300 transition-colors">{label}</span>
    </motion.div>
);

const SystemArchitecture = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end end"]
  });

  return (
    <section ref={containerRef} className="py-24 bg-transparent border-t border-zinc-900 selection:bg-indigo-500/30 relative overflow-hidden">
      
      {/* Animated Background Circuit SVG */}
      <div className="absolute top-0 right-0 lg:right-auto lg:left-[5%] w-32 h-full -z-10 opacity-30 pointer-events-none hidden md:block">
          <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full stroke-indigo-500/50">
              <motion.path 
                  d="M 50 0 L 50 200 L 90 240 L 90 400 L 50 440 L 50 600 L 10 640 L 10 800 L 50 840 L 50 1000" 
                  fill="none" 
                  strokeWidth="2"
                  strokeDasharray="1 1"
                  pathLength="1"
                  style={{ pathLength: scrollYProgress, opacity: scrollYProgress }}
              />
          </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
            >
                Architecture & Systems.
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "60px" }}
                viewport={{ once: true }}
                className="h-1 bg-zinc-700 mt-6 mb-6"
            />
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-zinc-400 text-lg max-w-2xl"
            >
                Architecting scalable solutions, not just writing code.
            </motion.p>
        </div>

        {/* Interactive Visualization */}
        <div className="bg-zinc-900/20 p-6 md:p-8 rounded-xl border border-zinc-800/80 relative overflow-hidden group/container hover:border-zinc-700 transition-colors duration-500">
          
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

          {/* Flow Diagram (Responsive Grid) */}
          <div className="hidden md:flex items-center justify-center gap-2 lg:gap-5 text-center relative z-10 my-6">
             
             <ArchNode 
                delay={0.1}
                icon={Globe} 
                label="Client (React)" 
                colorClass={{ border: "hover:border-sky-500/50 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]", text: "text-sky-400", bg: "bg-sky-500" }} 
             />
             <FlowArrow />
             
             <ArchNode 
                delay={0.3}
                icon={Server} 
                label="API Gateway" 
                colorClass={{ border: "hover:border-emerald-500/50 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)]", text: "text-emerald-400", bg: "bg-emerald-500" }} 
             />
             <FlowArrow />
             
             <ArchNode 
                delay={0.5}
                icon={Activity} 
                label="Redis Cache" 
                colorClass={{ border: "hover:border-rose-500/50 hover:shadow-[0_0_15px_rgba(244,63,94,0.2)]", text: "text-rose-400", bg: "bg-rose-500" }} 
             />
             <FlowArrow />
             
             <ArchNode 
                delay={0.7}
                icon={HardDrive} 
                label="Primary DB" 
                colorClass={{ border: "hover:border-indigo-500/50 hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]", text: "text-indigo-400", bg: "bg-indigo-500" }} 
             />
          </div>

          <div className="md:hidden text-center text-zinc-500 text-sm font-mono p-6 bg-zinc-900/50 rounded-lg border border-zinc-800 relative z-10">
             [Architecture Visualization Optimized for Desktop]
          </div>

          {/* Explanation Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-10 pt-8 border-t border-zinc-800 relative z-10">
              <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} delay={0.2}
                  className="group hover:bg-zinc-900/50 p-6 -m-6 rounded-xl transition-colors duration-300"
              >
                  <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-shadow"></div>
                      <h4 className="text-zinc-100 font-bold group-hover:text-emerald-400 transition-colors">High Availability</h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      Stateless backend services containerized with Docker, deployed on scalable cloud infrastructure behind robust load balancers.
                  </p>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} delay={0.4}
                  className="group hover:bg-zinc-900/50 p-6 -m-6 rounded-xl transition-colors duration-300"
              >
                  <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-rose-500 group-hover:shadow-[0_0_8px_rgba(244,63,94,0.6)] transition-shadow"></div>
                      <h4 className="text-zinc-100 font-bold group-hover:text-rose-400 transition-colors">Real-Time Scaling</h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      Redis execution for session integrity and event-driven Pub/Sub messaging, ensuring sub-millisecond data delivery.
                  </p>
              </motion.div>

              <motion.div 
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} delay={0.6}
                  className="group hover:bg-zinc-900/50 p-6 -m-6 rounded-xl transition-colors duration-300"
              >
                  <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-shadow"></div>
                      <h4 className="text-zinc-100 font-bold group-hover:text-indigo-400 transition-colors">Automated Pipelines</h4>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors">
                      Continuous Integration and Deployment pipelines ensuring seamless build, test, and production delivery upon commit.
                  </p>
              </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SystemArchitecture;
