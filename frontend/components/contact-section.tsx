import { Mail, Send } from "lucide-react";
import { contactCards, personalInfo } from "@/data/portfolio";
import { SectionIntro } from "@/components/ui";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell pb-24">
      <SectionIntro
        eyebrow="Contact"
        title="Let’s build intelligent products that create real value"
        copy="I’m excited about internships, collaborative research, and software roles where strong engineering and applied AI can work together."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <form className="glass-panel neon-ring space-y-5 p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="text-sm text-slate-300">Name</span>
              <input
                type="text"
                placeholder="Hiring Manager"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
              />
            </label>
            <label className="block">
              <span className="text-sm text-slate-300">Email</span>
              <input
                type="email"
                placeholder="name@company.com"
                className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-sm text-slate-300">Message</span>
            <textarea
              rows={6}
              placeholder="Tell me about the opportunity, product, or team."
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
            />
          </label>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            <Send className="h-4 w-4" />
            Send via Email
          </a>
        </form>

        <div className="space-y-6">
          <div className="glass-panel neon-ring p-8">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Primary email</p>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-heading text-lg font-semibold text-white"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
          </div>

          {contactCards.map(({ title, handle, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass-panel neon-ring flex items-center justify-between p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-2xl bg-white/5 p-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{title}</p>
                  <p className="font-medium text-white">{handle}</p>
                </div>
              </div>
              <span className="text-sm text-cyan-200">Open</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
