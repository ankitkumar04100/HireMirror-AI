from pydantic import BaseModel
from typing import List

class Feedback(BaseModel):
    user_id: int
    job_readiness: int
    communication: int
    portfolio: int
    suggestions: List[str]
