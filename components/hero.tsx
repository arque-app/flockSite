"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

// Animated shapes that emphasize catching (nets/circles) and nurturing (growing/organic shapes)
const shapes = [
  // "Catching" shapes - nets, circles representing VBS gathering
  { type: "net", size: 180, color: "#00B5AD", opacity: 0.35, speed: 0.3, startX: 15, startY: 25 },
  { type: "circle", size: 120, color: "#FF5722", opacity: 0.3, speed: 0.4, startX: 75, startY: 20 },
  { type: "net", size: 140, color: "#7CB518", opacity: 0.25, speed: 0.35, startX: 85, startY: 65 },
  // "Nurturing" shapes - organic, growing forms for Sunday School
  { type: "organic", size: 160, color: "#8B5CF6", opacity: 0.28, speed: 0.25, startX: 20, startY: 70 },
  { type: "organic", size: 100, color: "#FFC107", opacity: 0.35, speed: 0.45, startX: 55, startY: 45 },
  { type: "circle", size: 90, color: "#FF6B6B", opacity: 0.3, speed: 0.5, startX: 40, startY: 80 },
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
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    const drawNet = (
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

      // Draw a net-like catching pattern
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      
      // Outer arc (like a fishing net opening)
      ctx.beginPath();
      ctx.arc(0, 0, size / 2, -Math.PI * 0.8, Math.PI * 0.8, false);
      ctx.stroke();
      
      // Inner concentric arcs
      for (let i = 1; i <= 3; i++) {
        ctx.beginPath();
        ctx.arc(0, 0, (size / 2) * (1 - i * 0.25), -Math.PI * 0.7, Math.PI * 0.7, false);
        ctx.stroke();
      }
      
      // Radial lines
      for (let i = -3; i <= 3; i++) {
        const angle = (i / 4) * Math.PI * 0.8;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * size * 0.15, Math.sin(angle) * size * 0.15);
        ctx.lineTo(Math.cos(angle) * size * 0.5, Math.sin(angle) * size * 0.5);
        ctx.stroke();
      }

      ctx.restore();
    };

    const drawOrganic = (
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

      // Draw organic nurturing shape (like a growing plant/heart)
      ctx.beginPath();
      const points = 8;
      for (let i = 0; i <= points * 2; i++) {
        const angle = (i / (points * 2)) * Math.PI * 2;
        const wobble = Math.sin(angle * 4 + rotation * 3) * (size * 0.2);
        const pulse = Math.sin(rotation * 2) * (size * 0.05);
        const r = size / 2 + wobble + pulse;
        const px = Math.cos(angle) * r;
        const py = Math.sin(angle) * r;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.quadraticCurveTo(
            Math.cos(angle - 0.1) * (r + 10),
            Math.sin(angle - 0.1) * (r + 10),
            px,
            py
          );
        }
      }
      ctx.closePath();

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size / 2);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.7, color);
      gradient.addColorStop(1, `${color}00`);
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.restore();
    };

    const drawCircle = (
      x: number,
      y: number,
      size: number,
      color: string,
      opacity: number,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.globalAlpha = opacity;

      // Pulsing circle with ring
      const pulse = Math.sin(rotation * 3) * 0.1 + 1;
      
      // Outer ring
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(0, 0, (size / 2) * pulse, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inner filled circle
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, (size / 3) * pulse);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, `${color}50`);
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, (size / 3) * pulse, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      timeRef.current += 0.012;

      shapes.forEach((shape, i) => {
        const x = (shape.startX / 100) * width + Math.sin(timeRef.current * shape.speed + i * 1.5) * 50;
        const y = (shape.startY / 100) * height + Math.cos(timeRef.current * shape.speed * 0.8 + i) * 40;
        const rotation = timeRef.current * shape.speed;

        if (shape.type === "net") {
          drawNet(x, y, shape.size, shape.color, shape.opacity, rotation);
        } else if (shape.type === "organic") {
          drawOrganic(x, y, shape.size, shape.color, shape.opacity, rotation);
        } else {
          drawCircle(x, y, shape.size, shape.color, shape.opacity, rotation);
        }
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
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/80 backdrop-blur-sm mb-10">
          <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            Building Strong Foundations for the Next Generation Starting from Kids
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-primary text-balance">
          <span className="block">
            <span className="text-[#00B5AD]">Catching</span> at VBS.
          </span>
          <span className="block">
            <span className="text-[#8B5CF6]">Nurturing</span> at Sunday School.
          </span>
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
            className="px-8 py-4 bg-[#FF5722] text-white font-semibold rounded-full hover:bg-[#FF5722]/90 transition-colors text-base shadow-lg shadow-[#FF5722]/30"
          >
            Get Started
          </Link>
          <Link
            href="#approach"
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-colors flex items-center gap-2 text-base"
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
