<USER_REQUEST>
# BUILD THE WEBSITE FROM MY EXISTING SOURCE CODE

I already have the complete source code for an existing website called **EVANYAG**.

Your task is NOT to redesign this website from scratch.

Your task is to **take the existing code I provide, understand the entire project, and develop the actual working website represented by that code.**

The existing code is the **source of truth** for the website's structure, visual design, content, animations, interactions, responsiveness and functionality.

## 1. FIRST — ANALYZE THE ENTIRE CODEBASE

Before changing or generating anything:

* Inspect every project file.
* Understand the existing folder structure.
* Identify the framework and build system.
* Identify all dependencies.
* Identify every route.
* Identify every React component.
* Identify every CSS/Tailwind style.
* Identify all images and assets.
* Identify all animations.
* Identify all interactive elements.
* Identify all responsive/mobile behavior.
* Identify all forms and buttons.
* Identify all navigation behavior.
* Identify all reusable components and hooks.

Do not start by creating a generic landing page.

The existing source code contains the intended implementation.

## 2. TECHNOLOGY STACK

Preserve the existing technology stack unless there is a genuine technical reason to change something.

The existing project uses:

* React
* TypeScript
* Vite
* TanStack Router
* TanStack React Query
* Tailwind CSS
* Lucide React
* Sonner
* CSS animations
* IntersectionObserver-based reveal animations
* Responsive layouts

The existing project configuration and dependencies are already defined in the supplied source code.

Do not unnecessarily migrate the project to another framework.

## 3. RECREATE THE EXISTING WEBSITE

Build the website represented by the source code as a complete, functional website.

The homepage must preserve the existing section structure:

1. Navigation
2. Hero
3. Moving marquee
4. About
5. Businesses
6. Ca
<truncated 45215 bytes>
mt-10 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[1.1fr_auto] md:items-end">
            <div>
              <p className="max-w-xl text-[15px] leading-relaxed text-white/70">
                Evanyag Company Limited is a wholly Ghanaian-owned company delivering
                integrated solutions in food supply, logistics and transport, and
                agriculture — across Ghana and into West Africa.
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {CORRIDORS.map((c) => (
                  <li
                    key={c}
                    className="border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white/65 uppercase backdrop-blur-sm"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#businesses"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-ember px-7 py-4 text-[12px] font-bold tracking-[0.16em] text-white uppercase transition-colors hover:bg-ember-deep"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
                <span className="relative">All Services</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="group inline-flex items-center gap-3 border border-white/25 px-6 py-4 text-white backdrop-blur-sm transition-colors hover:border-white"
              >
                <span className="flex h-8 w-8 items-c
<truncated 44237 bytes>

NOTE: The output was truncated because it was too long. Use a more targeted query or a smaller range to get the information you need.