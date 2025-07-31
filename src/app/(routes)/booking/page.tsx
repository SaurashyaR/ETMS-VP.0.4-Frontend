"use client";
import BookingCard from "@/components/features/booking/BookingCard";
import React from "react";
import { bookingData } from "@/types/bookingData";
import EventForm from "@/components/features/booking/EventForm";
import SearchFilterBar from "@/components/features/booking/SearchFilterBar";
import TicketHeader from "@/components/features/booking/TicketHeader";

const page = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-50 py-10 px-4 ms-90">
       
       <TicketHeader/>

        
        <SearchFilterBar />
        <BookingCard
          imageUrl={bookingData.imageUrl}
          startDate={bookingData.startDate}
          endDate={bookingData.endDate}
          title={bookingData.title}
          location={bookingData.location}
          price={bookingData.price}
        />
      </main>
    </>
  );
};

export default page;
