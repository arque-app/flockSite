import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm font-medium text-foreground mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Ministry Platform for Churches
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight text-balance">
            Catching at VBS,
            <br />
            <span className="text-primary">Nurturing at Sunday School</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
            Flock helps churches reach children through engaging VBS programs
            and nurture them through structured Sunday School discipleship.
            Build the next generation in faith.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-base font-medium hover:bg-primary/90 transition-all"
            >
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground rounded-full text-base font-medium hover:bg-secondary transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by churches across the nation
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
              {["500+ Churches", "10,000+ Children", "50+ States"].map(
                (stat) => (
                  <div key={stat} className="text-center">
                    <span className="text-lg font-semibold text-foreground">
                      {stat.split(" ")[0]}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      {stat.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
