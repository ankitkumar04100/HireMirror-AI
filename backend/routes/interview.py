from fastapi import APIRouter

router = APIRouter()

@router.get("/questions")
def get_adaptive_questions():
    # Placeholder: Return AI-generated questions
    return [
        "Tell me about yourself.",
        "Explain a project where you used AI.",
        "How do you handle failure?"
    ]

@router.post("/submit")
def submit_answers(answers: list):
    # Placeholder: Process answers
    return {"message": "Answers submitted successfully", "score": 82}
