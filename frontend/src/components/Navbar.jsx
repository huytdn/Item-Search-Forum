import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import logo from "../assets/image/unnamed.jpg";
import icons from "../assets/icons/icon";

const {
  TbMessageCircleFilled,
  FaBell,
  LuPlus,
  PiNewspaperClippingFill,
  CgProfile,
  CgLogOut,
} = icons;

const Navbar = () => {
  const { user, setUser, navigate } = useAppContext();

  const [showMenu, setShowMenu] = useState(false);
  const logout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <div className="w-full bg-white shadow-">
      <div className="flex items-center justify-between py-3 xl:px-[250px] px-4 md:px-10 mx-auto">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          {/* LOGO */}
          <div
            onClick={() => navigate("/")}
            className="cursor-pointer flex items-center"
          >
            <img src={logo} alt="logo" className="h-12 object-contain" />
          </div>

          {/* SEARCH */}
          <button onClick={() => navigate("/search")} className="btn-search">
            <span className="icon-search">🔍</span> Tìm kiếm chi tiết
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* NOT LOGIN */}
          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="bg-blue-500 hover:bg-blue-600
              text-white px-5 py-2 rounded-full
              font-medium transition"
            >
              Đăng nhập
            </button>
          )}

          {/* LOGIN */}
          {user && (
            <>
              {/* message */}
              <button className="text-3xl hover:scale-110 transition duration-300 text-blue-400">
                <TbMessageCircleFilled />
              </button>

              {/* notification */}
              <button className="text-3xl hover:scale-110 transition duration-300 text-blue-400">
                <FaBell />
              </button>

              {/* post */}
              <button
                onClick={() => navigate("/post")}
                className="bg-[#16a34a] hover:bg-[#15803d]
                text-white px-6 py-2.5 rounded-lg
                text-sm font-medium transition "
              >
                <div className="flex justify-center items-center ">
                  <LuPlus className="text-white mr-1" /> Đăng tin
                </div>
              </button>

              {/* manage */}
              <button
                onClick={() => navigate("/manage")}
                className="bg-white hover:bg-[#f8fafc] hover:border-[#94a3b8] border-[#cbd5e1] border-1
                px-6 py-2.5 rounded-lg text-sm font-medium"
              >
                <div className="flex justify-center items-center">
                  <PiNewspaperClippingFill className=" mr-1.5" /> Quản lý tin
                </div>
              </button>

              {/* profile */}
              {/* PROFILE DROPDOWN SECTION */}
              <div className="relative group">
                {/* Nút bấm bao gồm cả cụm: Avatar, Tên, Mũi tên */}
                <div
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex items-center gap-2 p-1 px-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200"
                >
                  {/* Avatar Circle */}
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xs border border-gray-200 overflow-hidden">
                    {user?.avatar ? (
                      <img
                        src={user.avatar}
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      user?.name?.charAt(0).toUpperCase() || "B"
                    )}
                  </div>

                  {/* Hiển thị Tên bên cạnh Avatar */}
                  <div className="flex items-center gap-1">
                    <span className="text-[14px] font-medium text-gray-800 max-w-[150px] truncate">
                      {user?.name || "B23DCAT134"}
                    </span>

                    {/* Icon Mũi tên xuống */}
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${showMenu ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>

                {/* DROPDOWN MENU (Hiển thị khi click) */}
                {showMenu && (
                  <>
                    {/* Lớp phủ để click ra ngoài thì đóng menu */}
                    <div
                      className="fixed inset-0 z-10"
                      onClick={() => setShowMenu(false)}
                    ></div>

                    <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-20 animate-in fade-in zoom-in duration-200">
                      {/* Mục Trang cá nhân */}
                      <div
                        onClick={() => {
                          navigate("/profile");
                          setShowMenu(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="text-gray-400">
                          <CgProfile className="text-xl" />
                        </div>
                        <span className="text-sm font-normal text-gray-700">
                          Trang cá nhân
                        </span>
                      </div>

                      <div className="border-t border-gray-100 my-1 mx-2"></div>

                      {/* Mục Đăng xuất */}
                      <div
                        onClick={() => {
                          logout();
                          setShowMenu(false);
                        }}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="text-red-500">
                          <CgLogOut className="text-xl" />
                        </div>
                        <span className="text-sm font-normal text-gray-700">
                          Đăng xuất
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
