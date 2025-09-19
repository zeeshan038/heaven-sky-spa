"use client";

import { useEffect, useState } from "react";

type Service = {
  key: string;
  name: string;
  image: string;
  description: string;
  bullets: string[];
  pricing: { label: string; price: string }[];
};

const SERVICES: Service[] = [
  {
    key: "swedish",
    name: "Swedish Massage",
    image: "/swedish-massage.jpeg",
    description:
      "Gentle, flowing strokes to promote relaxation, ease tension, and improve circulation.",
    bullets: [
      "Muscle relaxation",
      "Stress reduction",
      "Improved circulation",
      "Better sleep",
    ],
    pricing: [
      { label: "60 min", price: "AED 150" },
    ],
  },
  {
    key: "deep-tissue",
    name: "Deep Tissue Massage",
    image: "/deep-tissue-massage.jpeg",
    description:
      "Targets deeper muscle layers to release chronic tension and knots.",
    bullets: ["Releases knots", "Posture support", "Pain relief", "Mobility"],
    pricing: [{ label: "60 min", price: "AED 150" }],
  },
  {
    key: "back",
    name: "Back Massage",
    image: "/back-massage.jpeg",
    description:
      "Focused treatment for upper, mid, and lower back to relieve stiffness and fatigue.",
    bullets: ["Neck & shoulder relief", "Tension release", "Quick refresh"],
    pricing: [{ label: "30 min", price: "AED 100" }],
  },
  {
    key: "reflexology",
    name: "Reflexology",
    image: "/reflexology.jpeg",
    description:
      "Pressure-point foot therapy to stimulate energy pathways and restore balance.",
    bullets: ["Foot rejuvenation", "Energy balance", "Stress relief"],
    pricing: [{ label: "60 min", price: "AED 170" }],
  },
  {
    key: "thai",
    name: "Thai Massage",
    image: "/thai-massage.jpeg",
    description:
      "Yoga-like stretches and acupressure to enhance flexibility and vitality.",
    bullets: ["Flexibility", "Energy flow", "Mobility"],
    pricing: [{ label: "60 min", price: "AED 170" }],
  },
  {
    key: "full-body",
    name: "Full Body Massage",
    image: "/Full-body-massage.jpeg",
    description:
      "Head-to-toe relaxation tailored to your preferred pressure.",
    bullets: ["Full-body relaxation", "Circulation", "Calm mind"],
    pricing: [
      { label: "60 min", price: "AED 150" },
      { label: "90 min", price: "AED 200" },
    ],
  },
  {
    key: "cupping",
    name: "Full Body with Cupping",
    image: "/full-body-massage-cupping.jpeg",
    description:
      "Combines massage with cupping therapy to boost circulation and recovery.",
    bullets: ["Recovery", "Detox support", "Relieves tightness"],
    pricing: [{ label: "60 min", price: "AED 170" }],
  },
  {
    key: "hot-stone",
    name: "Full Body with Hot Stone",
    image: "/massage-with-hotstone.jpeg",
    description:
      "Heated stones melt away tension and improve circulation.",
    bullets: ["Deep warmth", "Relaxation", "Stress relief"],
    pricing: [{ label: "60 min", price: "AED 170" }],
  },
  {
    key: "face-facial",
    name: "Face Massage with Facial",
    image: "/face-massage-with-facial.jpg",
    description:
      "Glow-boosting face massage combined with a refreshing facial routine.",
    bullets: ["Glow", "Lymphatic boost", "Relaxing"],
    pricing: [{ label: "60 min", price: "AED 150" }],
  },
  {
    key: "mani-pedi",
    name: "Manipedi with Foot Spa & Legs Massage",
    image: "/meni%20pedi%20with%20foot%20spa%20and%20leg%20massage.webp",
    description:
      "Complete nail care with soothing foot spa and leg massage.",
    bullets: ["Clean & care", "Polish", "Relaxing"],
    pricing: [{ label: "60 min", price: "AED 150" }],
  },
  {
    key: "bikini-wax-arm",
    name: "Full Body with Bikini Waxing & Arm",
    image: "/full%20body%20massage%20with%20biknni%20waxinng%20and%20arm.webp",
    description:
      "Comprehensive body massage paired with selected waxing for a polished feel.",
    bullets: ["Smooth feel", "Relax + Groom", "Confidence"],
    pricing: [{ label: "60 min", price: "AED 200" }],
  },
  {
    key: "soul-bikini",
    name: "Soul Massage with Bikini Waxing",
    image: "/soul-massage.webp",
    description:
      "Holistic relaxation focused on mind-body balance plus select waxing.",
    bullets: ["Holistic", "Soothing", "Balance"],
    pricing: [{ label: "60 min", price: "AED 150" }],
  },
  {
    key: "foot",
    name: "Foot Massage",
    image: "/foot-massage.jpeg",
    description:
      "Releases tension and heaviness from feet and calves.",
    bullets: ["Circulation", "Light legs", "Stress relief"],
    pricing: [{ label: "30 min", price: "AED 100" }],
  },
  {
    key: "bikini-hips",
    name: "Bikini Area & Hips Massage",
    image: "/hips-masaage.jpg",
    description:
      "Delicate, focused work to release hip-area tightness and improve comfort.",
    bullets: ["Hip mobility", "Comfort", "Gentle focus"],
    pricing: [{ label: "30 min", price: "AED 100" }],
  },
  {
    key: "nail-polish",
    name: "Nail Polish with Foot Spa",
    image: "/nail-polish-with-foot-spa.jpeg",
    description:
      "Refreshing foot spa followed by neat polish for a clean finish.",
    bullets: ["Neat polish", "Spa cleanse", "Feel-good"],
    pricing: [{ label: "", price: "AED 200" }],
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState<string>(SERVICES[0].key);
  const current = SERVICES.find((s) => s.key === active)!;
  const [bookingService, setBookingService] = useState<Service | null>(null);

  // Pick initial tab from URL: supports `/#services?s=<key>` or `?s=<key>`
  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyFromUrl = () => {
      let keyFromUrl: string | null = null;
      const hash = window.location.hash || ""; // e.g. #services?s=thai
      const qIndex = hash.indexOf("?");
      if (qIndex !== -1) {
        const hashQuery = hash.substring(qIndex + 1);
        const params = new URLSearchParams(hashQuery);
        keyFromUrl = params.get("s");
      }
      if (!keyFromUrl) {
        const params = new URLSearchParams(window.location.search);
        keyFromUrl = params.get("s");
      }
      if (keyFromUrl && SERVICES.some((s) => s.key === keyFromUrl)) {
        setActive(keyFromUrl);
      }
    };

    // Run once now
    applyFromUrl();

    // Listen for URL changes while staying on the same page
    window.addEventListener("hashchange", applyFromUrl);
    window.addEventListener("popstate", applyFromUrl);
    return () => {
      window.removeEventListener("hashchange", applyFromUrl);
      window.removeEventListener("popstate", applyFromUrl);
    };
  }, []);

  const openBooking = (service: Service) => {
    setBookingService(service);
  };

  const startWhatsApp = (gender: "Male" | "Female") => {
    if (!bookingService) return;
    const phone = "971567422137"; // from FloatingWhatsApp
    const duration = bookingService.pricing?.[0]?.label || "";
    const text = encodeURIComponent(
      `Hello, I would like to book ${bookingService.name}${duration ? ` (${duration})` : ""} with a ${gender} therapist.`
    );
    const url = `https://wa.me/${phone}?text=${text}`;
    window.open(url, "_blank");
    setBookingService(null);
  };

  return (
    <>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
      {/* Mobile horizontal menu */}
      <div className="md:hidden">
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`snap-start whitespace-nowrap rounded-full border px-3 py-1.5 text-sm ${
                active === s.key
                  ? "border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37]"
                  : "border-neutral-800 bg-black/40 text-neutral-300 hover:border-neutral-700"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Left menu */}
      <aside className="hidden md:col-span-4 md:block">
        <div className="sticky top-24 rounded-2xl border border-neutral-800 bg-neutral-950/40 md:max-h-[600px] lg:max-h-[640px] overflow-y-auto">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              onClick={() => setActive(s.key)}
              className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors sm:text-base ${
                active === s.key
                  ? "bg-[#d4af37]/15 text-[#d4af37]"
                  : "hover:bg-neutral-900/60"
              }`}
            >
              <span className="truncate">{s.name}</span>
              {active === s.key && (
                <span className="ml-3 inline-block h-2 w-2 rounded-full bg-[#d4af37]" />
              )}
            </button>
          ))}
        </div>
      </aside>

      {/* Right content */}
      <section className="md:col-span-8">
        <div className="overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/50 md:min-h-[600px]">
          <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
            <div className="relative md:col-span-7">
              {/* image */}
              <div
                className="h-80 w-full sm:h-[28rem] md:h-[600px]"
                style={{
                  backgroundImage: `url(${current.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
            <div className="md:col-span-5 p-5 sm:p-8">
              <h3 className="text-3xl font-semibold text-white sm:text-4xl">{current.name}</h3>
              <p className="mt-4 text-base text-neutral-300 sm:text-lg">{current.description}</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-neutral-300 sm:text-base">
                {current.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 flex-none rounded-full bg-[#d4af37]" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {current.pricing.map((p, i) => (
                  <div key={i} className="rounded-xl border border-neutral-800 bg-black/40 p-4">
                    <div className="text-sm text-neutral-400 sm:text-base">{p.label}</div>
                    <div className="mt-1 text-lg font-semibold text-[#d4af37] sm:text-xl">{p.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => openBooking(current)}
                  className="inline-flex items-center rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-black shadow hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
                >
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* Booking Modal */}
    {bookingService && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
        <div className="w-full max-w-sm rounded-2xl border border-neutral-800 bg-neutral-950 p-5 shadow-xl">
          <h4 className="text-lg font-semibold text-white">Choose therapist</h4>
          <p className="mt-1 text-sm text-neutral-400">You are booking: {bookingService?.name}</p>
          <div className="mt-4 flex items-center gap-3">
            <button
              onClick={() => startWhatsApp("Male")}
              className="flex-1 rounded-md border border-neutral-800 bg-black px-4 py-2 text-sm text-neutral-200 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Male
            </button>
            <button
              onClick={() => startWhatsApp("Female")}
              className="flex-1 rounded-md border border-neutral-800 bg-black px-4 py-2 text-sm text-neutral-200 hover:border-[#d4af37] hover:text-[#d4af37]"
            >
              Female
            </button>
          </div>
          <button
            onClick={() => setBookingService(null)}
            className="mt-4 w-full rounded-md border border-neutral-800 px-4 py-2 text-xs text-neutral-400 hover:border-neutral-700"
          >
            Cancel
          </button>
        </div>
      </div>
    )}
    </>
  );
}
