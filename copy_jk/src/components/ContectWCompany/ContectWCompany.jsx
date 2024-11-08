import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

import { FaCalendarAlt } from "react-icons/fa";

const ContectWCompany = () => {
  return (
    <div className="w-[100%] mt-6 mb-5 flex justify-center">
      <div className="w-[90%] bg-[#EFFDF5] p-6 rounded-md">
        <div className="w-[100%] border-2 border-dashed border-[#26C49F] rounded-md lg:flex lg:flex-row flex flex-col p-5 bg-white gap-7">
          <div className="basis-[50%]">
            <img
              src="https://ajproperty.in/img/call-to-action.jpg"
              alt="call-to-action.jpg"
              className="w-[100%] h-[100%]  rounded-md"
            />
          </div>

          <div className="basis-[50%] flex flex-col items-center justify-center">
            <div className="w-[100%]">
              <h1 className="text-[3rem] font-bold text-black">
                Contact With Our Company
              </h1>
            </div>
            <p className="text-[#66657D] text-[1.2rem] mt-3">
              Get in touch with us for inquiries, support, or more information.
              We're here to help with all your needs.
            </p>

            <div className="flex flex-col sm:flex sm:flex-row gap-4 mt-3 w-[100%]">
              <button
                type="button"
                className="flex justify-center items-center sm:flex sm:flex-row gap-2 sm:items-center bg-[#00B98E] p-5 rounded-md text-white"
              >
                <span>
                  <BsFillTelephoneFill color="white" size={20} />
                </span>
                Make a Call
              </button>

              <button
                type="button"
                className="flex justify-center items-center sm:flex sm:flex-row gap-2 sm:items-center bg-black p-5 text-white rounded-md"
              >
                <span>
                  <FaCalendarAlt color="white" size={20} />
                </span>
                Get Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContectWCompany;
