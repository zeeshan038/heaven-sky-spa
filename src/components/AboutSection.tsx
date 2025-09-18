export default function AboutSection() {
  return (
    <section id="about" className="px-4 pb-16 pt-6 md:px-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">
          Welcome to Heaven Sky Spa — Your Ultimate Home Massage Experience in Dubai
        </h2>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-[#d4af37]" />

        <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-neutral-300 sm:text-base">
          We bring the spa experience to your home, ensuring complete relaxation without the hassle of traveling.
          Our expert therapists specialize in various massage treatments to help you unwind, relieve tension, and restore balance.
          Whether you&apos;re looking for a soothing <a href="#services" className="text-[#d4af37] hover:underline">Swedish massage</a>,
          a targeted <a href="#services" className="text-[#d4af37] hover:underline">deep tissue massage</a>, or a revitalizing
          <a href="#services" className="text-[#d4af37] hover:underline"> hot stone experience</a>, we provide a personalized, premium home spa service in Dubai.
        </p>

        <div className="mt-7">
          <a
            href="#services"
            className="inline-flex items-center rounded-full border border-neutral-800 bg-black/60 px-6 py-2.5 text-sm font-semibold text-white shadow hover:border-[#d4af37] hover:text-[#d4af37]"
          >
            Book appointment
          </a>
        </div>
      </div>
    </section>
  );
}
