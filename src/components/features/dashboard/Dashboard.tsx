import React from "react";
import Sidebar from "../shared/SideBar";
import UpcomingEventsPage from "./UpcomingEvents";
import RecentBookings from "./RecentBookings";
import RevenueInsights from "./RevenueInsights";
import TopSellingEvents from "./TopSellingEvents";

const Dashboard = () => {
  return (
    <div className="min-h-screen w-full bg-[#f4f4f4]">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Content Wrapper with padding to offset the sidebar */}
      <div className="pl-[260px] p-6">
        <div className="mb-6">
          <h1 className="ml-6 text-2xl font-semibold text-gray-800">Dashboard</h1>
          <hr className="mt-6 border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6 ml-6">
          <UpcomingEventsPage />
          <RecentBookings />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ml-6">
          <RevenueInsights />
          <TopSellingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
