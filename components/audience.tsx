import { Church, Users, Heart, Baby } from "lucide-react";

const audiences = [
  {
    icon: Church,
    title: "Churches",
    description:
      "Equip your congregation with comprehensive children's ministry programs that make an eternal impact.",
  },
  {
    icon: Users,
    title: "Pastors & Leaders",
    description:
      "Access proven curriculum and resources that simplify ministry planning and volunteer training.",
  },
  {
    icon: Heart,
    title: "Parents",
    description:
      "Partner with your church to reinforce faith at home through the Flock mobile app and family resources.",
  },
  {
    icon: Baby,
    title: "Children",
    description:
      "Experience the joy of learning about Jesus through songs, videos, and activities designed just for them.",
  },
];

export function Audience() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Who We Serve
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            Flock Is For Everyone
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From church leadership to the youngest members of your congregation,
            Flock serves the whole community of faith.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="group text-center bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                <audience.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
