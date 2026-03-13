import React from "react";
import HeroBanner from "../components/HeroBanner";
import PrioritySidebar from "../components/PrioritySidebar";
import QuickSearch from "../components/QuickSearch";
import TermsBanner from "../components/TermsBanner";
import LatestNews from "../components/LatestNews";
import FeatureSection from "../components/FeatureSection";

const Home = () => {
  return (
    <div className="w-full bg-[#f0f2f5] min-h-screen">
      <div className="xl:px-[250px] px-4 md:px-10 mx-auto py-4 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
          <div className="lg:col-span-3 flex">
            <HeroBanner />
          </div>
          <div className="lg:col-span-2 flex">
            <PrioritySidebar />
          </div>
        </div>

        <div className="mt-10 w-full relative z-20">
          <QuickSearch />
        </div>

        <div className="mt-6 w-full">
          <TermsBanner />
        </div>

        <div className="mt-10 w-full">
          <LatestNews />
        </div>

        <div className="mt-10 w-full mb-10">
          <FeatureSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
