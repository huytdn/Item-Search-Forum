import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const Manage = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="w-full bg-[#f0f2f5] min-h-screen xl:px-[250px] px-4 md:px-10 py-8">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 min-h-[500px]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2d3436] text-center mb-10">
          Quản lý tin đăng
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm theo Tiêu đề..."
              className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-300 outline-none transition-all shadow-sm"
            />
          </div>

          <select className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none cursor-pointer focus:bg-white focus:border-indigo-300 shadow-sm">
            <option>Tất cả loại đồ</option>
            <option>Giấy tờ</option>
            <option>Điện tử</option>
            <option>Khác</option>
          </select>

          <select className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl px-4 py-3 text-sm text-gray-500 outline-none cursor-pointer focus:bg-white focus:border-indigo-300 shadow-sm">
            <option>Mới nhất trước</option>
            <option>Cũ nhất trước</option>
            <option>Theo tên từ A-Z</option>
            <option>Theo tên từ Z-A</option>
          </select>
        </div>

        {posts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 opacity-50">
            <p className="text-gray-500 text-sm font-medium">
              Bạn chưa đăng tin nào.
            </p>
          </div>
        )}

        {posts.length > 0 && <div className="space-y-4"></div>}
      </div>
    </div>
  );
};

export default Manage;
