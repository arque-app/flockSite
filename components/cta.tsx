import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-foreground text-balance">
              Partner With Flock
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              Ready to transform your children&apos;s ministry? Join hundreds of
              churches already using Flock to raise the next generation in
              faith.
            </p>

            <form className="mt-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="john@church.org"
                />
              </div>

              <div>
                <label
                  htmlFor="church"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Church / Organization
                </label>
                <input
                  type="text"
                  id="church"
                  name="church"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="Grace Community Church"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                >
                  <option value="">Select your role</option>
                  <option value="pastor">Pastor</option>
                  <option value="ministry-leader">
                    Children&apos;s Ministry Leader
                  </option>
                  <option value="volunteer">Volunteer</option>
                  <option value="parent">Parent</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your church and ministry needs..."
                />
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl text-base font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12 lg:border-l border-border">
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Contact Information
                </h3>
                <p className="text-muted-foreground">
                  Have questions? We&apos;d love to hear from you. Reach out to
                  our team and we&apos;ll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a
                      href="mailto:hello@flockministry.org"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      hello@flockministry.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a
                      href="tel:+18005551234"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      (800) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Office</p>
                    <p className="text-muted-foreground">
                      123 Ministry Lane
                      <br />
                      Nashville, TN 37203
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-secondary rounded-2xl p-6">
                <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
                  Frequently Asked Questions
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Find answers to common questions about Flock, pricing, and
                  getting started.
                </p>
                <a
                  href="#faq"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  View FAQ
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
