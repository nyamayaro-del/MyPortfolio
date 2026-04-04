import { skillGroups } from "@/data/portfolio";
import { SectionIntro } from "@/components/ui";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <SectionIntro
        eyebrow="Skills"
        title="A balanced stack across models, interfaces, and backend systems"
        copy="I’m most effective when I can move between data exploration, API development, and polished frontend implementation without losing sight of the user problem."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <div key={title} className="glass-panel neon-ring p-7">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white">{title}</h3>
            </div>
            <div className="mt-8 space-y-5">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="font-mono text-cyan-200">{skill.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/5">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
