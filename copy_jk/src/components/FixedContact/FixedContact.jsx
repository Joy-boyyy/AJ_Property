import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const FixedContact = () => {
  return (
    <div>
      <div className="bg-blue-500 rounded-full p-5 fixed top-[80%] left-5 z-[90]">
        <FaPhone size={30} color="white" />
      </div>

      <div className="bg-green-500 rounded-full p-5 fixed top-[80%] right-5 z-[90]">
        <FaWhatsapp size={30} color="white" />
      </div>
    </div>
  );
};

export default FixedContact;
