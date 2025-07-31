import {
  LayoutGrid,
  Calendar,
  Ticket,
  Users,
  Building2,
  BarChart2,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="h-screen w-[230px] bg-white shadow-2xl flex flex-col justify-between">
      <div>
        <div className="text-center py-4">
        <h1 className="text-[20px] font-bold tracking-wide">
          <span className="text-[#4ABDE6] text-[22px]">THE</span>{" "}
          <span className="text-[#2F6DE0] font-extrabold text-[22px]">
            EVENTIX
          </span>
        </h1>

        </div>

        <div className="mt-2">
          <SidebarItem active icon={<LayoutGrid size={18} />} label="Dashboard" />
          <SidebarItem icon={<Calendar size={18} />} label="Events" />
          <SidebarItem icon={<Ticket size={18} />} label="Reservations & Ticketing" />
          <SidebarItem icon={<Users size={18} />} label="User Management" />
          <SidebarItem icon={<Building2 size={18} />} label="Organizer Management" />
          <SidebarItem icon={<BarChart2 size={18} />} label="Analytics" />
        </div>
      </div>

      <div className="px-3 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-gray-300" />
          <div>
            <p className="text-[13px] font-semibold text-black">Username</p>
            <p className="text-[11px] text-gray-600">username@xyz.com</p>
          </div>
        </div>
        <LogOut size={18} className="text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
}
