export default function Testimonials() {
  const items = [
    {
      name: "Aisha K.",
      text:
        "One of the best spa experiences I've had in Dubai. The ambiance and professionalism are top-notch.",
    },
    {
      name: "Daniel R.",
      text:
        "Deep Tissue Massage released weeks of tension. I left feeling reset and restored.",
    },
    {
      name: "Mariam S.",
      text:
        "Beautiful space, welcoming staff, and the hot stone treatment was heavenly.",
    },
    {
      name: "Omar L.",
      text:
        "Booking on WhatsApp was easy and the therapist was exactly as I requested. Highly recommended!",
    },
    {
      name: "Fatima Z.",
      text:
        "Reflexology session was perfect. My feet felt brand new afterwards!",
    },
  ];

  const loop = items; // single set; user can swipe horizontally

  return (
    <section id="testimonials" className="px-4 pb-16 pt-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">What our clients say</h2>
          <div className="mt-2 h-1 w-28 rounded bg-[#d4af37]" />
        </div>

        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />

          {/* Horizontal scroll-snap track */}
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2">
            {loop.map((t, i) => (
              <figure
                key={i}
                className="snap-start w-80 shrink-0 rounded-2xl border border-neutral-800 bg-neutral-950/70 p-5 shadow-sm backdrop-blur-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold text-neutral-300">
                      {t.name.split(" ")[0][0]}
                    </div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                  </div>
                  <div className="text-[#d4af37]">★★★★★</div>
                </div>
                <blockquote className="mt-3 text-sm text-neutral-300">“{t.text}”</blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
