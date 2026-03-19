from sqlalchemy.orm import Session
from app.models.user import User
from passlib.context import CryptContext

# Cấu hình hash password
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)

# =======================
# REGISTER
# =======================
def register(db: Session, username: str, email: str, password: str):
    try:
        # 1. Check email tồn tại
        existing_user = db.query(User).filter(User.email == email).first()
        if existing_user:
            raise ValueError("Email already exists")

        # 2. Hash password
        hashed_password = pwd_context.hash(password)

        # 3. Tạo user
        user = User(
            username=username,
            email=email,
            password_hash=hashed_password
        )

        # 4. Lưu DB
        db.add(user)
        db.commit()
        db.refresh(user)

        return user

    except Exception as e:
        db.rollback()
        raise e


# =======================
# LOGIN
# =======================
def login(db: Session, email: str, password: str):
    try:
        # 1. Tìm user
        user = db.query(User).filter(User.email == email).first()
        if not user:
            return None

        # 2. Verify password
        if not pwd_context.verify(password, user.password_hash):
            return None

        return user

    except Exception as e:
        raise e


# =======================
# HASH (optional utility)
# =======================
def hash_password(password: str):
    return pwd_context.hash(password)


def verify_password(plain_password: str, hashed_password: str):
    return pwd_context.verify(plain_password, hashed_password)