import Link from "next/link";

const partnerOptions = [
  {
    title: "Pray",
    description: "Join our prayer team and intercede for children's ministry",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    color: "#8B5CF6",
  },
  {
    title: "Give",
    description: "Support the ministry financially and help reach more children",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: "#FF5722",
  },
  {
    title: "Serve",
    description: "Volunteer your time and skills to advance the mission",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: "#00B5AD",
  },
];

export function PartnerPreview() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF5722]/10 text-[#FF5722] text-sm font-semibold uppercase tracking-wider mb-6">
              Partner With Us
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-tight">
              Join Us in Reaching the Next Generation
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Every child matters. Your partnership - whether through prayer, giving, or serving - 
              makes an eternal difference in the lives of children across communities.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF5722] text-white font-semibold rounded-full hover:bg-[#FF5722]/90 transition-colors shadow-lg shadow-[#FF5722]/20"
              >
                Become a Partner
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/partner#give"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#FF5722] text-[#FF5722] font-semibold rounded-full hover:bg-[#FF5722] hover:text-white transition-colors"
              >
                Give Now
              </Link>
            </div>
          </div>

          {/* Partner Options */}
          <div className="grid gap-4">
            {partnerOptions.map((option) => (
              <Link
                key={option.title}
                href="/partner"
                className="group bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1 flex items-start gap-4"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${option.color}15`, color: option.color }}
                >
                  {option.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
