from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Hello from FastAPI"}


@app.get("/projects")
def get_projects():
    return [
        {
            "title": "Escape Room Game",
            "description": "A JavaFX escape room puzzle game.",
            "technologies": ["Java", "JavaFX"],
            "link": "https://example.com"
        },
        {
            "title": "Timetable Generator",
            "description": "A timetable generator for students.",
            "technologies": ["Python", "FastAPI"],
            "link": "https://example.com"
        }
    ]