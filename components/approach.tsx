import { Music, BookOpen, Smartphone } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Catching at VBS",
    description:
      "Engaging songs, action videos, and easy-to-follow programs that attract children and introduce them to the gospel message through fun, memorable experiences.",
    icon: Music,
    features: [
      "High-energy worship songs",
      "Interactive action videos",
      "Simple gospel presentations",
      "Engaging group activities",
    ],
  },
  {
    step: "Step 2",
    title: "Nurturing at Sunday School",
    description:
      "Structured lessons and teaching materials that help children grow in biblical understanding and character development throughout the year.",
    icon: BookOpen,
    features: [
      "Age-appropriate curriculum",
      "Character-building lessons",
      "Bible memory programs",
      "Teacher training resources",
    ],
  },
  {
    step: "Step 3",
    title: "Staying Connected",
    description:
      "A mobile app where children can watch songs and action videos, helping them stay connected to the gospel message even outside of church.",
    icon: Smartphone,
    features: [
      "On-demand song library",
      "Action video tutorials",
      "Weekly devotionals",
      "Family discussion guides",
    ],
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Our Approach
          </span>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground text-balance">
            The Flock Ministry Journey
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            A comprehensive approach to children&apos;s ministry that catches,
            nurtures, and keeps children connected to their faith.
          </p>
        </div>

        <div className="space-y-12 lg:space-y-20">
          {steps.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center gap-8 lg:gap-16`}
            >
              {/* Content */}
              <div className="flex-1 w-full">
                <div className="max-w-xl">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-foreground"
                      >
                        <svg
                          className="w-5 h-5 text-primary flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Visual */}
              <div className="flex-1 w-full">
                <div className="relative bg-secondary rounded-3xl p-8 lg:p-12 aspect-square max-w-md mx-auto flex items-center justify-center">
                  <div className="absolute inset-4 border-2 border-dashed border-primary/20 rounded-2xl" />
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto bg-primary rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <p className="font-serif text-xl font-semibold text-foreground">
                      {item.title}
                    </p>
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
