import { Play, Music, Heart, Bell } from "lucide-react";

const features = [
  {
    icon: Play,
    title: "Watch Action Videos",
    description: "Learn motions and choreography to your favorite songs",
  },
  {
    icon: Music,
    title: "Listen to Songs",
    description: "Stream the full library of Flock worship songs",
  },
  {
    icon: Heart,
    title: "Daily Devotionals",
    description: "Short, engaging devotions designed for young hearts",
  },
  {
    icon: Bell,
    title: "Stay Connected",
    description: "Reminders and updates from your church community",
  },
];

export function MobileApp() {
  return (
    <section id="app" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Phone Mockup */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative mx-auto w-64 sm:w-72">
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
                            <div className="w-3/4 h-full bg-primary rounded-sm" />
                          </div>
                        </div>
                      </div>

                      {/* App Header */}
                      <div className="px-4 py-3">
                        <h3 className="font-serif text-lg font-semibold text-foreground">
                          Flock
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Good morning!
                        </p>
                      </div>

                      {/* Featured Song */}
                      <div className="mx-4 bg-primary rounded-xl p-4 text-primary-foreground">
                        <p className="text-xs opacity-80 mb-1">Now Playing</p>
                        <p className="font-semibold text-sm">
                          Jesus Loves Me
                        </p>
                        <div className="mt-3 flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                            <Play className="w-4 h-4 fill-current" />
                          </div>
                          <div className="flex-1 h-1 bg-primary-foreground/30 rounded-full">
                            <div className="w-1/3 h-full bg-primary-foreground rounded-full" />
                          </div>
                        </div>
                      </div>

                      {/* Song List */}
                      <div className="flex-1 px-4 py-4 space-y-3">
                        {["Amazing Grace", "This Little Light", "Deep and Wide"].map(
                          (song, i) => (
                            <div
                              key={song}
                              className="flex items-center gap-3 p-2 rounded-lg bg-secondary"
                            >
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Music className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">
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

              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Mobile App
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
              Faith at Their Fingertips
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              The Flock mobile app allows children to watch songs, learn
              actions, and stay connected with the gospel message anytime,
              anywhere.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M17.5 12.5c0-1.58-.79-2.94-2-3.74v7.48c1.21-.8 2-2.16 2-3.74zM5.5 8v8h4l5 5V3l-5 5h-4z" />
                </svg>
                App Store
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35l10.17 9.35-10.17 9.35c-.5-.24-.84-.76-.84-1.35zm14.54-7.35l-2.73-2.5 2.73-2.5 3.07 2.5c.71.65.71 1.7 0 2.35l-3.07 2.5-.01.15z" />
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
