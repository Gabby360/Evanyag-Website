import { Reveal } from "@/components/site/Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <Reveal>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="label-eyebrow text-muted-foreground">About EVANYAG</span>
              </div>
              <h2 className="display-lg text-ink">
                Built for Africa&apos;s growth.
              </h2>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal delay={150}>
              <p className="text-xl leading-relaxed text-ink/90 font-medium sm:text-2xl sm:leading-relaxed">
                Evanyag Company Limited is a wholly Ghanaian-owned enterprise committed to strengthening supply chains, food security, and regional commerce across Ghana and West Africa.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-base leading-relaxed text-muted-foreground">
                Operating with three core divisions — ECL Transport, ECL Cold Store, and ECL Farms — we bring deep operational expertise, modern logistics fleets, state-of-the-art cold chain infrastructure, and sustainable agricultural practices under a unified corporate banner.
              </p>
            </Reveal>

            <Reveal delay={450}>
              <div className="grid gap-6 border-t border-line pt-8 sm:grid-cols-3">
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-ink">100%</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Ghanaian Owned
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-ink">3</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Core Business Arms
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-3xl font-extrabold text-ink">4+</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    West Africa Corridors
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
