import { useContext, useEffect, useState } from "react";
import { ContextData } from "../../Context/ContextApi";
import { FaLocationDot } from "react-icons/fa6";
import { FaRulerCombined } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa6";
import "./AllProperty.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AllProperty = ({ selectedFilter }) => {
  const { myContextData } = useContext(ContextData);
  const [didFilter, setBtnFilter] = useState([]);

  useEffect(() => {
    switch (selectedFilter) {
      case "All":
        setBtnFilter(myContextData);
        break;
      case "Raw":
        setBtnFilter(
          myContextData.filter((item) => item.propertyType === "Raw")
        );
        break;
      case "Plots":
        setBtnFilter(
          myContextData.filter((item) => item.propertyType === "Plots")
        );
        break;
      case "Farm":
        setBtnFilter(
          myContextData.filter((item) => item.propertyType === "Farm")
        );
        break;
      case "Home":
        setBtnFilter(
          myContextData.filter((item) => item.propertyType === "Home")
        );
        break;
      default:
        setBtnFilter([]);
    }
  }, [selectedFilter, myContextData]);

  return (
    <div className="w-[100%]">
      {didFilter.length > 0 && (
        <div className="w-[100%] flex flex-wrap gap-4 justify-center mt-6 mb-4">
          {didFilter.map((mapProp) => (
            <motion.div
              key={mapProp.id}
              className="xl:basis-[30%] lg:basis-[40%] md:basis-[60%]  border relative cardDiv cursor-pointer rounded-md"
              initial={{ opacity: 0, y: -90 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to={`/propertyid/${mapProp.id}`}>
                <div className="w-[100%] overflow-hidden">
                  <img
                    src={mapProp.propertyImg}
                    alt={mapProp.imgName}
                    className="w-[100%] h-[25rem] cardImg rounded-md"
                  />
                </div>

                {/* -------------- Property Types */}

                <div className="w-[6rem] text-center myPropertyTypes text-[1.3rem] absolute top-[59%] p-3 sm:top-[63%] left-[5%] bg-[#EFFDF5] sm:p-1 rounded-md text-[#00B98E]">
                  {mapProp.propertyType}
                </div>

                {/* ------------------- Property Details */}
                <div className="w-[100%]">
                  <div className="w-[100%] p-4 flex flex-col gap-3">
                    <h2 className="text-[1.4rem] font-bold text-[#00B98E]">
                      {mapProp.price}
                    </h2>
                    <h2 className="text-[1.4rem] font-bold">
                      {mapProp.client}
                    </h2>
                    <p className="flex gap-5">
                      <span>
                        <FaLocationDot size={20} color="#00B98E" />
                      </span>
                      <span>{mapProp.propertyLocation}</span>
                    </p>
                  </div>

                  {/* --------------- Property basic details */}
                  <div className="w-[100%] flex ">
                    <div className="flex gap-1 basis-[45%] border border-dashed border-[#00B98E] justify-center p-1 items-center">
                      <span>
                        <FaRulerCombined size={20} color="#00B98E" />
                      </span>
                      <span> {mapProp.propertyLength}</span>
                    </div>

                    <div className="w-[100%] flex basis-[25%] border border-dashed border-[#00B98E] gap-2 justify-center items-center">
                      <span>
                        <FaBed size={20} color="#00B98E" />
                      </span>
                      <span>{mapProp.bedSize}</span>
                    </div>

                    <div className="w-[100%] flex justify-center basis-[30%] border border-dashed border-[#00B98E] gap-2 items-center">
                      <span>
                        <FaBath size={20} color="#00B98E" />
                      </span>
                      <span>{mapProp.bathSize}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}{" "}
        </div>
      )}

      {/* --------- if length is less than 1 */}
      {didFilter.length === 0 && (
        <div className="w-[100%] flex justify-center mt-7">
          <h1 className="text-[2rem] font-bold">.....Sorry no data found </h1>
        </div>
      )}
    </div>
  );
};

export default AllProperty;
