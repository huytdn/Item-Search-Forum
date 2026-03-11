import React from "react";
import icons from "../assets/icons/icon";
import { useAppContext } from "../context/AppContext";

const { LuNewspaper, IoSearch, MdOutlineDone } = icons;

const HeroBanner = () => {
  const { navigate } = useAppContext();

  const stats = [
    {
      label: "Lượt tìm kiếm",
      count: "4.500+",
      icon: <IoSearch className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      label: "Đồ tìm thấy",
      count: "548+",
      icon: <MdOutlineDone className="w-5 h-5 md:w-6 md:h-6" />,
    },
    {
      label: "Bài đăng",
      count: "927+",
      icon: <LuNewspaper className="w-5 h-5 md:w-6 md:h-6" />,
    },
  ];

  return (
    <div className="w-full h-full bg-gradient-to-br from-[#1d97ff] via-[#4b6cb7] to-[#9b51e0] rounded-[2rem] p-6 md:p-10 text-white flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl max-h-[520px]">
      {/* --- BACKGROUND DECOR --- */}
      <div className="absolute top-[10%] left-[8%] w-10 h-10 bg-white/10 rounded-full blur-sm animate-float-slow pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[5%] w-16 h-16 bg-white/10 rounded-full blur-md animate-float-medium pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse-bg pointer-events-none"></div>

      {/* --- CHIP / TAG --- */}
      <div className="relative z-10 bg-[#22c55e]/90 backdrop-blur-sm text-[10px] md:text-xs px-4 py-1 rounded-full mb-6 font-semibold tracking-wide shadow-lg select-none">
        • Tìm đồ thất lạc trong 1 giây tìm kiếm
      </div>

      {/* --- MAIN TITLE --- */}
      <h1 className="relative z-10 text-2xl md:text-4xl font-extrabold mb-4 leading-tight flex flex-wrap items-center justify-center gap-x-2 md:gap-x-3 italic">
        Đăng tin
        <span className="inline-block animate-twinkle text-yellow-300 not-italic">
          ✦
        </span>
        Tìm kiếm
        <span className="inline-block animate-twinkle-delayed text-yellow-300 not-italic">
          ✦
        </span>
        Nhận lại
      </h1>

      {/* --- DESCRIPTION --- */}
      <p className="relative z-10 text-[11px] md:text-sm opacity-90 max-w-xl mb-8 leading-relaxed font-light px-4">
        Website tìm đồ thất lạc cho sinh viên{" "}
        <span className="font-bold">PTIT</span>. Đăng tin tìm ví, điện thoại,
        giấy tờ, laptop, xe máy... bị mất.
      </p>

      {/* --- STATS CARDS --- */}
      <div className="relative z-10 grid grid-cols-3 gap-3 md:gap-4 w-full max-w-lg mb-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white/10 backdrop-blur-md rounded-2xl py-3 px-1 border border-white/20 
                       hover:bg-white/25 hover:-translate-y-2 transition-all duration-300 
                       cursor-default shadow-lg group flex flex-col items-center"
          >
            <div className="mb-1.5 text-blue-200 group-hover:scale-110 group-hover:text-white transition-all duration-300">
              {stat.icon}
            </div>
            <div className="text-base md:text-xl font-bold leading-none mb-1 tracking-tight">
              {stat.count}
            </div>
            <div className="text-[8px] md:text-[9px] uppercase font-bold tracking-widest opacity-60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* --- CTA BUTTONS --- */}
      <div className="relative z-10 flex flex-col items-center w-full">
        {/* Nút Đăng tin */}
        <button
          onClick={() => navigate("/post")}
          className="group relative overflow-hidden bg-[#22c55e] hover:bg-[#16a34a] hover:scale-105 active:scale-95 transition-all px-8 md:px-12 py-3 md:py-3.5 rounded-full font-bold text-sm md:text-base shadow-[0_10px_20px_-5px_rgba(34,197,94,0.4)]"
        >
          <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer pointer-events-none"></span>
          <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
            + Đăng tin ngay
          </span>
        </button>

        {/* Nút Tìm kiếm */}
        <button
          onClick={() => navigate("/search")}
          className="mt-4 text-[11px] md:text-xs opacity-70 hover:opacity-100 hover:underline transition-all flex items-center gap-1 font-medium italic"
        >
          hoặc Tìm kiếm đồ thất lạc <span className="not-italic">→</span>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
