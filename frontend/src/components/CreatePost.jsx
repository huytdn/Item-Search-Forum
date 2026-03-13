import React, { useState } from "react";
import { MdCheckCircle, MdCloudUpload } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

const CreatePost = () => {
  const [postType, setPostType] = useState("lost");

  // 1. THÊM STATE ĐỂ QUẢN LÝ FORM
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    school: "",
    category: "",
    contact: "",
  });

  // 2. HÀM XỬ LÝ THAY ĐỔI INPUT
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. HÀM XỬ LÝ GỬI FORM
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dữ liệu gửi đi:", { postType, ...formData });
    alert("Đang xử lý đăng tin...");
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-[#1e293b] uppercase tracking-wider">
          Trang Đăng Tin
        </h1>
        <div className="flex justify-center gap-6 mt-4 text-[13px] font-semibold text-gray-500">
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <MdCheckCircle className="text-green-500 text-lg" /> AI thông minh
            tự tìm kiếm
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <MdCheckCircle className="text-green-500 text-lg" /> Phản hồi nhanh
            chóng
          </div>
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            <MdCheckCircle className="text-green-500 text-lg" /> Bảo mật thông
            tin
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: MAIN FORM */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-8">
          {/* BƯỚC 1: CHỌN LOẠI TIN */}
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-indigo-600 font-bold text-sm mb-4 uppercase">
              Bước 1: Chọn loại tin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                onClick={() => setPostType("lost")}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${postType === "lost" ? "border-pink-500 bg-pink-50" : "border-gray-100 hover:border-pink-200"}`}
              >
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-2xl font-bold">
                  🔍
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Tìm đồ thất lạc</h3>
                  <p className="text-[11px] text-gray-400">
                    Đăng bài tìm kiếm món đồ bạn bị mất
                  </p>
                </div>
              </div>
              <div
                onClick={() => setPostType("found")}
                className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${postType === "found" ? "border-indigo-500 bg-indigo-50" : "border-gray-100 hover:border-indigo-200"}`}
              >
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-2xl font-bold">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Nhặt được đồ</h3>
                  <p className="text-[11px] text-gray-400">
                    Đăng bài món đồ bạn nhặt được
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* BƯỚC 2: TẢI ẢNH */}
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-indigo-600 font-bold text-sm uppercase">
                Bước 2: Tải ảnh
              </h2>
              <button
                type="button"
                className="bg-amber-50 text-amber-600 text-[11px] px-3 py-1 rounded-lg font-bold border border-amber-100 flex items-center gap-1"
              >
                ❓ Hướng dẫn
              </button>
            </div>
            <div className="bg-red-50 p-4 rounded-xl border border-red-100 mb-6">
              <p className="text-[12px] text-red-600 leading-relaxed font-medium">
                <span className="font-bold">Cảnh báo:</span> Khi tải ảnh (CCCD,
                Thẻ SV...), bạn{" "}
                <span className="font-bold uppercase underline">Bắt buộc</span>{" "}
                phải che mờ thông tin. Nhấp vào ảnh sau khi tải lên để dùng "Bút
                xóa" hoặc "Sticker".
              </p>
            </div>
            <div className="border-2 border-dashed border-gray-200 rounded-2xl py-12 flex flex-col items-center justify-center bg-gray-50 hover:bg-white transition-all cursor-pointer group">
              <MdCloudUpload className="text-5xl text-gray-300 group-hover:text-indigo-400 transition-colors" />
              <p className="mt-4 text-indigo-600 font-bold text-sm">
                Nhấp hoặc kéo thả ảnh vào đây
              </p>
              <p className="text-gray-400 text-[11px] mt-1">
                Ảnh sẽ được mở trong trình chỉnh sửa
              </p>
            </div>
          </section>

          {/* BƯỚC 3: THÔNG TIN CHI TIẾT */}
          <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
            <h2 className="text-indigo-600 font-bold text-sm uppercase">
              Bước 3: Thông tin chi tiết
            </h2>
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Tiêu đề <span className="text-red-500">*</span>
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  type="text"
                  placeholder="VD: NGUYỄN VĂN A, Mình có đánh rơi điện thoại..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-400 transition-all outline-none"
                />
                <p className="text-[10px] text-gray-400 mt-1">
                  Nên chứa Tên trên giấy tờ (nếu có) hoặc loại đồ vật
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-700 block mb-1.5">
                  Nội dung chi tiết <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Mô tả đặc điểm, thời gian, địa điểm chi tiết..."
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-400 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1.5">
                    Khu vực <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="VD: KTX Khu A, Căn tin NLU..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-400 transition-all outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1.5">
                    Trường / Group
                  </label>
                  <select
                    name="school"
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-400 transition-all outline-none cursor-pointer"
                  >
                    <option value="">-- Chọn trường (nếu có) --</option>
                    <option value="nlu">Nông Lâm</option>
                    <option value="uit">Công nghệ thông tin</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1.5">
                    Loại đồ <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-400 transition-all outline-none cursor-pointer"
                  >
                    <option value="">-- Chọn loại đồ --</option>
                    <option value="giay-to">Giấy tờ</option>
                    <option value="dien-tu">Điện tử</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1.5">
                    SĐT hoặc Link Facebook{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="contact"
                    value={formData.contact}
                    onChange={handleInputChange}
                    required
                    type="text"
                    placeholder="VD: 090xxxxxxx hoặc fb.com/..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-indigo-400 transition-all outline-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-[0.98] mt-6"
            >
              Đăng tin
            </button>
          </section>
        </form>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h3 className="text-red-700 font-bold text-base mb-4">
              Miễn trừ trách nhiệm
            </h3>
            <ul className="space-y-4 text-[12px] text-red-600/80 font-medium">
              <li className="flex gap-2">
                <span>•</span> Cảnh giác với người nhận/đăng tin không cung cấp
                được thông tin chi tiết về đồ vật.
              </li>
              <li className="flex gap-2">
                <span>•</span> Không chấp nhận yêu cầu chuyển khoản hoặc thanh
                toán bất kỳ khoản "phí" nào từ người lạ.
              </li>
              <li className="flex gap-2">
                <span>•</span> Nên gặp trực tiếp tại nơi công cộng (có camera,
                đông người) để trao đổi và xác minh.
              </li>
              <li className="flex gap-2">
                <span>•</span> Chúng tôi là nền tảng trung gian, phi lợi nhuận
                và không chịu trách nhiệm cho bất kỳ tranh chấp nào.
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-2xl border border-green-100">
            <h3 className="text-green-700 font-bold text-base mb-4">
              Tips tăng tỷ lệ tìm thấy
            </h3>
            <ul className="space-y-4 text-[12px] text-green-600/80 font-medium">
              <li className="flex gap-2">
                <span>•</span> Cung cấp đầy đủ thông tin về đồ vật (Tên trên
                giấy tờ, Trường học...).
              </li>
              <li className="flex gap-2">
                <span>•</span> Mô tả chi tiết đặc điểm nhận dạng, thời gian, địa
                điểm rơi/nhặt.
              </li>
              <li className="flex gap-2">
                <span>•</span> Thêm ảnh rõ nét của đồ vật (nếu có) nhưng đã che
                thông tin nhạy cảm.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
