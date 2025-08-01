"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { eventFormSchema, EventFormSchema } from "@/lib/validation/eventFormSchema";
import { useArtistStore } from "@/store/artistStore";

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EventFormSchema>({
    resolver: zodResolver(eventFormSchema),
  });

  const { artists, addArtist, updateArtist } = useArtistStore();

  const onSubmit: SubmitHandler<EventFormSchema> = (data) => {
    console.log(data);
    console.log("Artist Section:", artists);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[1280px] mx-auto p-8 bg-white border border-[#e0e0e0] rounded shadow-sm"
    >
      {/* Event Details Section */}
      <div className="mb-6">
        <h2 className="text-[#2196f3] text-sm font-semibold mb-4">Event Details</h2>

        <div className="border rounded p-4">
          <p className="text-sm mb-2">Upload Event Photo</p>
          <div className="border border-dashed rounded-md p-6 text-center flex flex-col items-center justify-center gap-2">
            <p className="text-sm">Drag and Drop files to upload</p>
            <p className="text-xs text-gray-500">Your file will be private until you publish it</p>
            <label htmlFor="eventPhoto" className="bg-gray-100 border text-sm px-4 py-1 rounded cursor-pointer hover:bg-gray-200">
              Select files
              <input id="eventPhoto" type="file" className="hidden" {...register("eventPhoto")} />
            </label>
            {errors.eventPhoto && <p className="text-red-500 text-xs">{errors.eventPhoto.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col gap-1">
            <Label htmlFor="eventName">Event Name</Label>
            <Input id="eventName" {...register("eventName")} />
            {errors.eventName && <p className="text-red-500 text-xs">{errors.eventName.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="eventDate">Event Date</Label>
            <Input type="date" id="eventDate" {...register("eventDate")} />
            {errors.eventDate && <p className="text-red-500 text-xs">{errors.eventDate.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="eventTime">Event Time</Label>
            <Input id="eventTime" {...register("eventTime")} />
            {errors.eventTime && <p className="text-red-500 text-xs">{errors.eventTime.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("location")} />
            {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="doorTime">Door Opening Time</Label>
            <Input id="doorTime" {...register("doorTime")} />
            {errors.doorTime && <p className="text-red-500 text-xs">{errors.doorTime.message}</p>}
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="ticketPrice">Ticket Price</Label>
            <Input type="number" id="ticketPrice" {...register("ticketPrice")} />
            {errors.ticketPrice && <p className="text-red-500 text-xs">{errors.ticketPrice.message}</p>}
          </div>
        </div>

        <div className="mt-4">
          <Label htmlFor="eventDetails">Event Details</Label>
          <Textarea id="eventDetails" {...register("eventDetails")} />
          {errors.eventDetails && <p className="text-red-500 text-xs">{errors.eventDetails.message}</p>}
        </div>
        <div className="mt-4">
          <Label htmlFor="terms">Terms and Conditions</Label>
          <Textarea id="terms" {...register("terms")} />
          {errors.terms && <p className="text-red-500 text-xs">{errors.terms.message}</p>}
        </div>
      </div>

      {/* Artist Details Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-[#2196f3] text-sm font-semibold">Event Artist Details</h2>
          <Button type="button" variant="outline" size="sm" onClick={addArtist}>
            <Plus className="w-4 h-4 mr-1" /> Add
          </Button>
        </div>

        {artists.map((artist, index) => (
          <div key={index} className="mb-6 border border-gray-200 p-4 rounded mt-4">
            <h3 className="text-sm font-medium mb-2 text-gray-700">Artist #{index + 1}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <Label htmlFor={`artistName_${index}`}>Artist Name</Label>
                <Input
                  id={`artistName_${index}`}
                  value={artist.name}
                  onChange={(e) => updateArtist(index, "name", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-1">
                <Label htmlFor={`artistRole_${index}`}>Artist Role</Label>
                <Input
                  id={`artistRole_${index}`}
                  value={artist.role}
                  onChange={(e) => updateArtist(index, "role", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-4">
              <Label htmlFor={`artistBio_${index}`}>Artist Biography</Label>
              <Textarea
                id={`artistBio_${index}`}
                value={artist.bio}
                onChange={(e) => updateArtist(index, "bio", e.target.value)}
              />
            </div>

            <div className="border rounded p-4 mt-4">
              <p className="text-sm mb-2">Upload Photo</p>
              <div className="border border-dashed rounded-md p-6 text-center flex flex-col items-center justify-center gap-2">
                <p className="text-sm">Drag and Drop files to upload</p>
                <p className="text-xs text-gray-500">Your file will be private until you publish it</p>
                <label htmlFor={`artistPhoto_${index}`} className="bg-gray-100 border text-sm px-4 py-1 rounded cursor-pointer hover:bg-gray-200">
                  Select files
                  <input
                    id={`artistPhoto_${index}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => updateArtist(index, "photo", e.target.files)}
                  />
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button
          type="submit"
          className="bg-[#00BCD4] text-white rounded px-6 py-2 hover:bg-[#00acc1]"
        >
          Submit
        </Button>
        <Button
          type="button"
          className="bg-[#f44336] text-white rounded px-6 py-2 hover:bg-[#e53935]"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}