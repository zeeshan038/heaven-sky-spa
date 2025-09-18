"use client";

import { useState } from "react";

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
    image:
      "https://images.unsplash.com/photo-1556228724-4e4474d1f0c5?q=80&w=1600&auto=format&fit=crop",
    description:
      "Gentle, flowing strokes to promote relaxation, ease tension, and improve circulation.",
    bullets: [
      "Muscle relaxation",
      "Stress reduction",
      "Improved circulation",
      "Better sleep",
    ],
    pricing: [
      { label: "60 min", price: "$150" },
    ],
  },
  {
    key: "deep-tissue",
    name: "Deep Tissue Massage",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1600&auto=format&fit=crop",
    description:
      "Targets deeper muscle layers to release chronic tension and knots.",
    bullets: ["Releases knots", "Posture support", "Pain relief", "Mobility"],
    pricing: [{ label: "60 min", price: "$150" }],
  },
  {
    key: "back",
    name: "Back Massage",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1600&auto=format&fit=crop",
    description:
      "Focused treatment for upper, mid, and lower back to relieve stiffness and fatigue.",
    bullets: ["Neck & shoulder relief", "Tension release", "Quick refresh"],
    pricing: [{ label: "30 min", price: "$100" }],
  },
  {
    key: "reflexology",
    name: "Reflexology",
    image:
      "https://images.unsplash.com/photo-1556228453-efd1a5f58e8f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Pressure-point foot therapy to stimulate energy pathways and restore balance.",
    bullets: ["Foot rejuvenation", "Energy balance", "Stress relief"],
    pricing: [{ label: "60 min", price: "$170" }],
  },
  {
    key: "thai",
    name: "Thai Massage",
    image:
      "https://images.unsplash.com/photo-1591369822095-1b2e9b5a4f5f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Yoga-like stretches and acupressure to enhance flexibility and vitality.",
    bullets: ["Flexibility", "Energy flow", "Mobility"],
    pricing: [{ label: "60 min", price: "$170" }],
  },
  {
    key: "full-body",
    name: "Full Body Massage",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop",
    description:
      "Head-to-toe relaxation tailored to your preferred pressure.",
    bullets: ["Full-body relaxation", "Circulation", "Calm mind"],
    pricing: [
      { label: "60 min", price: "$150" },
      { label: "90 min", price: "$200" },
    ],
  },
  {
    key: "cupping",
    name: "Full Body with Cupping",
    image:
      "https://images.unsplash.com/photo-1512427691650-5fed1f525d1d?q=80&w=1600&auto=format&fit=crop",
    description:
      "Combines massage with cupping therapy to boost circulation and recovery.",
    bullets: ["Recovery", "Detox support", "Relieves tightness"],
    pricing: [{ label: "60 min", price: "$170" }],
  },
  {
    key: "hot-stone",
    name: "Full Body with Hot Stone",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1600&auto=format&fit=crop",
    description:
      "Heated stones melt away tension and improve circulation.",
    bullets: ["Deep warmth", "Relaxation", "Stress relief"],
    pricing: [{ label: "60 min", price: "$170" }],
  },
  {
    key: "face-facial",
    name: "Face Massage with Facial",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1600&auto=format&fit=crop",
    description:
      "Glow-boosting face massage combined with a refreshing facial routine.",
    bullets: ["Glow", "Lymphatic boost", "Relaxing"],
    pricing: [{ label: "60 min", price: "$150" }],
  },
  {
    key: "mani-pedi",
    name: "Manipedi with Foot Spa & Legs Massage",
    image:
      "https://images.unsplash.com/photo-1582582429416-1f89a4b8cd7e?q=80&w=1600&auto=format&fit=crop",
    description:
      "Complete nail care with soothing foot spa and leg massage.",
    bullets: ["Clean & care", "Polish", "Relaxing"],
    pricing: [{ label: "60 min", price: "$150" }],
  },
  {
    key: "bikini-wax-arm",
    name: "Full Body with Bikini Waxing & Arm",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    description:
      "Comprehensive body massage paired with selected waxing for a polished feel.",
    bullets: ["Smooth feel", "Relax + Groom", "Confidence"],
    pricing: [{ label: "60 min", price: "$200" }],
  },
  {
    key: "soul-bikini",
    name: "Soul Massage with Bikini Waxing",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
    description:
      "Holistic relaxation focused on mind-body balance plus select waxing.",
    bullets: ["Holistic", "Soothing", "Balance"],
    pricing: [{ label: "60 min", price: "$150" }],
  },
  {
    key: "foot",
    name: "Foot Massage",
    image:
      "https://images.unsplash.com/photo-1599059814795-9fbee8b29804?q=80&w=1600&auto=format&fit=crop",
    description:
      "Releases tension and heaviness from feet and calves.",
    bullets: ["Circulation", "Light legs", "Stress relief"],
    pricing: [{ label: "30 min", price: "$100" }],
  },
  {
    key: "bikini-hips",
    name: "Bikini Area & Hips Massage",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1600&auto=format&fit=crop",
    description:
      "Delicate, focused work to release hip-area tightness and improve comfort.",
    bullets: ["Hip mobility", "Comfort", "Gentle focus"],
    pricing: [{ label: "30 min", price: "$100" }],
  },
  {
    key: "nail-polish",
    name: "Nail Polish with Foot Spa",
    image:
      "https://images.unsplash.com/photo-1556228453-efd1a5f58e8f?q=80&w=1600&auto=format&fit=crop",
    description:
      "Refreshing foot spa followed by neat polish for a clean finish.",
    bullets: ["Neat polish", "Spa cleanse", "Feel-good"],
    pricing: [{ label: "", price: "$200" }],
  },
];

export default function ServicesTabs() {
  const [active, setActive] = useState<string>(SERVICES[0].key);
  const current = SERVICES.find((s) => s.key === active)!;

  return (
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
                <a
                  href="#book"
                  className="inline-flex items-center rounded-full bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-black shadow hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70"
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
