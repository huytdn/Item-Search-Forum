from fastapi import FastAPI
from app.database.database import engine, Base

from app.models import user, post, comment, message, notification

from app.routers.auth_router import router as auth_router
from app.routers.post_router import router as post_router

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth_router)
app.include_router(post_router)