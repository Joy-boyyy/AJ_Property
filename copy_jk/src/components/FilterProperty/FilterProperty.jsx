import React from "react";

const FilterProperty = () => {
  return (
    <div className="mt-4 bg-[#00B98E] w-[100%] p-3">
      <form className="flex flex-col justify-center items-center w-[100%] p-[1rem] gap-4 lg:flex lg:flex-row lg:gap-4 lg:justify-center lg:items-center lg:min-h-[4rem]">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search Keyword"
          className="h-[3rem] w-[100%] lg:h-[3rem] lg:w-[19rem] cursor-pointer rounded-md pl-3"
        />
        <select
          name=""
          id=""
          className="text-black lg:h-[3rem] h-[3rem] w-[100%] lg:w-[16rem] cursor-pointer rounded-md"
        >
          <option value="">Property Type</option>
          <option value="">Property Type 1</option>
          <option value="">Property Type 2</option>
          <option value="">Property Type 3</option>
        </select>
        <select
          name=""
          id=""
          className="text-black lg:h-[3rem] h-[3rem] w-[100%] lg:w-[17rem] cursor-pointer rounded-md"
        >
          <option value="">Location</option>
          <option value="">Location 1</option>
          <option value="">Location 2</option>
          <option value="">Location 3</option>
        </select>
        <div>
          <button
            type="button"
            className="bg-[#0E2E50] text-white p-2 h-[3rem] w-[14rem] rounded-md cursor-pointer"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterProperty;
