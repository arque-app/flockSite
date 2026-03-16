export function Mission() {
  return (
    <section id="mission" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="10"
                  height="10"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-28">
            <div className="max-w-3xl mx-auto text-center">
              {/* Cross Symbol */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/20 mb-8">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                </svg>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary-foreground text-balance">
                Building Strong Foundations for the Next Generation
              </h2>

              <p className="mt-6 text-lg sm:text-xl text-primary-foreground/80 leading-relaxed text-pretty">
                Flock exists to help churches build a strong spiritual
                foundation in the next generation. We believe that every child
                deserves the opportunity to know and grow in the love of Jesus
                Christ.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <blockquote className="text-primary-foreground/90 italic">
                  &ldquo;Train up a child in the way he should go; even when he
                  is old he will not depart from it.&rdquo;
                </blockquote>
              </div>

              <p className="mt-4 text-sm text-primary-foreground/60">
                Proverbs 22:6
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
