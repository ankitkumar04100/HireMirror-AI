from fastapi import APIRouter, HTTPException

router = APIRouter()

@router.post("/signup")
def signup(name: str, email: str, password: str):
    # Placeholder for user signup
    return {"message": f"User {name} signed up successfully."}

@router.post("/login")
def login(email: str, password: str):
    # Placeholder for login
    return {"message": f"User {email} logged in successfully.", "token": "demo-jwt-token"}
