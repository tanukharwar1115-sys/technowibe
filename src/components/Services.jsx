import {
  Workflow,
  Bot,
  Users,
  Target,
  Plug,
  Settings,
  Mail,
  Globe,
  Layers,
} from "lucide-react";
import { useState } from "react";
import { services } from "../data/content";
import Reveal from "./Reveal";

const ICONS = {
  workflow: Workflow,
  bot: Bot,
  users: Users,
  target: Target,
  plug: Plug,
  settings: Settings,
  mail: Mail,
  globe: Globe,
  layers: Layers,
};

export default function Services() {
  // Hover reveals the flow on desktop; tap does the same on touch devices.
  const [tapped, setTapped] = useState(null);

  return (
    <section id="services" className="py-16 sm:py-24 border-b border-white/5">
      <div className="section-container">
        <Reveal className="max-w-2xl mb-10 sm:mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            What I can build for you
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div
                  className="card group p-4 sm:p-6 h-full cursor-default flex sm:block gap-4"
                  onClick={() => setTapped(tapped === i ? null : i)}
                >
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-[var(--accent-bg)] flex items-center justify-center sm:mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-sm text-[var(--text-dim)]">
                    {s.desc}
                  </p>

                  <div
                    className={`mt-4 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100 ${
                      tapped === i ? "max-h-20 !opacity-100" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-1.5">
                      {s.flow.map((step, j) => (
                        <span key={step} className="flex items-center gap-1.5">
                          <span className="rounded-md border border-[var(--accent)]/30 bg-[var(--accent-bg)] px-2.5 py-1 text-[11px] text-[var(--accent)]">
                            {step}
                          </span>
                          {j < s.flow.length - 1 && (
                            <span className="text-[var(--accent)]/40 text-xs">
                              —
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
