import { Reveal } from "@/components/site/Reveal";
import { CAPABILITIES } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Left Column: Heading & Description */}
          <Reveal>
            <div className="sticky top-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                  Industry Expertise
                </span>
              </div>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0f172a] leading-tight">
                Operational Coverage
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-500">
                Evanyag Company Limited operates across three distinct but complementary sectors. Our subsidiaries give us the depth and reach to serve a wide range of clients, from individual consumers to large-scale commercial partners across West Africa.
              </p>
            </div>
          </Reveal>

          {/* Right Column: Single Stacked List with Borders & Dark Hover State */}
          <div className="divide-y divide-slate-200/80 border-y border-slate-200/80">
            {CAPABILITIES.map((cap, i) => {
              const num = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
              return (
                <Reveal key={cap} delay={i * 40}>
                  <div className="group flex cursor-pointer items-center justify-between py-5 px-6 transition-all duration-300 hover:bg-[#050b14]">
                    <div className="flex items-center gap-6 flex-1">
                      <span className="font-mono text-xs font-semibold text-slate-400 transition-colors group-hover:text-ember w-8 shrink-0">
                        {num}
                      </span>
                      <h3 className="font-display text-base sm:text-xl font-bold text-[#0f172a] transition-colors group-hover:text-white">
                        {cap}
                      </h3>
                    </div>
                    <ArrowRight className="h-4 w-4 text-ember opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
