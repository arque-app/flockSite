const steps = [
  {
    number: "01",
    title: "Catching at VBS",
    description:
      "Engaging songs, action videos, and easy-to-follow programs that attract children and introduce them to the gospel message through fun, memorable experiences.",
    features: [
      "High-energy worship songs",
      "Interactive action videos",
      "Simple gospel presentations",
      "Engaging group activities",
    ],
    color: "#5ABCB9",
  },
  {
    number: "02",
    title: "Nurturing at Sunday School",
    description:
      "Structured lessons and teaching materials that help children grow in biblical understanding and character development throughout the year.",
    features: [
      "Age-appropriate curriculum",
      "Character-building lessons",
      "Bible memory programs",
      "Teacher training resources",
    ],
    color: "#8DC63F",
  },
  {
    number: "03",
    title: "Staying Connected",
    description:
      "A mobile app where children can watch songs and action videos, helping them stay connected to the gospel message even outside of church.",
    features: [
      "On-demand song library",
      "Action video tutorials",
      "Weekly devotionals",
      "Family discussion guides",
    ],
    color: "#F28B82",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-sm font-semibold text-[#5ABCB9] uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
            The Flock Ministry Journey
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A comprehensive approach to children&apos;s ministry that catches,
            nurtures, and keeps children connected to their faith.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-12 lg:gap-20 items-start`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-baseline gap-4 mb-6">
                  <span 
                    className="text-6xl lg:text-8xl font-bold"
                    style={{ color: `${step.color}30` }}
                  >
                    {step.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
                    {step.title}
                  </h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {step.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {step.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-primary"
                    >
                      <svg
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: step.color }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder */}
              <div className="flex-1 w-full">
                <div 
                  className="aspect-[4/3] rounded-3xl border border-border flex items-center justify-center"
                  style={{ backgroundColor: `${step.color}10` }}
                >
                  <div className="text-center">
                    <div 
                      className="text-6xl font-bold"
                      style={{ color: `${step.color}40` }}
                    >
                      {step.number}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
