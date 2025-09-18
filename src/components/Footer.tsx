export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/80">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#d4af37] text-black font-extrabold">HS</span>
              <span className="text-lg font-semibold tracking-wide">Heaven Sky Spa</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              Premium black-and-gold boutique spa. Relaxation, restoration, and glow.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><a href="#services" className="hover:text-[#d4af37]">Services</a></li>
              <li><a href="#about" className="hover:text-[#d4af37]">About</a></li>
              <li><a href="#contact" className="hover:text-[#d4af37]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>WhatsApp: +971 56 742 2137</li>
              <li>Email: info@myspa.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>Mon–Sun: 10:00 AM – 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Heaven Sky Spa. All rights reserved.</p>
          <p>
            Made with <span className="text-[#d4af37]">♥</span> in black & gold.
          </p>
        </div>
      </div>
    </footer>
  );
}
