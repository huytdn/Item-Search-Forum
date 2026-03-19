from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.database.database import get_db
from app.services.auth_service import register, login

router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register")
def register_user(username: str, email: str, password: str, db: Session = Depends(get_db)):
    try:
        user = register(db, username, email, password)
        return user
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/login")
def login_user(email: str, password: str, db: Session = Depends(get_db)):
    user = login(db, email, password)

    if not user:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return user