import { Ticket } from "lucide-react";

const bookings = [
  {
    id: 1,
    name: "Sabita Shrestha",
    event: "Summer Beats Festival 2025",
    date: "Sep 12",
  },
  {
    id: 2,
    name: "Janvi Rai",
    event: "Global Tech Summit 2025",
    date: "Sep 12",
  },
  {
    id: 3,
    name: "Sushma Chaudhary",
    event: "Summer Beats Festival 2025",
    date: "Sep 12",
  },
  {
    id: 4,
    name: "Asmi Shahi",
    event: "Global Tech Summit 2025",
    date: "Sep 12",
  },
  {
    id: 5,
    name: "Sushila Khadka",
    event: "Global Tech Summit 2025",
    date: "Sep 12",
  },
  {
    id: 6,
    name: "Rabin Giri",
    event: "Global Tech Summit 2025",
    date: "Sep 12",
  },
];

export default function RecentBookings() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 w-full max-w-32xl">
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-[#F3F4F6] p-2 rounded-full">
            <Ticket className="w-5 h-5 text-gray-700" />
          </div>
          <h2 className="font-semibold text-base text-gray-800">
            Recent Bookings
          </h2>
        </div>
          <a
      href="#"
      className="text-[13px] text-blue-600 font-medium hover:underline flex items-center gap-[2px]"
    >
      View All
      <span>
        <img
          src="/assets/Vector.svg"
          alt="Arrow Icon"
          className="w-4 h-2 [fill:theme('#4B91F1')]"
        />
      </span>
    </a>
      </div>

      <div className="grid grid-cols-3 text-sm font-medium text-gray-600 border-b pb-2">
        <div>Date</div>
        <div>Name</div>
        <div>Event</div>
      </div>

      <div className="divide-y divide-gray-400 text-[13px]">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="grid grid-cols-3 items-center text-gray-800 py-2"
          >
            <span className="border border-blue-500 text-black-600 text-xs px-2 py-[2px] rounded font-semibold w-fit">
              {booking.date}
            </span>
            <span className="font-medium">{booking.name}</span>
            <span className="font-medium">{booking.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
