import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Check, MapPin } from "lucide-react";
import {
  profile,
  heroBadge,
  heroQuote,
  heroPipeline,
  heroTrust,
} from "../data/content";
import profilePhoto from "../assets/profile.png";

export default function Hero() {
  // Cycles the pipeline so the hero demonstrates an automation running.
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(
      () => setStage((s) => (s + 1) % (heroPipeline.length + 1)),
      1100,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden border-b border-white/5"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dot-grid" />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(760px 420px at 72% 12%, rgba(74,222,128,0.15), transparent 68%)",
        }}
      />

      <div className="section-container">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-9 sm:gap-14 lg:gap-10 items-center lg:items-start">
          {/* Left: copy */}
          <div>
            <span className="animate-rise inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-[var(--text-dim)]">
              <Sparkles size={13} className="text-[var(--accent)]" />
              {heroBadge}
            </span>

            <div className="animate-rise mt-4" style={{ animationDelay: "80ms" }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-bg)] px-4 py-1.5 text-xs font-medium text-[var(--accent)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                </span>
                Open for Projects
              </span>
            </div>

            <h1
              className="animate-rise mt-6 sm:mt-7 text-[2.45rem] leading-[1.05] sm:text-6xl font-semibold"
              style={{ animationDelay: "160ms" }}
            >
              AI AUTOMATION
              <br />
              <span className="gradient-text">SPECIALIST</span>
            </h1>

            <p
              className="animate-rise mt-5 text-xl sm:text-2xl font-medium text-[var(--text)]"
              style={{ animationDelay: "240ms" }}
            >
              Websites, SaaS &amp; Agents.
            </p>

            <p
              className="animate-rise mt-5 max-w-xl text-[var(--text-dim)]"
              style={{ animationDelay: "320ms" }}
            >
              {profile.subtitle}
            </p>

            <p
              className="animate-rise mt-6 text-[var(--accent)] font-medium italic"
              style={{ animationDelay: "400ms" }}
            >
              “{heroQuote}”
            </p>

            <div
              className="animate-rise mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4"
              style={{ animationDelay: "480ms" }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-black font-semibold px-7 py-3 hover:bg-white transition-colors"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3 hover:border-white/35 transition-colors"
              >
                See What I Build
              </a>
            </div>

            <div
              className="animate-rise mt-7 sm:mt-10 rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3.5 sm:px-5 sm:py-4 flex flex-wrap items-center gap-x-2 gap-y-2.5"
              style={{ animationDelay: "560ms" }}
            >
              {heroPipeline.map((label, i) => {
                const done = stage > i;
                const live = stage === i;
                return (
                  <span key={label} className="flex items-center gap-2">
                    <span
                      className={`rounded-lg border px-3 py-1.5 text-xs transition-all duration-300 ${
                        live
                          ? "border-[var(--accent)] bg-[var(--accent-bg)] text-[var(--accent)] scale-105"
                          : done
                            ? "border-[var(--accent)]/30 bg-[var(--accent-bg)]/50 text-[var(--accent)]/80"
                            : "border-white/10 bg-white/[0.04] text-[var(--text-dim)]"
                      }`}
                    >
                      {label}
                    </span>
                    {i < heroPipeline.length - 1 && (
                      <span
                        className={`text-xs transition-colors duration-300 ${
                          done ? "text-[var(--accent)]/60" : "text-white/20"
                        }`}
                      >
                        ·—
                      </span>
                    )}
                  </span>
                );
              })}
              <span
                className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all duration-300 ${
                  stage === heroPipeline.length
                    ? "border-[var(--accent)] bg-[var(--accent)] text-black scale-105"
                    : "border-[var(--accent)]/30 bg-[var(--accent-bg)] text-[var(--accent)]"
                }`}
              >
                Done
                <Check size={12} />
              </span>
            </div>
          </div>

          {/* Right: photo + floating cards */}
          <div className="relative flex justify-center lg:justify-end lg:pt-4">
            <div className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px]">
              <div className="animate-spin-slow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[380px] w-[380px] sm:h-[472px] sm:w-[472px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[var(--accent)]/25" />
              <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] sm:h-[520px] sm:w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(74,222,128,0.18), rgba(74,222,128,0.04) 52%, transparent 72%)",
                }}
              />

              {/* Cutout sits on its own disc; the disc supplies the fill the
                  transparent PNG doesn't have. */}
              <div
                className="animate-float-soft relative w-full h-full rounded-full overflow-hidden border border-[var(--accent)]/20 ring-1 ring-white/5"
                style={{
                  background:
                    "radial-gradient(circle at 50% 34%, #1a2f22 0%, #102019 52%, #070c09 100%)",
                  boxShadow: "0 28px 60px rgba(74,222,128,0.28)",
                }}
              >
                <img
                  src={profilePhoto}
                  alt={`${profile.name} — ${profile.role}`}
                  className="absolute left-1/2 -translate-x-[52%] top-[6%] w-[78%] max-w-none"
                />
              </div>

              <div className="absolute -left-4 -top-3 sm:-left-24 sm:top-6 rounded-xl border border-white/10 bg-[var(--surface)]/90 backdrop-blur px-4 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-dim)]">
                  Based in
                </p>
                <p className="mt-1 text-sm font-medium flex items-center gap-1.5">
                  <MapPin size={13} className="text-[var(--accent)]" />
                  {profile.location}
                </p>
              </div>

              <div className="absolute -left-3 -bottom-4 sm:-left-28 sm:bottom-14 rounded-xl border border-white/10 bg-[var(--surface)]/90 backdrop-blur px-4 py-3 shadow-xl">
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-dim)]">
                  System status
                </p>
                <p className="mt-1.5 text-xs font-mono font-medium text-[var(--accent)] flex items-center gap-2">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  </span>
                  AUTOMATIONS ONLINE
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-16 grid sm:grid-cols-3 gap-3 sm:gap-5">
          {heroTrust.map((t) => (
            <div
              key={t.title}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 sm:py-3"
            >
              <Check size={16} className="text-[var(--accent)] mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium">{t.title}</p>
                <p className="text-xs text-[var(--text-dim)] mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
