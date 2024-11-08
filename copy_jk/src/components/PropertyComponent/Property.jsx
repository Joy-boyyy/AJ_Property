import { Suspense, lazy } from "react";

const PropertyListing = lazy(() =>
  import("../PropertyListing/PropertyListing")
);

const Footer = lazy(() => import("../Footer/Footer"));

const Property = () => {
  return (
    <div className="bg-[#EFFDF5] pt-[6rem]">
      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold text-black">Loading...</h1>
          </div>
        }
      >
        <PropertyListing />
      </Suspense>

      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold text-black">Loading...</h1>
          </div>
        }
      >
        <Footer />
      </Suspense>
    </div>
  );
};

export default Property;
