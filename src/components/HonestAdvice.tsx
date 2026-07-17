import Link from "next/link";

export function HonestAdvice() {
  return (
    <section className="section-padding bg-white">
      <div className="container-wide max-w-4xl">
        <p className="section-eyebrow">Honest advice</p>
        <h2 className="section-title mt-2">Do You Need a Shore Excursion in Rhodes?</h2>
        <p className="section-subtitle">
          The honest answer: you can enjoy the Old Town independently. An excursion becomes worthwhile
          when you want to reach Lindos and the wider island properly.
        </p>

        <div className="mt-10 space-y-8">
          <div className="card-feature">
            <h3 className="font-display text-xl font-bold text-gray-900">
              You can explore the Old Town independently — and many passengers do
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Rhodes&apos; medieval Old Town is compact and usually close to the port, making an
              independent day realistic for most passengers:
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Street of the Knights and Palace exterior
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Jewish Quarter and Suleiman Mosque
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Socratous Street market lanes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-coastal-600">✓</span> Mandraki harbour and the New Town waterfront
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">
              Set a 60–90 minute return buffer and confirm your all-aboard time. The ship will not wait.
            </p>
          </div>

          <div className="card-accent">
            <h3 className="font-display text-xl font-bold text-gray-900">
              Lindos and the wider island need more planning
            </h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Rhodes&apos; other great sights are too far from the terminal for casual exploration.
              Organised transport and disciplined timing matter for:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Lindos and the Acropolis</strong> — a 50–60 minute road journey and a sustained climb
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Anthony Quinn Bay and the coast</strong> — no walking option, transfer required
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Kamiros and the interior</strong> — best reached with a private driver or excursion
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-maple-600 mt-0.5">→</span>
                <span>
                  <strong>Symi and island-hopping</strong> — depends on a scheduled sea crossing
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/compare/rhodes-old-town-or-lindos" className="btn-secondary text-sm">
            Old Town or Lindos?
          </Link>
          <Link href="/compare/can-you-walk-from-rhodes-cruise-port" className="btn-secondary text-sm">
            Explore independently?
          </Link>
          <Link href="/can-you-walk-from-rhodes-cruise-port/" className="btn-secondary text-sm">
            Independent Rhodes guide
          </Link>
        </div>
      </div>
    </section>
  );
}
