from sqlalchemy.orm import Session
from app.models.comment import Comment
from app.models.post import Post
from app.models.notification import Notification

def create_comment(db: Session, content, user_id, post_id):
    comment = Comment(content=content, user_id=user_id, post_id=post_id)
    db.add(comment)

    post = db.query(Post).filter(Post.id == post_id).first()

    if post and post.user_id != user_id:
        notification = Notification(
            user_id=post.user_id,
            message="Có người vừa comment bài viết của bạn"
        )
        db.add(notification)

    db.commit()
    return comment