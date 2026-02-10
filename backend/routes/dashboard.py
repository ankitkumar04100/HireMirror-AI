from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def get_dashboard():
    # Placeholder: Return analytics & progress
    return {
        "readiness_score": 78,
        "badges": ["Consistency Badge", "Portfolio Star"],
        "streak": 5,
        "leaderboard_position": 2
    }
