import React from "react";
import "./PropertyTypes.css";
import { motion } from "framer-motion";

const PropertyTypes = () => {
  return (
    <div className="w-[100%] bg-[#EFFDF5] text-black pt-6 pb-9">
      <div className="flex flex-col items-center ">
        <motion.h1
          className="text-[3rem] font-bold"
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Property Types
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -90 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </motion.p>
      </div>

      <motion.div
        className="mt-7"
        initial={{ opacity: 0, y: -90 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <ul className="flex flex-col justify-center items-center md:flex md:flex-row md:justify-center myUlCard gap-5">
          <li>
            <div className=" border-2 border-dashed border-green-400  p-6 rounded-[360px] bg-white">
              <img
                src="https://ajproperty.in/img/icon-apartment.png"
                alt="icon-apartment_png"
                className="w-[100%] h-[3rem]"
              />
            </div>
            <div className="text-center mt-3">
              <p className="font-bold">Raw House</p>
              <p className="mt-1">123 Properties</p>
            </div>
          </li>

          <li>
            <div className=" border-2 border-dashed border-green-400  p-6 rounded-[360px] bg-white">
              <img
                src="https://ajproperty.in/img/icon-villa.png"
                alt="icon-villa_png"
                className="w-[100%] h-[3rem]"
              />
            </div>
            <div className="text-center mt-3">
              <p className="font-bold">Plots</p>
              <p className="mt-1">123 Properties</p>
            </div>
          </li>

          <li>
            <div className=" border-2 border-dashed border-green-400  p-6 rounded-[360px] bg-white">
              <img
                src="https://ajproperty.in/img/icon-house.png"
                alt="icon-house_png"
                className="w-[100%] h-[3rem]"
              />
            </div>
            <div className="text-center mt-3">
              <p className="font-bold">Farm House</p>
              <p className="mt-1">123 Properties</p>
            </div>
          </li>

          <li>
            <div className=" border-2 border-dashed border-green-400 p-6 rounded-[360px] bg-white">
              <img
                src="https://ajproperty.in/img/icon-housing.png"
                alt="icon-housing_png"
                className="w-[100%] h-[3rem]"
              />
            </div>
            <div className="text-center mt-3">
              <p className="font-bold">Home</p>
              <p className="mt-1 ">123 Properties</p>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default PropertyTypes;
