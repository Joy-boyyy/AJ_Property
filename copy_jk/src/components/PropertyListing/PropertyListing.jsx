import React, { useState } from "react";
import "./PropertyListing.css";
import AllProperty from "../AllProperty/AllProperty";

const PropertyListing = () => {
  const [selectedPropertyBtn, setSelectedPropertyBtn] = useState("All");

  const choseBtnFun = (btnDetail) => {
    setSelectedPropertyBtn(btnDetail);
  };

  return (
    <div className="w-[100%] p-4">
      <div className="w-[100%] text-center">
        <h1 className="text-[3rem] font-bold">Property Listings</h1>
      </div>
      {/* ---------------- Navigation bar */}
      <nav className="propertyNav-Cl w-[100%]  mt-2 md:flex md:justify-center ">
        <ul className="m-2w-[100%] flex flex-col items-center justify-center md:flex md:flex-row bg-[#26c49f] text-[white] rounded-md ">
          <li
            className={`${
              selectedPropertyBtn === "All" ? "bg-[#1e9a7d]" : "bg-[#26c49f]"
            }`}
            onClick={() => {
              choseBtnFun("All");
            }}
          >
            All
          </li>
          <li
            className={`${
              selectedPropertyBtn === "Raw" ? "bg-[#1e9a7d]" : "bg-[#26c49f]"
            }`}
            onClick={() => {
              choseBtnFun("Raw");
            }}
          >
            RawHouse
          </li>
          <li
            className={`${
              selectedPropertyBtn === "Plots" ? "bg-[#1e9a7d]" : "bg-[#26c49f]"
            }`}
            onClick={() => {
              choseBtnFun("Plots");
            }}
          >
            Plots
          </li>
          <li
            className={`${
              selectedPropertyBtn === "Farm" ? "bg-[#1e9a7d]" : "bg-[#26c49f]"
            }`}
            onClick={() => {
              choseBtnFun("Farm");
            }}
          >
            Farmhouse
          </li>
          <li
            className={`${
              selectedPropertyBtn === "Home" ? "bg-[#1e9a7d]" : "bg-[#26c49f]"
            }`}
            onClick={() => {
              choseBtnFun("Home");
            }}
          >
            Home
          </li>
        </ul>
      </nav>
      {/* ------------- all Property section */}
      <AllProperty selectedFilter={selectedPropertyBtn} />
    </div>
  );
};

export default PropertyListing;
