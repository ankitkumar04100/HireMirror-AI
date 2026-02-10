from pydantic import BaseModel
from typing import List

class Interview(BaseModel):
    user_id: int
    questions: List[str]
    answers: List[str]
    score: int
