import Image from 'next/image';
import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

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
    <div
      className="
        w-full max-w-[1478px]
        overflow-hidden rounded-[10px] bg-white shadow-lg
        p-6
        mx-auto my-12
        flex flex-col lg:flex-row items-center justify-center
        lg:h-[246px]
        xl:h-[345px]
      "
    >
      <div
        className="
          flex flex-col md:flex-row
          w-full h-full
          lg:w-[988px] lg:h-[206px]
          xl:w-[1393px] xl:h-[290px]
          gap-8
        "
      >
        {/* Image section */}
        <div
          className="
            relative flex-shrink-0
            w-full h-48 rounded-[6px]
            md:w-2/5 md:h-auto
            lg:w-[218px] lg:h-[206px]
            xl:w-[307px] xl:h-[290px]
          "
        >
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-[6px]"
            priority
          />
        </div>

        {/* Content section */}
        <div
          className="
            flex flex-grow flex-col justify-between
            lg:w-[738px] lg:h-[186px]
            xl:w-[1041px] xl:h-[263px]
            space-y-5
          "
        >
          {/* Dates */}
          <div
            className="
              flex items-center border border-gray-300
              rounded-[18px]
              p-2
              gap-x-3
              lg:w-[304px] lg:h-[36px]
              xl:w-[429px] xl:h-[51px]
              text-sm font-semibold text-blue-500
            "
          >
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <FaCalendarAlt className="text-blue-500" />
              <span>{startDate}</span>
            </div>

            <div className="h-full w-px bg-gray-300"></div>

            <div className="flex items-center space-x-2 whitespace-nowrap">
              <FaCalendarAlt className="text-blue-500" />
              <span>{endDate}</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          {/* Location */}
          <div className="flex items-center space-x-2 text-gray-600">
            <FaMapMarkerAlt className="text-gray-500" />
            <span>{location}</span>
          </div>

          {/* Separator */}
          <div className="border-t border-gray-200"></div>

          {/* Button and Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              className="
                rounded-lg bg-blue-500 px-6 py-2 text-white shadow-md
                hover:bg-blue-600 focus:outline-none focus:ring-2
                focus:ring-blue-500 focus:ring-opacity-50
                w-full sm:w-auto
              "
            >
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
