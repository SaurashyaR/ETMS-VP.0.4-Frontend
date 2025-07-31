"use client";

import React from "react";
import { useRouter } from "next/navigation";

const TicketHeader: React.FC = () => {
  const router = useRouter();

  const handleAddEvent = () => {
    router.push("/event");
  };

  return (
    <section className="w-full flex justify-center pt-10">
      <div
        className="
          w-[90%]
          sm:max-w-[640px]
          md:max-w-[900px]
          lg:max-w-[1047px]
          xl:max-w-[1280px]
          2xl:max-w-[1480px]
        "
      >
        {/* Title + Button */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            {/* Title */}
            <h1 className="font-[Baumans] text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px] 2xl:text-[40px] leading-none tracking-normal font-normal text-black text-left">
              Ticket Booking
            </h1>

            {/* Subtitle */}
            <p className="font-[Baumans] text-[10px] sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-none tracking-normal font-normal text-black mt-2 text-left">
              Seamless Ticket Booking: Reserve Your Spot in Just a Few Clicks!
            </p>
          </div>

          {/* Add Event Button */}
          <button
            onClick={handleAddEvent}
            className="
              mt-4 md:mt-0
              border-2
              border-[#4B91F1]
              text-[#4B91F1]
              bg-transparent
              font-[Baumans]
              font-normal
              leading-none
              text-[12px] sm:text-[14px] md:text-[16px] xl:text-[17px] 2xl:text-[18px]
              px-4 py-2
              rounded-[5px]
              hover:bg-[#4B91F11A] transition-colors
              whitespace-nowrap
            "
          >
            Add Event
          </button>
        </div>

        {/* Divider */}
        <div className="mt-4 mb-4 border-t-[0.5px] border-[#0000004D] w-full" />
      </div>
    </section>
  );
};

export default TicketHeader;
