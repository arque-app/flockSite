"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Catching at VBS",
    description:
      "Engaging songs, action videos, and easy-to-follow programs that attract children and introduce them to the gospel message through fun, memorable experiences.",
    features: [
      "High-energy worship songs",
      "Interactive action videos",
      "Simple gospel presentations",
      "Engaging group activities",
    ],
    color: "#00B5AD",
    images: [
      "/images/vbs-1.jpg",
      "/images/vbs-2.jpg",
      "/images/vbs-3.jpg",
      "/images/vbs-4.jpg",
    ],
  },
  {
    number: "02",
    title: "Nurturing at Sunday School",
    description:
      "Structured lessons and teaching materials that help children grow in biblical understanding and character development throughout the year.",
    features: [
      "Age-appropriate curriculum",
      "Character-building lessons",
      "Bible memory programs",
      "Teacher training resources",
    ],
    color: "#8B5CF6",
    images: [
      "/images/ss-1.jpg",
      "/images/ss-2.jpg",
      "/images/ss-3.jpg",
      "/images/ss-4.jpg",
    ],
  },
  {
    number: "03",
    title: "Staying Connected",
    description:
      "A mobile app where children can watch songs and action videos, helping them stay connected to the gospel message even outside of church.",
    features: [
      "On-demand song library",
      "Action video tutorials",
      "Weekly devotionals",
      "Family discussion guides",
    ],
    color: "#FF5722",
    images: [
      "/images/connected-1.jpg",
      "/images/connected-2.jpg",
      "/images/connected-3.jpg",
      "/images/connected-4.jpg",
    ],
  },
];

function ImageCarousel({ images, color, title }: { images: string[]; color: string; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [images.length]);

  return (
    <div className="relative aspect-video lg:aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
      {/* Placeholder backgrounds until real images are added */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: `${color}15` }}
      >
        <div className="text-center p-4 lg:p-8">
          <div
            className="text-4xl lg:text-6xl font-bold mb-2"
            style={{ color: `${color}50` }}
          >
            {currentIndex + 1}/{images.length}
          </div>
          <p className="text-xs lg:text-sm text-muted-foreground">{title} Images</p>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all ${
              idx === currentIndex ? "w-4" : "w-1.5 bg-white/50"
            }`}
            style={{
              backgroundColor: idx === currentIndex ? color : undefined,
            }}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00B5AD]/10 text-[#00B5AD] text-sm font-semibold uppercase tracking-wider mb-4">
            Our Approach
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            The Flock Ministry Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A comprehensive approach to children&apos;s ministry that catches,
            nurtures, and keeps children connected to their faith.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 lg:space-y-20">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-6 lg:gap-12 items-center`}
            >
              {/* Content Card */}
              <div className="flex-1 w-full">
                <div className="bg-card rounded-2xl border border-border p-5 lg:p-8">
                  {/* Header with number */}
                  <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                    <span
                      className="text-3xl lg:text-5xl font-bold"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-xl lg:text-3xl font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-5 lg:mb-6 text-sm lg:text-base">
                    {step.description}
                  </p>

                  {/* Features as pills */}
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 lg:px-4 lg:py-2 text-xs lg:text-sm font-medium rounded-full transition-colors"
                        style={{
                          backgroundColor: `${step.color}15`,
                          color: step.color,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Carousel - Compact on mobile */}
              <div className="flex-1 w-full max-w-sm lg:max-w-none">
                <ImageCarousel images={step.images} color={step.color} title={step.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
