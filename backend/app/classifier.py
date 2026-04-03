from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class ClassificationResult:
    label: str
    confidence: float
    reasoning: str


KEYWORD_MAP: dict[str, tuple[str, ...]] = {
    "AI / ML Project": (
        "model",
        "classifier",
        "nlp",
        "image",
        "vision",
        "prediction",
        "dataset",
        "pytorch",
        "tensorflow",
        "llm",
    ),
    "Full-Stack Application": (
        "dashboard",
        "api",
        "auth",
        "database",
        "platform",
        "web",
        "full-stack",
        "analytics",
        "postgres",
    ),
    "Mobile / React Experience": (
        "mobile",
        "react native",
        "expo",
        "ios",
        "android",
        "fitness",
        "companion",
        "streak",
    ),
}


def classify_text(text: str) -> ClassificationResult:
    normalized = text.lower()
    scores: dict[str, int] = {}

    for label, keywords in KEYWORD_MAP.items():
        scores[label] = sum(keyword in normalized for keyword in keywords)

    best_label = max(scores, key=scores.get)
    best_score = scores[best_label]
    total_keywords = max(1, sum(scores.values()))

    if best_score == 0:
        return ClassificationResult(
            label="General Software Project",
            confidence=0.51,
            reasoning=(
                "The description does not strongly match the current AI, full-stack, "
                "or mobile keyword groups, so it is categorized as a broader software build."
            ),
        )

    confidence = min(0.97, 0.58 + (best_score / max(1, total_keywords + 1)) * 0.32)
    matched_keywords = [
        keyword for keyword in KEYWORD_MAP[best_label] if keyword in normalized
    ][:4]

    reasoning = (
        f"This description aligns most with {best_label.lower()} because it references "
        f"{', '.join(matched_keywords)}."
    )

    return ClassificationResult(
        label=best_label,
        confidence=round(confidence, 2),
        reasoning=reasoning,
    )
