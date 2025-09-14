import React, { useContext, useRef } from "react";
import { NavbarContext } from "../Context/NavContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navLine = useRef(null);
  const navLine2 = useRef(null);
  const NavGreenRef = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  return (
    <div className="flex fixed top-0 w-full items-start justify-between z-4">
      <div className="w-28 p-2">
        <svg
          onClick={() => navigate("/")}
          xmlns="http://www.w3.org/2000/svg"
          className="w-full cursor-pointer"
          fill="white"
          viewBox="0 0 103 44"
        >
          <path
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </div>
      <div
        onClick={() => {
          setNavOpen(true);
        }}
        onMouseEnter={() => {
          NavGreenRef.current.style.height = "100%";
          navLine.current.style.backgroundColor = "black";
          navLine2.current.style.backgroundColor = "black";
        }}
        onMouseLeave={() => {
          NavGreenRef.current.style.height = "0%";
          navLine.current.style.backgroundColor = "white";
          navLine2.current.style.backgroundColor = "white";
        }}
        className="nav bg-black h-11 relative w-[15.6vw]"
      >
        <div className="p-2 gap-5">
          <div
            ref={navLine}
            className="bg-white w-10 h-[1px] top-4.5 right-6 absolute z-30"
          ></div>
          <div
            ref={navLine2}
            className="bg-white w-5 h-[1px] top-5.5 right-6 absolute z-30"
          ></div>
        </div>
        <div
          ref={NavGreenRef}
          className="bg-[#D3FD50] absolute top-0 w-full h-0 transition-all duration-100 z-10"
        ></div>
        <div className="relative"></div>
      </div>
    </div>
  );
};

export default Navbar;
