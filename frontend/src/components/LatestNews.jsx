import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate
import icons from "../assets/icons/icon";

const LatestNews = () => {
  const navigate = useNavigate(); // 2. Khởi tạo navigate
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const { IoSearch, MdOutlineDone } = icons;

  // Dữ liệu giả lập
  const allPosts = Array.from({ length: 12 }).map((_, index) => ({
    _id: `post_${index + 1}`, // Đây là ID sẽ dùng để điều hướng
    user_id: `user_${index + 1}`,
    title: index % 2 === 0 ? "TRAN NGUYEN ANH NGOC" : "LE TUAN KIET",
    description:
      "Ai rớt thẻ sv tới chỗ mấy anh giữ xe gần khoa cntt lấy nhé. Thẻ tên Anh Ngọc lớp D23...",
    type: index % 3 === 0 ? "lost" : "found",
    category: index % 2 === 0 ? "THẺ SINH VIÊN" : "THẺ NỘI TRÚ",
    images: ["https://picsum.photos/seed/" + index + "/300/200"],
    location: "Bãi giữ xe khu A",
    status: "active",
    created_at: new Date().toISOString(),
    authorName: "Linh Dinh",
    authorAvt: "https://via.placeholder.com/30",
  }));

  const totalPages = Math.ceil(allPosts.length / itemsPerPage);

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages);
  const prevPage = () =>
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);

  const currentPosts = allPosts.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage,
  );

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 mt-10 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="bg-red-500 text-white p-1 px-2 rounded-lg text-[10px] font-bold animate-bounce uppercase">
            Mới
          </div>
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Mới nhất
          </h2>
        </div>
        {/* Nút Xem thêm chuyển sang trang Detailed Search */}
        <button
          onClick={() => navigate("/search")}
          className="text-indigo-600 border border-indigo-100 px-4 py-1.5 rounded-xl text-sm font-semibold hover:bg-indigo-50 transition-all"
        >
          Xem thêm
        </button>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 transition-all duration-500">
        {currentPosts.map((post) => (
          <div
            key={post._id}
            // 3. Gắn sự kiện navigate khi click vào card
            onClick={() => navigate(`/post/${post._id}`)}
            className="border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col h-full group cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative h-44 overflow-hidden">
              <img
                src={
                  post.images[0] ||
                  "https://via.placeholder.com/300x200?text=No+Image"
                }
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                alt={post.title}
              />
              <div className="absolute bottom-3 left-3 flex gap-1.5">
                <span
                  className={`${post.type === "found" ? "bg-green-500" : "bg-red-500"} text-white text-[9px] px-2 py-1 rounded font-bold uppercase`}
                >
                  {post.type === "found" ? "Nhặt được" : "Mất đồ"}
                </span>
                <span className="bg-indigo-600/90 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded font-bold uppercase">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-gray-800 text-sm mb-2 line-clamp-1 uppercase tracking-wide group-hover:text-indigo-600">
                {post.title}
              </h3>
              <p className="text-gray-500 text-[12px] line-clamp-2 mb-4 leading-relaxed min-h-[36px]">
                {post.description}
              </p>

              <div className="flex items-center gap-1 text-green-600 text-[11px] font-semibold mb-4 mt-auto">
                <span className="text-sm">📍</span> {post.location}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorAvt}
                    className="w-7 h-7 rounded-full border border-gray-100"
                    alt="avt"
                  />
                  <span className="text-[11px] text-gray-700 font-semibold">
                    {post.authorName}
                  </span>
                </div>
                <button className="bg-indigo-50 text-indigo-600 text-[10px] px-3 py-2 rounded-lg font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  Chi tiết →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prevPage();
        }} // StopPropagation để không bị dính click vào trang detail
        className="absolute left-[-15px] lg:left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white z-10 transition-all duration-300 active:scale-90"
      >
        <span className="font-bold text-lg">❮</span>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          nextPage();
        }}
        className="absolute right-[-15px] lg:right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-100 rounded-full shadow-lg flex items-center justify-center hover:bg-indigo-600 hover:text-white z-10 transition-all duration-300 active:scale-90"
      >
        <span className="font-bold text-lg">❯</span>
      </button>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentPage(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === currentPage
                ? "w-8 bg-indigo-600"
                : "w-2 bg-gray-200 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
