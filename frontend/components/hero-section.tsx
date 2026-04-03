"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Sparkles } from "lucide-react";
import { personalInfo, stats, typingRoles } from "@/data/portfolio";
import { GlowButton, Pill } from "@/components/ui";
import { TypingText } from "@/components/typing-text";

export function HeroSection() {
  return (
    <section className="section-shell relative overflow-hidden pt-12 sm:pt-20">
      <div className="absolute inset-x-0 top-16 h-72 bg-hero-grid bg-[size:42px_42px] opacity-20" />
      <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Pill>Available for internships and graduate roles</Pill>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {personalInfo.name}
            <span className="mt-4 block bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-400 bg-clip-text text-transparent">
              {personalInfo.role}
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-300 sm:text-xl">
            Building as a <TypingText words={typingRoles} />
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {personalInfo.tagline}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <GlowButton href="#projects">View Projects</GlowButton>
            <GlowButton href="#contact" variant="secondary">
              Contact Me
            </GlowButton>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-panel neon-ring rounded-2xl p-5">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl" />
          <div className="glass-panel neon-ring relative overflow-hidden rounded-[32px] p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
                  AI Signal Console
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Product + model thinking
                </p>
              </div>
              <BrainCircuit className="h-10 w-10 text-cyan-300" />
            </div>
            <div className="mt-8 space-y-4">
              {[
                "Model validation workflow",
                "API integration patterns",
                "Human-centered interface design"
              ].map((item, index) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-4"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-4 w-4 text-violet-300" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/5">
                    <div
                      className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500"
                      style={{ width: `${78 + index * 7}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm text-cyan-100">
              Focused on shipping AI experiences that feel credible, fast, and useful to real users.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
