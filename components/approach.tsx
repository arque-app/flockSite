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
    color: "#5ABCB9",
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
    color: "#8DC63F",
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
    color: "#F28B82",
    images: [
      "/images/connected-1.jpg",
      "/images/connected-2.jpg",
      "/images/connected-3.jpg",
      "/images/connected-4.jpg",
    ],
  },
];

function ImageCarousel({ images, color }: { images: string[]; color: string }) {
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
    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-muted">
      {/* Placeholder backgrounds until real images are added */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ backgroundColor: `${color}15` }}
      >
        <div className="text-center p-8">
          <div
            className="text-6xl font-bold mb-2"
            style={{ color: `${color}40` }}
          >
            {currentIndex + 1}/{images.length}
          </div>
          <p className="text-sm text-muted-foreground">Add images to {images[0]}</p>
        </div>
      </div>
      
      {/* Carousel indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === currentIndex
                ? "w-6"
                : "bg-white/50"
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
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-[#5ABCB9] uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            The Flock Ministry Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A comprehensive approach to children&apos;s ministry that catches,
            nurtures, and keeps children connected to their faith.
          </p>
        </div>

        {/* Steps - Card layout on all screens */}
        <div className="space-y-8 lg:space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-8 lg:gap-12 items-stretch`}
            >
              {/* Content Card */}
              <div className="flex-1">
                <div className="h-full p-6 lg:p-8 rounded-3xl border border-border bg-card">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-5">
                    <span
                      className="text-4xl lg:text-5xl font-bold"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Features as pills - same on mobile and desktop */}
                  <div className="flex flex-wrap gap-2">
                    {step.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-4 py-2 text-sm font-medium rounded-full transition-colors"
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

              {/* Image Carousel */}
              <div className="flex-1">
                <ImageCarousel images={step.images} color={step.color} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
