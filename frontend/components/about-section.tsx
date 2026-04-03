import { highlights, techStack } from "@/data/portfolio";
import { SectionIntro } from "@/components/ui";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <SectionIntro
        eyebrow="About"
        title="An undergraduate engineer focused on applied AI"
        copy="I enjoy translating messy real-world problems into systems that combine machine learning, clean APIs, and intuitive user interfaces. My work is strongest where experimentation, engineering, and product empathy overlap."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel neon-ring p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight.title}
                className="rounded-2xl border border-white/10 bg-slate-950/30 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-panel neon-ring p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Core Stack
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {techStack.map(({ name, icon: Icon }) => (
              <div
                key={name}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4"
              >
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium text-slate-100">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
