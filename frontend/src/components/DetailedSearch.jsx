import React, { useState } from "react";
import icons from "../assets/icons/icon";

const DetailedSearch = () => {
  const [viewMode, setViewMode] = useState("list");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const [allPosts] = useState(
    Array(18).fill({
      id: 1,
      title: "NGUYEN GIA HAO",
      description:
        "Mình có nhặt được 1 ví có giấy tờ thông tin của 1 bạn. Liên hệ sđt để nhận lại nha",
      date: "2/12/2025",
      location: "11 Nguyễn Văn Chiêm, Bến Nghé, Quận 1, Hồ Chí Minh",
      type: "Nhặt được",
      category: "Ví tiền",
      image: "https://via.placeholder.com/300x200",
      author: "Lương 2 chẹo",
      views: 425,
      comments: 0,
      isUrgent: true,
    }),
  );

  // Tính toán dữ liệu cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = allPosts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allPosts.length / itemsPerPage);

  // Hàm chuyển trang
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-[#f0f2f5] min-h-screen xl:px-[250px] px-4 md:px-10 py-8">
      {/* CARD TRẮNG CHÍNH */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
        {/* TIÊU ĐỀ & BANNER ƯU TIÊN */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#2d3436] uppercase tracking-wider mb-6">
            Tìm kiếm thông minh
          </h1>
          <div className="bg-gradient-to-r from-[#064e3b] via-[#065f46] to-[#064e3b] text-white p-6 rounded-2xl text-left relative overflow-hidden shadow-lg border border-white/10">
            <p className="font-semibold mb-3 text-xl">
              Các bài đăng đang được sắp xếp theo mức độ ưu tiên.
            </p>
            <div className="flex gap-3 text-xs">
              <span className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1 text-sm">
                <span className="text-green-600 text-xl mb-1">●</span> Cập nhật
                liên tục
              </span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1 text-sm">
                <span className="text-green-600 text-xl mb-1">●</span> Tìm kiếm
                nhanh
              </span>
              <span className="bg-white/20 px-3 py-1.5 rounded-full flex items-center gap-1 text-sm">
                <span className="text-green-600 text-xl mb-1">●</span> Kết quả
                chính xác
              </span>
            </div>
          </div>
        </div>

        {/* THANH TÌM KIẾM CHÍNH */}
        <div className="flex gap-3 mb-8 border border-gray-100 p-2 rounded-2xl shadow-sm">
          <div className="flex-1 flex items-center px-4 gap-3 bg-gray-50 rounded-xl">
            <span className="text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Tìm theo tên, mô tả..."
              className="w-full bg-transparent py-3 text-sm outline-none"
            />
          </div>
          <button className="bg-[#5f27cd] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#4834d4] transition-all">
            🔍 Tìm kiếm
          </button>
        </div>

        {/* BỘ LỌC CHI TIẾT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-8 border border-gray-50 p-6 rounded-2xl bg-[#fafafa]">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500">Danh mục</label>
            <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-300">
              <option>Tất cả danh mục</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500">Loại tin</label>
            <select className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-300">
              <option>Tất cả loại tin</option>
            </select>
          </div>
          <button className="text-gray-500 text-xs font-bold flex items-center gap-2 px-4 py-4 hover:text-red-500 transition-colors">
            ✕ Xóa bộ lọc
          </button>
        </div>

        {/* ĐIỀU KHIỂN CHẾ ĐỘ XEM */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2 bg-gray-50 p-1 rounded-xl border border-gray-100">
            <button
              onClick={() => {
                setViewMode("list");
                setCurrentPage(1);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "list" ? "bg-white text-[#5f27cd] shadow-sm" : "text-gray-400"}`}
            >
              ☰ Danh sách
            </button>
            <button
              onClick={() => {
                setViewMode("grid");
                setCurrentPage(1);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all ${viewMode === "grid" ? "bg-white text-[#5f27cd] shadow-sm" : "text-gray-400"}`}
            >
              ⊞ Lưới
            </button>
          </div>
          <p className="text-xs text-gray-400 font-medium italic">
            Hiển thị {indexOfFirstItem + 1} -{" "}
            {Math.min(indexOfLastItem, allPosts.length)} trong tổng số{" "}
            {allPosts.length} kết quả.
          </p>
        </div>

        {/* HIỂN THỊ KẾT QUẢ THEO TRANG */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-3 gap-6"
              : "space-y-6"
          }
        >
          {currentPosts.map((post, index) =>
            viewMode === "list" ? (
              <ListItem key={index} post={post} />
            ) : (
              <GridItem key={index} post={post} />
            ),
          )}
        </div>

        {/* PHÂN TRANG (PAGINATION) HOẠT ĐỘNG THỰC TẾ */}
        <div className="flex justify-center items-center gap-2 mt-12">
          {/* Nút lùi trang */}
          <button
            disabled={currentPage === 1}
            onClick={() => paginate(currentPage - 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ‹
          </button>

          {/* Các nút số trang */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg font-bold transition-all ${
                currentPage === number
                  ? "bg-[#5f27cd] text-white shadow-md shadow-indigo-200"
                  : "border border-gray-100 text-gray-400 hover:bg-gray-50"
              }`}
            >
              {number}
            </button>
          ))}

          {/* Nút tiến trang */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => paginate(currentPage + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-100 text-gray-400 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

// COMPONENT CON: GIAO DIỆN DÒNG (LIST)
const ListItem = ({ post }) => (
  <div className="group flex flex-col md:flex-row gap-6 p-4 border border-gray-100 rounded-2xl hover:border-indigo-200 hover:shadow-md transition-all relative">
    {post.isUrgent && (
      <span className="absolute -top-2 -left-2 bg-red-500 text-white text-[10px] px-2 py-1 rounded-lg font-bold z-10 shadow-sm">
        TIN GẤP
      </span>
    )}
    <div className="w-full md:w-48 h-40 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
      <img
        src={post.image}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        alt=""
      />
    </div>
    <div className="flex-1 flex flex-col justify-between py-1">
      <div>
        <div className="flex gap-2 mb-2">
          <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded">
            {post.type}
          </span>
          <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded">
            {post.category}
          </span>
        </div>
        <h3 className="font-bold text-gray-800 mb-1 group-hover:text-[#5f27cd] transition-colors">
          {post.title}
        </h3>
        <p className="text-[11px] text-gray-400 flex flex-wrap gap-4 mb-2">
          <span>📅 {post.date}</span>
          <span>📍 {post.location}</span>
        </p>
        <p className="text-xs text-gray-500 line-clamp-2">{post.description}</p>
      </div>
      <div className="flex justify-between items-center pt-3 mt-4 border-t border-gray-50">
        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400">
          <span className="flex items-center gap-1">👤 {post.author}</span>
          <span className="flex items-center gap-1">👁️ {post.views}</span>
          <span className="flex items-center gap-1">💬 {post.comments}</span>
        </div>
        <button className="text-[#5f27cd] text-xs font-bold hover:translate-x-1 transition-transform">
          Xem chi tiết ❯
        </button>
      </div>
    </div>
  </div>
);

// COMPONENT CON: GIAO DIỆN LƯỚI (GRID)
const GridItem = ({ post }) => (
  <div className="group border border-gray-100 rounded-3xl overflow-hidden hover:border-indigo-200 hover:shadow-xl transition-all bg-white flex flex-col h-full">
    <div className="relative h-48 overflow-hidden">
      {post.isUrgent && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-lg font-bold z-10">
          TIN GẤP
        </span>
      )}
      <img
        src={post.image}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        alt=""
      />
      <div className="absolute bottom-3 right-3 flex gap-2">
        <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
          👁️ {post.views}
        </span>
        <span className="bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded flex items-center gap-1">
          💬 {post.comments}
        </span>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <div className="flex gap-2 mb-3">
        <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-1 rounded">
          {post.type}
        </span>
        <span className="bg-indigo-50 text-indigo-600 text-[10px] font-bold px-2 py-1 rounded">
          {post.category}
        </span>
      </div>
      <h3 className="font-bold text-gray-800 mb-2 truncate uppercase text-sm group-hover:text-[#5f27cd] transition-colors">
        {post.title}
      </h3>
      <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed flex-grow">
        {post.description}
      </p>
      <div className="flex justify-between items-center pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-[10px] font-bold">
            👤
          </div>
          <span className="text-[10px] font-bold text-gray-500">
            {post.author}
          </span>
        </div>
        <button className="bg-[#2ecc71] text-white px-4 py-2 rounded-full text-[11px] font-bold hover:bg-[#27ae60] shadow-sm transition-all active:scale-95">
          Xem ❯
        </button>
      </div>
    </div>
  </div>
);

export default DetailedSearch;
