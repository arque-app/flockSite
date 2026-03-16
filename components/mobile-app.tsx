const features = [
  {
    title: "Watch Action Videos",
    description: "Learn motions and choreography to your favorite songs",
  },
  {
    title: "Listen to Songs",
    description: "Stream the full library of Flock worship songs",
  },
  {
    title: "Daily Devotionals",
    description: "Short, engaging devotions designed for young hearts",
  },
  {
    title: "Stay Connected",
    description: "Reminders and updates from your church community",
  },
];

export function MobileApp() {
  return (
    <section id="app" className="py-24 lg:py-32 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Phone Mockup */}
          <div className="flex-1 w-full max-w-sm lg:max-w-none">
            <div className="relative mx-auto w-64 sm:w-72">
              {/* Phone Frame */}
              <div className="relative bg-foreground rounded-[3rem] p-3 shadow-2xl">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-b-2xl" />
                <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* App Screen Content */}
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex items-center justify-between px-6 py-3 text-xs text-muted-foreground">
                      <span>9:41</span>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-2 border border-muted-foreground rounded-sm">
                          <div className="w-3/4 h-full bg-accent rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* App Header */}
                    <div className="px-5 py-4">
                      <h3 className="text-xl font-bold">FLOCK</h3>
                      <p className="text-xs text-muted-foreground">
                        Good morning!
                      </p>
                    </div>

                    {/* Featured Song */}
                    <div className="mx-4 bg-accent rounded-2xl p-5 text-accent-foreground">
                      <p className="text-xs opacity-80 mb-1">Now Playing</p>
                      <p className="font-bold">Jesus Loves Me</p>
                      <div className="mt-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-accent-foreground/20 flex items-center justify-center">
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <div className="flex-1 h-1 bg-accent-foreground/30 rounded-full">
                          <div className="w-1/3 h-full bg-accent-foreground rounded-full" />
                        </div>
                      </div>
                    </div>

                    {/* Song List */}
                    <div className="flex-1 px-4 py-5 space-y-3">
                      {["Amazing Grace", "This Little Light", "Deep and Wide"].map(
                        (song, i) => (
                          <div
                            key={song}
                            className="flex items-center gap-3 p-3 rounded-xl bg-secondary"
                          >
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                              <svg className="w-5 h-5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                              </svg>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium truncate">
                                {song}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {2 + i}:30
                              </p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Mobile App
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Faith at Their Fingertips
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              The Flock mobile app allows children to watch songs, learn
              actions, and stay connected with the gospel message anytime,
              anywhere.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full text-sm font-semibold hover:bg-foreground/90 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
