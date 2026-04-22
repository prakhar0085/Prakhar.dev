import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlueprintBackground = () => {
    const svgRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        // Configuration
        const gridSize = 30;
        const pageHeight = document.documentElement.scrollHeight;
        const pageWidth = window.innerWidth;

        // Clear previous paths if any
        while(svg.firstChild) svg.removeChild(svg.firstChild);

        // --- 1. FALLING DATA BEAMS (Vertical) ---
        const busPositions = [0.08, 0.5, 0.92]; // Left, Center, Right
        
        busPositions.forEach((pos, i) => {
            const x = Math.floor((pageWidth * pos) / gridSize) * gridSize;
            
            // The permanent "rail" line (very faint)
            const rail = document.createElementNS("http://www.w3.org/2000/svg", "path");
            rail.setAttribute("d", `M ${x} 0 L ${x} ${pageHeight}`);
            rail.setAttribute("stroke", "rgba(34, 211, 238, 0.03)");
            rail.setAttribute("stroke-width", "1");
            svg.appendChild(rail);

            // The "Falling Light" Meteor
            const meteor = document.createElementNS("http://www.w3.org/2000/svg", "rect");
            meteor.setAttribute("x", x - 1);
            meteor.setAttribute("y", -200);
            meteor.setAttribute("width", "2");
            meteor.setAttribute("height", "200");
            meteor.setAttribute("fill", "url(#fallingGradient)");
            svg.appendChild(meteor);

            // Animate it falling based on scroll
            gsap.to(meteor, {
                y: pageHeight + 200,
                ease: "none",
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1, // Smooth fall
                }
            });
        });

        // --- 2. IMPACT BRANCHES (Horizontal) ---
        const sections = ['about', 'skills', 'projects', 'contact'];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const rect = element.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const y = Math.floor((rect.top + scrollTop) / gridSize) * gridSize;

            // Horizontal "Shockwave" line
            const spark = document.createElementNS("http://www.w3.org/2000/svg", "line");
            spark.setAttribute("x1", "0");
            spark.setAttribute("y1", y);
            spark.setAttribute("x2", pageWidth);
            spark.setAttribute("y2", y);
            spark.setAttribute("stroke", "rgba(34, 211, 238, 0.3)");
            spark.setAttribute("stroke-width", "1");
            spark.setAttribute("stroke-dasharray", "10,1000"); // Start as a point
            svg.appendChild(spark);

            gsap.to(spark, {
                strokeDasharray: "1000,0",
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: element,
                    start: "top 70%",
                    onEnter: () => {
                        // Create a bright flash at the start point
                        const flash = document.createElementNS("http://www.w3.org/2000/svg", "circle");
                        flash.setAttribute("cx", pageWidth * 0.08);
                        flash.setAttribute("cy", y);
                        flash.setAttribute("r", "2");
                        flash.setAttribute("fill", "#22d3ee");
                        flash.style.filter = "blur(4px)";
                        svg.appendChild(flash);
                        
                        gsap.to(flash, {
                            r: 20,
                            opacity: 0,
                            duration: 0.8,
                            onComplete: () => flash.remove()
                        });
                    }
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            <svg 
                ref={svgRef}
                className="w-full h-full"
                style={{ height: '100%' }}
            >
                <defs>
                    <linearGradient id="fallingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
                    </linearGradient>
                </defs>
                {/* Visuals injected here */}
            </svg>
        </div>
    );
};

export default BlueprintBackground;
