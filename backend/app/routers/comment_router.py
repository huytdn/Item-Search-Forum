from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.database.database import get_db
from app.schemas.commentschemas import CommentCreate, CommentResponse
from app.crud.comment_crud import create_comment, get_comments_by_post_id, delete_comment

router = APIRouter(prefix="/comments", tags=["comments"])


@router.post("/", response_model=CommentResponse, status_code=status.HTTP_201_CREATED)
def create_new_comment(comment_data: CommentCreate, db: Session = Depends(get_db)):
    comment = create_comment(
        db=db,
        content=comment_data.content,
        user_id=comment_data.user_id,
        post_id=comment_data.post_id
    )

    if not comment:
        raise HTTPException(status_code=404, detail="Post not found")

    return comment


@router.get("/post/{post_id}", response_model=List[CommentResponse])
def get_comments_of_post(post_id: int, db: Session = Depends(get_db)):
    return get_comments_by_post_id(db, post_id)


@router.delete("/{comment_id}", status_code=status.HTTP_200_OK)
def remove_comment(comment_id: int, db: Session = Depends(get_db)):
    comment = delete_comment(db, comment_id)
    if not comment:
        raise HTTPException(status_code=404, detail="Comment not found")

    return {"message": "Comment deleted successfully"}