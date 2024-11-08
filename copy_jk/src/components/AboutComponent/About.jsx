import { lazy, Suspense } from "react";

const PerfectProperty = lazy(() =>
  import("../perfectProperty/perfectProperty")
);

const ContectWCompany = lazy(() =>
  import("../ContectWCompany/ContectWCompany")
);

const Footer = lazy(() => import("../Footer/Footer"));

const About = () => {
  return (
    <div className="w-[100%] bg-[#FFFFFF] text-white">
      <div className="lg:flex lg:flex-row flex flex-col mb-5">
        <div className="basis-[50%] max-h-[80vh] order-2 lg:order-1">
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-start p-8 text-black">
            <h1 className="text-[4rem] font-bold">About Us</h1>
            <p className="uppercase">Home / Pages / About</p>
          </div>
        </div>
        <div className="basis-[50%] order-1 lg:order-2">
          <img
            src="https://ajproperty.in/img/Malhaur1350.jpg"
            alt="Malhaur1350.jpg"
            className="w-[100%] max-h-[80vh]"
          />
        </div>
      </div>
      {/* --------perfect property */}
      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold text-black">Loading...</h1>
          </div>
        }
      >
        <PerfectProperty />
      </Suspense>
      {/* -------------COntact with company */}

      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold text-black">Loading...</h1>
          </div>
        }
      >
        <ContectWCompany />
      </Suspense>
      {/* ------------- footer */}

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

export default About;
