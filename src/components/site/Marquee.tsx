const ITEMS = [
  "ECL Transport",
  "ECL Cold Store",
  "ECL Farms",
  "Cross-Border Freight",
  "Cold Chain Integrity",
  "Heavy Haulage",
];

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-sand py-4 text-ink">
      <div className="flex w-max marquee-track">
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-4">
            <span className="font-display text-sm font-bold tracking-[0.2em] uppercase">
              {item}
            </span>
            <span className="h-1.5 w-1.5 bg-ember" />
          </div>
        ))}
      </div>
    </div>
  );
}
