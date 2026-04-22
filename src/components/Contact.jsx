import React from 'react';
import { motion } from "framer-motion";
import { Mail, Send, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-transparent relative border-t border-zinc-900 overflow-hidden">
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        <div className="mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold text-zinc-100 tracking-tight"
            >
                Get in Touch.
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "60px" }}
                viewport={{ once: true }}
                className="h-1 bg-zinc-700 mt-6 mb-8 mx-auto"
            />
            <div className="space-y-6">
                <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    I am actively seeking full-time Software Engineer opportunities starting in 2026. If you're looking for an engineer who understands scalable backend architecture, robust cloud deployments, and building modern user interfaces, my inbox is always open.
                </p>
                <div className="inline-block mt-4 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-md">
                    <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                        Available for Technical Interviews & Coding Assessments
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col items-center gap-8 mb-16">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
                <button 
                    onClick={() => {
                        const email = "prakhartiwari942@gmail.com";
                        window.location.href = `mailto:${email}?subject=Software Engineering Opportunity - [Your Company]`;
                    }}
                    className="w-full md:w-auto px-8 py-3.5 bg-zinc-100 hover:bg-white text-zinc-900 font-bold rounded-md transition-colors flex items-center justify-center gap-3 text-sm"
                >
                    <Mail size={18} />
                    <span>Send Email</span>
                </button>
                <a 
                    href="https://drive.google.com/file/d/1_cNMm6HXgqiPi3QCkvKjbJ9yOAVx8li4/view?usp=sharing" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto px-8 py-3.5 bg-transparent hover:bg-zinc-900 text-zinc-100 font-bold rounded-md border border-zinc-700 transition-colors flex items-center justify-center gap-3 text-sm"
                >
                    <FileText size={18} />
                    <span>View Resume</span>
                </a>
            </div>
            
            <a 
                href="mailto:prakhartiwari942@gmail.com"
                className="flex items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
            >
                <span className="font-mono text-sm">prakhartiwari942@gmail.com</span>
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
             <a 
                href="https://github.com/prakhar0085" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col items-center gap-3 group"
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                <span className="text-zinc-500 group-hover:text-zinc-300 font-medium text-sm">GitHub Profile</span>
             </a>

             <a 
                href="https://www.linkedin.com/in/prakhar-tiwari-693b3b251/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col items-center gap-3 group"
             >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-zinc-300 transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="text-zinc-500 group-hover:text-zinc-300 font-medium text-sm">LinkedIn Network</span>
             </a>

             <button 
                onClick={() => {
                    const email = "prakhartiwari942@gmail.com";
                    navigator.clipboard.writeText(email);
                    alert("Email copied to clipboard");
                }}
                className="p-6 bg-zinc-900/50 rounded-xl border border-zinc-800 hover:bg-zinc-900 transition-colors flex flex-col items-center gap-3 group w-full"
             >
                <Send size={24} className="text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                <span className="text-zinc-500 group-hover:text-zinc-300 font-medium text-sm">Copy Email</span>
             </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
