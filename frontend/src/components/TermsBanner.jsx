import React from "react";
import { useNavigate } from "react-router-dom";
import icons from "../assets/icons/icon";

const { PiWarningBold, FiFileText } = icons;

const TermsBanner = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full mt-10 mb-10">
      <div className="bg-[#fff9db] border border-[#ffec99] rounded-2xl p-1.5 md:p-3 flex items-center justify-center gap-3 md:gap-5 shadow-sm">
        {/* Icon cảnh báo từ bộ icons của bạn */}
        <div className="text-[#e67e22] text-xl md:text-2xl">
          <PiWarningBold />
        </div>

        {/* Nội dung văn bản */}
        <p className="text-[#856404] text-sm md:text-base font-medium">
          Vui lòng đọc các{" "}
          <span className="font-bold text-[#5c4300] underline cursor-pointer">
            Điều khoản sử dụng
          </span>{" "}
          trước khi sử dụng website nhennnn!
        </p>

        {/* Nút Xem ngay với hiệu ứng Hover */}
        <button
          onClick={() => navigate("/terms")}
          className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-5 py-2.5 rounded-xl text-sm font-bold 
                     flex items-center gap-2 transition-all duration-300 
                     hover:shadow-[0_4px_15px_rgba(243,156,18,0.4)] 
                     active:scale-95 flex-shrink-0"
        >
          <FiFileText className="text-lg" />
          Xem ngay
        </button>
      </div>
    </div>
  );
};

export default TermsBanner;
