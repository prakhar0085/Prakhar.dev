import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, Cpu, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentFrameIdx, setCurrentFrameIdx] = useState(0);
  const glowRef = useRef(null);
  const buttonRef = useRef(null);
  
  const frameCount = 76; 
  const currentFrame = (index) => `/mypic1/ezgif-frame-${((index * 2) + 1).toString().padStart(3, '0')}.png`;
  
  const imagesRef = useRef([]);
  const seqRef = useRef({ frame: 0 });

  useEffect(() => {
    let loadedCount = 0;
    const loadImages = async () => {
        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            try {
                await img.decode();
                imagesRef.current[i] = img;
            } catch (e) {
                console.error("Failed to decode frame", i);
            }
            loadedCount++;
            setLoadingProgress(Math.floor((loadedCount / frameCount) * 100));
            if (loadedCount === frameCount) setLoaded(true);
        }
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    
    const setCanvasSize = () => {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        ctx.scale(dpr, dpr);
        render();
    };

    const render = () => {
        if (!canvasRef.current || !imagesRef.current.length) return;
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        ctx.clearRect(0, 0, width, height);
        
        let frameIdx = Math.round(seqRef.current.frame);
        if (frameIdx >= frameCount) frameIdx = frameCount - 1;
        
        const img = imagesRef.current[frameIdx];
        if (img && img.complete) {
            const scale = Math.max(width / img.width, height / img.height) * 0.9;
            const x = (width - img.width * scale) / 2;
            const y = (height - img.height * scale) / 2 + (height * 0.18);
            
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
        setCurrentFrameIdx(frameIdx);
    };

    window.addEventListener('resize', setCanvasSize);
    setCanvasSize();

    render();
 // Draw initial 0th frame

    // --- 1. SYSTEM BOOT OPENING EXPERIENCE (Runs on Mount) ---
    const bootTl = gsap.timeline({ delay: 0.5 });

    // Boot visuals
    bootTl.fromTo('.noise-overlay', { opacity: 0 }, { opacity: 0.15, duration: 1, ease: "none" }, 0);
    bootTl.fromTo('.center-glow', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power1.inOut" }, 0.2);
    
    // Navbar slide in
    bootTl.fromTo('nav', { y: -50, opacity: 0, filter: 'blur(10px)' }, { y: 0, opacity: 1, filter: 'blur(0)', duration: 1, ease: "power2.out" }, 0.5);

    // Initial Face Reveal
    bootTl.fromTo(canvas, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 0.8);
    // Slowly play initial frames immediately
    bootTl.to(seqRef.current, { frame: 10, snap: "frame", duration: 1.5, ease: "power1.inOut", onUpdate: render }, 0.8);

    // HUD Elements sequence
    bootTl.fromTo('.hud-element', { opacity: 0 }, { opacity: 1, duration: 0.1, stagger: 0.1, ease: "none" }, 1.2);

    // Social Icons Bottom Left
    bootTl.fromTo('.social-icon', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.2, stagger: 0.1, ease: "none" }, 2.0);

    // --- 2. MAIN SCROLL CONTINUATION ---
    // User scroll takes over from whatever frame bootTl left off at, up to 239.
    const tlScroll = gsap.timeline({
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=4000",
            scrub: 1, // Smoother, more organic scroll physics
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
        }
    });

    tlScroll.to(seqRef.current, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        duration: 1, 
        onUpdate: render
    });

    tlScroll.fromTo('.portfolio-ui', 
        { opacity: 1 },
        { opacity: 0, duration: 0.1, ease: "none" }, 
        0.9
    );
    
    tlScroll.fromTo(canvas, 
        { opacity: 1 },
        { opacity: 0, filter: "blur(10px)", duration: 0.1, ease: "none" }, 
        0.9
    );

    // --- 3. INTERACTIVE MOUSE EFFECTS ---
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        
        // 1. Move the subtle spotlight glow
        if (glowRef.current) {
            gsap.to(glowRef.current, {
                left: clientX,
                top: clientY,
                duration: 0.6,
                ease: "power2.out"
            });
        }

        // 2. Parallax elements
        gsap.to('.parallax-element', {
            x: (clientX - window.innerWidth / 2) * 0.015,
            y: (clientY - window.innerHeight / 2) * 0.015,
            duration: 1.2,
            ease: "power3.out"
        });

        // 3. Magnetic Button Logic
        if (buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const btnX = rect.left + rect.width / 2;
            const btnY = rect.top + rect.height / 2;
            const dist = Math.hypot(clientX - btnX, clientY - btnY);

            if (dist < 100) {
                gsap.to(buttonRef.current, {
                    x: (clientX - btnX) * 0.4,
                    y: (clientY - btnY) * 0.4,
                    scale: 1.05,
                    duration: 0.4,
                    ease: "power2.out"
                });
            } else {
                gsap.to(buttonRef.current, {
                    x: 0,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
        ScrollTrigger.getAll().forEach(t => t.kill());
        window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [loaded]);

  const titleText = "PRAKHAR TIWARI";

  // --- SUB-COMPONENTS ---
  const GlitchText = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    
    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(prev => 
                text.split("").map((letter, index) => {
                    if(index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );
            if(iteration >= text.length) clearInterval(interval);
            iteration += 1 / 3;
        }, 30);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{displayText}</span>;
  };

  const HUDStats = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute bottom-10 right-10 z-[60] flex flex-col items-end gap-4 pointer-events-none font-mono">
            <div className="flex flex-col items-end space-y-1">
                <div className="flex items-center gap-2 text-[10px] text-cyan-500/60 uppercase tracking-widest">
                    <Activity size={10} />
                    <span>System Latency: 12ms</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-cyan-500/60 uppercase tracking-widest">
                    <Cpu size={10} />
                    <span>Core Load: 34%</span>
                </div>
            </div>
            <div className="h-[1px] w-32 bg-cyan-500/20" />
            <div className="flex items-center gap-3">
                <div className="text-[11px] text-white/50">{time}</div>
                <div className="px-2 py-0.5 border border-cyan-500/40 text-cyan-400 text-[9px] uppercase tracking-tighter">Live_Sync</div>
            </div>
        </div>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#020202] overflow-hidden flex items-center justify-center font-sans tracking-wide">
        
        {!loaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50 bg-[#020202]">
                <div className="text-gray-500 font-mono text-xs uppercase tracking-[0.3em] mb-4">&gt; INITIALIZING_CORE_SYSTEM</div>
                <div className="w-64 h-[1px] bg-white/10 overflow-hidden">
                    <div className="h-full bg-blue-500 transition-all duration-300 ease-out" style={{ width: `${loadingProgress}%` }}></div>
                </div>
            </div>
        )}

        <canvas 
            ref={canvasRef} 
            className="absolute inset-0 w-full h-full z-10 pointer-events-none transition-opacity duration-1000"
            style={{ 
                filter: 'contrast(1.1) saturate(1.1) brightness(1.02) drop-shadow(0 0 30px rgba(34,211,238,0.1))',
                imageRendering: 'auto'
            }}
        />

        {/* --- INTERACTIVE MOUSE GLOW --- */}
        <div 
            ref={glowRef}
            className="absolute -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-[5] mix-blend-screen"
        />

        <div className="portfolio-ui noise-overlay absolute inset-0 z-0 pointer-events-none mix-blend-overlay opacity-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        <div className="portfolio-ui center-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-cyan-500/20 blur-[150px] rounded-full pointer-events-none opacity-0 mix-blend-screen z-[1]"></div>

        <div className="portfolio-ui absolute top-16 left-4 md:top-24 md:left-12 z-[60] font-mono text-[9px] text-cyan-400 tracking-[0.2em] flex flex-col space-y-2 opacity-70 pointer-events-none uppercase">
            <div className="flex items-center gap-2 hud-element opacity-0">
                <ShieldCheck size={12} className="text-cyan-500" />
                <span>Protocol: Secured</span>
            </div>
            <span className="hud-element opacity-0">&gt; Connection: Established</span>
            <span className="hud-element opacity-0">&gt; Kernel_v.04.16.24</span>
        </div>

        <HUDStats />

        {/* --- CANVAS --- */}
        <div className="absolute inset-0 z-10 overflow-hidden bg-[#020202]">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-cover opacity-0 scale-95 contrast-[1.1] transition-opacity duration-1000"
            />
            {/* Subtle Center Glow for Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
            
            {/* Hard Vignette to focus the eye */}
            <div className="absolute inset-0 z-20 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,2,2,0.8)_80%,#020202_100%)]"></div>
        </div>

        {/* --- PORTFOLIO TEXT OVERLAY --- */}
        <AnimatePresence>
            {loaded && (
                <div className="portfolio-ui absolute inset-0 z-[50] pointer-events-none flex flex-col md:flex-row justify-center md:justify-between items-center px-8 md:px-[4%] lg:px-[6%] pt-32 pb-16 md:pt-0 pb-0 gap-12 lg:gap-0">
                    
                    {/* LEFT SIDE: Name and Role */}
                    <div className="w-full md:w-[30%] flex flex-col items-center md:items-start text-center md:text-left">
                        {currentFrameIdx >= 30 && (
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="mb-4"
                            >
                                <h1 className="parallax-element text-3xl md:text-4xl lg:text-7xl font-sans font-bold text-white tracking-[0.1em] uppercase leading-none" style={{ textShadow: "0 0 15px rgba(34,211,238,0.4), 0 0 30px rgba(34,211,238,0.15)" }}>
                                    <GlitchText text={titleText} />
                                </h1>
                            </motion.div>
                        )}
                        
                        {currentFrameIdx >= 50 && (
                            <motion.div 
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                className="relative inline-block"
                            >
                                <h2 className="text-xs md:text-sm font-mono text-cyan-300 tracking-[0.2em] uppercase pb-2">
                                    Full Stack Developer
                                </h2>
                                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400/60 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                            </motion.div>
                        )}
                    </div>

                    {/* RIGHT SIDE: DESCRIPTION & CTA */}
                    <div className="w-full md:w-[40%] flex flex-col items-center md:items-end text-center md:text-right gap-8">
                        
                        <div className="flex flex-col gap-6">
                            {currentFrameIdx >= 40 && (
                                <motion.div 
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="max-w-xs ml-auto"
                                >
                                    <p className="text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed font-sans max-w-sm tracking-wide">
                                    Architecting <span className="text-zinc-100">high-performance</span> digital experiences through <span className="text-zinc-100 font-medium">clean code</span> and immersive <span className="text-cyan-400/80">3D interfaces</span>.
                                </p>
                                </motion.div>
                            )}

                            {currentFrameIdx >= 60 && (
                                <motion.div 
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                    className="pointer-events-auto"
                                >
                                    <div 
                                        ref={buttonRef}
                                        className="inline-flex items-center px-8 py-3 border border-cyan-400/50 bg-black/60 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all cursor-pointer rounded-sm backdrop-blur-md group shadow-[0_0_20px_rgba(34,211,238,0.15)] pointer-events-auto active:scale-95"
                                        onClick={() => {
                                            const projectsSection = document.getElementById('projects');
                                            if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        <span className="text-cyan-100 font-mono tracking-widest uppercase text-xs group-hover:text-cyan-400 transition-colors">Explore Work</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    </div>
  );
}
