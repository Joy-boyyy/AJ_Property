import { Suspense, lazy } from "react";
import Footer from "../Footer/Footer";
import FilterProperty from "../FilterProperty/FilterProperty";
import HomeImgSlider from "../HomeImgSlider/HomeImgSlider";

import PropertyTypes from "../PropertyTypes/PropertyTypes";

const PerfectProperty = lazy(() =>
  import("../perfectProperty/perfectProperty")
);

const PropertyListing = lazy(() =>
  import("../PropertyListing/PropertyListing")
);

const Home = () => {
  return (
    <div className="bg-black w-[100%] min-h-[100vh] text-white ">
      <div className="w-[100%] min-h-[100vh] lg:flex gap-2 ">
        <div className="basis-[50%] bg-[#00B98E] ">
          <HomeImgSlider />
        </div>
        <div className="basis-[50%] flex flex-col justify-center items-center bg-black p-6">
          <h1 className="text-[4rem] font-bold">
            Find A <span className="text-[#00B98E]"> Perfect Home </span> <br />
            To Live With Your <br /> Family
          </h1>
          <p className="text-white mt-3">
            Explore premium real estate properties in Lucknow which offers
            modern amenities, spacious layouts and prime locations. Ideal for
            families seeking comfort and convenience, with easy access to
            schools, markets and transport facilities.
          </p>

          <div className="mt-2 text-end pr-[4rem] w-[100%]">
            <button
              type="button"
              className="bg-[#00B98E] text-white p-3 rounded-md"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
      {/* -------Filter Property section */}

      <FilterProperty />

      {/* ------------------------ Property types */}

      <PropertyTypes />

      {/* ------- perfect property section */}

      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold">Loading...</h1>
          </div>
        }
      >
        <PerfectProperty />
      </Suspense>
      {/* ----------------- Property Listing */}

      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold">Loading...</h1>
          </div>
        }
      >
        <PropertyListing />
      </Suspense>
      {/* --------------------- Footer section */}

      <Footer />
    </div>
  );
};

export default Home;
