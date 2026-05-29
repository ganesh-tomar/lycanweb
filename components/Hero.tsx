"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "motion/react";

export default function Hero({ data }: { data?: any }) {
  const title = data?.title || "";
  const subtitle = data?.subtitle || "";
  const buttons = data?.buttons || [];
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse tracking vector for Prey & Predator physics
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 130
    };

    // Initialize drifting centers for Pack Constellations
    const packCenters: Array<{
      x: number;
      y: number;
      speedX: number;
      speedY: number;
    }> = [];

    for (let i = 0; i < 7; i++) {
      packCenters.push({
        x: Math.random() * width,
        y: Math.random() * height,
        speedX: (Math.random() - 0.5) * 0.2, // Drifting speed of pack groups
        speedY: (Math.random() - 0.5) * 0.2,
      });
    }

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      isPackMember: boolean;
      packIndex: number;
      orbitRadius: number;
      orbitAngle: number;
      orbitSpeed: number;
    }> = [];

    // Initialize 150 particles (50% Pack Constellations, 50% Scattered Solo Hunters)
    for (let i = 0; i < 150; i++) {
      const isPackMember = i < 75; 
      const packIndex = isPackMember ? Math.floor(Math.random() * 7) : -1;
      const orbitRadius = isPackMember ? Math.random() * 40 + 15 : 0; // Constellation group radius (15px to 55px)
      const orbitAngle = isPackMember ? Math.random() * Math.PI * 2 : 0;
      const orbitSpeed = isPackMember ? (Math.random() * 0.008 + 0.003) * (Math.random() > 0.5 ? 1 : -1) : 0;

      const startX = isPackMember ? packCenters[packIndex].x + Math.cos(orbitAngle) * orbitRadius : Math.random() * width;
      const startY = isPackMember ? packCenters[packIndex].y + Math.sin(orbitAngle) * orbitRadius : Math.random() * height;

      particles.push({
        x: startX,
        y: startY,
        size: Math.random() * 2.8 + 1.2, // 1.2px to 4.0px size range for excellent premium visibility
        speedX: isPackMember ? 0 : (Math.random() - 0.5) * 0.35,
        speedY: isPackMember ? 0 : (Math.random() - 0.5) * 0.35,
        opacity: Math.random() * 0.5 + 0.3, // Brighter initial opacities
        fadeSpeed: (Math.random() * 0.003) + 0.001,
        isPackMember,
        packIndex,
        orbitRadius,
        orbitAngle,
        orbitSpeed,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Luxury dark vignette radial gradient base
      const bgGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        20,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.8
      );
      bgGrad.addColorStop(0, "#080512");
      bgGrad.addColorStop(0.6, "#020106");
      bgGrad.addColorStop(1, "#000000");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Update Pack Group Drifting Centers
      packCenters.forEach((center) => {
        center.x += center.speedX;
        center.y += center.speedY;

        // Wrap pack groups around window boundaries
        if (center.x < 0) center.x = width;
        if (center.x > width) center.x = 0;
        if (center.y < 0) center.y = height;
        if (center.y > height) center.y = 0;
      });

      // Render & update floating particles
      particles.forEach((p) => {
        let targetX = p.x;
        let targetY = p.y;

        if (p.isPackMember) {
          // Revolve orbiting pack particles around their drifting group centers
          p.orbitAngle += p.orbitSpeed;
          const center = packCenters[p.packIndex];
          targetX = center.x + Math.cos(p.orbitAngle) * p.orbitRadius;
          targetY = center.y + Math.sin(p.orbitAngle) * p.orbitRadius;
        }

        // Prey & Predator physics calculation
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          // Prey flees predator (particles scatter in panic)
          const force = (mouse.radius - distance) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          
          // Move opposite of cursor with force acceleration
          const pushX = Math.cos(angle) * force * 2.2;
          const pushY = Math.sin(angle) * force * 2.2;
          
          p.x -= pushX;
          p.y -= pushY;
          
          // Panic flash shimmer (intense glow near cursor)
          p.opacity = Math.min(0.95, p.opacity + 0.035);
        } else {
          // Safe state: resume normal trajectory
          if (p.isPackMember) {
            // Orbiting pack members slowly ease and regroup back into their constellation
            p.x += (targetX - p.x) * 0.06;
            p.y += (targetY - p.y) * 0.06;
          } else {
            // Scattered solo hunters drift in calm random paths
            p.x += p.speedX;
            p.y += p.speedY;
          }
        }

        // Reset positions at screen boundaries (wrap-around)
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Breath/Shimmer opacity cycle
        p.opacity += p.fadeSpeed;
        if (p.opacity > 0.75 || p.opacity < 0.25) {
          p.fadeSpeed = -p.fadeSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(139, 92, 246, ${Math.max(0, p.opacity)})`;
        ctx.shadowBlur = 10; // Boost shadow blur for intense light aura
        ctx.shadowColor = "#8b5cf6";
        ctx.fill();
      });

      // Reset performance shadow properties
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Safe split title string into clean words, preserving dynamic highlighting
  const cleanTitle = title.replace(/<[^>]*>/g, " ");
  const wordsArray = cleanTitle.split(/\s+/).filter(Boolean);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 110,
        damping: 14,
      },
    },
  };

  return (
    <section className="hero-banner min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Looping particles canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Moving luxury radial noise overlay */}
      <div className="absolute inset-0 bg-radial-to-b from-transparent via-black/20 to-black pointer-events-none z-[1]" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Headline Split Animator */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8 font-black uppercase Oswald font-semibold"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {wordsArray.map((word: string, i: number) => {
              const highlightWords = ["beast", "unleash", "shadow", "logs", "hunt"];
              const isHighlight = highlightWords.includes(word.toLowerCase());
              return (
                <motion.span
                  key={i}
                  className={`inline-block mr-4 md:mr-6 ${isHighlight ? "text-shimmer font-extrabold" : "text-white"}`}
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
          >
            {buttons.map((btnItem: any, i: number) => {
              const btn = btnItem?.button;
              if (!btn?.buttonText) return null;

              const variant = (typeof btn.buttonStyle === 'string' ? btn.buttonStyle.toLowerCase() : null) || (i === 0 ? "primary" : "secondary");

              return (
                <Button
                  key={i}
                  href={btn.url || "#"}
                  variant={variant as "primary" | "secondary" | "link"}
                  className="hover:scale-105 transition-transform"
                >
                  {btn.buttonText}
                </Button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
