import React, { useState } from "react";
import Logo from "../resources/logo_nav.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="sticky bg-white md:bg-opacity-75 md:backdrop-blur-xl top-0 flex justify-between items-center h-24 px-4 md:px-18 lg:px-20 z-10">
      <Link to="/">
        <img
          className="w-[75px] cursor-pointer duration-300 md:hover:scale-95 focus:-translate-x-5"
          src={Logo}
          alt="AdHoc IT"
        />
      </Link>
      <ul className="hidden md:flex gap-10 text-center">
        <Link to="/services">
          <li className="p-4 text-[20px] text-slate-700 cursor-pointer duration-150 md:hover:-translate-y-1">
            Services
          </li>
        </Link>
        <Link to="over">
          <li className="p-4 text-[20px] text-slate-700 cursor-pointer duration-150 md:hover:-translate-y-1">
            Over ons
          </li>
        </Link>
        <Link to="/contact">
          <li className="p-4 text-[20px] text-slate-700 cursor-pointer duration-150 md:hover:-translate-y-1">
            Contact
          </li>
        </Link>

        <Link to="offerte">
          <li className="text-[20px] my-4 px-4 font-semibold bg-white md:bg-opacity-75 md:backdrop-blur-xl text-adhocBlauw cursor-pointer rounded-[100px] border-solid border-adhocBlauw border-2 cursor-pointe duration-150 hover:bg-adhocBlauw hover:text-white hover:-translate-y-1">
            Offerte
          </li>
        </Link>
      </ul>
      <div className="md:hidden">
        <div onClick={handleNav}>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
          <div
            className={
              !nav ? "fixed left-0 top-0 w-[60%] h-full bg-gray-50 drop-shadow-md" : "fixed left-[-100%]"
            }
          >
            <ul className="px-4 pt-16 text-center">
              <Link to="/">
                <li className="pb-4 px-4 text-adhocBlauw font-bold text-[28px]">
                  Ad Hoc
                </li>
              </Link>
              <Link to="/services">
                <li className="p-4 border-b font-semibold text-[18px]">
                  Services
                </li>
              </Link>
              <Link to="/over">
                <li className="p-4 border-b font-semibold text-[18px]">
                  Over ons
                </li>
              </Link>
              <Link to="/contact">
                <li className="p-4 border-b font-semibold text-[18px]">
                  Contact
                </li>
              </Link>
              <Link to="/offerte">
                <li className="p-4 font-semibold text-[18px]">Offerte</li>
              </Link>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default Navbar;
