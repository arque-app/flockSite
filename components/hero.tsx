"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// Abstract shapes configuration
const shapes = [
  { size: 80, color: "#5ABCB9", opacity: 0.15, speed: 0.5, startX: 10, startY: 20 },
  { size: 120, color: "#8DC63F", opacity: 0.12, speed: 0.3, startX: 80, startY: 60 },
  { size: 60, color: "#F28B82", opacity: 0.18, speed: 0.7, startX: 70, startY: 15 },
  { size: 100, color: "#FF6B35", opacity: 0.1, speed: 0.4, startX: 20, startY: 70 },
  { size: 90, color: "#FFD93D", opacity: 0.14, speed: 0.6, startX: 50, startY: 40 },
  { size: 70, color: "#9B8BB4", opacity: 0.12, speed: 0.45, startX: 85, startY: 80 },
];

function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawShape = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.globalAlpha = opacity;

      // Draw soft blob shape
      ctx.beginPath();
      const points = 6;
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const wobble = Math.sin(angle * 3 + rotation * 2) * (size * 0.15);
        const r = size / 2 + wobble;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }
      ctx.closePath();

      // Gradient fill
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, `${color}00`);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      timeRef.current += 0.008;

      shapes.forEach((shape, i) => {
        const x = (shape.startX / 100) * canvas.width + Math.sin(timeRef.current * shape.speed + i) * 30;
        const y = (shape.startY / 100) * canvas.height + Math.cos(timeRef.current * shape.speed + i * 0.5) * 25;
        const rotation = timeRef.current * shape.speed * 0.5;

        drawShape(x, y, shape.size, shape.color, shape.opacity, rotation);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-32 lg:pt-36 pb-16 px-6 bg-background relative overflow-hidden">
      <HeroBackground />
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-10">
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            Building Strong Foundations for the Next Generation Starting from Kids
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-primary text-balance">
          <span className="block">Catching at VBS.</span>
          <span className="block text-muted-foreground">Nurturing at Sunday School.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          Complete ministry resources that help churches reach children through engaging VBS 
          programs and nurture them through structured Sunday School discipleship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-[#FF6B35] text-white font-semibold rounded-full hover:bg-[#FF6B35]/90 transition-colors text-base shadow-lg shadow-[#FF6B35]/25"
          >
            Get Started
          </Link>
          <Link
            href="#approach"
            className="px-8 py-4 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 text-base"
          >
            Learn More
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
