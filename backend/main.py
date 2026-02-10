from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import auth, resume, interview, feedback, dashboard

app = FastAPI(title="HireMirror AI")

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # For demo, allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include Routers
app.include_router(auth.router, prefix="/auth")
app.include_router(resume.router, prefix="/resume")
app.include_router(interview.router, prefix="/interview")
app.include_router(feedback.router, prefix="/feedback")
app.include_router(dashboard.router, prefix="/dashboard")

@app.get("/")
def read_root():
    return {"message": "HireMirror AI Backend Running"}
