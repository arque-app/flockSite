export function Challenge() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              The Challenge
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              VBS attracts many.
              <br />
              <span className="text-muted-foreground">But they drift away.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Many churches successfully gather children through VBS but struggle 
              to continue nurturing them afterward. Without structured follow-up, 
              most children don&apos;t continue their faith journey after VBS ends.
            </p>
            <p className="mt-4 text-lg text-foreground font-medium">
              Flock bridges that gap.
            </p>
          </div>

          {/* Visual */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-2xl p-6 h-40 flex flex-col justify-end">
                <div className="text-4xl font-bold text-accent">70%</div>
                <p className="text-sm text-muted-foreground mt-1">
                  of children leave church by age 18
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 h-48 flex flex-col justify-end">
                <div className="text-4xl font-bold">85%</div>
                <p className="text-sm text-muted-foreground mt-1">
                  of VBS attendees don&apos;t return to Sunday School
                </p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-card border border-border rounded-2xl p-6 h-48 flex flex-col justify-end">
                <div className="text-4xl font-bold">2 weeks</div>
                <p className="text-sm text-muted-foreground mt-1">
                  average engagement after VBS ends
                </p>
              </div>
              <div className="bg-primary rounded-2xl p-6 h-40 flex flex-col justify-end">
                <div className="text-4xl font-bold text-primary-foreground">Flock</div>
                <p className="text-sm text-primary-foreground/80 mt-1">
                  changes this narrative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
