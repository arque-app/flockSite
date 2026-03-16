import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flock Ministries | Apps & Technical Support",
  description:
    "Discover Flock's mobile apps for kids, parents, pastors, and missionaries. Get technical support, training resources, and everything you need for effective children's ministry.",
};

const kidsAppFeatures = [
  {
    title: "Action Videos",
    description:
      "Learn choreography and motions to worship songs with step-by-step video tutorials.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Worship Songs Library",
    description:
      "Stream the complete library of Flock worship songs designed for children's ministry.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
      </svg>
    ),
  },
  {
    title: "Daily Devotionals",
    description:
      "Short, engaging devotions designed specifically for young hearts and minds.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Church Connection",
    description:
      "Stay updated with announcements and events from your local church community.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
];

const missionaryAppFeatures = [
  {
    title: "Evangelism Tools",
    description:
      "Complete toolkit for sharing the gospel with children in age-appropriate ways.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
      </svg>
    ),
  },
  {
    title: "Training Videos",
    description:
      "Comprehensive video courses on children's ministry methods and best practices.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
  },
  {
    title: "Resource Library",
    description:
      "Download printable materials, lesson plans, and ministry resources offline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
      </svg>
    ),
  },
  {
    title: "Ministry Guides",
    description:
      "Step-by-step guides for starting and running children's ministry programs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I download the app?",
    answer:
      "The Flock apps are available on both iOS (App Store) and Android (Google Play). Search for 'Flock Kids' or 'Flock Ministries' to find and download the appropriate app.",
  },
  {
    question: "Is there a cost to use the apps?",
    answer:
      "The basic features of both apps are free. Premium features and full content access may require a subscription through your church or organization.",
  },
  {
    question: "How do I connect my church to the app?",
    answer:
      "Your church administrator will provide you with a unique church code. Enter this code in the app settings to connect and access your church's specific content.",
  },
  {
    question: "Can I use the app offline?",
    answer:
      "Yes! Most content can be downloaded for offline use. This is especially useful for missionaries working in areas with limited internet connectivity.",
  },
  {
    question: "How do I report technical issues?",
    answer:
      "You can report issues through the app's feedback feature or contact our support team directly via the contact form on this page.",
  },
];

export default function FlockMinistriesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 lg:pt-40 pb-20 px-6 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-8">
                <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
                <span className="text-sm text-muted-foreground font-medium">
                  Technical Support & Resources
                </span>
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary mb-6 text-balance">
                Flock Ministries
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Two powerful mobile apps designed to equip kids, parents, pastors,
                and missionaries with everything needed for effective children&apos;s ministry.
              </p>
            </div>
          </div>
        </section>

        {/* Kids App Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-6"
                  style={{ backgroundColor: "#5ABCB9" }}
                >
                  For Kids, Parents & Pastors
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">
                  Flock Kids App
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Keep children connected to their faith journey outside of church.
                  Watch action videos, listen to worship songs, and grow in their
                  relationship with God every day.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {kidsAppFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#5ABCB9]/10 flex items-center justify-center flex-shrink-0 text-[#5ABCB9]">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#5ABCB9] text-white rounded-full text-sm font-semibold hover:bg-[#5ABCB9]/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#5ABCB9] text-white rounded-full text-sm font-semibold hover:bg-[#5ABCB9]/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>

              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 sm:w-72 lg:w-80">
                <div className="relative bg-[#5ABCB9] rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#5ABCB9] rounded-b-2xl" />
                  <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    <div className="h-full flex flex-col p-4">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#5ABCB9]/10 flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#5ABCB9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-primary">Flock Kids</h3>
                        <p className="text-xs text-muted-foreground mt-1">Faith at your fingertips</p>
                      </div>
                      <div className="flex-1 space-y-3">
                        {["Action Videos", "Worship Songs", "Devotionals"].map((item) => (
                          <div key={item} className="p-3 rounded-xl bg-muted flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#5ABCB9]/10 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#5ABCB9]" />
                            </div>
                            <span className="text-sm font-medium text-primary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Missionary App Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-64 sm:w-72 lg:w-80 order-2 lg:order-1">
                <div className="relative bg-[#FF6B35] rounded-[3rem] p-3 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#FF6B35] rounded-b-2xl" />
                  <div className="bg-background rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                    <div className="h-full flex flex-col p-4">
                      <div className="text-center py-8">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#FF6B35]/10 flex items-center justify-center">
                          <svg className="w-8 h-8 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-primary">Flock Ministries</h3>
                        <p className="text-xs text-muted-foreground mt-1">Equipping evangelists</p>
                      </div>
                      <div className="flex-1 space-y-3">
                        {["Training Videos", "Resources", "Ministry Guides"].map((item) => (
                          <div key={item} className="p-3 rounded-xl bg-muted flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                              <div className="w-3 h-3 rounded-full bg-[#FF6B35]" />
                            </div>
                            <span className="text-sm font-medium text-primary">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div
                  className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-white mb-6"
                  style={{ backgroundColor: "#FF6B35" }}
                >
                  For Missionaries & Evangelists
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary mb-6">
                  Flock Ministries App
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                  Everything missionaries need to effectively evangelize children.
                  Access training content, downloadable resources, and ministry
                  guides wherever you serve.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {missionaryAppFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#FF6B35]/10 flex items-center justify-center flex-shrink-0 text-[#FF6B35]">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF6B35] text-white rounded-full text-sm font-semibold hover:bg-[#FF6B35]/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    App Store
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#FF6B35] text-white rounded-full text-sm font-semibold hover:bg-[#FF6B35]/90 transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.807 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                    </svg>
                    Google Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-secondary">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-sm font-semibold text-[#5ABCB9] uppercase tracking-wider">
                Support
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6"
                >
                  <h3 className="font-semibold text-lg text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary mb-6">
              Need More Help?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Flock&apos;s
              apps and resources. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/partner"
                className="px-8 py-4 border border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Become a Partner
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
