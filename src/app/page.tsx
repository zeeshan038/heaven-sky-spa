import Image from "next/image";
import ServicesTabs from "../components/ServicesTabs";
import AboutSection from "../components/AboutSection";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="px-4 py-6 md:px-6">
        <div className="mx-auto max-w-full overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/50 shadow-2xl">
          <div
            className="relative h-[60vh] min-h-[420px] w-full"
            style={{
              backgroundImage:
                "url('https://www.municipalhotelliverpool.com/wp-content/uploads/sites/41/2024/10/7P7A3563-Edit-2200x1200.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark vignette + left warm gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />

            {/* Content */}
            <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-start justify-center px-6 text-left">
              <span className="mb-4 inline-flex items-center rounded-full border border-neutral-700/70 bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-neutral-200">
                Studio
              </span>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Discover the Real Benefits of our Tailored Massage Studio
              </h1>
              <p className="mt-3 max-w-2xl text-base text-neutral-300 sm:text-lg">
                Experience personalized care that addresses your body&apos;s unique demands.
              </p>
              <div className="mt-6">
                <a
                  href="#book"
                  className="inline-flex items-center rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-black shadow hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
                >
                  Book online
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Tabs Section */}
      <section id="services" className="px-4 pb-16 pt-6 md:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Our Massage Services</h2>
            <div className="mt-2 h-1 w-28 rounded bg-[#d4af37]" />
          </div>
          <ServicesTabs />
        </div>
      </section>
    </main>
  );
}

