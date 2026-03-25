import React, { useState, useRef } from "react";
import { MdCheckCircle, MdCloudUpload, MdClose } from "react-icons/md";
import { useAppContext } from "../context/AppContext";
import axios from "axios"; // Thêm axios

const CreatePost = () => {
  const { user } = useAppContext();
  const fileInputRef = useRef(null);

  const [postType, setPostType] = useState("lost");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false); // Thêm trạng thái chờ khi đang upload

  const CATEGORIES = [
    "Thẻ sinh viên",
    "Căn cước công dân",
    "Bằng lái xe",
    "Thẻ ATM/Ngân hàng",
    "Ví/Bóp",
    "Điện thoại/Laptop",
    "Chìa khóa",
    "Balo/Túi xách",
    "Giấy tờ khác",
    "Khác",
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    location: "",
    contact: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // Giới hạn 5MB
        alert("File ảnh quá lớn, vui lòng chọn file dưới 5MB");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert("Vui lòng tải lên ảnh minh họa");

    setLoading(true);

    // 1. Lấy token từ localStorage (hoặc nơi bạn lưu khi đăng nhập)
    const token = localStorage.getItem("token");

    // Kiểm tra nhanh xem có token không trước khi gửi
    if (!token) {
      alert("Phiên đăng nhập hết hạn, vui lòng đăng nhập lại!");
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("type", postType.toUpperCase());
    data.append("category", formData.category);
    data.append("location", formData.location);
    data.append("contact", formData.contact);
    data.append("file", imageFile);

    try {
      const response = await axios.post("http://127.0.0.1:8000/posts", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          // 2. Thêm header Authorization với tiền tố Bearer
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data) {
        alert("Đăng tin thành công!");
        setFormData({
          title: "",
          description: "",
          category: "",
          location: "",
          contact: "",
        });
        removeImage();
      }
    } catch (error) {
      console.error("Lỗi đăng tin:", error);

      // Xử lý lỗi 401 (Unauthorized) riêng biệt
      if (error.response?.status === 401) {
        alert(
          "Bạn không có quyền thực hiện hành động này. Vui lòng đăng nhập lại.",
        );
      } else {
        alert(error.response?.data?.detail || "Không thể kết nối đến server");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-[#1e293b] uppercase tracking-wider">
          Trang Đăng Tin
        </h1>
        <div className="flex justify-center gap-6 mt-4 text-[13px] font-semibold text-gray-500">
          <div className="flex items-center gap-1.5">
            <MdCheckCircle className="text-green-500 text-lg" /> AI thông minh
          </div>
          <div className="flex items-center gap-1.5">
            <MdCheckCircle className="text-green-500 text-lg" /> Phản hồi nhanh
          </div>
          <div className="flex items-center gap-1.5">
            <MdCheckCircle className="text-green-500 text-lg" /> Bảo mật
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {!user ? (
            <div className="py-10 text-center bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Bạn cần đăng nhập để đăng tin
              </h2>
              <p className="text-gray-500 text-sm">
                Vui lòng đăng nhập bằng tài khoản Google để tiếp tục.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Bước 1: Loại tin */}
              <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-indigo-600 font-bold text-sm mb-4 uppercase">
                  Bước 1: Chọn loại tin
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div
                    onClick={() => setPostType("lost")}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${postType === "lost" ? "border-pink-500 bg-pink-50" : "border-gray-50 hover:border-pink-200"}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-500 text-2xl">
                      🔍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">
                        Tìm đồ thất lạc
                      </h3>
                      <p className="text-[11px] text-gray-400">
                        Đăng bài tìm kiếm đồ bị mất
                      </p>
                    </div>
                  </div>
                  <div
                    onClick={() => setPostType("found")}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${postType === "found" ? "border-indigo-500 bg-indigo-50" : "border-gray-100 hover:border-indigo-200"}`}
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">Nhặt được đồ</h3>
                      <p className="text-[11px] text-gray-400">
                        Đăng bài món đồ nhặt được
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bước 2: Tải ảnh */}
              <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h2 className="text-indigo-600 font-bold text-sm uppercase mb-4">
                  Bước 2: Tải ảnh
                </h2>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
                <div
                  onClick={() => !imagePreview && fileInputRef.current.click()}
                  className={`border-2 border-dashed rounded-2xl py-12 flex flex-col items-center justify-center transition-all cursor-pointer relative ${imagePreview ? "border-indigo-400" : "border-gray-200 bg-gray-50 hover:bg-white"}`}
                >
                  {imagePreview ? (
                    <div className="relative group">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-h-64 rounded-lg object-contain"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeImage();
                        }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:scale-110 transition-transform"
                      >
                        <MdClose size={20} />
                      </button>
                    </div>
                  ) : (
                    <>
                      <MdCloudUpload className="text-5xl text-gray-300" />
                      <p className="mt-4 text-indigo-600 font-bold text-sm">
                        Nhấp để tải ảnh
                      </p>
                      <p className="text-gray-400 text-[10px] mt-1">
                        Hỗ trợ JPG, PNG (Tối đa 5MB)
                      </p>
                    </>
                  )}
                </div>
              </section>

              {/* Bước 3: Thông tin chi tiết */}
              <section className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
                <h2 className="text-indigo-600 font-bold text-sm uppercase">
                  Bước 3: Thông tin chi tiết
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1.5">
                      Tiêu đề *
                    </label>
                    <input
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      type="text"
                      placeholder="VD: Rơi ví tại căn tin khu B..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1.5">
                      Nội dung *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows="3"
                      placeholder="Mô tả chi tiết món đồ..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-400 outline-none resize-none"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1.5">
                        Khu vực *
                      </label>
                      <input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        required
                        type="text"
                        placeholder="VD: Giảng đường C..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-400 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1.5">
                        Loại đồ *
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-400 outline-none"
                      >
                        <option value="">-- Chọn loại --</option>
                        {CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1.5">
                      Thông tin liên hệ *
                    </label>
                    <input
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      required
                      type="text"
                      placeholder="SĐT hoặc Facebook..."
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:border-indigo-400 outline-none"
                    />
                  </div>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className={`w-full ${loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"} text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98] mt-4`}
                >
                  {loading ? "Đang xử lý..." : "Đăng tin ngay"}
                </button>
              </section>
            </form>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <h3 className="text-amber-800 font-bold mb-3">💡 Mẹo đăng tin</h3>
            <p className="text-[12px] text-amber-700 leading-relaxed">
              Hãy chụp ảnh rõ nét và cung cấp thông tin liên hệ chính xác để
              tăng khả năng tìm thấy đồ thất lạc của bạn nhé!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
