import { Suspense, lazy } from "react";
import ContactUsDetails from "../ContactUsDetails/ContactUsDetails";

const ContactMapLocation = lazy(() =>
  import("../ContactMapLocation/ContactMapLocation")
);

const Footer = lazy(() => import("../Footer/Footer"));

const Contact = () => {
  return (
    <div className="w-[100%] bg-[#FFFFFF]">
      {/* ------------ contact us header code */}
      <div className="lg:flex lg:flex-row flex flex-col mb-5">
        <div className="basis-[50%] max-h-[80vh] order-2 lg:order-1">
          <div className="w-[100%] h-[100%] flex flex-col justify-center items-start p-8 text-black">
            <h1 className="text-[4rem] font-bold">Contact Us</h1>
            <p className="uppercase">Home / Pages / Contact-us</p>
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
      {/* contact us heading */}

      <ContactUsDetails />

      {/* ------------------- contact map location */}

      <Suspense
        fallback={
          <div className="text-center w-[100%]">
            <h1 className="text-[2rem] font-bold text-black">Loading...</h1>
          </div>
        }
      >
        <ContactMapLocation />
      </Suspense>

      {/* -------footer */}

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

export default Contact;
