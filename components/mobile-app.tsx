import Link from "next/link";

const apps = [
  {
    id: "kids",
    name: "Flock Kids",
    tagline: "For Kids, Parents & Pastors",
    description:
      "Watch songs, learn actions, and stay connected with the gospel message anytime, anywhere.",
    features: ["Action Videos", "Worship Songs", "Daily Devotionals", "Church Updates"],
    color: "#5ABCB9",
  },
  {
    id: "missionaries",
    name: "Flock Ministries",
    tagline: "For Missionaries & Evangelists",
    description:
      "Complete resources and training content to effectively evangelize and disciple children.",
    features: ["Evangelism Tools", "Training Videos", "Resource Library", "Ministry Guides"],
    color: "#FF6B35",
  },
];

export function MobileApp() {
  return (
    <section id="app" className="py-24 lg:py-32 bg-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-[#5ABCB9] uppercase tracking-wider">
            Mobile Apps
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary text-balance">
            Faith at Their Fingertips
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Two powerful apps designed for different needs - one for kids and families,
            another for missionaries and ministry workers.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app) => (
            <div
              key={app.id}
              className="bg-card border border-border rounded-3xl p-8 hover:shadow-lg transition-shadow"
            >
              {/* App Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3"
                    style={{ backgroundColor: app.color }}
                  >
                    {app.tagline}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-primary">
                    {app.name}
                  </h3>
                </div>
                {/* App Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${app.color}20` }}
                >
                  {app.id === "kids" ? (
                    <svg className="w-7 h-7" style={{ color: app.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                    </svg>
                  ) : (
                    <svg className="w-7 h-7" style={{ color: app.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {app.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-8">
                {app.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1.5 text-sm font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/flock-ministries"
                className="inline-flex items-center gap-2 font-semibold transition-colors"
                style={{ color: app.color }}
              >
                Know More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Download Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            App Store
          </button>
          <button
            type="button"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
            </svg>
            Google Play
          </button>
        </div>
      </div>
    </section>
  );
}
