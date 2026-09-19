import { journey } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 border-b border-white/5 bg-[var(--bg-alt)]">
      <div className="section-container">
        <Reveal className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            From curiosity to production systems
          </h2>
          <p className="mt-4 text-[var(--text-dim)]">
            I focus on practical, end-to-end automation systems that solve real
            operational problems — not demos. Here's the path that got me here.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {journey.map((j, i) => (
            <Reveal key={j.step} delay={i * 80}>
              <div className="relative card p-6 h-full">
                <span className="text-4xl font-semibold text-white/10">
                  {j.step}
                </span>
                <h3 className="mt-4 font-medium text-lg">{j.title}</h3>
                <p className="mt-2 text-sm text-[var(--text-dim)]">{j.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
