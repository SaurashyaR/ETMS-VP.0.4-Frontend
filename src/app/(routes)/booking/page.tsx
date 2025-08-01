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
  

   <div className="ml-4 mr-4 flex-1">
    <TicketHeader />
    <SearchFilterBar />
    <BookingCard
      imageUrl={bookingData.imageUrl}
      startDate={bookingData.startDate}
      endDate={bookingData.endDate}
      title={bookingData.title}
      location={bookingData.location}
      price={bookingData.price}
    />
  </div>
</div>

    </>
  );
};

export default page;
