import { useEffect, useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { useReveal } from "@/hooks/use-reveal";
import { STATS } from "@/lib/site-data";

function AnimatedCounter({ target, start }: { target: number; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Easing out quad
      const easedProgress = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, start]);

  return <span>{count}</span>;
}

export function Stats() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section ref={ref} className="relative border-y border-line bg-sand py-20 text-ink">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <div className="border-l-2 border-ember pl-6">
                <div className="font-display text-4xl font-extrabold text-ink sm:text-6xl">
                  <AnimatedCounter target={stat.value} start={shown} />+
                </div>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
