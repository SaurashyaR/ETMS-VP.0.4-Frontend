import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const SearchFilterBar: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 
                    w-full max-w-full
                    lg:max-w-[1047px]
                    xl:max-w-[1478px]
                    mx-auto
                    
                   ">
      {/* Search Bar */}
      <div className="relative w-full lg:w-[841px] xl:w-[1120px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full h-[42px] pl-10 pr-4 rounded-[10px] border border-gray-300
                     shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
        />
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Filter Button */}
      <button
        type="button"
        className="flex items-center justify-center gap-2 h-[42px] w-full sm:w-auto
                   lg:w-[174px] xl:w-[250px] px-[52px] py-[10px]
                   rounded-[10px] bg-blue-500 text-white hover:bg-blue-600 transition duration-200"
      >
        <FiFilter className="text-white text-lg" />
        <span>Filter</span>
      </button>
    </div>
  );
};

export default SearchFilterBar;
