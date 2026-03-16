import {
  Music2,
  BookOpen,
  GraduationCap,
  Package,
  FileText,
  Video,
} from "lucide-react";

const resources = [
  {
    icon: Music2,
    title: "Christian Songs",
    description:
      "Original worship songs with memorable melodies and gospel-centered lyrics that children love to sing.",
  },
  {
    icon: Video,
    title: "Action Videos",
    description:
      "Engaging video content with motions and choreography that helps children remember key truths.",
  },
  {
    icon: BookOpen,
    title: "Bible Lessons",
    description:
      "Age-appropriate curriculum with activities, crafts, and discussion guides for effective teaching.",
  },
  {
    icon: GraduationCap,
    title: "Volunteer Training",
    description:
      "Comprehensive resources to equip and empower your ministry volunteers to serve effectively.",
  },
  {
    icon: Package,
    title: "Shepherd Kits",
    description:
      "Complete ministry packages with everything you need to launch and run successful programs.",
  },
  {
    icon: FileText,
    title: "Teaching Programs",
    description:
      "Structured curriculum frameworks designed for weekly Sunday School and special events.",
  },
];

export function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Resources
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            What Flock Provides
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything your church needs to build a thriving children&apos;s
            ministry and raise the next generation in faith.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <resource.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                {resource.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {resource.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
