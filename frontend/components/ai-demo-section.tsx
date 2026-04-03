"use client";

import { useState } from "react";
import { AlertCircle, LoaderCircle, Sparkles } from "lucide-react";
import { SectionIntro } from "@/components/ui";

type PredictionResponse = {
  label: string;
  confidence: number;
  reasoning: string;
};

const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000";

export function AIDemoSection() {
  const [text, setText] = useState(
    "I built an image classifier that helps farmers detect tomato leaf disease quickly."
  );
  const [result, setResult] = useState<PredictionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${apiBaseUrl}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new Error("The prediction service is currently unavailable.");
      }

      const data = (await response.json()) as PredictionResponse;
      setResult(data);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong while generating the prediction."
      );
      setResult(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="ai-demo" className="section-shell">
      <SectionIntro
        eyebrow="AI Demo"
        title="Test a live classification endpoint"
        copy="This demo sends text to a FastAPI backend and returns a project category prediction. It is intentionally lightweight, fast to deploy, and easy to extend into a richer NLP or computer vision service."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <form onSubmit={handleSubmit} className="glass-panel neon-ring space-y-5 p-8">
          <label className="block">
            <span className="text-sm uppercase tracking-[0.28em] text-cyan-300/80">
              Input text
            </span>
            <textarea
              value={text}
              onChange={(event) => setText(event.target.value)}
              rows={7}
              className="mt-4 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-4 text-sm text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyan-300/40"
              placeholder="Describe an AI, web, or mobile project..."
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" />
                Analyzing
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4" />
                Run Prediction
              </>
            )}
          </button>
          {error ? (
            <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            </div>
          ) : null}
        </form>

        <div className="glass-panel neon-ring p-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Prediction output
          </p>
          {result ? (
            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                <p className="text-sm text-cyan-100/80">Predicted label</p>
                <p className="mt-2 text-2xl font-semibold text-white">{result.label}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm text-slate-400">Confidence</p>
                <div className="mt-3 h-3 rounded-full bg-white/5">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-500"
                    style={{ width: `${Math.round(result.confidence * 100)}%` }}
                  />
                </div>
                <p className="mt-3 text-sm text-slate-200">
                  {Math.round(result.confidence * 100)}%
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
                <p className="text-sm text-slate-400">Reasoning</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">{result.reasoning}</p>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-[28px] border border-dashed border-white/10 bg-slate-950/30 p-8 text-sm leading-7 text-slate-400">
              Submit a short project description to see the live response from the FastAPI classification service.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
