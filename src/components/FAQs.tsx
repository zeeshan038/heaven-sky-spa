export default function FAQs() {
  const faqs = [
    {
      q: "Do I need to book in advance?",
      a: "Walk-ins are welcome, but we recommend booking in advance to ensure your preferred time and therapist are available.",
    },
    {
      q: "Do you offer male or female therapists?",
      a: "Yes. During booking you can choose a Male or Female therapist and we will accommodate your preference.",
    },
    {
      q: "What is your cancellation policy?",
      a: "Please let us know at least 3 hours prior to your appointment to avoid a cancellation fee.",
    },
    {
      q: "Are you open 24/7?",
      a: "Yes, we are open 24/7 to suit your schedule.",
    },
  ];

  return (
    <section id="faqs" className="px-4 pb-20 pt-6 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-2 h-1 w-28 rounded bg-[#d4af37]" />
        </div>

        <div className="divide-y divide-neutral-800 rounded-2xl border border-neutral-800 bg-neutral-950/50">
          {faqs.map((item, i) => (
            <details key={i} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 text-left text-base text-neutral-200 hover:text-[#d4af37] sm:text-lg">
                <span>{item.q}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 transition-transform group-open:rotate-180"><path d="M6.23 8.97a.75.75 0 0 1 1.06.02L12 13.06l4.71-4.07a.75.75 0 1 1 .98 1.14l-5.2 4.49a.75.75 0 0 1-.98 0L6.21 10.1a.75.75 0 0 1 .02-1.12z" /></svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-neutral-400 sm:text-base">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
