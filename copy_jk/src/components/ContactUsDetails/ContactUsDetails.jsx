import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsDetails = () => {
  return (
    <div className="w-[100%]">
      <div className="w-[100%] text-center mt-5">
        <h1 className="text-[3rem] font-bold">Contact Us</h1>
        <p className="text-[1rem] mt-4">
          Feel free to reach out to us for any inquiries, assistance, or
          feedback. Our team is here to help you with all your real estate
          needs.
        </p>
      </div>
      {/* contact us Contact Details */}
      <div className="w-[100%] flex flex-col mt-1 lg:flex lg:flex-row lg:justify-center lg:flex-wrap  gap-4 p-9">
        <div className="lg:basis-[32%] md:basis-[42%] sm:[52%] ">
          <div className="bg-[#EFFDF5] rounded-md p-5">
            <div className="bg-[#FFFFFF] rounded-md border-2 border-dashed border-[#00B98E] flex justify-center items-center gap-5 p-5">
              <span className="inline-block border-2 border-dashed border-[#00B98E] p-3 rounded-[50%]">
                <FaLocationDot size={20} color="#00B98E" />
              </span>
              <span>4/42, Vibhav Khand,Gomati Nagar, Lucknow-226010</span>
            </div>
          </div>
        </div>

        <div className="lg:basis-[32%] md:basis-[42%] sm:[52%]">
          <div className="bg-[#EFFDF5] rounded-md p-5">
            <div className="bg-[#FFFFFF] rounded-md border-2 border-dashed border-[#00B98E] flex justify-center items-center gap-5 p-5">
              <span className="inline-block border-2 border-dashed border-[#00B98E] p-3 rounded-[50%]">
                <MdEmail size={20} color="#00B98E" />
              </span>
              <span>a.jproperties786@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="lg:basis-[32%] md:basis-[42%] sm:[52%]">
          <div className="bg-[#EFFDF5] rounded-md p-5">
            <div className="bg-[#FFFFFF] rounded-md border-2 border-dashed border-[#00B98E] flex justify-center items-center gap-5 p-5">
              <span className="inline-block border-2 border-dashed border-[#00B98E] p-3 rounded-[50%]">
                <FaPhoneAlt size={20} color="#00B98E" />
              </span>
              <span>+91 9839088709</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsDetails;
