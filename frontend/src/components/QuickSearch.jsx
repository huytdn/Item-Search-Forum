import React from "react";

const QuickSearch = () => {
  return (
    <div className="w-full relative z-30">
      <div
        className="bg-white rounded-2xl p-2 lg:p-4 shadow-2xl shadow-indigo-100 border border-gray-100 
                      transition-all duration-300 ease-out
                      hover:-translate-y-2 focus-within:-translate-y-2 
                      hover:border-indigo-400 focus-within:border-indigo-400 
                      relative group"
      >
        {/* Badge TÌM KIẾM NHANH */}
        <div className="absolute -top-3.5 left-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[10px] font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-md">
          <span>★</span> TÌM KIẾM NHANH
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3">
          {/* Input */}
          <input
            type="text"
            placeholder="Nhập HỌ TÊN trên giấy tờ để tra..."
            className="flex-[3] w-full bg-gray-100 border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:bg-gray-200 transition-all"
          />

          {/* Selects */}
          <select className="flex-1 w-full bg-gray-100 border border-transparent rounded-xl px-3 py-3 text-sm text-gray-500 outline-none cursor-pointer focus:bg-gray-200">
            <option>Tất cả loại tin</option>
          </select>

          <select className="flex-1 w-full bg-gray-100 border border-transparent rounded-xl px-3 py-3 text-sm text-gray-500 outline-none cursor-pointer focus:bg-gray-200">
            <option>Tất cả loại đồ</option>
          </select>

          {/* Button */}
          <button className="w-full lg:w-auto bg-[#5f69f1] hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-lg shadow-indigo-100 active:scale-95 flex-shrink-0">
            Tìm đồ
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
