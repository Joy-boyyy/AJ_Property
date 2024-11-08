import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="w-[100%] bg-[#0E2E50] p-6 lg:flex lg:flex-row  flex flex-col items-center">
      <div className="basis-[50%] flex flex-col items-center md:flex md:flex-row gap-4">
        {/* -------------get in touch section */}
        <div className="getInTouchInfo text-[#8696A2]">
          <h2 className="text-[2rem] font-bold text-white">Get In Touch</h2>
          <p>
            <FaLocationDot /> 4/42, Vibhav Khand, Gomti Nagar, Lucknow - 226010
          </p>
          <p>
            <FaPhone /> +91 9559625148 , 9839088709
          </p>
          <p>
            <MdOutlineEmail /> a.jproperties786@gmail.com
          </p>
          <div className="socialMediaLogoCL">
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
          </div>
        </div>

        {/*----------------- Quick link section */}
        <div>
          <h2 className="text-[2rem] font-bold text-white">Quick Links</h2>
          <div className="qucikLinkDIv">
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              About Us
            </p>
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Property
            </p>
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Contact Us
            </p>
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Term & Conditions
            </p>
            <p>
              <span>
                <IoIosArrowForward />
              </span>
              Privacy Policy
            </p>
          </div>
        </div>
      </div>

      {/* --- Gallery section */}
      <div className="basis-[50%] ">
        <div className="flex flex-col md:flex md:flex-row gap-[1rem]">
          <div>
            <h2 className="text-[2rem] font-bold text-white">Photo Gallery</h2>
            <div className="cmnFooterBelowImgDiv w-[18rem]">
              <img
                src="https://ajproperty.in/img/gomtinagar.jpg"
                alt="gomtinagar.jpg"
                className="cmnFooterBelowImg"
              />
              <img
                src="https://ajproperty.in/img/Malhaur1350.jpg"
                alt="Malhaur1350.jpg"
                className="cmnFooterBelowImg"
              />
              <img
                src="https://ajproperty.in/img/vidyacityfaizabadroad.jpg"
                alt="vidyacityfaizabadroad.jpg"
                className="cmnFooterBelowImg"
              />
              <img
                src="https://ajproperty.in/img/Vidyacityfaizabadroad%20(1).jpg"
                alt="Vidyacityfaizabadroad%20(1).jpg"
                className="cmnFooterBelowImg"
              />
              <img
                src="https://ajproperty.in/img/property-5.jpg"
                alt="property-5.jpg"
                className="cmnFooterBelowImg"
              />
              <img
                src="https://ajproperty.in/img/property-6.jpg"
                alt="property-6.jpg"
                className="cmnFooterBelowImg"
              />
            </div>
          </div>

          <div>
            <h2 className="text-[2rem] font-bold text-white">Subscribe</h2>
            <div className="border border-white p-2 rounded-md mt-3">
              <input
                type="email"
                name="Your email"
                placeholder="Your email"
                className="text-[1rem] p-2  border-none outline-0 bg-transparent text-[#8696a7]"
              />
              <button
                type="button"
                className="bg-[#26C49F] text-white p-3 rounded-md ml-3"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
