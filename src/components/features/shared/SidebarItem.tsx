import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  labelClassName?: string;
}

export default function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center space-x-4 px-4 py-[10px] text-[14px] cursor-pointer transition-colors mb-1 rounded-lg ${
        active
          ? "bg-[#588BF2] text-white font-semibold"
          : "hover:bg-[#F3F4F6]"
      }`}
    >
      {icon}
      <span
        className={`${
          active ? "text-white" : "text-[#0b0b0b]"
        } font-semibold text-[15px]`}
      >
        {label}
      </span>
    </div>
  );
}
