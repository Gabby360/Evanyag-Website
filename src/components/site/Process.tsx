import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PROCESS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Process() {
  const [activeStep, setActiveStep] = useState("02");

  return (
    <section className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-16">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-ember" />
              <span className="text-xs font-semibold tracking-widest text-slate-500 uppercase">
                How It Works
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-tight tracking-tight">
              How We Deliver <br />
              <span className="text-ember">Value</span> to You
            </h2>
          </div>
        </Reveal>

        {/* 4-Column Seamless Layout with Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-slate-200/80 items-stretch">
          {PROCESS.map((item, i) => {
            const isActive = activeStep === item.step;
            return (
              <Reveal key={item.step} delay={i * 80}>
                <div
                  onMouseEnter={() => setActiveStep(item.step)}
                  className={cn(
                    "group relative flex h-full flex-col justify-between p-6 sm:p-8 transition-all duration-300 cursor-pointer",
                    "border-b border-slate-200/80 lg:border-b-0",
                  )}
                >
                  <div>
                    <span
                      className={cn(
                        "font-display text-5xl sm:text-6xl font-extrabold transition-colors duration-300",
                        isActive ? "text-ember" : "text-slate-200 group-hover:text-slate-400",
                      )}
                    >
                      {item.step}
                    </span>
                    <h3 className="mt-6 font-display text-lg sm:text-xl font-bold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-500 max-w-xs">
                      {item.body}
                    </p>
                  </div>

                  {/* Active Bottom Accent Line */}
                  <div
                    className={cn(
                      "mt-8 h-0.5 w-full transition-all duration-300",
                      isActive ? "bg-ember" : "bg-transparent group-hover:bg-slate-300",
                    )}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
