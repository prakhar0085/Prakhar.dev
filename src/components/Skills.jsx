import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Database, Cloud, Cpu, Layout, Terminal } from "lucide-react";
import Tilt from "react-parallax-tilt";

const skillCategories = [
    {
        id: "core",
        title: "Languages",
        icon: Terminal,
        color: "indigo",
        filter: "CS",
        tags: ["Java", "Python", "SQL", "HTML", "CSS", "JavaScript(ES6+)"],
        skills: [
            { name: "Scripting & Automation", evidence: "Highly proficient in Python for automation and JavaScript (ES6+) for dynamic logic." },
            { name: "Strongly Typed Systems", evidence: "Extensive background in Java for building enterprise-grade, scalable applications." },
            { name: "Query Mastering", evidence: "Expert-level SQL for complex data retrieval and relational schema design." }
        ]
    },
    {
        id: "frontend",
        title: "Frontend Engineering",
        icon: Layout,
        color: "sky",
        filter: "Frontend",
        tags: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"],
        skills: [
            { name: "SPA & Static Architectures", evidence: "Building high-performance React and Next.js apps with optimized hydration." },
            { name: "State Orchestration", evidence: "Managing complex global states across distributed components with Redux Toolkit." },
            { name: "Modern Styling", evidence: "Utility-first design systems built with Tailwind CSS for systematic responsiveness." }
        ]
    },
    {
        id: "backend",
        title: "Backend Architecture",
        icon: Server,
        color: "emerald",
        filter: "Backend",
        tags: ["Node.js", "Express.js", "REST APIs", "Microservices", "Redis"],
        skills: [
            { name: "Scalable Execution", evidence: "Engineering event-driven Node.js server environments for high concurrency." },
            { name: "Decoupled Systems", evidence: "Designing microservices that communicate via lightweight protocols and event buses." },
            { name: "Real-time Caching", evidence: "Implementing Redis for sub-millisecond data persistence and session management." }
        ]
    },
    {
        id: "database",
        title: "Databases",
        icon: Database,
        color: "amber",
        filter: "Backend",
        tags: ["MySQL", "MongoDB", "PostgreSQL"],
        skills: [
            { name: "Relational Modeling", evidence: "Architecting normalized MySQL/PostgreSQL schemas with ACID compliance." },
            { name: "Document Storage", evidence: "Implementing MongoDB for high-throughput, unstructured data processing." },
            { name: "Query Optimization", evidence: "Designing efficient indexing strategies to minimize latency in large datasets." }
        ]
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        icon: Cloud,
        color: "rose",
        filter: "DevOps",
        tags: ["AWS", "Docker", "CI/CD", "GitHub Actions"],
        skills: [
            { name: "Infrastructure Deployment", evidence: "Orchestrating production environments on AWS using scalable cloud patterns." },
            { name: "Container Isolation", evidence: "Utilizing Docker for reproducible builds and consistent microservice isolation." },
            { name: "Autodeployment", evidence: "Building robust CI/CD pipelines with GitHub Actions for zero-downtime delivery." }
        ]
    },
    {
        id: "ai",
        title: "AI & Gen AI",
        icon: Cpu,
        color: "fuchsia",
        filter: "AI",
        tags: ["LLMs", "RAG", "LangChain", "LangGraph", "Embeddings", "Prompt Engineering", "AI Agents", "MCP"],
        skills: [
            { name: "Agentic Workflows", evidence: "Engineering autonomous AI agents using LangGraph and LangChain for task automation." },
            { name: "Semantic Intelligence", evidence: "Implementing RAG pipelines with embeddings for context-aware AI retrieval." },
            { name: "Control Protocols", evidence: "Developing Model Context Protocol (MCP) integrations for advanced tool use." }
        ]
    },
    {
        id: "cs_fundamentals",
        title: "Core CS",
        icon: Terminal,
        color: "indigo",
        filter: "CS",
        tags: ["OOP", "OS", "CN", "System Design", "SOLID Principles", "Distributed Systems"],
        skills: [
            { name: "Architecture Logic", evidence: "Applying SOLID principles and System Design patterns to create modular codebases." },
            { name: "Network Layering", evidence: "Deep understanding of Computer Networks, OS threads, and concurrency models." },
            { name: "Resilient Theory", evidence: "Mastering Distributed Systems theory to ensure high availability and fault tolerance." }
        ]
    },
    {
        id: "tools",
        title: "Developer Tools",
        icon: Terminal,
        color: "sky",
        filter: "DevOps",
        tags: ["Git", "GitHub", "VS Code"],
        skills: [
            { name: "Version Control", evidence: "Mastery of Git workflows for collaborative development and branch management." },
            { name: "Collaboration", evidence: "Leveraging GitHub for advanced code review, PR automation, and project tracking." },
            { name: "Productivity", evidence: "Power-user of VS Code with customized extension ecosystems for maximum output." }
        ]
    }
];

