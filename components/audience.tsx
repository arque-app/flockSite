const audiences = [
  {
    title: "Churches",
    description:
      "Equip your congregation with comprehensive children's ministry programs that make an eternal impact.",
  },
  {
    title: "Pastors & Leaders",
    description:
      "Access proven curriculum and resources that simplify ministry planning and volunteer training.",
  },
  {
    title: "Parents",
    description:
      "Partner with your church to reinforce faith at home through the Flock mobile app and family resources.",
  },
  {
    title: "Children",
    description:
      "Experience the joy of learning about Jesus through songs, videos, and activities designed just for them.",
  },
];

export function Audience() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Who We Serve
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Flock Is For Everyone
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            From church leadership to the youngest members of your congregation,
            Flock serves the whole community of faith.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group text-center bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all"
            >
              <div className="text-5xl font-bold text-muted-foreground/20 mb-6">
                0{index + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
