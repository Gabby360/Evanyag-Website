import { Reveal } from "@/components/site/Reveal";
import { WHY_US } from "@/lib/site-data";
import { Check } from "lucide-react";
import transportImg from "@/assets/biz-transport.jpg";

export function Trust() {
  return (
    <section className="relative bg-[#070e17] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Heading & 2-Column Checkmark Grid */}
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  Why Choose Us?
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                We Create <br />
                Opportunity and <br />
                Deliver <span className="text-ember">Real</span> <br />
                <span className="text-ember">Results.</span>
              </h2>

              {/* 2-Column Checkmark Feature List */}
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {WHY_US.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center bg-ember text-white rounded-xs mt-0.5">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                    </div>
                    <span className="font-display text-xs sm:text-sm font-bold text-white leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right Column: Haulage Image Card with Orange Banner Overlay */}
          <Reveal delay={150}>
            <div className="relative overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={transportImg}
                alt="EVANYAG heavy transport haulage truck with mining equipment"
                className="h-[440px] sm:h-[520px] w-full object-cover object-center"
              />
              {/* Orange Banner Overlay Box */}
              <div className="absolute bottom-0 left-0 bg-ember p-6 text-white max-w-sm shadow-lg">
                <h4 className="font-display text-lg sm:text-xl font-extrabold tracking-tight">
                  100% Ghanaian-owned
                </h4>
                <p className="mt-1 text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
                  OPERATING ACROSS WEST AFRICA
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
