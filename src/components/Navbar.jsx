import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/content";

const LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(
      Boolean,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <a href="#top" className="font-semibold text-lg tracking-tight">
          {profile.name}
          <span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--text-dim)]">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative transition-colors hover:text-white ${
                active === l.href ? "text-white" : ""
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-[var(--accent)] transition-all duration-300 ${
                  active === l.href ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-[var(--accent)] text-black text-sm font-semibold px-4 py-2 hover:bg-white transition-colors"
        >
          Start a Project
        </a>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[var(--bg)] border-t border-white/10 px-6 py-4 flex flex-col gap-4 text-[var(--text-dim)]">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full bg-[var(--accent)] text-black text-sm font-semibold px-4 py-2 text-center"
            onClick={() => setOpen(false)}
          >
            Start a Project
          </a>
        </nav>
      )}
    </header>
  );
}
