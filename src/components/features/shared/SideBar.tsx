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
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-[260px] bg-white shadow-2xl flex flex-col justify-between z-50">
      <div>
        <div className="text-center py-4">
          <h1 className="text-[20px] font-bold tracking-wide">
            <span className="text-[#4ABDE6] text-[22px]">THE</span>{" "}
            <span className="text-[#2F6DE0] font-extrabold text-[22px]">
              EVENTIX
            </span>
          </h1>
        </div>

        <div className="mt-2 px-1 flex flex-col gap-4">
          <Link href='/'>
            <SidebarItem
              active
              icon={<LayoutGrid size={18} />}
              label="Dashboard"
              labelClassName="text-[15px] font-semibold text-[#0b0b0b]"
            />
          </Link>
          <Link href="/event">
            <SidebarItem
              icon={<Calendar size={18} />}
              label="Events"
              labelClassName="text-[15px] font-semibold text-[#0b0b0b]"
            />
          </Link>
          <SidebarItem
            icon={<Ticket size={18} />}
            label="Reservations & Ticketing"
            labelClassName="text-[15px] font-semibold text-[#0b0b0b]"
          />
          <SidebarItem
            icon={<Users size={18} />}
            label="User Management"
            labelClassName="text-[15px] font-semibold text-[#0b0b0b]"
          />
          <SidebarItem
            icon={<Building2 size={18} />}
            label="Organizer Management"
            labelClassName="text-[15px] font-semibold text-[#0b0b0b]"
          />
          <SidebarItem
            icon={<BarChart2 size={18} />}
            label="Analytics"
            labelClassName="text-[15px] font-semibold text-[#0b0b0b]"
          />
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