const colorClasses = {
    emerald: {
        text: "text-emerald-400",
        border: "border-emerald-500/20",
        glow: "bg-emerald-500",
        groupHoverBorder: "group-hover:border-emerald-500/50",
        groupHoverText: "group-hover:text-emerald-400",
        itemHoverBorder: "group-hover/item:border-emerald-500/50",
        tagBg: "bg-emerald-500/10",
        tagBorder: "border-emerald-500/20",
        tagTextHover: "group-hover:text-emerald-300"
    },
    sky: {
        text: "text-sky-400",
        border: "border-sky-500/20",
        glow: "bg-sky-500",
        groupHoverBorder: "group-hover:border-sky-500/50",
        groupHoverText: "group-hover:text-sky-400",
        itemHoverBorder: "group-hover/item:border-sky-500/50",
        tagBg: "bg-sky-500/10",
        tagBorder: "border-sky-500/20",
        tagTextHover: "group-hover:text-sky-300"
    },
    fuchsia: {
        text: "text-fuchsia-400",
        border: "border-fuchsia-500/20",
        glow: "bg-fuchsia-500",
        groupHoverBorder: "group-hover:border-fuchsia-500/50",
        groupHoverText: "group-hover:text-fuchsia-400",
        itemHoverBorder: "group-hover/item:border-fuchsia-500/50",
        tagBg: "bg-fuchsia-500/10",
        tagBorder: "border-fuchsia-500/20",
        tagTextHover: "group-hover:text-fuchsia-300"
    },
    amber: {
        text: "text-amber-400",
        border: "border-amber-500/20",
        glow: "bg-amber-500",
        groupHoverBorder: "group-hover:border-amber-500/50",
        groupHoverText: "group-hover:text-amber-400",
        itemHoverBorder: "group-hover/item:border-amber-500/50",
        tagBg: "bg-amber-500/10",
        tagBorder: "border-amber-500/20",
        tagTextHover: "group-hover:text-amber-300"
    },
    indigo: {
        text: "text-indigo-400",
        border: "border-indigo-500/20",
        glow: "bg-indigo-500",
        groupHoverBorder: "group-hover:border-indigo-500/50",
        groupHoverText: "group-hover:text-indigo-400",
        itemHoverBorder: "group-hover/item:border-indigo-500/50",
        tagBg: "bg-indigo-500/10",
        tagBorder: "border-indigo-500/20",
        tagTextHover: "group-hover:text-indigo-300"
    },
    rose: {
        text: "text-rose-400",
        border: "border-rose-500/20",
        glow: "bg-rose-500",
        groupHoverBorder: "group-hover:border-rose-500/50",
        groupHoverText: "group-hover:text-rose-400",
        itemHoverBorder: "group-hover/item:border-rose-500/50",
        tagBg: "bg-rose-500/10",
        tagBorder: "border-rose-500/20",
        tagTextHover: "group-hover:text-rose-300"
    }
};

