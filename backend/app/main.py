from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.database import engine, Base

from app.models import user, post, comment, message, notification

from app.routers.auth_router import router as auth_router
from app.routers.post_router import router as post_router
from app.routers.comment_router import router as comment_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Trong thực tế nên thay "*" bằng ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],  # Cho phép GET, POST, PUT, DELETE...
    allow_headers=["*"],  # Cho phép các header như Authorization, Content-Type
)

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(post_router)
app.include_router(comment_router)