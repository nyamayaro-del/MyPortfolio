from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.classifier import classify_text
from app.schemas import PredictionRequest, PredictionResponse

app = FastAPI(
    title="AI Portfolio API",
    description="FastAPI backend powering the live AI demo for the portfolio.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root() -> dict[str, str]:
    return {"status": "ok", "message": "AI Portfolio API is running."}


@app.post("/predict", response_model=PredictionResponse)
def predict(payload: PredictionRequest) -> PredictionResponse:
    result = classify_text(payload.text)
    return PredictionResponse(
        label=result.label,
        confidence=result.confidence,
        reasoning=result.reasoning,
    )
