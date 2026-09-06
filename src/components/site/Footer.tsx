import { CONTACT, FOOTER_SECTORS, FOOTER_SERVICES, NAV_LINKS } from "@/lib/site-data";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-16 text-white">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <a href="#top" className="inline-block group" aria-label="EVANYAG home">
              <div className="inline-flex items-center rounded-lg bg-white/95 px-3 py-2 shadow-sm border border-white/20 transition-transform duration-300 group-hover:scale-[1.02]">
                <img
                  src={logoImg}
                  alt="EVANYAG Company Limited Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-white/60">
              Evanyag Company Limited is a wholly Ghanaian-owned corporate group delivering excellence across haulage &amp; transport, cold storage distribution, and sustainable agriculture in Ghana and West Africa.
            </p>
            <div className="text-xs text-white/50 space-y-1">
              <p>{CONTACT.hours}</p>
              <p>{CONTACT.address}</p>
            </div>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Our Services
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#businesses" className="transition-colors hover:text-ember">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industry Sectors */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Sectors
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {FOOTER_SECTORS.map((sec) => (
                <li key={sec}>
                  <a href="#capabilities" className="transition-colors hover:text-ember">
                    {sec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Links & Contact */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="mt-6 space-y-3 text-sm text-white/60">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-ember">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-6">
              <a href={CONTACT.phoneHref} className="block text-sm font-bold text-ember">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="block mt-1 text-xs text-white/60 hover:underline">
                {CONTACT.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} EVANYAG Company Limited. All rights reserved. Wholly Ghanaian-Owned.
          </p>
          <div className="flex gap-6">
            <a href="#top" className="hover:text-white">Privacy Policy</a>
            <a href="#top" className="hover:text-white">Terms of Service</a>
            <a href="#top" className="hover:text-white">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
