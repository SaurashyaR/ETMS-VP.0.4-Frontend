import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchFilterBar: React.FC = () => {
  return (
    <div
      className="
        flex flex-col sm:flex-row items-center justify-start gap-2
        w-full max-w-full
        sm:max-w-[640px]
        md:max-w-[900px]
        lg:max-w-[1047px]
        xl:max-w-[1180px]
        2xl:max-w-[1180px]
        mx-auto
        mt-5
      "
    >
      {/* Search Bar */}
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search"
          className="
            w-full h-[42px] pl-10 pr-4 rounded-[10px] border border-gray-300
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400
            transition duration-200
          "
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Filter Button */}
      <button
        type="button"
        className="
          flex items-center justify-center gap-2 h-[42px] w-full sm:w-auto
          px-6 py-2
          rounded-[10px] bg-white text-black hover:bg-gray-200
          transition duration-200 shadow
          whitespace-nowrap
        "
      >
        <FiFilter className="text-black text-lg" />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default SearchFilterBar;
