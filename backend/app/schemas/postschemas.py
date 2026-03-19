from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class PostBase(BaseModel):
    title: str
    description: str
    type: str 
    location: str
    image: Optional[str] = None

class PostCreate(PostBase):
    user_id: int 

class PostResponse(PostBase):
    id: int
    views: int
    created_at: datetime

    model_config = {"from_attributes": True}