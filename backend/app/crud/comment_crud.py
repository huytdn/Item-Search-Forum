from sqlalchemy.orm import Session
from app.models.comment import Comment
from app.models.post import Post
from app.models.notification import Notification


def create_comment(db: Session, content, user_id, post_id):
    post = db.query(Post).filter(Post.id == post_id).first()
    if not post:
        return None

    comment = Comment(
        content=content,
        user_id=user_id,
        post_id=post_id
    )
    db.add(comment)

    if post.user_id != user_id:
        notification = Notification(
            user_id=post.user_id,
            message="Có người vừa comment bài viết của bạn"
        )
        db.add(notification)

    db.commit()
    db.refresh(comment)
    return comment


def get_comments_by_post_id(db: Session, post_id: int):
    return db.query(Comment).filter(Comment.post_id == post_id).all()


def delete_comment(db: Session, comment_id: int):
    comment = db.query(Comment).filter(Comment.id == comment_id).first()
    if not comment:
        return None

    db.delete(comment)
    db.commit()
    return comment