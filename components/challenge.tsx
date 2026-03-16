import { AlertCircle, TrendingDown, Users } from "lucide-react";

const challenges = [
  {
    icon: Users,
    title: "VBS Attracts Many",
    description:
      "Vacation Bible School draws hundreds of children with exciting programs, songs, and activities.",
  },
  {
    icon: TrendingDown,
    title: "But They Drift Away",
    description:
      "Without structured follow-up, most children don't continue their faith journey after VBS ends.",
  },
  {
    icon: AlertCircle,
    title: "Lost Opportunities",
    description:
      "Churches miss the chance to nurture these young hearts and build lasting spiritual foundations.",
  },
];

export function Challenge() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            The Ministry Challenge
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Many churches successfully gather children through VBS but struggle
            to continue nurturing them afterward. Flock helps bridge that gap.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="relative bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-sm">
                {index + 1}
              </div>
              <div className="mt-4">
                <challenge.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-primary">
            Flock provides the solution to keep children engaged and growing in
            faith.
          </p>
        </div>
      </div>
    </section>
  );
}
