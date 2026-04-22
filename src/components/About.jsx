import React from 'react';
import { motion } from "framer-motion";
import { Server, Cpu, Quote, Layout, GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";
import Tilt from "react-parallax-tilt";

const EducationCard = ({ institution, degree, year, location, desc, coursework, cgpa }) => (
    <motion.div 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative pl-8 md:pl-0"
    >
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800" />
        
        {/* Timeline Dot (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-[#020202] z-10 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Side (Time & Place) */}
            <div className="md:text-right md:pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium mb-3">
                    <Calendar size={14} className="text-cyan-500" />
                    {year}
                </div>
                <div className="text-zinc-500 text-sm flex items-center md:justify-end gap-1 mb-3">
                     <MapPin size={14} />
                     {location}
                </div>
                {cgpa && (
                    <div className="text-zinc-300 text-sm font-bold md:justify-end flex">
                        <span className="bg-zinc-800/50 px-2.5 py-1 rounded border border-zinc-700">CGPA: {cgpa}</span>
                    </div>
                )}
            </div>

            {/* Right Side (Content) */}
            <div className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800 hover:bg-zinc-900/50 transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/20 transition-all">
                        <GraduationCap size={24} className="group-hover:text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-zinc-100 leading-tight mb-1">{institution}</h3>
                        <p className="text-cyan-500/80 font-medium text-xs tracking-widest uppercase">{degree}</p>
                    </div>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {desc}
                </p>

                <div>
                    <h4 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2 font-mono">
                        <BookOpen size={14} className="text-cyan-500/50" />
                        Academic Focus
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {coursework.map(course => (
                            <span key={course} className="px-3 py-1 text-zinc-500 text-[10px] rounded-md border border-zinc-800 bg-zinc-950 hover:border-cyan-500/30 hover:text-zinc-300 transition-colors uppercase tracking-wider font-mono">
                                {course}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
);

const About = () => {

    const pillars = [
        {
            title: "System Architecture",
            desc: "Designing robust backends, event-driven microservices, and databases highly optimized for horizontal scale.",
            icon: Server,
            classes: {
                glow: "bg-emerald-500/20",
                border: "group-hover:border-emerald-500/40",
                iconText: "group-hover:text-emerald-400",
            }
        },
        {
            title: "Frontend Engineering",
            desc: "Building responsive, highly interactive, and robust user interfaces powered by React and Tailwind CSS.",
            icon: Layout,
            classes: {
                glow: "bg-sky-500/20",
                border: "group-hover:border-sky-500/40",
                iconText: "group-hover:text-sky-400",
            }
        },
        {
            title: "AI & Cloud Integration",
            desc: "Leveraging Large Language Models and cloud-native Docker workflows to build intelligent, autonomous systems.",
            icon: Cpu,
            classes: {
                glow: "bg-fuchsia-500/20",
                border: "group-hover:border-fuchsia-500/40",
                iconText: "group-hover:text-fuchsia-400",
            }
        }
    ];

    return (
        <section id="about" className="py-24 bg-transparent relative border-t border-zinc-900 overflow-hidden selection:bg-indigo-500/30">
            
            <div className="container mx-auto px-6 max-w-5xl relative z-10">
                
                <div className="mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
                    >
                        Professional Background.
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "60px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-zinc-700 mt-6"
                    />
                </div>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
                    
                    {/* Left Column: Narrative */}
                    <div className="lg:col-span-7 space-y-8 relative">
                        {/* Decorative quotation mark */}
                        <Quote className="absolute -top-6 -left-6 text-zinc-800/20 w-32 h-32 -z-10 rotate-180" />
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-zinc-400 text-lg leading-relaxed relative z-10"
                        >
                            <p>
                                I am <strong className="text-zinc-200 font-medium tracking-wide">Prakhar Tiwari</strong>, a Full Stack Developer with a deep focus on building resilient, scalable, and high-performance web applications. My core expertise bridges the critical gap between complex backend architectures and highly responsive frontend interfaces.
                            </p>
                            <p>
                                With comprehensive experience across the modern stack and AI tooling, I architect systems from the ground up. This involves managing everything from robust relational database schemas and microservice deployments, to Gen-AI workflows and secure CI/CD pipelines.
                            </p>
                            
                            {/* Philosophy Callout */}
                            <div className="p-6 md:p-8 mt-10 border-l-2 border-indigo-500 bg-zinc-900/30 rounded-r-2xl transform transition-all hover:translate-x-2 duration-300 border-t border-b border-r border-zinc-800/50 hover:bg-zinc-900/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.05)] hover:border-zinc-700/80 group/phil cursor-default">
                                <p className="text-xs font-bold font-mono text-indigo-400 mb-3 uppercase tracking-widest flex items-center gap-2">
                                    <span className="block w-1.5 h-1.5 rounded-full bg-indigo-500 group-hover/phil:animate-ping" />
                                    Engineering Philosophy
                                </p>
                                <p className="text-zinc-300 italic text-base leading-relaxed">
                                    "I believe that writing clean, maintainable code is just as critical as delivering the feature itself. Every technical decision I make prioritizes system performance, data security, and long-term scalability."
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Key Principles */}
                    <div className="lg:col-span-5 grid gap-5">
                        {pillars.map((pillar, i) => (
                            <Tilt 
                                key={i}
                                tiltMaxAngleX={5} 
                                tiltMaxAngleY={5} 
                                perspective={1000} 
                                scale={1.02}
                                transitionSpeed={1000}
                                glareEnable={true}
                                glareMaxOpacity={0.12}
                                glareColor="white"
                                glarePosition="all"
                                className="h-full rounded-2xl group flex flex-col"
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl flex gap-5 hover:bg-zinc-900/70 hover:border-zinc-700/80 transition-all duration-500 relative overflow-hidden h-full shadow-lg"
                                >
                                    {/* Hover Glow Background */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 ${pillar.classes.glow} rounded-full blur-[60px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                                    
                                    <div className={`mt-1 shrink-0 p-3 h-fit rounded-xl bg-zinc-900 border border-zinc-800 ${pillar.classes.border} transition-all duration-300 shadow-inner group-hover:scale-110`}>
                                        <pillar.icon size={20} className={`text-zinc-500 ${pillar.classes.iconText} transition-colors duration-300`} />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-zinc-200 font-bold mb-2 text-lg group-hover:text-white transition-colors">{pillar.title}</h4>
                                        <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">{pillar.desc}</p>
                                    </div>
                                </motion.div>
                            </Tilt>
                        ))}
                    </div>
                </div>

                {/* EDUCATION SUB-SECTION */}
                <div className="mt-40">
                    <div className="mb-20 text-center md:text-left">
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
                        >
                            Education.
                        </motion.h2>
                        <motion.div 
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: "60px" }}
                            viewport={{ once: true }}
                            className="h-1 bg-cyan-600 mt-6 mx-auto md:mx-0"
                        />
                    </div>

                    <div className="space-y-12">
                        <EducationCard 
                            institution="VIT Bhopal University"
                            degree="B.Tech in Computer Science & Engineering"
                            year="2022 — 2026"
                            location="Bhopal, India"
                            cgpa="8.05 / 10"
                            desc="Final-year Computer Science student focused on backend engineering, full-stack development, and AI-powered systems. Built and deployed production-grade applications using MERN, PostgreSQL, Redis, Docker, AWS, and Generative AI."
                            coursework={[
                                "Data Structures & Algorithms", 
                                "Operating Systems", 
                                "DBMS", 
                                "Computer Networks", 
                                "Cloud Computing", 
                                "Artificial Intelligence",
                                "Scaling SaaS Systems",
                                "Real-time Architectures"
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
