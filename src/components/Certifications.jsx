import React from 'react';
import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight } from "lucide-react";

const CertificationCard = ({ title, issuer, date, id, desc, delay, url }) => {
    // Dynamic color mapping for professional brand representation
    const issuerColors = {
        'AWS (Ethnus)': 'text-amber-400 bg-amber-400/10 border-amber-400/20',
        'Ethnus': 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
        'LinkedIn': 'text-sky-400 bg-sky-400/10 border-sky-400/20',
        'Udemy': 'text-purple-400 bg-purple-400/10 border-purple-400/20',
        default: 'text-zinc-400 bg-zinc-800/50 border-zinc-700'
    };
    const colorClass = issuerColors[issuer] || issuerColors.default;

    return (
        <motion.a 
            href={url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="flex flex-col p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-800/40 transition-all duration-300 group relative overflow-hidden h-full"
        >
            {/* Subtle Top Interaction Gradient */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-zinc-500 group-hover:via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-start mb-6">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold font-mono tracking-widest uppercase border ${colorClass} transition-colors`}>
                    {issuer}
                </span>
                <div className="flex items-center justify-center p-2 rounded-full border border-zinc-800 group-hover:border-indigo-500/30 group-hover:bg-indigo-500/10 text-zinc-500 group-hover:text-indigo-400 transition-all duration-300">
                    <ArrowUpRight size={14} />
                </div>
            </div>
            
            <h3 className="text-xl font-bold text-zinc-100 mb-3 leading-tight group-hover:text-white transition-colors">
                {title}
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors">
                {desc}
            </p>
            
            <div className="flex items-end justify-between mt-auto pt-6 border-t border-zinc-800/50">
                <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Issued</span>
                    <span className="text-sm font-medium text-zinc-300">{date}</span>
                </div>
                {id && (
                    <div className="flex flex-col items-end gap-1.5">
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Credential ID</span>
                        <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                            <BadgeCheck size={14} className="text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                            <span className="font-mono text-xs max-w-[120px] truncate" title={id}>{id}</span>
                        </div>
                    </div>
                )}
            </div>
        </motion.a>
    );
};

export const Certifications = () => {
    return (
      <section id="certifications" className="py-24 bg-transparent border-t border-zinc-900">
        <div className="container mx-auto px-6 max-w-5xl">
            <div className="mb-12">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
                >
                    Certifications.
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
                    Validated expertise through industry-recognized credentials.
                </motion.p>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                <CertificationCard 
                    title="AWS Certified Cloud Practitioner"
                    issuer="AWS (Ethnus)"
                    date="Jan 2025"
                    id="G62KDP2T"
                    url="https://drive.google.com/file/d/1yfNuCkhg255UE8mBV3Y8D5LZHRFGdj72/view?usp=sharing"
                    desc="Validated knowledge of AWS Cloud platform, security, architecture, and billing practices via the Ethnus AWS Academy program."
                    delay={0.1}
                />
                <CertificationCard 
                    title="MERN Full Stack Certification"
                    issuer="Ethnus"
                    date="Dec 2024"
                    id="X53XC2TH"
                    url="https://drive.google.com/file/d/1aFSUv7O1GUgR5dQAtxzS40BxXfPiBLIS/view?usp=sharing"
                    desc="Comprehensive bootcamp covering advanced React patterns, Node.js microservices, and MongoDB aggregations."
                    delay={0.2}
                />
                <CertificationCard 
                    title="DevOps Foundations: CI/CD"
                    issuer="LinkedIn"
                    date="Dec 2025"
                    id="9e10bbb6...cbd58bd1112"
                    url="https://drive.google.com/file/d/1iypZgpfaWDe_zROY1cHRFNSxbObfV3yG/view?usp=sharing"
                    desc="Mastered the principles of Continuous Integration and Deployment using modern toolchains."
                    delay={0.3}
                />
                 <CertificationCard 
                    title="Docker for Developers"
                    issuer="LinkedIn"
                    date="Dec 2025"
                    id="d5739569...45289e74b6"
                    url="https://drive.google.com/file/d/1vrVOANw7B5GGyKjxP60gpGLJTPTTzO6V/view?usp=sharing"
                    desc="In-depth training on containerization, multi-stage builds, and docker-compose for production environments."
                    delay={0.4}
                />
                <CertificationCard 
                    title="Python for Beginners"
                    issuer="Udemy"
                    date="Sep 2022"
                    id="UC-251e3ba5..."
                    url="https://drive.google.com/file/d/1aoPiXk0ef7Svpgf2Jeo-ZyL0uJ_-HK7U/view?usp=sharing"
                    desc="Mastered Python fundamentals including data structures, object-oriented programming, and functional principles."
                    delay={0.5}
               

                />
                 <CertificationCard 
                    title="Generative AI "
                    issuer="Orcle"
                    date="Sep 2025"
                    id="102615554OCI25GAIOC"
                    url="https://drive.google.com/file/d/1cFmN3aD6A8UQyopskvoy57_y_dmIt32B/view?usp=sharing"
                    desc="Completed Generative AI certification, working with LLMs, prompt engineering, and building AI applications using tools like OpenAI APIs and LangChain."
                    delay={0.5}
                />
                  <CertificationCard 
                    title="Github"
                    issuer="Linkedln"
                    date="Sep 2025"
                    id="002c0786b8b0e292266f06397032c2e76b4e9e9168b2694697001d1ac74a9a39"
                    url="https://drive.google.com/file/d/12NxPxIWSPZ1TLSCtG9FDUn3EUPtLGVYF/view?usp=sharing"
                    desc="Completed a GitHub certification, gaining practical knowledge of version control, repositories, branching, and collaboration workflows."
                    delay={0.5}
                />

            </div>
        </div>
      </section>
    );
};

export default Certifications;
