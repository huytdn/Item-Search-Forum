import React, { useState, useEffect } from "react";

const PrioritySidebar = () => {
  const allNews = [
    {
      id: 1,
      name: "NGUYEN PHAM GIA HAN",
      desc: "Mình nhặt được Thẻ nội trú như trong ảnh...",
      img: "https://via.placeholder.com/80",
      type: "NHẶT ĐƯỢC",
    },
    {
      id: 2,
      name: "TÔ VŨ HẢI",
      desc: "M có nhặt đc ví của b này, trong đó còn có cccd...",
      img: "https://via.placeholder.com/80",
      type: "NHẶT ĐƯỢC",
    },
    {
      id: 3,
      name: "NGUYEN GIA HAO",
      desc: "Mình có nhặt được 1 ví có giấy tờ thông tin...",
      img: "https://via.placeholder.com/80",
      type: "NHẶT ĐƯỢC",
    },
    {
      id: 4,
      name: "LÊ VĂN TÁM",
      desc: "Đánh rơi chìa khóa xe máy SH gần nhà xe A2...",
      img: "https://via.placeholder.com/80",
      type: "TÌM ĐỒ",
    },
    {
      id: 5,
      name: "TRẦN THỊ BƯỞI",
      desc: "Nhặt được tai nghe Airpod Pro tại phòng 402...",
      img: "https://via.placeholder.com/80",
      type: "NHẶT ĐƯỢC",
    },
    {
      id: 6,
      name: "PHẠM CÔNG DANH",
      desc: "Mất thẻ sinh viên mã số B21DCCN123...",
      img: "https://via.placeholder.com/80",
      type: "TÌM ĐỒ",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex(
        (prevIndex) =>
          // Nếu đã đến cuối danh sách thì quay lại từ đầu
          (prevIndex + 1) % allNews.length,
      );
    }, 2000); // 2 giây đổi 1 lần

    return () => clearInterval(timer);
  }, [allNews.length]);

  // Lấy ra 4 tin liên tiếp (sử dụng toán tử % để lấy vòng lặp danh sách)
  const visibleNews = [];
  for (let i = 0; i < 4; i++) {
    visibleNews.push(allNews[(startIndex + i) % allNews.length]);
  }

  return (
    <div className="w-full h-full bg-white border border-gray-100 rounded-[2rem] shadow-xl flex flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl max-h-[520px]">
      {/* --- HEADER --- */}
      <div className="bg-gray-50/50 p-4 md:p-5 border-b border-gray-50 flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl animate-float-medium">
          🕵️‍♂️
        </div>
        <div>
          <h2 className="font-black text-gray-800 text-base md:text-lg uppercase tracking-tight leading-none">
            Tin ưu tiên
          </h2>
          <p className="text-[10px] text-gray-400 font-medium mt-1">
            Tự động cập nhật sau 2 giây
          </p>
        </div>
      </div>

      {/* --- NEWS LIST --- */}
      <div className="flex-1 p-4 space-y-3 overflow-hidden">
        {visibleNews.map((item, index) => (
          <div
            key={`${item.id}-${startIndex}`} // Key thay đổi theo startIndex để trigger animation
            className="flex gap-3 group cursor-pointer p-1.5 rounded-2xl hover:bg-gray-50 transition-all duration-200 animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }} // Hiệu ứng xuất hiện so le
          >
            <div className="relative flex-shrink-0">
              <img
                src={item.img}
                className="w-14 h-14 rounded-xl object-cover border border-gray-100 group-hover:scale-105 transition-transform"
                alt="thumb"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
            </div>

            <div className="flex flex-col justify-center py-0.5">
              <h3 className="text-[12px] font-extrabold text-gray-900 mb-0.5 group-hover:text-[#1d97ff] transition-colors line-clamp-1">
                {item.name}
              </h3>
              <p className="text-[11px] text-gray-500 line-clamp-2 leading-tight">
                {item.desc}
              </p>

              <div className="flex gap-1.5 mt-1.5">
                <span className="bg-[#f97316] text-white text-[8px] px-1.5 py-0.5 rounded font-bold shadow-sm">
                  Ưu tiên
                </span>
                <span className="bg-[#dcfce7] text-[#166534] text-[8px] px-1.5 py-0.5 rounded font-bold uppercase">
                  {item.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- FOOTER --- */}
      <div className="p-3 bg-gray-50/80 border-t border-gray-100 text-center">
        <button className="text-[10px] text-gray-400 hover:text-[#1d97ff] font-semibold transition-colors flex items-center justify-center gap-1 mx-auto group">
          Liên hệ Admin để ghim tin
          <span className="group-hover:rotate-45 transition-transform duration-300 text-[10px]">
            ⚙️
          </span>
        </button>
      </div>
    </div>
  );
};

export default PrioritySidebar;
