"use client";

import React from "react";

type Card = {
  key: string;
  name: string;
  image: string;
  price: string;
  duration?: string;
};

const CARDS: Card[] = [
  {
    key: "swedish",
    name: "Swedish Massage",
    image:
      "https://images.unsplash.com/photo-1556228724-4e4474d1f0c5?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    duration: "/hour",
  },
  {
    key: "deep",
    name: "Deep Tissue Massage",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    duration: "/hour",
  },
  {
    key: "back",
    name: "Back Massage",
    image:
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop",
    price: "$100",
    duration: "/30min",
  },
  {
    key: "reflexology",
    name: "Reflexology",
    image:
      "https://images.unsplash.com/photo-1556228453-efd1a5f58e8f?q=80&w=1200&auto=format&fit=crop",
    price: "$170",
    duration: "/hour",
  },
  {
    key: "thai",
    name: "Thai Massage",
    image:
      "https://images.unsplash.com/photo-1591369822095-1b2e9b5a4f5f?q=80&w=1200&auto=format&fit=crop",
    price: "$170",
    duration: "/hour",
  },
  {
    key: "full-60",
    name: "Full Body Massage",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    duration: "/hour",
  },
  {
    key: "full-90",
    name: "Full Body Massage (90min)",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
    price: "$200",
    duration: "/90min",
  },
  {
    key: "cupping",
    name: "Full Body with Cupping",
    image:
      "https://images.unsplash.com/photo-1512427691650-5fed1f525d1d?q=80&w=1200&auto=format&fit=crop",
    price: "$170",
    duration: "/hour",
  },
  {
    key: "hot-stone",
    name: "Full Body with Hot Stone",
    image:
      "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1200&auto=format&fit=crop",
    price: "$170",
    duration: "/hour",
  },
  {
    key: "face-facial",
    name: "Face Massage with Facial",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    duration: "/hour",
  },
  {
    key: "mani-pedi",
    name: "Manipedi with Foot Spa & Legs Massage",
    image:
      "https://images.unsplash.com/photo-1582582429416-1f89a4b8cd7e?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    duration: "/hour",
  },
  {
    key: "bikini-wax-arm",
    name: "Full Body with Bikini Waxing & Arm",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    price: "$200",
    duration: "/hour",
  },
  {
    key: "soul-bikini",
    name: "Soul Massage with Bikini Waxing",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
    price: "$150",
    duration: "/hour",
  },
  {
    key: "foot",
    name: "Foot Massage",
    image:
      "https://images.unsplash.com/photo-1599059814795-9fbee8b29804?q=80&w=1200&auto=format&fit=crop",
    price: "$100",
    duration: "/30min",
  },
  {
    key: "bikini-hips",
    name: "Bikini Area & Hips Massage",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=1200&auto=format&fit=crop",
    price: "$100",
    duration: "/30min",
  },
  {
    key: "nail-polish",
    name: "Nail Polish with Foot Spa",
    image:
      "https://images.unsplash.com/photo-1556228453-efd1a5f58e8f?q=80&w=1200&auto=format&fit=crop",
    price: "$200",
  },
];

export default function ServicesCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {CARDS.map((c) => (
        <article
          key={c.key}
          className="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/60 shadow transition hover:border-[#d4af37]/60 hover:shadow-[0_0_0_1px_#d4af37]"
        >
          <div
            className="relative h-44 w-full"
            style={{
              backgroundImage: `url(${c.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-3 left-3 inline-flex rounded-md bg-black/60 px-2 py-1 text-[11px] font-medium text-[#d4af37]">
              Featured
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <h3 className="line-clamp-2 text-base font-semibold text-white">{c.name}</h3>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-lg font-semibold text-[#d4af37]">{c.price}</span>
              {c.duration && (
                <span className="text-xs text-neutral-400">{c.duration}</span>
              )}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <a
                href="#book"
                className="inline-flex items-center rounded-full bg-[#d4af37] px-4 py-2 text-xs font-semibold text-black shadow transition hover:brightness-95"
              >
                Book now
              </a>
              <button
                className="text-xs text-neutral-400 transition hover:text-[#d4af37]"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                aria-label="Back to top"
              >
                Details
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
