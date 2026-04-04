import { Github, Globe } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionIntro } from "@/components/ui";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <SectionIntro
        eyebrow="Projects"
        title="Selected work built to solve concrete problems"
        copy="Each project balances technical depth with practical impact. I aim to show not just what I built, but the problem framing, system design choices, and measurable outcome."
      />

      <div className="mt-12 grid gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="glass-panel neon-ring grid gap-8 overflow-hidden p-8 lg:grid-cols-[0.24fr_1fr]"
          >
            <div className="flex flex-col justify-between gap-4">
              <div>
                <p className="font-mono text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                  {project.category}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-white">{project.title}</h3>
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-300/40"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20"
                  >
                    <Globe className="h-4 w-4" />
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-slate-400">Problem</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{project.problem}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-slate-400">Solution</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{project.solution}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-5">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-slate-400">
                  Technologies
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs uppercase tracking-[0.22em] text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 p-5">
                <p className="font-mono text-sm uppercase tracking-[0.24em] text-cyan-200/80">Results</p>
                <p className="mt-3 text-sm leading-7 text-cyan-50">{project.impact}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
