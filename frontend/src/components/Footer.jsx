import React from "react";
import icons from "../assets/icons/icon"; // Import bộ icon của bạn
import { FaFacebookF, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const { IoSearch } = icons;

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* PHẦN NỘI DUNG CHÍNH */}
      <div className="px-4 md:px-10 lg:px-[170px] py-10 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
        {/* BÊN TRÁI: LOGO */}
        <div className="flex items-center gap-3 min-w-[250px]">
          <div className="bg-orange-500 p-2.5 rounded-2xl shadow-lg shadow-orange-100">
            <IoSearch className="text-white text-2xl" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1e293b] leading-tight">
              Tìm Đồ Sinh Viên
            </h2>
            <p className="text-[11px] text-gray-400 mt-0.5 font-medium">
              Kết nối sinh viên, tìm lại đồ thất lạc
            </p>
          </div>
        </div>

        {/* GIỮA: LINKS - Thu hẹp khoảng cách bằng gap cụ thể */}
        <div className="flex flex-row gap-x-16 md:gap-x-24 text-left">
          <div className="space-y-2.5">
            <a
              href="#"
              className="block text-[13px] text-gray-500 hover:text-orange-500 transition-colors font-medium"
            >
              Miễn trừ trách nhiệm
            </a>
            <a
              href="#"
              className="block text-[13px] text-gray-500 hover:text-orange-500 transition-colors font-medium"
            >
              Chính sách bảo mật
            </a>
          </div>
          <div className="space-y-2.5">
            <a
              href="#"
              className="block text-[13px] text-gray-500 hover:text-orange-500 transition-colors font-medium"
            >
              Hướng dẫn đăng tin
            </a>
            <a
              href="#"
              className="block text-[13px] text-gray-500 hover:text-orange-500 transition-colors font-medium"
            >
              Điều khoản sử dụng
            </a>
          </div>
        </div>

        {/* BÊN PHẢI: SOCIAL ICONS */}
        <div className="flex gap-4 items-center">
          {[
            { icon: <FaFacebookF size={14} />, link: "#" },
            { icon: <FaEnvelope size={14} />, link: "#" },
            { icon: <FaGlobe size={14} />, link: "#" },
          ].map((item, index) => (
            <div
              key={index}
              className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center 
                         text-orange-500 bg-white shadow-sm cursor-pointer
                         transition-all duration-300 ease-out
                         hover:scale-110 hover:bg-orange-500 hover:text-white hover:shadow-orange-200 hover:shadow-md"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>

      {/* DẢI COPYRIGHT - Xóa bỏ margin-top thừa để không bị hở trắng */}
      <div className="w-full bg-[#f1f5f9] py-4">
        <p className="text-center text-[12px] text-gray-500 font-medium">
          © 2026 Tìm Đồ Sinh Viên. Bảo lưu mọi quyền.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
