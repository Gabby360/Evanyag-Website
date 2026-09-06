import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { BUSINESSES } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Businesses() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="businesses" className="relative bg-ink py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="label-eyebrow text-white/70">Our Business Divisions</span>
              </div>
              <h2 className="display-lg text-white">Three core pillars.</h2>
            </div>
            <p className="max-w-md text-sm text-white/70">
              Integrated operations across logistics haulage, cold storage distribution, and commercial agricultural farming.
            </p>
          </div>
        </Reveal>

        {/* Desktop Expanding Panels (Hidden on mobile) */}
        <div className="hidden h-[620px] gap-4 lg:flex">
          {BUSINESSES.map((biz, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={biz.name}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "relative flex cursor-pointer flex-col justify-between overflow-hidden border border-white/15 p-8 transition-all duration-700 ease-out",
                  isActive ? "flex-[3.2] bg-ink-soft" : "flex-1 bg-ink hover:border-white/30",
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={biz.image}
                    alt={biz.name}
                    className={cn(
                      "h-full w-full object-cover transition-all duration-700",
                      isActive ? "scale-105 opacity-75 grayscale-0" : "scale-100 opacity-25 grayscale",
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>

                {/* Content Header */}
                <div className="relative z-10 flex items-center justify-between">
                  <span
                    className={cn(
                      "font-display text-5xl sm:text-6xl font-extrabold tracking-tight transition-colors duration-300",
                      isActive ? "text-ember" : "text-white/40",
                    )}
                  >
                    {biz.index}
                  </span>
                  {isActive && (
                    <a
                      href={biz.href}
                      target={biz.external ? "_blank" : "_self"}
                      rel={biz.external ? "noopener noreferrer" : undefined}
                      className="flex h-12 w-12 items-center justify-center bg-ember text-white shadow-md transition-transform duration-300 hover:scale-110"
                      aria-label={`Explore ${biz.name}`}
                    >
                      <ArrowUpRight className="h-6 w-6" />
                    </a>
                  )}
                </div>

                <div className="relative z-10">
                  {isActive ? (
                    <div className="space-y-3 animate-in fade-in duration-500">
                      <span className="block text-[11px] font-extrabold tracking-[0.2em] text-ember uppercase">
                        {biz.sector}
                      </span>
                      <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                        {biz.name}
                      </h3>
                      <p className="max-w-lg text-sm leading-relaxed text-white/80">
                        {biz.description}
                      </p>
                    </div>
                  ) : (
                    <div className="flex h-full flex-col justify-end">
                      <h3 className="font-display text-2xl font-bold tracking-tight text-white/70 [writing-mode:vertical-rl] rotate-180">
                        {biz.name}
                      </h3>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Stacked Layout (Visible on mobile/tablet) */}
        <div className="grid gap-8 lg:hidden">
          {BUSINESSES.map((biz) => (
            <Reveal key={biz.name}>
              <div className="group overflow-hidden border border-white/15 bg-ink-soft">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={biz.image}
                    alt={biz.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-ink/80 px-3.5 py-1 font-display text-xl font-extrabold text-ember backdrop-blur-sm">
                    {biz.index}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-ember uppercase">
                    {biz.sector}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {biz.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {biz.description}
                  </p>
                  <div className="mt-6">
                    <a
                      href={biz.href}
                      target={biz.external ? "_blank" : "_self"}
                      rel={biz.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-ember uppercase hover:underline"
                    >
                      <span>{biz.external ? "Visit ECL Cold Store Site" : "Read More"}</span>
                      {biz.external ? (
                        <ExternalLink className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
