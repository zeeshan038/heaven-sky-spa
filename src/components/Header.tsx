"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

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
            Heaven Sky Spa
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
              <div className="absolute left-0 mt-2 w-52 overflow-hidden rounded-md border border-neutral-800 bg-black shadow-lg">
                <Link href="#swedish" className={dropdownLink}>Swedish Massage</Link>
                <Link href="#deep" className={dropdownLink}>Deep Tissue</Link>
                <Link href="#hot-stone" className={dropdownLink}>Hot Stone</Link>
              </div>
            )}
          </div>

          <Link href="#studio" className={navItemBase}>Studio</Link>

          <div className="relative"
               onMouseEnter={() => setOpenMenu("about")}
               onMouseLeave={() => setOpenMenu(null)}>
            <button className={`${navItemBase} inline-flex items-center gap-1`}>
              About
              <ChevronDown className="h-4 w-4" />
            </button>
            {openMenu === "about" && (
              <div className="absolute left-0 mt-2 w-48 overflow-hidden rounded-md border border-neutral-800 bg-black shadow-lg">
                <Link href="#story" className={dropdownLink}>Our Story</Link>
                <Link href="#team" className={dropdownLink}>Therapists</Link>
                <Link href="#careers" className={dropdownLink}>Careers</Link>
              </div>
            )}
          </div>

          <Link href="#gallery" className={navItemBase}>Gallery</Link>
          <Link href="#news" className={navItemBase}>News</Link>
          <Link href="#contact" className={`${navItemBase} text-[#d4af37]`}>Contact</Link>
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a href="tel:+123456789" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1.5 text-sm hover:border-[#d4af37] hover:text-[#d4af37]">
            <PhoneIcon className="h-4 w-4 text-[#d4af37]" />
            <span>Call</span>
          </a>
          <a href="mailto:info@myspa.com" className="inline-flex items-center gap-2 rounded-full border border-neutral-800 px-3 py-1.5 text-sm hover:border-[#d4af37] hover:text-[#d4af37]">
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
              <div className="pl-3 pb-3 text-sm">
                <Link href="#swedish" className="block py-1.5 text-neutral-300 hover:text-[#d4af37]">Swedish Massage</Link>
                <Link href="#deep" className="block py-1.5 text-neutral-300 hover:text-[#d4af37]">Deep Tissue</Link>
                <Link href="#hot-stone" className="block py-1.5 text-neutral-300 hover:text-[#d4af37]">Hot Stone</Link>
              </div>
            </details>
            <Link href="#studio" className="block py-2 text-sm hover:text-[#d4af37]">Studio</Link>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-sm font-medium hover:text-[#d4af37]">
                <span>About</span>
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-3 pb-3 text-sm">
                <Link href="#story" className="block py-1.5 text-neutral-300 hover:text-[#d4af37]">Our Story</Link>
                <Link href="#team" className="block py-1.5 text-neutral-300 hover:text-[#d4af37]">Therapists</Link>
                <Link href="#careers" className="block py-1.5 text-neutral-300 hover:text-[#d4af37]">Careers</Link>
              </div>
            </details>
            <Link href="#gallery" className="block py-2 text-sm hover:text-[#d4af37]">Gallery</Link>
            <Link href="#news" className="block py-2 text-sm hover:text-[#d4af37]">News</Link>
            <Link href="#contact" className="block py-2 text-sm text-[#d4af37]">Contact</Link>

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
