import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [isTrue, setIsTrue] = useState(false);
  return (
    <header className="flex justify-center w-[100%] bg-none pl-4 pr-4">
      <div
        className="flex justify-between items-center w-[96%] bg-[#FFFFFF]  absolute z-[2] pl-3 pr-3 transition-all duration-100"
        style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
      >
        <div>
          <Link to="/">
            <img
              src="https://ajproperty.in/img/logo-removebg.png"
              alt="ajproperty logo"
              className="w-[5rem] h-[5rem]"
            />
          </Link>
        </div>
        <nav className="flex flex-col items-end p-3">
          <div>
            {isTrue ? (
              <RxCross2
                size={30}
                className="lg:hidden cursor-pointer mb-3"
                onClick={() => {
                  setIsTrue(!isTrue);
                }}
              />
            ) : (
              <FiAlignRight
                size={30}
                className="lg:hidden cursor-pointer"
                onClick={() => {
                  setIsTrue(!isTrue);
                }}
              />
            )}
          </div>
          <ul
            className={`lg:flex lg:gap-4 lg:items-center ${
              isTrue ? "block " : "hidden"
            }`}
          >
            <li className="hover:text-[#00B98E] mb-2">
              <Link to="/">HOME</Link>
            </li>
            <li className="hover:text-[#00B98E] mb-2">
              <Link to="/About-us">ABOUT US</Link>
            </li>

            <li className="hover:text-[#00B98E] mb-2">
              <Link to="/Properties">PROPERTY</Link>
            </li>

            <li className="hover:text-[#00B98E] mb-2">
              <Link to="/Contact-us">CONTACT US</Link>
            </li>
            <li className="hover:text-[#00B98E] mb-2">
              <Link to="/add">
                <button
                  type="button"
                  className="bg-[#00B98E] hover:bg-[#55e6c4] text-white p-3 rounded-md"
                >
                  Add Property
                </button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
