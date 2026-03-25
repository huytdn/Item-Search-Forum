from fastapi import APIRouter, Depends, HTTPException, status, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.postschemas import PostResponse
from app.crud.post_crud import create_post, get_all_posts, get_post_by_id, delete_post
from app.services.cloudinary_service import upload_image_to_cloudinary

router = APIRouter(prefix="/posts", tags=["posts"])

@router.post("/", response_model=PostResponse)
async def create_post_api(
    title: str = Form(...),
    description: str = Form(...),
    type: str = Form(...),
    category: str = Form(...),
    location: str = Form(...),
    contact: str = Form(...),
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
):
    user_id = 1  # tạm fix để test

    # upload cloudinary
    file_bytes = await file.read()
    result = upload_image_to_cloudinary(file_bytes, file.filename)
    image_url = result.get("secure_url")

    new_post = create_post(
        db=db,
        title=title,
        description=description,
        type=type,
        category=category,
        location=location,
        contact=contact,
        image=image_url,
        user_id=user_id
    )

    return new_post

@router.get("/", response_model=List[PostResponse])
def get_posts(db: Session = Depends(get_db)):
    return get_all_posts(db)

@router.get("/{post_id}", response_model=PostResponse)
def get_post(post_id: int, db: Session = Depends(get_db)):
    post = get_post_by_id(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@router.delete("/{post_id}", status_code=status.HTTP_200_OK)
def remove_post(post_id: int, db: Session = Depends(get_db)):
    post = delete_post(db, post_id)
    if not post:
        raise HTTPException(status_code=404, detail="Post not found")
    return {"message": "Post deleted successfully"}