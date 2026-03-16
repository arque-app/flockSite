"use client";

export function Challenge() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#00B5AD08_0%,transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,#8B5CF608_0%,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#00B5AD]/10 text-[#00B5AD] text-sm font-semibold uppercase tracking-wider mb-6">
            The Challenge
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-primary mb-6">
            VBS attracts many.
            <span className="block text-muted-foreground/70">But they drift away.</span>
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Many churches successfully gather children through VBS but struggle 
            to continue nurturing them afterward. Without structured follow-up, 
            most children don&apos;t continue their faith journey.
          </p>
        </div>

        {/* Stats in a flowing wave layout */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B6B] via-[#FFC107] to-[#00B5AD] opacity-20" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {/* Stat 1 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-[#FF6B6B]/30 transition-all hover:shadow-lg hover:shadow-[#FF6B6B]/5 lg:translate-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#FF6B6B]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#FF6B6B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#FF6B6B] mb-2">70%</div>
                <p className="text-sm text-muted-foreground leading-snug">
                  of children leave church by age 18
                </p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-[#FFC107]/30 transition-all hover:shadow-lg hover:shadow-[#FFC107]/5 lg:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-[#FFC107]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#FFC107]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#FFC107] mb-2">85%</div>
                <p className="text-sm text-muted-foreground leading-snug">
                  of VBS attendees don&apos;t return to Sunday School
                </p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="relative group">
              <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-[#8B5CF6]/30 transition-all hover:shadow-lg hover:shadow-[#8B5CF6]/5 lg:translate-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-[#8B5CF6] mb-2">2 wks</div>
                <p className="text-sm text-muted-foreground leading-snug">
                  average engagement after VBS ends
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="relative group col-span-2 lg:col-span-1">
              <div className="h-full bg-gradient-to-br from-[#00B5AD] to-[#00B5AD]/80 rounded-2xl p-6 lg:p-8 text-white lg:-translate-y-2 hover:shadow-lg hover:shadow-[#00B5AD]/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">Flock</div>
                <p className="text-sm text-white/90 leading-snug mb-4">
                  bridges that gap with a complete ministry ecosystem
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  Learn how
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
