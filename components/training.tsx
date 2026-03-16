"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const trainingHighlights = [
  {
    title: "VBS Leadership Training",
    date: "Annual",
    attendees: "500+",
    description: "Comprehensive training for VBS directors and team leaders.",
  },
  {
    title: "Sunday School Teacher Workshop",
    date: "Quarterly",
    attendees: "200+",
    description: "Practical skills for effective classroom teaching.",
  },
  {
    title: "Children's Ministry Conference",
    date: "Annual",
    attendees: "1000+",
    description: "Our flagship event bringing together ministry leaders.",
  },
];

// Placeholder images for the scrolling background
const trainingImages = [
  "/images/training-1.jpg",
  "/images/training-2.jpg",
  "/images/training-3.jpg",
  "/images/training-4.jpg",
  "/images/training-5.jpg",
  "/images/training-6.jpg",
];

function ScrollingBackground() {
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const animate = () => {
      setOffset((prev) => (prev + 0.3) % 100);
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Scrolling image placeholders */}
      <div 
        className="absolute inset-0 flex gap-4"
        style={{ transform: `translateX(-${offset}%)` }}
      >
        {[...trainingImages, ...trainingImages, ...trainingImages].map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-80 h-60 rounded-xl"
            style={{ backgroundColor: `hsl(${(idx * 30) % 360}, 40%, 85%)` }}
          >
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 text-sm">
              {img.split("/").pop()}
            </div>
          </div>
        ))}
      </div>
      {/* 78% overlay */}
      <div className="absolute inset-0 bg-[#1B3A5F]/[0.78]" />
    </div>
  );
}

export function Training() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <ScrollingBackground />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-white">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold uppercase tracking-wider mb-6">
              Training & Equipping
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Equip Your Team for Impact
            </h2>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Effective children&apos;s ministry requires well-trained volunteers and leaders.
              Our training programs equip your team with practical skills, biblical foundations,
              and proven strategies.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#FFC107]">50+</div>
                <div className="text-sm text-white/70 mt-1">Training Events</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#FFC107]">5000+</div>
                <div className="text-sm text-white/70 mt-1">Leaders Trained</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#FFC107]">15+</div>
                <div className="text-sm text-white/70 mt-1">Years Experience</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/training"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FFC107] text-[#1B3A5F] font-semibold rounded-full hover:bg-[#FFC107]/90 transition-colors"
              >
                View All Training
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/training#upcoming"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Training Cards */}
          <div className="space-y-4">
            {trainingHighlights.map((training) => (
              <div
                key={training.title}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/15 transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {training.title}
                    </h3>
                    <p className="text-sm text-white/70">
                      {training.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#FFC107]">
                      {training.attendees}
                    </div>
                    <div className="text-xs text-white/60">
                      {training.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <Link
              href="/training"
              className="block bg-white/5 border-2 border-dashed border-white/20 rounded-2xl p-6 text-center hover:border-white/40 transition-colors group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <span className="font-semibold text-white/80">See All Training Programs</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
