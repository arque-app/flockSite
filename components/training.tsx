import Link from "next/link";

const trainingHighlights = [
  {
    title: "VBS Leadership Training",
    date: "Annual",
    attendees: "500+",
    description: "Comprehensive training for VBS directors and team leaders.",
  },
  {
    title: "Sunday School Teacher Workshop",
    date: "Quarterly",
    attendees: "200+",
    description: "Practical skills for effective classroom teaching.",
  },
  {
    title: "Children's Ministry Conference",
    date: "Annual",
    attendees: "1000+",
    description: "Our flagship event bringing together ministry leaders.",
  },
];

export function Training() {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#9B8BB4]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#FF6B35]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-[#9B8BB4] uppercase tracking-wider">
              Training & Equipping
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
              Equip Your Team for Impact
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Effective children&apos;s ministry requires well-trained volunteers and leaders.
              Our training programs equip your team with practical skills, biblical foundations,
              and proven strategies.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#9B8BB4]">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Training Events</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#9B8BB4]">5000+</div>
                <div className="text-sm text-muted-foreground mt-1">Leaders Trained</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl lg:text-4xl font-bold text-[#9B8BB4]">15+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/training"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#9B8BB4] text-white font-semibold rounded-full hover:bg-[#9B8BB4]/90 transition-colors"
              >
                View All Training
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/training#upcoming"
                className="inline-flex items-center gap-2 px-8 py-4 border border-[#9B8BB4] text-[#9B8BB4] font-semibold rounded-full hover:bg-[#9B8BB4] hover:text-white transition-colors"
              >
                Upcoming Events
              </Link>
            </div>
          </div>

          {/* Training Cards */}
          <div className="space-y-4">
            {trainingHighlights.map((training, index) => (
              <div
                key={training.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {training.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {training.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-semibold text-[#9B8BB4]">
                      {training.attendees}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {training.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <Link
              href="/training"
              className="block bg-[#9B8BB4]/10 border-2 border-dashed border-[#9B8BB4]/30 rounded-2xl p-6 text-center hover:border-[#9B8BB4] transition-colors group"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-[#9B8BB4]/20 flex items-center justify-center group-hover:bg-[#9B8BB4]/30 transition-colors">
                <svg className="w-6 h-6 text-[#9B8BB4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </div>
              <span className="font-semibold text-[#9B8BB4]">See All Training Programs</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
