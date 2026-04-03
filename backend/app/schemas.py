from pydantic import BaseModel, Field


class PredictionRequest(BaseModel):
    text: str = Field(..., min_length=5, max_length=500)


class PredictionResponse(BaseModel):
    label: str
    confidence: float
    reasoning: str
