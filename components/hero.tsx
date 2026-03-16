import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-10">
          <span className="w-2 h-2 rounded-full bg-[#5ABCB9] animate-pulse" />
          <span className="text-sm text-muted-foreground font-medium">
            Raising the next generation in faith
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-primary">
          <span className="block">Catching at VBS.</span>
          <span className="block text-muted-foreground">Nurturing at Sunday School.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Complete ministry resources that help churches reach children through engaging VBS 
          programs and nurture them through structured Sunday School discipleship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors text-base"
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

        {/* Stats */}
        <div className="mt-20 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground mt-1">Churches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">Children Reached</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground mt-1">Volunteers Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground mt-1">Years of Ministry</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
