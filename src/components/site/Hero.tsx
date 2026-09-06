import { useRef, useState } from "react";
import { ArrowUpRight, Phone, MoveDown } from "lucide-react";
import heroImg from "@/assets/hero-logistics.jpg";
import { CONTACT, CORRIDORS } from "@/lib/site-data";

const HEADLINE = ["Fastest", "& Secured", "Logistics"];

const MARKERS = [
  { label: "Accra", x: 62, y: 60 },
  { label: "Kumasi", x: 72, y: 44 },
  { label: "Ouaga", x: 82, y: 28 },
  { label: "Bamako", x: 90, y: 15 },
];

export function Hero() {
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLElement | null>(null);

  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPointer({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
    >
      {/* Full Hero Image (New User Provided Picture) */}
      <div className="absolute inset-y-0 right-0 z-0 flex items-center justify-end w-full lg:w-[65%] xl:w-[60%] pointer-events-none overflow-hidden">
        <img
          src={heroImg}
          alt="EVANYAG logistics operations - yellow and white haulage trucks, container vessel, and freight aircraft"
          width={1920}
          height={1280}
          className="w-full h-auto max-h-[92vh] object-contain object-right"
          fetchPriority="high"
        />
        {/* Soft edge gradient blend */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#070e17] via-[#070e17]/30 to-transparent" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#070e17] via-transparent to-[#070e17]/20" />
      </div>

      {/* Solid Left Side Overlay for Text Readability */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[45%] bg-[#070e17] z-0 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#070e17] to-transparent pointer-events-none z-0" />

      <div
        className="pointer-events-none absolute -inset-40 opacity-70 transition-opacity duration-500"
        style={{
          background: `radial-gradient(38rem 38rem at ${pointer.x * 100}% ${pointer.y * 100}%, oklch(0.68 0.187 45 / 0.22), transparent 65%)`,
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-[0.13] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:110px_110px] [mask-image:radial-gradient(120%_80%_at_20%_80%,black,transparent)]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1440 900"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-40 700 C 320 640, 460 400, 780 360 S 1240 240, 1520 120"
          stroke="oklch(0.68 0.187 45)"
          strokeWidth="1.2"
          strokeDasharray="10 14"
          className="route-dash"
        />
        <path
          d="M-40 830 C 400 800, 640 620, 980 560 S 1320 470, 1520 380"
          stroke="white"
          strokeOpacity="0.22"
          strokeWidth="1"
          strokeDasharray="4 18"
          className="route-dash"
        />
      </svg>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        {MARKERS.map((m, i) => (
          <span
            key={m.label}
            className="absolute flex items-center gap-2 animate-in fade-in fill-mode-both duration-1000"
            style={{ left: `${m.x}%`, top: `${m.y}%`, animationDelay: `${900 + i * 180}ms` }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="text-[10px] font-semibold tracking-[0.24em] text-white/60 uppercase">
              {m.label}
            </span>
          </span>
        ))}
      </div>

      <div className="pointer-events-none absolute left-5 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="block rotate-180 text-[10px] font-semibold tracking-[0.42em] text-white/40 uppercase [writing-mode:vertical-rl]">
          Ghana &middot; West Africa
        </span>
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-32 pb-12 sm:px-8 sm:pb-16">
        <div className="max-w-5xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-ember" />
            <span className="label-eyebrow text-white/70">
              International Logistics &middot; Logistics &amp; Haulage
            </span>
          </div>

          <h1 className="display-xl">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <span
                  className="block animate-in fade-in slide-in-from-bottom-12 fill-mode-both duration-1000"
                  style={{ animationDelay: `${120 + i * 130}ms` }}
                >
                  {line === "Logistics" ? (
                    <>
                      <span className="hero-shine text-ember">Logistics</span> Solution
                    </>
                  ) : (
                    line
                  )}
                </span>
              </span>
            ))}
            <span className="block overflow-hidden">
              <span
                className="block animate-in fade-in slide-in-from-bottom-12 fill-mode-both text-transparent duration-1000 [-webkit-text-stroke:1px_oklch(1_0_0/0.35)]"
                style={{ animationDelay: "510ms" }}
              >
                &amp; services
              </span>
            </span>
          </h1>

          <div className="mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.1fr_auto] md:items-end">
            <div>
              <p className="max-w-xl text-[15px] leading-relaxed text-white/70">
                Evanyag Company Limited is a wholly Ghanaian-owned company delivering
                integrated solutions in food supply, logistics and transport, and
                agriculture — across Ghana and into West Africa.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {CORRIDORS.map((c) => (
                  <li
                    key={c}
                    className="border border-white/20 bg-ink-soft px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/80 uppercase"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#businesses"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-ember px-7 py-4 text-[12px] font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-ember-deep"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">All Services</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="group inline-flex items-center gap-3 border border-white/30 bg-ink-soft px-6 py-4 text-white transition-colors hover:border-white hover:bg-ink"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-ember">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-[12px] font-bold tracking-[0.14em] uppercase">
                  {CONTACT.phone}
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-6 text-white/40">
          <span className="text-[11px] font-medium tracking-widest uppercase">
            Scroll down to explore
          </span>
          <a
            href="#about"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-ember hover:text-white"
            aria-label="Scroll down"
          >
            <MoveDown className="h-4 w-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
