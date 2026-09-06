import { Reveal } from "@/components/site/Reveal";

interface MapNode {
  name: string;
  x: number;
  y: number;
  isHub?: boolean;
  alignLeft?: boolean;
}

const MAP_NODES: MapNode[] = [
  { name: "Mali", x: 25.0, y: 20.0, isHub: false },
  { name: "Burkina Faso", x: 55.0, y: 30.0, isHub: false },
  { name: "Côte d’Ivoire", x: 30.0, y: 55.0, isHub: false },
  { name: "Ashanti", x: 58.0, y: 65.0, isHub: false },
  { name: "Eastern", x: 68.0, y: 68.0, isHub: false },
  { name: "Accra, Ghana", x: 73.0, y: 72.0, isHub: true },
];

export function Reach() {
  return (
    <section id="reach" className="relative bg-[#070e17] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Heading, Paragraph & Corridors/Regions Grid */}
          <Reveal>
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-ember" />
                <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
                  Movement &amp; Reach
                </span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                Connecting <br />
                markets across <br />
                <span className="text-ember">West Africa</span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400">
                Our fleet moves goods, mining equipment and heavy machinery across Ghana and into Mali, Burkina Faso, Côte d’Ivoire, etc. Our frozen food distribution reaches wholesalers, retailers and consumers across Ghana’s Eastern, Ashanti and Greater Accra regions.
              </p>

              {/* Sub-grid: Cross-Border Corridors & Distribution Regions */}
              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 pt-2">
                {/* Column 1 */}
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-ember uppercase">
                    Cross-Border Corridors
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {["Ghana", "Mali", "Burkina Faso", "Côte d’Ivoire"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-bold text-white">
                        <span className="h-1.5 w-1.5 rotate-45 bg-ember shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="text-[11px] font-bold tracking-[0.2em] text-ember uppercase">
                    Distribution Regions
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {["Eastern Region", "Ashanti Region", "Greater Accra"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm font-bold text-white">
                        <span className="h-1.5 w-1.5 rotate-45 bg-slate-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Route Map Graphic */}
          <Reveal delay={150}>
            <div className="relative aspect-square sm:aspect-[4/3] w-full overflow-hidden border border-white/10 bg-[#040810] p-6 shadow-2xl">
              {/* Background Grid Pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />

              {/* Glowing Radial Highlight at Accra Hub */}
              <div
                className="pointer-events-none absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 transition-opacity"
                style={{
                  left: "73%",
                  top: "72%",
                  background: "radial-gradient(circle, rgba(249,87,22,0.45) 0%, rgba(249,87,22,0.15) 45%, transparent 70%)",
                }}
              />

              {/* SVG Connecting Paths */}
              <svg className="absolute inset-0 h-full w-full opacity-90" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Curved radiating lines from Accra (73, 72) */}
                <path d="M 73.0 72.0 Q 45.0 40.0, 25.0 20.0" stroke="#f95716" strokeWidth="0.6" fill="none" />
                <path d="M 73.0 72.0 Q 66.0 48.0, 55.0 30.0" stroke="#f95716" strokeWidth="0.6" fill="none" />
                <path d="M 73.0 72.0 Q 50.0 66.0, 30.0 55.0" stroke="#f95716" strokeWidth="0.6" fill="none" />
                <path d="M 73.0 72.0 Q 66.0 69.0, 58.0 65.0" stroke="#f95716" strokeWidth="0.6" fill="none" />
                <path d="M 73.0 72.0 Q 71.0 70.0, 68.0 68.0" stroke="#f95716" strokeWidth="0.6" fill="none" />
              </svg>

              {/* Map Location Nodes */}
              {MAP_NODES.map((node) => (
                <div
                  key={node.name}
                  className={`absolute flex items-center gap-1.5 -translate-y-1/2 ${
                    node.alignLeft ? "flex-row-reverse -translate-x-full" : "-translate-x-0"
                  }`}
                  style={{ left: `${node.x}%`, top: `${node.y}%` }}
                >
                  <span className="relative flex h-2 w-2 shrink-0 items-center justify-center">
                    {node.isHub ? (
                      <>
                        <span className="absolute inline-flex h-3.5 w-3.5 animate-ping rounded-full bg-ember opacity-75" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white ring-2 ring-ember" />
                      </>
                    ) : (
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white/90" />
                    )}
                  </span>
                  <span
                    className={
                      node.isHub
                        ? "text-xs font-bold text-white whitespace-nowrap drop-shadow"
                        : "text-[10px] font-medium text-slate-300 whitespace-nowrap"
                    }
                  >
                    {node.name}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

