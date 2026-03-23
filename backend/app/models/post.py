from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.database import Base

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    type = Column(String)  # LOST / FOUND
    location = Column(String)
    image = Column(String, nullable=True) # Có thể null
    views = Column(Integer, default=0)

    # Đã sửa lại ForeignKey cho chuẩn
    user_id = Column(Integer, ForeignKey("users.id")) 
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship
    owner = relationship("User", back_populates="posts")
    # Comment
    comments = relationship("Comment", back_populates="post")

    # ... (các cột giữ nguyên)

    owner = relationship("User", back_populates="posts")
    
    # Thêm cascade: Xóa bài Post -> Xóa luôn toàn bộ Comment trong bài đó
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")