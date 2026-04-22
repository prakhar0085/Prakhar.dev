import project1 from '../assets/skillssprint.png';
import project2 from '../assets/teamsync.png';
import project3 from '../assets/talkative.png';
import project4 from '../assets/AgentHelix.png';
import project5 from '../assets/ServiceSync.png';
import { useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react"; 

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col bg-zinc-900/40 border border-zinc-800/80 rounded-xl overflow-hidden group hover:border-zinc-700 transition-all duration-500 h-full"
        >
            {/* Minimal Image Container */}
            <div className="relative aspect-[2/1] w-full overflow-hidden bg-zinc-900 border-b border-zinc-800/80 group/card">
                <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                
                {/* Laser Scan Animation */}
                <motion.div 
                    variants={{
                        initial: { top: "0%", opacity: 0 },
                        hover: { 
                            top: ["0%", "100%", "0%"], 
                            opacity: 1,
                            transition: { 
                                duration: 2, 
                                repeat: Infinity, 
                                ease: "linear" 
                            }
                        }
                    }}
                    initial="initial"
                    whileHover="hover"
                    className="absolute inset-x-0 h-[1.5px] bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] z-20 pointer-events-none"
                />

                {/* Scan Status Label */}
                <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 border border-cyan-500/30 px-2 py-0.5 rounded backdrop-blur-sm">
                    <span className="text-[8px] font-mono text-cyan-400 animate-pulse tracking-tighter uppercase font-bold">Status: Scanning...</span>
                </div>

                {project.image ? (
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                ) : (
                    <div className="text-zinc-700 w-full h-full flex flex-col items-center justify-center font-mono text-xs gap-2">
                        <FolderGit2 size={24} />
                        Source Only
                    </div>
                )}
            </div>

            {/* Content Body - Tighter Padding */}
            <div className="p-4 flex flex-col flex-grow relative">
                
                {/* Title & Description */}
                <div className="mb-4">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">
                            {project.title.split(' – ')[0]}
                        </h3>
                    </div>
                    <p className="text-xs font-medium text-zinc-500 mb-3 pb-3 border-b border-zinc-800/50">
                        {project.title.split(' – ')[1]}
                    </p>
                    <p className="text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                        {project.description}
                    </p>
                </div>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.tags.map((tag) => (
                        <span 
                            key={tag}
                            className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-wider font-mono rounded-md"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Bottom Actions */}
                <div className="flex items-center gap-2 mt-auto pt-4 border-t border-zinc-800/50">
                     <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 flex items-center justify-center gap-2 text-zinc-900 font-bold bg-zinc-100 hover:bg-white px-3 py-2 rounded-md transition-colors text-xs"
                     >
                        Live Demo
                     </a>
                     <a 
                        href={project.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center justify-center p-2 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-zinc-600 rounded-md transition-all"
                        aria-label="View Source Code"
                     >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                     </a>
                </div>
            </div>
        </motion.div>
    );
};

const projects = [
  {
    title: "SkillsSprint – AI-Powered LMS",
    isSaaS: true,
    image: project1,
    description: "A comprehensive Learning Management System utilizing AI-driven semantic search to personalize user learning paths and optimize dynamic content discovery.",
    tags: ["MERN", "Docker", "CI/CD", "AWS"],
    links: { 
        github: "https://github.com/prakhar0085/Learning_Management_System",
        live: "http://51.20.148.95:5173/"
    },
  },
  {
    title: "TeamSync – AI Task Manager",
    isSaaS: true,
    image: project2,
    description: "An autonomous task orchestration platform that leverages LLMs to convert natural language into complex, event-driven organizational workflows.",
    tags: ["React", "Prisma", "AI Agents", "Clerk"],
    links: { 
        github: "https://github.com/prakhar0085/TeamSync", 
        live: "https://team-sync-alpha.vercel.app/" 
    },
  },
  {
    title: "Talkative – Real-Time Chat",
    isSaaS: true,
    image: project3,
    description: "A highly-scalable messaging engine optimized for low-latency communication, supporting end-to-end encrypted data transmission.",
    tags: ["Socket.IO", "React", "Redis", "Encryption"],
    links: { 
        github: "https://github.com/prakhar0085/Talkative", 
        live: "https://talkative-3ndq.onrender.com/" 
    },
  },

   {
    title: "AgentHelix – Multi-Agent Code Orchestration Engine",
    isSaaS: true,
    image: project4,
    description: "AgentHelix is an intelligent multi-agent orchestration system that mimics how modern AI-powered developer tools operate. Given a GitHub issue, it autonomously analyzes the codebase, generates a fix, writes tests, and opens a pull request - without human intervention..",
    tags: ["LangGraph", "Github API", "Docker Sandbox", "Python", "React"],
    links: { 
        github: "https://github.com/prakhar0085/AgentHelix", 
        live: "https://github.com/prakhar0085/AgentHelix" 
    },
  },

   {
    title: "ServiceSync – Industrial Service Orchestration Ecosystem",
    isSaaS: true,
    image: project5,
    description: "ServiceSync is a production-grade service management platform that fuses industrial design with agentic AI. It features a 'Stable Studio' environment for real-time service discovery, automated provider orchestration, and a proprietary AI-driven dispute resolution engine powered by Llama 3.",
    tags: ["React", "Node.js", "MongoDB", "FastAPI", "Groq AI", "LangChain"],
    links: { 
        github: "https://github.com/prakhar0085/ServiceSyncc", 
        live: "https://github.com/prakhar0085/ServiceSyncc" 
    },
  },

  

  
];

export const Projects = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    return (
      <section id="projects" ref={containerRef} className="py-24 bg-transparent border-t border-zinc-900 relative overflow-hidden">
        
        
        {/* Animated Background Circuit SVG */}
        <div className="absolute top-0 right-0 lg:right-auto lg:left-[5%] w-32 h-full -z-10 opacity-30 pointer-events-none hidden md:block">
            <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full stroke-emerald-500/50">
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

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
            >
                Selected Works.
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
                A collection of production-grade systems I've engineered, emphasizing scalable architecture and robust system design.
            </motion.p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
};

export default Projects;
