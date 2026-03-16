export function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-foreground text-background rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                  <circle cx="1" cy="1" r="0.5" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative px-8 py-20 sm:px-16 sm:py-28 lg:px-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center">
              {/* Cross Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-background/20 mb-10">
                <svg
                  viewBox="0 0 24 24"
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                </svg>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                Building Strong Foundations for the Next Generation
              </h2>

              <p className="mt-8 text-xl text-background/70 leading-relaxed max-w-2xl mx-auto">
                Flock exists to help churches build a strong spiritual
                foundation in the next generation. We believe that every child
                deserves the opportunity to know and grow in the love of Jesus
                Christ.
              </p>

              <div className="mt-12 pt-12 border-t border-background/10">
                <blockquote className="text-xl sm:text-2xl italic text-background/90">
                  &ldquo;Train up a child in the way he should go; even when he
                  is old he will not depart from it.&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-background/50 font-semibold uppercase tracking-wider">
                  Proverbs 22:6
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
