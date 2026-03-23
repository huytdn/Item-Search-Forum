from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class NotificationBase(BaseModel):
    message: str
    type: str
    target_id: Optional[int] = None  # Có thể null nếu thông báo chung chung

class NotificationCreate(NotificationBase):
    user_id: int

class NotificationResponse(NotificationBase):
    id: int
    user_id: int
    is_read: bool
    created_at: datetime

    model_config = {"from_attributes": True}