"use client";

export default function FloatingWhatsApp() {
  const phone = "971567422137"; // +971 56 742 2137 without symbols/spaces
  const href = `https://wa.me/${phone}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-1 ring-black/30 transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <WhatsAppIcon className="h-7 w-7 text-white" />
    </a>
  );
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.472-.149-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.074-.297-.15-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.612-.916-2.206-.242-.579-.487-.5-.67-.51l-.572-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.08 4.487.71.306 1.264.489 1.696.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.007-1.41.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347z" />
      <path d="M20.52 3.48A11.927 11.927 0 0012 0C5.383 0 0 5.383 0 12c0 2.118.55 4.112 1.515 5.84L0 24l6.343-1.66A11.94 11.94 0 0012 24c6.617 0 12-5.383 12-12 0-3.197-1.244-6.117-3.48-8.52zM12 22.06c-1.85 0-3.57-.5-5.05-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38A9.94 9.94 0 012.94 12c0-5.01 4.05-9.06 9.06-9.06 2.43 0 4.72.95 6.43 2.67A9.02 9.02 0 0121.06 12c0 5.01-4.05 9.06-9.06 9.06z" />
    </svg>
  );
}
