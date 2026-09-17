import { useState } from "react";
import {
  Mail,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import {
  profile,
  projectTypes,
  budgetRanges,
  WEB3FORMS_KEY,
  whatsappLink,
} from "../data/content";
import Reveal from "./Reveal";

const stripProtocol = (url) => url.replace(/^https?:\/\//, "");

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "Chat on WhatsApp",
    sub: "Chat with me on WhatsApp",
    href: whatsappLink,
    featured: true,
  },
  {
    icon: LinkedinIcon,
    title: "LinkedIn",
    sub: stripProtocol(profile.linkedin),
    href: profile.linkedin,
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    sub: stripProtocol(profile.github),
    href: profile.github,
  },
];

const FIELD =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-dim)]/60 outline-none focus:border-[var(--accent)]/60 focus:bg-white/[0.05] transition-colors";
const SELECT = `${FIELD} appearance-none cursor-pointer pr-10`;
const LABEL = "block text-sm text-[var(--text)] mb-2";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");
    const form = event.target;
    const payload = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New project enquiry from ${payload.name}`,
          ...payload,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 380px at 50% 100%, rgba(74,222,128,0.1), transparent 70%)",
        }}
      />

      <div className="section-container">
        <Reveal className="max-w-2xl mb-12">
          <p className="text-sm uppercase tracking-widest text-[var(--accent)] mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold">
            Let's build something together
          </h2>
          <p className="mt-4 text-[var(--text-dim)]">
            Tell me what's eating your time, and I'll tell you how to get it off
            your plate — no charge for the conversation.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          {/* Project inquiry */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 sm:p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Project Inquiry</h3>

              {status === "success" ? (
                <div className="text-center py-14">
                  <CheckCircle2
                    size={40}
                    className="text-[var(--accent)] mx-auto"
                  />
                  <h4 className="mt-4 text-lg font-semibold">Message sent</h4>
                  <p className="mt-2 text-sm text-[var(--text-dim)]">
                    Thanks for reaching out — I'll reply within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm text-[var(--accent)] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={LABEL}>
                        Name <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className={FIELD}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={LABEL}>
                        Email <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className={FIELD}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={LABEL}>
                      Company / Business Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      placeholder="Optional"
                      className={FIELD}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="projectType" className={LABEL}>
                        Project Type
                      </label>
                      <div className="relative">
                        <select
                          id="projectType"
                          name="projectType"
                          required
                          defaultValue=""
                          className={SELECT}
                        >
                          <option value="" disabled>
                            Select a project type
                          </option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t} className="bg-[#111619]">
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="budget" className={LABEL}>
                        Estimated Budget (USD)
                      </label>
                      <div className="relative">
                        <select
                          id="budget"
                          name="budget"
                          defaultValue=""
                          className={SELECT}
                        >
                          <option value="" disabled>
                            Select a range
                          </option>
                          {budgetRanges.map((bRange) => (
                            <option
                              key={bRange}
                              value={bRange}
                              className="bg-[#111619]"
                            >
                              {bRange}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-dim)]"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={LABEL}>
                      Project Details / Message{" "}
                      <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="What process would you like to automate?"
                      className={`${FIELD} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] text-black font-semibold px-7 py-3.5 hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending…" : "Send Project Inquiry"}
                    {status !== "sending" && (
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-400">
                      Something went wrong. Email me directly at{" "}
                      <a href={`mailto:${profile.email}`} className="underline">
                        {profile.email}
                      </a>
                      .
                    </p>
                  )}
                </form>
              )}
            </div>
          </Reveal>

          {/* Connect with me */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 sm:p-8 h-full">
              <h3 className="text-xl font-semibold">Connect With Me</h3>
              <p className="mt-2 text-sm text-[var(--text-dim)]">
                Prefer a direct message? These are the best places to find me.
              </p>

              <div className="mt-6 space-y-3">
                {CHANNELS.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-3 rounded-xl border p-3.5 transition-colors ${
                      c.featured
                        ? "border-[var(--accent)]/40 bg-[var(--accent-bg)] hover:border-[var(--accent)]"
                        : "border-white/10 bg-white/[0.02] hover:border-[var(--accent)]/40"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                        c.featured
                          ? "bg-[var(--accent)] text-black"
                          : "bg-white/5 text-[var(--accent)]"
                      }`}
                    >
                      <c.icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-medium">
                        {c.title}
                      </span>
                      <span className="block truncate text-xs text-[var(--text-dim)]">
                        {c.sub}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 text-sm">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2.5 hover:text-[var(--accent)] transition-colors"
                >
                  <Mail size={16} className="text-[var(--accent)] shrink-0" />
                  <span className="truncate">{profile.email}</span>
                </a>
                <p className="flex items-center gap-2.5 text-[var(--text-dim)]">
                  <MapPin size={16} className="text-[var(--accent)] shrink-0" />
                  {profile.location} — available for remote projects
                </p>
              </div>

              <div className="mt-6 rounded-xl border border-[var(--accent)]/25 bg-[var(--accent-bg)] p-4">
                <p className="flex items-center gap-2 text-sm font-medium text-[var(--accent)]">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
                  </span>
                  Open for projects
                </p>
                <p className="mt-2 text-xs text-[var(--text-dim)]">
                  I reply to every enquiry within 24 hours, usually much sooner.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
