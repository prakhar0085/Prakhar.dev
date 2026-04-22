import React, { useState, useEffect } from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiArrowUpRight, FiTerminal, FiActivity, FiShield } from 'react-icons/fi';

const Footer = () => {
  const [systemTime, setSystemTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const protocols = [
    { label: 'CONTROL_PANEL', links: ['Overview', 'Systems', 'Architecture', 'Deployment'] },
    { label: 'TECH_MATRIX', links: ['React_18', 'Tailwind_v3', 'GSAP_3.12', 'Vite_Core'] },
  ];

  const socialIcons = [
    { icon: <FiGithub />, url: 'https://github.com/prakhar0085' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/prakhar-tiwari-693b3b251/' },
    { icon: <FiTwitter />, url: '#' },
    { icon: <FiInstagram />, url: '#' },
  ];

  return (
    <footer className="relative w-full bg-[#020202] pt-20 pb-10 font-mono overflow-hidden border-t-[1px] border-white/5 selection:bg-cyan-500/30">
      
      {/* --- HUD TEXTURE LAYERS --- */}
      {/* Scanline CRT Effect */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.12]" 
           style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)' }}>
      </div>

      {/* Deep Corner Vignette */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none z-0 bg-gradient-to-t from-cyan-950/5 to-transparent"></div>

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative z-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* LOGO MODULE */}
          <div className="space-y-6">
            <div className="flex flex-col group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <span className="text-white text-2xl font-bold tracking-tighter leading-none">
                    prakhar<span className="text-zinc-600 font-normal">.dev</span>
                </span>
                <span className="text-[7px] text-cyan-500/50 mt-2 tracking-[0.4em] font-black uppercase">CORE_TERMINAL_v1.0</span>
            </div>
            
            <p className="text-zinc-600 text-[9px] leading-6 uppercase tracking-[0.2em] font-medium max-w-[260px]">
              ENGINEERING DIGITAL ENVIRONMENTS WITH A FOCUS ON <span className="text-zinc-400">SYSTEM RELIABILITY</span>.
            </p>

            <div className="flex items-center space-x-3">
              <div className="p-1.5 border border-cyan-500/20 bg-cyan-950/5 rounded-sm">
                <FiTerminal className="text-cyan-500 animate-pulse" size={10} />
              </div>
              <span className="text-[8px] text-cyan-400/50 tracking-[0.2em] font-bold uppercase">SECURE_LINK_CONNECTED</span>
            </div>
          </div>

          {/* PROTOCOL MODULES (DYNAMIC) */}
          {protocols.map((section) => (
            <div key={section.label} className="space-y-6">
              <div className="flex items-center space-x-3">
                  <div className="w-1.5 h-[1px] bg-cyan-500"></div>
                  <h4 className="text-[9px] font-black text-zinc-400 tracking-[0.4em] uppercase italic">[_ {section.label} _]</h4>
              </div>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="group flex items-center text-[10px] text-zinc-600 hover:text-white transition-all tracking-[0.2em] uppercase">
                      <span className="text-cyan-600 mr-0 group-hover:mr-2 w-0 group-hover:w-3 transition-all opacity-0 group-hover:opacity-100">{">>"}</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* COMMS MODULE */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
                <div className="w-1.5 h-[1px] bg-cyan-500"></div>
                <h4 className="text-[9px] font-black text-zinc-400 tracking-[0.4em] uppercase italic">[_ BROADCAST _]</h4>
            </div>
            <div className="flex space-x-2">
              {socialIcons.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="w-10 h-10 flex items-center justify-center border border-zinc-800 bg-zinc-900/10 text-zinc-500 hover:text-white hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all outline-none"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            <button
              className="w-full py-4 bg-zinc-900/40 border border-zinc-800 text-zinc-500 hover:text-white hover:border-cyan-500/50 transition-all font-black text-[9px] uppercase tracking-[0.4em] relative group overflow-hidden"
            >
              <div className="absolute inset-0 w-0 h-full bg-cyan-950/10 group-hover:w-full transition-all duration-500"></div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                Initiate_Transmission
                <FiArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* BOTTOM HUD STATUS BAR */}
        <div className="pt-8 border-t-[1px] border-zinc-900 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap gap-12 items-center justify-center lg:justify-start">
            <div className="text-[9px] text-zinc-700 tracking-[0.4em] flex items-center">
              <FiActivity className="mr-3 text-cyan-900" size={14} />
              SYSTEM_CPU: <span className="text-zinc-500 ml-2">STABLE</span>
            </div>
            <div className="text-[9px] text-zinc-700 tracking-[0.4em] flex items-center">
              <FiShield className="mr-3 text-cyan-900" size={14} />
              ENCRYPTION: <span className="text-zinc-500 ml-2">RSA_4096</span>
            </div>
            <div className="text-[9px] text-zinc-700 tracking-[0.4em] flex items-center italic">
              ARCHIVE_INDEX: 404-X-12
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 font-mono">
             <div className="text-[10px] text-zinc-500 tracking-[0.6em] uppercase">
                SERVER_TIME: {systemTime}
             </div>
             <p className="text-[8px] text-zinc-800 tracking-[0.3em] font-bold uppercase transition-colors hover:text-zinc-600 cursor-default">
                &copy; PRAKHAR_TIWARI // ACCESS_GRANTED // 2024
             </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
