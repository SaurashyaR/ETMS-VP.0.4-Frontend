import React from "react";
import Sidebar from "../shared/SideBar";
import UpcomingEventsPage from "./UpcomingEvents";
import RecentBookings from "./RecentBookings";
import RevenueInsights from "./RevenueInsights";
import TopSellingEvents from "./TopSellingEvents";

const Dashboard = () => {
  return (
    <div className="flex bg-[#f4f4f4] min-h-screen w-full">
      <Sidebar />

      <div className="flex-1 p-6">
        <div className="mb-4">
          <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
          <hr className="mt-3 border-t border-gray-300" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
          <UpcomingEventsPage />
          <RecentBookings />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RevenueInsights />
          <TopSellingEvents />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
