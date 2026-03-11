import React from "react";
import HeroBanner from "../components/HeroBanner";
import PrioritySidebar from "../components/PrioritySidebar";
import QuickSearch from "../components/QuickSearch";
import TermsBanner from "../components/TermsBanner";

const Home = () => {
  return (
    <div className="mt-4 md:mt-8 mb-10">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
        <div className="lg:col-span-3 flex">
          <HeroBanner />
        </div>
        <div className="lg:col-span-2 flex">
          <PrioritySidebar />
        </div>
      </div>

      {/* Căn chỉnh lại thanh Search */}
      <div className="mt-[40px] w-full">
        <QuickSearch />
      </div>
      <div className="mt-[20px] w-full">
        <TermsBanner />
      </div>
    </div>
  );
};

export default Home;
