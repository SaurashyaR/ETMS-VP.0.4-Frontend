import { ReactNode } from "react";

interface SidebarItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
}

export default function SidebarItem({ icon, label, active }: SidebarItemProps) {
  return (
    <div
      className={`flex items-center space-x-4 px-4 py-[10px] text-[14px] cursor-pointer transition-colors ${
        active
          ? "bg-[#588BF2] text-white font-semibold"
          : "text-black hover:bg-[#F3F4F6]"
      }`}
    >
      {icon}    
      <span>{label}</span>
    </div>
  );
}
