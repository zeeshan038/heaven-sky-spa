import Link from "next/link";
export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black/80">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#d4af37] text-black font-extrabold">HS</span>
              <span className=" font-semibold tracking-wide">SERENA AMORE HAVEN SPA</span>
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              Premium black-and-gold boutique spa. Relaxation, restoration, and glow.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li><Link href="/#services" className="hover:text-[#d4af37]">Services</Link></li>
              <li><Link href="/#about" className="hover:text-[#d4af37]">About</Link></li>
              <li><Link href="/contact" className="hover:text-[#d4af37]">Contact</Link></li>
            </ul>
          </div>

     

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>WhatsApp: +971 56 742 2137</li>
              <li>Email: serenaamorehavenspa@gmail.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-neutral-400">
              <li>Open 24/7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} SERENA AMORE HAVEN SPA. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/share/1BG9BbEHnn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 hover:border-[#d4af37]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/serenaamorehaven?igsh=Z2Q1MDBxNGdqd2Q1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 hover:border-[#d4af37]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm0 2h10c1.67 0 3 1.33 3 3v10c0 1.67-1.33 3-3 3H7c-1.67 0-3-1.33-3-3V7c0-1.67 1.33-3 3-3zm11 1.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zM12 7a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </a>
            <a
              href="https://wa.me/971567422137"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-800 hover:border-[#25D366]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.67-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.08 4.487.71.306 1.264.489 1.696.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.007-1.41.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
                <path d="M20.52 3.48A11.927 11.927 0 0012 0C5.383 0 0 5.383 0 12c0 2.118.55 4.112 1.515 5.84L0 24l6.343-1.66A11.94 11.94 0 0012 24c6.617 0 12-5.383 12-12 0-3.197-1.244-6.117-3.48-8.52zM12 22.06c-1.85 0-3.57-.5-5.05-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38A9.94 9.94 0 012.94 12c0-5.01 4.05-9.06 9.06-9.06 2.43 0 4.72.95 6.43 2.67A9.02 9.02 0 0121.06 12c0 5.01-4.05 9.06-9.06 9.06z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
