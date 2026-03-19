from fastapi import APIRouter, Depends, status
from sqlalchemy.orm import Session
from typing import List
from app.database.database import get_db
from app.models.post import Post

from app.schemas.postschemas import PostCreate, PostResponse 

router = APIRouter(prefix="/posts", tags=["posts"])

# API tạo bài viết mới
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=PostResponse)
def create_post(post_data: PostCreate, db: Session = Depends(get_db)):
    # 1. Giải nén dữ liệu từ schema thành dictionary để SQLAlchemy dùng được
    new_post_dict = post_data.model_dump()
    
    # 2. Tạo đối tượng Post từ dictionary
    new_post = Post(**new_post_dict) 
    
    # 3. Lưu vào Database
    db.add(new_post)
    db.commit()
    db.refresh(new_post) # Lấy lại 'id' và các trường tự sinh từ database
    
    # 4. Trả về đối tượng new_post (FastAPI sẽ tự convert về PostResponse)
    return new_post

# API lấy danh sách bài viết
@router.get("/", response_model=List[PostResponse])
def get_posts(db: Session = Depends(get_db)):
    return db.query(Post).all()