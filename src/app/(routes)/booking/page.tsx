"use client";
import BookingCard from "@/components/features/booking/BookingCard";
import React from "react";
import { bookingData } from "@/types/bookingData";
import EventForm from "@/components/features/booking/EventForm";
import SearchFilterBar from "@/components/features/booking/SearchFilterBar";
import TicketHeader from "@/components/features/booking/TicketHeader";
import Sidebar from "@/components/features/shared/SideBar";

const page = () => {
  return (
    <>
  <div className="flex">
  <Sidebar />

  <div className="flex-1 ml-[260px] px-4">
    <TicketHeader />
    <SearchFilterBar />
    {bookingData.map((booking, index) => (
      <BookingCard
        key={index}
        imageUrl={booking.imageUrl}
        startDate={booking.startDate}
        endDate={booking.endDate}
        title={booking.title}
        location={booking.location}
        price={booking.price}
      />
    ))}
  </div>
</div>


    </>
  );
};

export default page;
