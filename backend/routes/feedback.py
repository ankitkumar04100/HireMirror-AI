from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_feedback():
    # Placeholder: Multi-layer feedback
    return {
        "job_readiness": 78,
        "communication": 85,
        "portfolio": 92,
        "suggestions": [
            "Improve behavioral question responses",
            "Update portfolio projects",
            "Practice AI/ML coding questions"
        ]
    }
