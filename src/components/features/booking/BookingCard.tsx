"use client";
import Image from "next/image";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

interface BookingCardProps {
  imageUrl: string;
  startDate: string;
  endDate: string;
  title: string;
  location: string;
  price: number;
}

const BookingCard: React.FC<BookingCardProps> = ({
  imageUrl,
  startDate,
  endDate,
  title,
  location,
  price,
}) => {
  return (
    <div className="w-full px-4 py-10">
      <div
        className={`
          bg-white shadow-lg rounded-[10px]
          flex flex-col lg:flex-row gap-4
          p-4
          lg:px-[16px] lg:py-[20px]
          w-full
          lg:max-w-none lg:h-[246px] 
        `}
      >
        {/* Image */}
        <div
          className={`
            relative flex-shrink-0 
            w-full aspect-[4/3] rounded-[6px] 
            md:w-2/5
            lg:w-[218px] lg:h-[206px] lg:aspect-auto
          `}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-[6px]"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-grow space-y-4">
          {/* Dates */}
          <div
            className={`
              flex items-center gap-3 border border-gray-300
              rounded-full px-4 py-2 text-blue-500 text-sm font-semibold w-fit
            `}
          >
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{startDate}</span>
            </div>
            <div className="h-4 w-px bg-gray-300" />
            <div className="flex items-center gap-2">
              <FaCalendarAlt />
              <span>{endDate}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-600">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>{location}</span>
          </div>

          <div className="border-t border-gray-200" />

          {/* Button & Price */}
           <div className="flex items-center gap-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            View Detail
          </button>
          <span className="text-2xl font-bold text-gray-800 whitespace-nowrap">
            Rs {price}
          </span>
        </div>


        </div>
      </div>
    </div>
  );
};

export default BookingCard;
