import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "../../Context/ContextApi";
import Footer from "../Footer/Footer";

const SelectedProperty = () => {
  const { id } = useParams();
  console.log("id---", id);
  const { myContextData } = useContext(ContextData);

  const [filteredPro, setFilteredProp] = useState({});

  useEffect(() => {
    const receivedFilteredData = myContextData.filter(
      (filterProp) => filterProp.id === parseInt(id)
    );
    console.log("receivedFilteredData==>", receivedFilteredData);

    setFilteredProp(receivedFilteredData[0]);
  }, [id, myContextData]);

  return (
    <div className="w-[100%] pt-[9rem] ">
      <div className="flex flex-col lg:flex lg:flex-row pl-5 pr-5 mb-5">
        <div className="basis-[50%] p-3">
          <h1 className="text-[2rem] font-bold">{filteredPro.client}</h1>

          <p className="flex gap-3 items-center bg-[#F9F9F9] p-2 rounded-md mt-2">
            <span className="font-bold text-[1.2rem]">Price:</span>{" "}
            <span>{filteredPro.price}</span>
          </p>
          <p className="flex gap-3 items-center bg-[#F9F9F9] p-2 rounded-md mt-2">
            <span className="font-bold text-[1.2rem]"> Address:</span>
            <span>{filteredPro.propertyLocation}</span>
          </p>

          <p className="flex gap-3 items-center bg-[#F9F9F9] p-2 rounded-md mt-2">
            <span className="font-bold text-[1.2rem]">Area:</span>
            <span>{filteredPro.propertyLength}</span>
          </p>

          <p className="flex gap-3 items-center bg-[#F9F9F9] p-2 rounded-md mt-2">
            <span className="font-bold text-[1.2rem]">Bedroom:</span>
            <span>{filteredPro.bedSize}</span>
          </p>
          <p className="flex gap-3 items-center bg-[#F9F9F9] p-2 rounded-md mt-2">
            <span className="font-bold text-[1.2rem]">Category:</span>
            <span>{filteredPro.propertyType}</span>
          </p>
        </div>

        <div className="basis-[50%]">
          <img
            src={filteredPro.propertyImg}
            alt={filteredPro.imgName}
            className="w-[100%] h-[100%]"
          />
        </div>
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
};

export default SelectedProperty;
