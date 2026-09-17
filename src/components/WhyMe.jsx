import { MessageSquare, Zap, ShieldCheck, Handshake } from "lucide-react";
import { whyMe, techStack } from "../data/content";
import Reveal from "./Reveal";

const ICONS = {
  message: MessageSquare,
  zap: Zap,
  shield: ShieldCheck,
  handshake: Handshake,
};

export default function WhyMe() {
  return (
    <section id="why" className="py-24 border-b border-white/5">
      <div className="section-container">
        <Reveal className="max-w-2xl mb-14">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
            Why Work With Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            What you actually get
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {whyMe.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <Reveal key={item.title} delay={i * 80}>
                <div className="card p-6 h-full flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-bg)] flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm text-[var(--text-dim)]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-16">
          <p className="text-center text-xs uppercase tracking-widest text-[var(--text-dim)] mb-6">
            Tools I build with
          </p>
          <div className="marquee-mask overflow-hidden">
            <div className="marquee-track flex gap-3 w-max">
              {[...techStack, ...techStack].map((tool, i) => (
                <span
                  key={`${tool}-${i}`}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[var(--text-dim)] whitespace-nowrap"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
