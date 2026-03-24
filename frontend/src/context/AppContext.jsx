import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Khởi tạo user từ localStorage nếu có, nếu không thì để null
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [showUserLogin, setShowUserLogin] = useState(false);

  // Theo dõi sự thay đổi của user (tùy chọn)
  useEffect(() => {
    if (!user) {
      // Nếu user là null, đảm bảo localStorage cũng trống
      // localStorage.removeItem("user");
      // localStorage.removeItem("token");
    }
  }, [user]);

  const value = {
    navigate,
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
