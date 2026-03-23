from pydantic import BaseModel
from datetime import datetime

class CommentBase(BaseModel):
    content: str

class CommentCreate(CommentBase):
    post_id: int
    # user_id thường sẽ được lấy tự động từ Token của người dùng đang đăng nhập,
    # nhưng nếu bạn truyền trực tiếp thì thêm vào đây:
    # user_id: int 

class CommentResponse(CommentBase):
    id: int
    post_id: int
    user_id: int
    created_at: datetime

    model_config = {"from_attributes": True}