"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleServiceSelect = (key: string) => {
    if (typeof window === "undefined") return;
    const url = `/#services?s=${key}`;
    if (window.location.pathname === "/") {
      // Update hash and smooth scroll
      window.location.hash = `#services?s=${key}`;
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = url;
    }
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const handleAboutClick = () => {
    if (typeof window === "undefined") return;
    const url = "/#about";
    if (window.location.pathname === "/") {
      // Update hash and smooth scroll to About section
      window.location.hash = "#about";
      const el = document.getElementById("about");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = url;
    }
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const navItemBase =
    "px-3 py-2 text-sm font-medium transition-colors hover:text-[#d4af37]";

  const dropdownLink =
    "block px-4 py-2 text-sm hover:bg-neutral-900 hover:text-[#d4af37]";

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-black/90 backdrop-blur supports-[backdrop-filter]:bg-black/70">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#d4af37] text-black font-extrabold">HS</span>
          <span className="text-lg font-semibold tracking-wide">
            SERENA AMORE HAVEN SPA
            <span className="ml-2 hidden text-xs font-normal text-neutral-400 sm:inline">Massage & Spa</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <div className="relative"
               onMouseEnter={() => setOpenMenu("massages")}
               onMouseLeave={() => setOpenMenu(null)}>
            <button className={`${navItemBase} inline-flex items-center gap-1`}>
              Massages
              <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "massages" && (
              <div className="absolute left-0 mt-2 w-64 overflow-hidden rounded-md border border-neutral-800 bg-black shadow-lg">
                <div className="max-h-80 overflow-auto py-1">
                  <button onClick={() => handleServiceSelect("swedish")} className={dropdownLink + " w-full text-left"}>Swedish Massage</button>
                  <button onClick={() => handleServiceSelect("deep-tissue")} className={dropdownLink + " w-full text-left"}>Deep Tissue Massage</button>
                  <button onClick={() => handleServiceSelect("back")} className={dropdownLink + " w-full text-left"}>Back Massage</button>
                  <button onClick={() => handleServiceSelect("reflexology")} className={dropdownLink + " w-full text-left"}>Reflexology</button>
                  <button onClick={() => handleServiceSelect("thai")} className={dropdownLink + " w-full text-left"}>Thai Massage</button>
                  <button onClick={() => handleServiceSelect("full-body")} className={dropdownLink + " w-full text-left"}>Full Body Massage</button>
                  <button onClick={() => handleServiceSelect("cupping")} className={dropdownLink + " w-full text-left"}>Full Body with Cupping</button>
                  <button onClick={() => handleServiceSelect("hot-stone")} className={dropdownLink + " w-full text-left"}>Full Body with Hot Stone</button>
                  <button onClick={() => handleServiceSelect("face-facial")} className={dropdownLink + " w-full text-left"}>Face Massage with Facial</button>
                  <button onClick={() => handleServiceSelect("mani-pedi")} className={dropdownLink + " w-full text-left"}>Manipedi with Foot Spa & Legs Massage</button>
                  <button onClick={() => handleServiceSelect("bikini-wax-arm")} className={dropdownLink + " w-full text-left"}>Full Body with Bikini Waxing & Arm</button>
                  <button onClick={() => handleServiceSelect("soul-bikini")} className={dropdownLink + " w-full text-left"}>Soul Massage with Bikini Waxing</button>
                  <button onClick={() => handleServiceSelect("foot")} className={dropdownLink + " w-full text-left"}>Foot Massage</button>
                  <button onClick={() => handleServiceSelect("bikini-hips")} className={dropdownLink + " w-full text-left"}>Bikini Area & Hips Massage</button>
                  <button onClick={() => handleServiceSelect("nail-polish")} className={dropdownLink + " w-full text-left"}>Nail Polish with Foot Spa</button>
                </div>
              </div>
            )}
          </div>

          

          <div className="relative"
               onMouseEnter={() => setOpenMenu("about")}
               onMouseLeave={() => setOpenMenu(null)}>
            <button onClick={handleAboutClick} className={`${navItemBase} inline-flex items-center gap-1`}>
              About
    
            </button>
           
          </div>

       
          <Link href="/contact" className={`${navItemBase} text-[#d4af37]`}>Contact</Link>
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+123456789" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1.5 text-sm hover:border-[#d4af37] hover:text-[#d4af37]">
            <PhoneIcon className="h-4 w-4 text-[#d4af37]" />
            <span>Call</span>
          </a>
          <a href="mailto:serenaamorehavenspa@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1.5 text-sm hover:border-[#d4af37] hover:text-[#d4af37]">
            <MailIcon className="h-4 w-4 text-[#d4af37]" />
            <span>Email</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle Menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-neutral-300 hover:bg-neutral-900 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Hamburger className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-neutral-800 bg-black md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium hover:text-[#d4af37]">
                <span>Massages</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-3 pb-3 text-sm max-h-72 overflow-auto pr-2">
                <button onClick={() => handleServiceSelect("swedish")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Swedish Massage</button>
                <button onClick={() => handleServiceSelect("deep-tissue")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Deep Tissue Massage</button>
                <button onClick={() => handleServiceSelect("back")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Back Massage</button>
                <button onClick={() => handleServiceSelect("reflexology")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Reflexology</button>
                <button onClick={() => handleServiceSelect("thai")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Thai Massage</button>
                <button onClick={() => handleServiceSelect("full-body")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Full Body Massage</button>
                <button onClick={() => handleServiceSelect("cupping")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Full Body with Cupping</button>
                <button onClick={() => handleServiceSelect("hot-stone")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Full Body with Hot Stone</button>
                <button onClick={() => handleServiceSelect("face-facial")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Face Massage with Facial</button>
                <button onClick={() => handleServiceSelect("mani-pedi")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Manipedi with Foot Spa & Legs Massage</button>
                <button onClick={() => handleServiceSelect("bikini-wax-arm")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Full Body with Bikini Waxing & Arm</button>
                <button onClick={() => handleServiceSelect("soul-bikini")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Soul Massage with Bikini Waxing</button>
                <button onClick={() => handleServiceSelect("foot")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Foot Massage</button>
                <button onClick={() => handleServiceSelect("bikini-hips")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Bikini Area & Hips Massage</button>
                <button onClick={() => handleServiceSelect("nail-polish")} className="block w-full py-1.5 text-left text-neutral-300 hover:text-[#d4af37]">Nail Polish with Foot Spa</button>
              </div>
            </details>
            <button onClick={handleAboutClick} className="block w-full py-2 text-left text-sm text-neutral-300 hover:text-[#d4af37]">About</button>
            <Link href="/contact" className="block py-2 text-sm text-[#d4af37]">Contact</Link>

            <div className="mt-3 flex items-center gap-3">
              <a href="tel:+123456789" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm hover:border-[#d4af37] hover:text-[#d4af37]">
                <PhoneIcon className="h-4 w-4 text-[#d4af37]" />
                <span>Call</span>
              </a>
              <a href="mailto:info@myspa.com" className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-neutral-800 px-3 py-2 text-sm hover:border-[#d4af37] hover:text-[#d4af37]">
                <MailIcon className="h-4 w-4 text-[#d4af37]" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M6.23 8.97a.75.75 0 0 1 1.06.02L12 13.06l4.71-4.07a.75.75 0 1 1 .98 1.14l-5.2 4.49a.75.75 0 0 1-.98 0L6.21 10.1a.75.75 0 0 1 .02-1.12z" />
    </svg>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h2.086c.52 0 .98.334 1.138.828l1.04 3.121a1.2 1.2 0 0 1-.27 1.2l-1.27 1.27a14.25 14.25 0 0 0 6.857 6.857l1.27-1.27a1.2 1.2 0 0 1 1.2-.27l3.121 1.04c.494.158.828.618.828 1.138V19.5a2.25 2.25 0 0 1-2.25 2.25h-.75C9.99 21.75 2.25 14.01 2.25 4.5v-.75z" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M1.5 6.75A2.25 2.25 0 0 1 3.75 4.5h16.5A2.25 2.25 0 0 1 22.5 6.75v10.5A2.25 2.25 0 0 1 20.25 19.5H3.75A2.25 2.25 0 0 1 1.5 17.25V6.75zm2.4-.75a.75.75 0 0 0-.6 1.2l7.2 5.4a.75.75 0 0 0 .9 0l7.2-5.4a.75.75 0 0 0-.6-1.2H3.9z" />
    </svg>
  );
}

function Hamburger({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75z" />
    </svg>
  );
}
