import React from "react";
import { GrCheckmark } from "react-icons/gr";
import "./perfectProperty.css";

const PerfectProperty = () => {
  return (
    <div className="w-[100%] bg-[#EFFDF5] flex flex-col items-center lg:flex lg:flex-row p-[2rem] text-black">
      <div className="lg:basis-[50%] w-[80%] h-[25rem]  imgMainDiv">
        <img
          src="https://ajproperty.in/img/gomtinagar.jpg"
          alt="gomtinagar.jpg"
          className="lg:w-[80%] w-[80%] lg:h-[80%] h-[80%]"
        />
      </div>
      <div className="lg:basis-[50%] ">
        <h1 className="text-[3rem] font-bold">
          #1 Place To Find The Perfect Property
        </h1>
        <p className="mt-3 text-[#7b6565]">
          Discover your ideal property with us—offering a wide range of options,
          from homes to farmhouses, in prime Lucknow locations, all at
          unbeatable prices to suit your lifestyle and budget.
        </p>

        <p className="text-[#7b6565] flex gap-2 items-center mt-3">
          <span className="paraSPan font-bold flex gap-2 items-center">
            <GrCheckmark color="#00B98E" /> Diverse Options:
          </span>
          Homes, plots and farmhouses to fit every lifestyle.
        </p>
        <p className="text-[#7b6565] flex gap-2 items-center mt-3">
          <span className="paraSPan font-bold flex gap-2 items-center">
            <GrCheckmark color="#00B98E" /> Prime Locations:
          </span>
          Sought-after spots across Lucknow. Unbeatable
        </p>
        <p className="text-[#7b6565] flex gap-2 items-center mt-3">
          <span className="paraSPan font-bold flex gap-2 items-center">
            <GrCheckmark color="#00B98E" /> Value:
          </span>{" "}
          Quality properties at competitive prices.
        </p>

        <div className="mt-3">
          <button
            type="button"
            className="bg-[#00B98E] text-white pt-4 pb-4 pl-8 pr-8 rounded-md"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfectProperty;
