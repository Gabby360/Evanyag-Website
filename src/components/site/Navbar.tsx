import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT, NAV_LINKS } from "@/lib/site-data";
import logoImg from "@/assets/logo.png";

function Wordmark() {
  return (
    <a href="#top" className="group flex items-center gap-2" aria-label="EVANYAG home">
      <img
        src={logoImg}
        alt="EVANYAG Company Limited Logo"
        className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
      />
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-[#e2e6eb] transition-all duration-300 border-b border-[#cbd5e1]/70 shadow-xs",
          scrolled && !open ? "py-3 shadow-md bg-[#e2e6eb]" : "py-4",
        )}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
          <Wordmark />

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-[13px] font-medium tracking-wide text-[#475569] transition-colors hover:text-ember",
                  "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-ember after:transition-all after:duration-300 hover:after:w-full",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden bg-ember px-5 py-2.5 text-[12px] font-bold tracking-[0.14em] text-white uppercase transition-colors duration-300 hover:bg-ember-deep sm:inline-block rounded-none shadow-xs"
            >
              Get a quote
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center border border-[#cbd5e1] text-[#0f172a] hover:bg-white/60 transition-colors lg:hidden rounded-none"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-ink transition-[clip-path,opacity] duration-600 lg:hidden",
          open
            ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_92%_5%)]"
            : "pointer-events-none opacity-0 [clip-path:circle(0%_at_92%_5%)]",
        )}
      >
        <div className="flex h-full flex-col justify-between px-6 pt-28 pb-10">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-baseline justify-between border-b border-white/10 py-5 text-white"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span className="font-display text-[2rem] font-extrabold tracking-[-0.04em]">
                  {link.label}
                </span>
                <span className="text-[10px] tracking-[0.3em] text-ember">0{i + 1}</span>
              </a>
            ))}
          </nav>
          <div className="space-y-3 text-white/70">
            <a href={`mailto:${CONTACT.email}`} className="block text-sm">
              {CONTACT.email}
            </a>
            <p className="text-sm">{CONTACT.address}</p>
          </div>
        </div>
      </div>
    </>
  );
}