const Skills = () => {
  const [activeFilter, setActiveFilter] = React.useState("All");
  const filters = ["All", "Frontend", "Backend", "AI", "DevOps", "CS"];

  const filteredCategories = React.useMemo(() => {
    if (activeFilter === "All") return skillCategories;
    return skillCategories.filter(cat => cat.filter === activeFilter);
  }, [activeFilter]);

  return (
    <section id="skills" className="py-24 bg-transparent border-t border-zinc-900 selection:bg-indigo-500/30 w-full overflow-hidden relative">
       
       <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        <div className="mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
            >
                Engineering Toolkit.
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
                A comprehensive overview of the technologies and frameworks I use to architect, build, and deploy modern applications.
            </motion.p>
        </div>

        {/* Technical Filter Bar (Refined) */}
        <div className="flex flex-col items-center mb-20 relative z-10 font-mono">
            <div className="flex flex-wrap justify-center gap-1 md:gap-3 p-1.5 bg-zinc-950/60 border border-zinc-800/80 rounded-xl backdrop-blur-xl relative overflow-hidden group/bar cursor-crosshair shadow-2xl">
                
                {/* Mouse Following Scanning Line */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 bottom-0 w-[2px] bg-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-150 ease-out" style={{ left: 'var(--mouse-x, 0%)' }} />
                </div>

                {filters.map((filter, i) => {
                    const count = filter === "All" ? skillCategories.length : skillCategories.filter(c => c.filter === filter).length;
                    
                    return (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.parentElement.getBoundingClientRect();
                                const x = ((e.clientX - rect.left) / rect.width) * 100;
                                e.currentTarget.parentElement.style.setProperty('--mouse-x', `${x}%`);
                            }}
                            className="relative px-6 py-2.5 group/btn outline-none transition-all duration-300 active:scale-95"
                        >
                            {/* Technical Selection Framing */}
                            <div className={`absolute inset-0 transition-all duration-500 ${activeFilter === filter ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover/btn:opacity-30"}`}>
                                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-cyan-500/50" />
                                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-cyan-500/50" />
                                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-cyan-500/50" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-cyan-500/50" />
                            </div>

                            {/* Protocol & Count Label */}
                            <div className={`absolute -top-1 left-3 px-1.5 bg-zinc-950 text-[5px] flex items-center gap-1 transition-colors duration-300 ${activeFilter === filter ? "text-cyan-400" : "text-zinc-700"}`}>
                                <span>TYPE::{filter.substring(0, 3).toUpperCase()}</span>
                                <span className="w-1 h-[1px] bg-zinc-800" />
                                <span className={activeFilter === filter ? "text-cyan-500" : ""}>[{count.toString().padStart(2, '0')}]</span>
                            </div>

                            <span className={`relative z-10 text-[10px] md:text-xs uppercase tracking-[0.25em] transition-all duration-500 ${
                                activeFilter === filter 
                                    ? "text-cyan-300 font-black drop-shadow-[0_0_8px_rgba(34,211,238,0.5)] animate-pulse" 
                                    : "text-zinc-600 group-hover/btn:text-zinc-400"
                            }`}>
                                {filter}
                            </span>

                            {/* Bottom Underline & Shimmer */}
                            {activeFilter === filter && (
                                <>
                                    <motion.div 
                                        layoutId="hudUnderline"
                                        className="absolute -bottom-1 left-2 right-2 h-[1px] bg-cyan-400 z-20"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                    <motion.div 
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                        className="absolute bottom-0 left-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-10 opacity-50"
                                    />
                                </>
                            )}
                        </button>
                    )
                })}
            </div>

            {/* Filter Status HUD */}
            <div className="mt-6 flex flex-col items-center gap-2">
                <div className="flex items-center gap-8 text-[6px] text-zinc-600 uppercase tracking-[0.3em] font-bold">
                    <div className="flex items-center gap-2">
                        <div className={`w-1.5 h-1.5 rounded-sm ${activeFilter !== "All" ? "bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]" : "bg-zinc-800"}`} />
                        <span>ACTIVE_DOMAIN_QUERY</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-sm bg-emerald-500/50" />
                        <span>INTEGRITY_CHECK::PASSED</span>
                    </div>
                </div>
                
                {/* Visual Status Bar */}
                <div className="w-48 h-[2px] bg-zinc-900 rounded-full overflow-hidden relative">
                    <motion.div 
                        key={activeFilter}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        className="h-full bg-cyan-500/40"
                    />
                </div>
            </div>
        </div>

        {/* Bento Grid */}
        <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
            <AnimatePresence mode="popLayout" initial={false}>
                {filteredCategories.map((category) => {
                    const activeColor = colorClasses[category.color];
                    const Icon = category.icon;
                    
                    return (
                        <motion.div
                            key={category.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 10, transition: { duration: 0.2 } }}
                            transition={{ 
                                type: "spring",
                                stiffness: 200,
                                damping: 25,
                            }}
                        >
                            <Tilt 
                                tiltMaxAngleX={5} 
                                tiltMaxAngleY={5} 
                                perspective={1000} 
                                transitionSpeed={1000} 
                                scale={1.02} 
                                glareEnable={true}
                                glareMaxOpacity={0.15}
                                glareColor="white"
                                glarePosition="all"
                                className="h-full rounded-2xl group flex flex-col"
                            >
                                <div className="bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-5 lg:p-6 relative overflow-hidden group hover:bg-zinc-900/60 hover:border-zinc-700 transition-all duration-500 flex flex-col h-full shadow-lg">
                                    {/* Hover Glow Background */}
                                    <div className={`absolute -top-32 -right-32 w-48 h-48 ${activeColor.glow} opacity-0 group-hover:opacity-[0.05] blur-[60px] pointer-events-none rounded-full transition-opacity duration-700`} />
                                    
                                    {/* Header Box */}
                                    <div className="flex items-center gap-3 mb-6 relative z-10">
                                        <motion.div 
                                            whileHover={{ rotate: 10, scale: 1.1 }}
                                            className={`p-2.5 bg-zinc-900 rounded-xl border border-zinc-800 ${activeColor.groupHoverBorder} transition-colors duration-300 cursor-pointer`}
                                        >
                                            <Icon size={20} className={`text-zinc-500 ${activeColor.groupHoverText} transition-colors duration-300`} />
                                        </motion.div>
                                        <div className="cursor-default">
                                            <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors leading-tight">{category.title}</h3>
                                            <div className="text-zinc-500 font-mono text-[9px] mt-0.5 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">Domain Focus</div>
                                        </div>
                                    </div>

                                    {/* Bullet Points */}
                                    <div className="space-y-4 relative z-10 mb-6 flex-grow">
                                        {category.skills.map((skill, idx) => (
                                            <motion.div 
                                                key={idx} 
                                                whileHover={{ x: 6 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                className="relative pl-5 group/item cursor-pointer"
                                            >
                                                {/* Timeline dot */}
                                                <div className={`absolute left-0 top-1.5 w-1.5 h-1.5 rounded-full border border-zinc-700 bg-zinc-900 ${activeColor.itemHoverBorder} transition-colors duration-300`} />
                                                {/* Timeline line */}
                                                <div className="absolute left-[2.5px] top-4 bottom-[-16px] w-[1px] bg-zinc-800/50 last-of-type:hidden group-hover/item:bg-zinc-700 transition-colors" />
                                                
                                                <h4 className="text-zinc-200 font-bold text-[13px] mb-1 group-hover/item:text-white transition-colors tracking-wide">{skill.name}</h4>
                                                <p className="text-zinc-500 text-[11px] leading-relaxed group-hover/item:text-zinc-300 transition-colors">
                                                    {skill.evidence}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Keyword Pill Grid */}
                                    <div className="pt-4 border-t border-zinc-800/50 mt-auto relative z-10">
                                        <div className="flex flex-wrap gap-2 cursor-pointer">
                                            {category.tags.map((tag, i) => (
                                                <motion.span 
                                                    key={i} 
                                                    whileHover={{ scale: 1.1, y: -2 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className={`px-2.5 py-1 text-[10px] sm:text-xs font-mono font-medium rounded-md border ${activeColor.tagBg} ${activeColor.tagBorder} text-zinc-500 ${activeColor.tagTextHover} transition-all duration-300 cursor-pointer bg-zinc-900 shadow-sm`}
                                                >
                                                    {tag}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Tilt>
                        </motion.div>
                    )
                })}
            </AnimatePresence>
        </motion.div>

       </div>
    </section>
  );
};

export default Skills;
