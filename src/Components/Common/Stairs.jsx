import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { useLocation } from "react-router-dom";

const Stairs = () => {
  const currentPath = useLocation().pathname;

  const parentStair = useRef(null);

  useGSAP(function () {
    const tl = gsap.timeline();
    tl.to(parentStair.current, {
      display: "block",
    });
    tl.from(".stair", {
      height: 0,
      stagger: { amount: -0.23 },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: { amount: -0.23 },
    });
    tl.to(parentStair.current, {
      display: "none",
    });
    tl.to(".stair", {
      y: "0%",
    });
  },[currentPath]);

  return (
    <div ref={parentStair} className="w-screen h-screen fixed top-0">
      <div className="h-full w-full flex">
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
        <div className="stair h-full w-1/5 bg-black"></div>
      </div>
    </div>
  );
};

export default Stairs;
