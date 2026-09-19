import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { liveConcept } from "../data/content";
import Reveal from "./Reveal";

export default function LiveConcept() {
  const [active, setActive] = useState(-1);
  const ref = useRef(null);

  // Only run the flow while the section is on screen.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let timer;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timer = setInterval(
            () => setActive((a) => (a + 1) % (liveConcept.length + 2)),
            900,
          );
        } else {
          clearInterval(timer);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(ref.current);
    return () => {
      clearInterval(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={ref} className="py-16 sm:py-24 border-b border-white/5 bg-[var(--bg-alt)]">
      <div className="section-container">
        <Reveal className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
            Live Concept
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            A typical lead-to-appointment automation
          </h2>
          <p className="mt-4 text-[var(--text-dim)]">
            One example of how a lead moves through a fully automated system,
            start to finish.
          </p>
        </Reveal>

        <div className="flex flex-col lg:flex-row items-stretch gap-4">
          {liveConcept.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 90} className="lg:flex-1">
              <div className="flex items-center h-full">
                <div
                  className={`card flex-1 p-5 h-full transition-all duration-500 ${
                    active === i
                      ? "border-[var(--accent)]/60 -translate-y-1 shadow-[0_10px_30px_-12px_rgba(74,222,128,0.45)]"
                      : active > i
                        ? "border-[var(--accent)]/25"
                        : ""
                  }`}
                >
                  <span className="text-xs text-[var(--accent)] font-medium flex items-center gap-1.5">
                    Stage {i + 1}
                    {active > i && <Check size={12} />}
                  </span>
                  <h3 className="mt-1 font-medium">{stage.label}</h3>
                  <p className="mt-1 text-sm text-[var(--text-dim)]">
                    {stage.desc}
                  </p>
                </div>
                {i < liveConcept.length - 1 && (
                  <ArrowRight
                    size={18}
                    className={`hidden lg:block mx-3 shrink-0 transition-colors duration-500 ${
                      active > i ? "text-[var(--accent)]" : "text-white/20"
                    }`}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
