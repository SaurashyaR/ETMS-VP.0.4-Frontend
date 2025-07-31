"use client";

import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center pt-10">
      <div
        className="
          w-[90%]
          sm:max-w-[640px]
          md:max-w-[900px]
          lg:max-w-[1047px]
          xl:max-w-[1280px]
          2xl:max-w-[1280px]
        "
      >
        {/* Title */}
        <h1 className="font-[Baumans] text-[24px] sm:text-[28px] md:text-[32px] xl:text-[36px] 2xl:text-[40px] leading-none tracking-normal font-normal text-black text-center md:text-left">
          Add Event Details
        </h1>

        {/* Subtitle */}
        <p className="font-[Baumans] text-[10px] sm:text-[11px] md:text-[12px] xl:text-[13px] 2xl:text-[14px] leading-none tracking-normal font-normal text-black mt-2 text-center md:text-left">
          Effortless Event Setup: Add Your Event Details in Minutes!
        </p>

        {/* Line */}
        <div
          className="
            mt-4
            mb-4
            border-t-[0.5px]
            border-[#0000004D]
            w-full
          "
        />
      </div>
    </section>
  );
};

export default HeaderSection;

