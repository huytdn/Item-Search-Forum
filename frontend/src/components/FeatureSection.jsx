import React from "react";
import icons from "../assets/icons/icon";

const { GoPlus, HiOutlineUserGroup, IoSearch, FiZap, HiOutlineLightBulb } =
  icons;

const features = [
  {
    title: "Đăng tin miễn phí",
    desc: "Đăng tin tìm đồ thất lạc hoặc nhặt được hoàn toàn miễn phí",
    icon: <GoPlus className="w-6 h-6 text-blue-500" />,
    iconBg: "bg-blue-50",
  },
  {
    title: "Kết nối trực tiếp",
    desc: "Liên lạc ngay với người mất đồ hoặc người nhặt được",
    icon: <HiOutlineUserGroup className="w-6 h-6 text-green-500" />,
    iconBg: "bg-green-50",
  },
  {
    title: "Tìm kiếm nhanh chóng",
    desc: "Tập trung 100% tại Làng Đại Học, kết quả chính xác",
    icon: <IoSearch className="w-6 h-6 text-purple-500" />,
    iconBg: "bg-purple-50",
  },
  {
    title: "Tin ưu tiên",
    desc: "Hỗ trợ đăng tin khẩn cấp, hiển thị nổi bật trên trang chủ",
    icon: <FiZap className="w-6 h-6 text-orange-500" />,
    iconBg: "bg-orange-50",
  },
];

const FeatureSection = () => {
  return (
    <div className="w-full bg-[#f8faff] rounded-[2rem] p-8 mt-10 shadow-sm border border-blue-50/50">
      {/* Header Section */}
      <div className="flex items-start gap-4 mb-10">
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-2xl shadow-lg shadow-indigo-200">
          <HiOutlineLightBulb className="w-7 h-7 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            Trang này để làm gì?
          </h2>
          <p className="text-gray-400 text-sm mt-1 font-medium">
            Nền tảng kết nối cộng đồng Làng Đại Học, chuyên về tìm kiếm đồ thất
            lạc
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-[2rem] p-4 border border-transparent transition-all duration-300 
                       hover:shadow-[0_20px_40px_rgba(0,0,0,0.04)] hover:border-blue-100 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
          >
            {/* Icon box */}
            <div
              className={`${item.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110`}
            >
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
