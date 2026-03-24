from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PostBase(BaseModel):
    title: str
    description: str
    type: str         
    category: str     
    location: str
    contact: str       
    image: Optional[str] = None

class PostCreate(PostBase):
    user_id: int 

class PostResponse(PostBase):
    id: int
    views: int
    user_id: int       
    created_at: datetime

    class Config:
        from_attributes = True 