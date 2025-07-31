import React from 'react';

interface TicketHeaderProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const TicketHeader: React.FC<TicketHeaderProps> = ({
  title = 'Ticket Booking',
  subtitle = 'Seamless Ticket Booking: Reserve Your Spot in Just a Few Clicks!',
  buttonText = 'Add Event',
  onButtonClick,
}) => {
  return (
 <div
  className="
    w-full p-4
    flex flex-col md:flex-row items-start md:items-center justify-between
    border-b border-gray-300
    md:h-[120px] lg:h-[140px] xl:h-[160px]
    px-4 md:px-8 lg:px-12 xl:px-16
    py-4 md:py-6 lg:py-8 xl:py-10
    md:max-w-[591px]
    xl:max-w-[1047px]
    2xl:max-w-[1478px]
  "
>
  {/* Text Content */}
  <div className="flex flex-col mb-4 md:mb-0">
    <h1
      className="
        text-2xl md:text-3xl lg:text-4xl xl:text-5xl
        font-semibold text-gray-800
        mb-1
      "
    >
      Ticket Booking
    </h1>
    <p
      className="
        text-sm md:text-base lg:text-lg xl:text-xl
        text-gray-600
      "
    >
      Seamless Ticket Booking: Reserve Your Spot in Just a Few Clicks!
    </p>
  </div>

  {/* Add Event Button */}
  <button
    className="
      px-6 py-2
      bg-transparent border border-blue-500 text-blue-500 font-semibold rounded-lg
      hover:bg-blue-50 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
      transition-colors duration-200
      w-full md:w-auto
      h-10 md:h-11 lg:h-12
      text-base md:text-lg
    "
  >
    Add Event
  </button>
</div>


  );
};

export default TicketHeader;
