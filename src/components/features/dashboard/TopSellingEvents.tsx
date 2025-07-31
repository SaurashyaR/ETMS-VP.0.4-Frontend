import { Ticket, CalendarDays, ExternalLink } from "lucide-react";
import Image from "next/image";

const topSellingEvents = [
  {
    id: 101,
    title: "Summer Beats Festival 2025",
    description:
      "Join us for an electrifying night of music, dance, and unforgettable vibes! Grab your tickets now before they're gone!",
    date: "July 15, 2025",
    image: "/assets/Frame.jpg",
  },
  {
    id: 102,
    title: "Global Tech Summit 2025",
    description:
      "Connect with top tech leaders, explore groundbreaking innovations, and shape the future of technology! Secure your spot today!",
    date: "July 15, 2025",
    image: "/assets/Frame.jpg",
  },
  {
    id: 103,
    title: "Mountain Music Gala",
    description:
      "Experience breathtaking views and soulful tunes in a serene mountain setting. Don’t miss out!",
    date: "July 15, 2025",
    image: "/assets/Frame.jpg",
  },
];

export default function TopSellingEvents() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-8 flex justify-center items-start">
      <div className="bg-white rounded-xl p-4 shadow-md w-full max-w-2xl">
        <div className="flex items-center space-x-2 mb-4">
          <span className="bg-[#efefef] p-2 rounded-full">
            <Ticket className="h-5 w-5 text-gray-600" />
          </span>
          <h2 className="font-semibold text-lg">Top Selling Events</h2>
        </div>

        <div className="h-96 overflow-y-auto pr-2 scroll-smooth">
          <div className="flex flex-col gap-4">
            {topSellingEvents.map((event) => (
            <div
            key={event.id}
            className="relative border rounded-lg p-3 pr-4 flex items-start space-x-4 hover:shadow-md transition"
            >
            <div className="absolute bottom-0 right-[-12px] translate-x-[1px] bg-red-600 text-white text-[12px] px-3 py-[3px] rounded-tl-md flex items-center gap-1 shadow-sm">
                <span>🔥</span> Top Sale
            </div>

            <a
                href="#"
                className="absolute top-2 right-3 text-[13px] text-blue-600 font-medium inline-flex items-center hover:underline"
            >
                More info <ExternalLink className="w-3 h-3 ml-1" />
            </a>

            <div className="relative min-w-[100px] max-w-[100px] h-[100px]">
                <Image
                src={event.image}
                alt={event.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
                />
                <div className="absolute -bottom-0 left-1 bg-[#1D4ED8] text-white text-[11px] px-2 py-[2px] rounded flex items-center gap-1 shadow-sm">
                <CalendarDays className="w-3 h-3" />
                {event.date}
                </div>
            </div>

            <div className="flex flex-col gap-[2px] pr-6">
                <h3 className="font-semibold text-[15px] leading-snug">
                {event.title}
                </h3>
                <p className="text-[13px] text-[#0b0b0b] leading-snug mt-[24px]">
                {event.description}
                </p>
            </div>
            </div>

            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
