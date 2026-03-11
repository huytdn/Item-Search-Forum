import React from "react";
import HeroBanner from "../components/HeroBanner";
import PrioritySidebar from "../components/PrioritySidebar";

const Home = () => {
  return (
    <div className="mt-6 md:mt-10 px-4 md:px-10 lg:px-[80px] xl:px-[180px] mb-10">
      {/* Grid container giúp 2 cột luôn có chiều cao bằng nhau (Equal Height) */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        {/* Banner chiếm 2 cột trên Desktop */}
        <div className="lg:col-span-3 flex">
          <HeroBanner />
        </div>

        {/* Sidebar chiếm 1 cột trên Desktop */}
        <div className="lg:col-span-2 flex">
          <PrioritySidebar />
        </div>
      </div>
    </div>
  );
};

export default Home;
