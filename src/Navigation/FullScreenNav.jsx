import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { NavbarContext } from "../Context/NavContext";
import { useNavigate } from "react-router-dom";

const FullScreenNav = () => {
  const navigate = useNavigate();
  const fullNavLinks = useRef(null);
  const FullScreenNav = useRef(null);
  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const cross = useRef(null);
  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(FullScreenNav.current, {
      display: "block",
    });
    tl.from(".stairs", {
      duration: 0.5,
      height: 0,
      stagger: { amount: -0.3 },
    });
    tl.to(".stairs", {
      height: "100%",
    });
    tl.from(fullNavLinks.current, {
      opacity: 0,
    });
    tl.from(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: { amount: 0.3 },
    });
    tl.to(".navLink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    gsap.to(FullScreenNav.current, {
      display: "none",
    });
  }
  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(cross.current, {
      delay: 3,
      duration: 3.1,
      x: "150%",
    });
    tl.to(cross.current, {
      x: "0%",
    });
  });

  return (
    <div
      ref={FullScreenNav}
      className="fullScreenNav hidden h-screen w-full absolute z-50 overflow-hidden"
    >
      <div className="h-screen w-full fixed flex">
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
      </div>
      <div ref={fullNavLinks} className=" relative">
        <div className="navLink w-full h-full justify-between items-start flex p-1">
          <div className="w-28 -my-1 -ml-1 p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
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
              setNavOpen(false);
            }}
            className="cross w-23 h-23 relative mr-1 mt-1 cursor-pointer"
            ref={cross}
          >
            <div className="absolute bg-white w-[2px] h-32 hover:bg-[#D3FD50] -rotate-45 origin-top"></div>
            <div className="absolute bg-white w-[2px] h-32 hover:bg-[#D3FD50] right-0 rotate-45 origin-top"></div>
          </div>
        </div>
        <div className="py-12">
          <div
            onClick={() => {
              navigate("/projets");
              setNavOpen(false);
            }}
            className="link origin-top relative border-t-1 border-gray-500"
          >
            <h1 className="font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
              Projets
            </h1>
            <div className="moveLink absolute  flex bg-[#D3FD50] min-w-[250%] top-0 text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout voir &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout voir &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout voir &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                />
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout voir &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/agence");
              setNavOpen(false);
            }}
            className="link origin-top relative border-t-1 border-gray-500"
          >
            <h1 className="font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
              Agence
            </h1>
            <div className="moveLink absolute  flex bg-[#D3FD50] min-w-[400%] top-0 text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout savoir &nbsp;
                </h2>
                <img
                  className=" h-20 w-60 rounded-full shrink-0"
                  src="https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout savoir &nbsp;
                </h2>
                <img
                  className=" h-20 w-60 rounded-full shrink-0"
                  src="https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout savoir &nbsp;
                </h2>
                <img
                  className=" h-20 w-60 rounded-full shrink-0"
                  src="https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour tout savoir &nbsp;
                </h2>
                <img
                  className=" h-20 w-60 rounded-full shrink-0"
                  src="https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/contact");
              setNavOpen(false);
            }}
            className="link origin-top relative border-t-1 border-gray-500"
          >
            <h1 className="font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
              Contact
            </h1>
            <div className="moveLink absolute  flex bg-[#D3FD50] min-w-[400%] top-0 text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour envoyer un fax &nbsp;
                </h2>
                <img
                  className="h-19 w-15 rounded-full shrink-0 object-cover"
                  src="src\Media\pixcar.png"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour envoyer un fax &nbsp;
                </h2>
                <img
                  className="h-19 w-15 rounded-full shrink-0 object-cover"
                  src="src\Media\pixcar.png"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour envoyer un fax &nbsp;
                </h2>
                <img
                  className="h-19 w-15 rounded-full shrink-0 object-cover"
                  src="src\Media\pixcar.png"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; Pour envoyer un fax &nbsp;
                </h2>
                <img
                  className="h-19 w-15 rounded-full shrink-0 object-cover"
                  src="src\Media\pixcar.png"
                />
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              navigate("/blogue");
              setNavOpen(false);
            }}
            className="link origin-top relative border-y-1 border-gray-500"
          >
            <h1 className="font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
              Blogue
            </h1>
            <div className="moveLink absolute  flex bg-[#D3FD50] min-w-[400%] top-0 text-black">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; lier les articles &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover object-center"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; lier les articles &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; lier les articles &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover object-center"
                  src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
                />
                <h2 className="whitespace-nowrap   font-[font-2] text-[8vw] text-center pb-[1px] leading-[0.7] pt-5 uppercase ">
                  &nbsp; lier les articles &nbsp;
                </h2>
                <img
                  className="h-20 w-60 rounded-full shrink-0 object-cover"
                  src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
