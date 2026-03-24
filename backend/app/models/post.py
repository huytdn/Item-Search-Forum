from sqlalchemy import Column, Integer, String, ForeignKey, Boolean, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from app.database.database import Base

class Post(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    type = Column(String)        # LOST / FOUND
    category = Column(String)    
    location = Column(String)
    contact = Column(String)     
    image = Column(String, nullable=True)
    views = Column(Integer, default=0)
    
    user_id = Column(Integer, ForeignKey("users.id")) 
    created_at = Column(DateTime, default=datetime.utcnow)

    # Relationship
    owner = relationship("User", back_populates="posts")
    comments = relationship("Comment", back_populates="post", cascade="all, delete-orphan")