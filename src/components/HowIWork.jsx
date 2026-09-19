import { howIWork } from "../data/content";
import Reveal from "./Reveal";

export default function HowIWork() {
  return (
    <section className="py-16 sm:py-24 border-b border-white/5 bg-[var(--bg-alt)]">
      <div className="section-container">
        <Reveal className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
            How I Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            A clear, repeatable process
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howIWork.map((h, i) => (
            <Reveal key={h.step} delay={i * 80}>
              <div className="relative">
                <span className="text-sm font-mono text-[var(--accent)]">
                  {h.step}
                </span>
                <h3 className="mt-2 font-medium text-lg">{h.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-dim)]">{h.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
