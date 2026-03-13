import React, { useState } from "react"; // Thêm useState để quản lý nội dung bình luận
import { useParams, useNavigate } from "react-router-dom"; // Thêm useNavigate
import { useAppContext } from "../context/AppContext"; // Import AppContext
import {
  FaFacebook,
  FaLink,
  FaRegCommentDots,
  FaPaperPlane,
} from "react-icons/fa";
import {
  MdOutlineLocationOn,
  MdOutlineSchool,
  MdOutlineCalendarToday,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import { IoChatbubbleEllipses } from "react-icons/io5";

const PostDetailCard = () => {
  const { id } = useParams();
  const { user, navigate } = useAppContext(); // Lấy user và navigate từ context
  const [commentText, setCommentText] = useState(""); // Quản lý nội dung bình luận đang nhập

  const postData = {
    title: "NGUYEN GIA HAO",
    type: "Nhặt được",
    category: "Ví tiền",
    location: "11 Nguyễn Văn Chiêm, Bến Nghé, Quận 1, Hồ Chí Minh",
    school: "HUTECH",
    date: "2/12/2025",
    views: "426 lượt",
    image: "https://via.placeholder.com/400x500",
    author: {
      name: "Lương 2 chẹo",
      avatar: "https://via.placeholder.com/100",
      role: "ADMIN",
      joined: "2 tháng",
      totalPosts: "579 tin",
    },
  };

  const handleSendComment = () => {
    if (!commentText.trim()) return;
    console.log("Gửi bình luận:", commentText);
    setCommentText(""); // Xóa nội dung sau khi gửi
    alert("Tính năng gửi bình luận đang được phát triển!");
  };

  return (
    <div className="w-full bg-[#f0f2f5] min-h-screen xl:px-[250px] px-4 md:px-10 py-10">
      <div className="flex flex-col gap-6">
        {/* KHỐI 1: CHI TIẾT TIN CHÍNH */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 md:p-10">
          <h1 className="text-2xl font-bold text-[#2d3436] text-center mb-10 uppercase tracking-tight">
            Chi tiết tin
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm sticky top-24">
                <img
                  src={postData.image}
                  alt="Post content"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="flex gap-2">
                <span className="bg-[#e6fcf5] text-[#0ca678] text-[11px] font-bold px-3 py-1 rounded-md uppercase">
                  {postData.type}
                </span>
                <span className="bg-[#f3f0ff] text-[#5f27cd] text-[11px] font-bold px-3 py-1 rounded-md uppercase">
                  {postData.category}
                </span>
              </div>

              <h2 className="text-3xl font-extrabold text-[#1e293b] leading-tight">
                {postData.title}
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <MdOutlineLocationOn className="text-gray-400 text-xl mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-bold text-xs uppercase">
                      Khu vực
                    </span>
                    <span className="font-semibold text-[#1e293b]">
                      {postData.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdOutlineSchool className="text-gray-400 text-xl mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-bold text-xs uppercase">
                      Trường
                    </span>
                    <span className="font-semibold text-[#1e293b]">
                      {postData.school}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdOutlineCalendarToday className="text-gray-400 text-xl mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-bold text-xs uppercase">
                      Ngày đăng
                    </span>
                    <span className="font-semibold text-[#1e293b]">
                      {postData.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MdOutlineRemoveRedEye className="text-gray-400 text-xl mt-0.5" />
                  <div className="flex flex-col">
                    <span className="text-gray-400 font-bold text-xs uppercase">
                      Lượt xem
                    </span>
                    <span className="font-semibold text-[#1e293b]">
                      {postData.views}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col gap-3">
                <div className="flex gap-2">
                  <button className="flex-1 bg-[#099268] hover:bg-[#087f5b] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-green-100">
                    <IoChatbubbleEllipses className="text-xl" /> Liên hệ nhận
                  </button>
                  <button className="w-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-100">
                    ...
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-[#fff9db] text-[#f08c00] py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-yellow-100 hover:bg-yellow-100 transition-all">
                    <FaFacebook /> Facebook
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Đã copy liên kết!");
                    }}
                    className="bg-[#f8f9fa] text-[#495057] py-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-200 transition-all"
                  >
                    <FaLink /> Copy Link
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
                <div className="bg-[#064e3b] text-white py-3 text-center text-[10px] font-bold uppercase tracking-widest">
                  Người đăng tin
                </div>
                <div className="p-6 flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full border-4 border-green-50 mb-3 relative overflow-hidden shadow-sm">
                    <img
                      src={postData.author.avatar}
                      alt="Author"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">
                    {postData.author.name}
                  </h3>
                  <span className="bg-red-50 text-red-500 text-[9px] font-black px-3 py-1 rounded-full border border-red-100 mt-2 uppercase">
                    ● {postData.author.role}
                  </span>

                  <div className="grid grid-cols-2 w-full mt-6 pt-6 border-t border-gray-50 text-center">
                    <div className="border-r border-gray-50">
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-tight">
                        Tham gia
                      </p>
                      <p className="text-sm font-bold text-gray-700">
                        {postData.author.joined}
                      </p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 uppercase leading-tight">
                        Tin đăng
                      </p>
                      <p className="text-sm font-bold text-gray-700">
                        {postData.author.totalPosts}
                      </p>
                    </div>
                  </div>

                  <button className="w-full bg-[#088f81] hover:bg-[#067469] text-white text-[11px] font-bold py-3 rounded-xl mt-6 transition-all uppercase shadow-md shadow-emerald-50 tracking-wide">
                    Nhắn tin cho người đăng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KHỐI 2: BÌNH LUẬN */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 mb-10">
          <div className="flex justify-between items-center border-b border-gray-50 pb-6 mb-10">
            <div className="flex items-center gap-2">
              <FaRegCommentDots className="text-2xl text-gray-700" />
              <h3 className="text-xl font-bold text-gray-800">
                Bình luận <span className="text-indigo-600">(0)</span>
              </h3>
            </div>
            <button className="text-[11px] font-bold text-gray-500 border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              Mới nhất
            </button>
          </div>

          <div className="w-full">
            {user ? (
              /* GIAO DIỆN KHI ĐÃ ĐĂNG NHẬP: Ô NHẬP BÌNH LUẬN */
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex-shrink-0 flex items-center justify-center text-white font-bold overflow-hidden shadow-sm">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      className="w-full h-full object-cover"
                      alt="me"
                    />
                  ) : (
                    user.name?.charAt(0).toUpperCase()
                  )}
                </div>
                <div className="flex-1 space-y-3">
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Viết bình luận của bạn..."
                    className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm outline-none focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50 transition-all resize-none min-h-[100px]"
                  ></textarea>
                  <div className="flex justify-end">
                    <button
                      onClick={handleSendComment}
                      disabled={!commentText.trim()}
                      className="bg-[#5f27cd] hover:bg-[#4834d4] disabled:bg-gray-300 text-white px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-100"
                    >
                      <FaPaperPlane className="text-xs" /> Gửi bình luận
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* GIAO DIỆN KHI CHƯA ĐĂNG NHẬP */
              <div className="flex flex-col items-center justify-center py-10">
                <p className="text-gray-400 font-medium mb-4 text-sm">
                  Chưa có bình luận nào. Hãy là người đầu tiên!
                </p>
                <button
                  onClick={() => navigate("/login")}
                  className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors text-base underline underline-offset-8 decoration-2 decoration-indigo-200"
                >
                  Đăng nhập để bình luận
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailCard;
