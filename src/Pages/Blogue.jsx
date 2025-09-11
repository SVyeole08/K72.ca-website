import React from "react";
import Blgcont from "../Components/blogue/Blgcont";
import { useNavigate } from "react-router-dom";

const Blogue = () => {
  const navigator = useNavigate();
  return (
    <>
      <div>
        <div className="w-screen h-screen relative text-black p-1">
          <div className="mt-48 gap-4 flex relative pl-39 items-start">
            <div className="bg-black left-33 top-2 absolute rounded-full w-[13px] h-[13px]"></div>
            <h1 className="text-xl font-[font-2]">Blogue</h1>
          </div>
          <div className=" absolute font-[font-2] right-0 top-104 text-xl flex pr-2">
            <div>
              <h1>Catégories :&nbsp;</h1>
            </div>
            <div className="gap-[2px] flex text-center">
              <div className="px-2 pt-1 w-fit h-fit bg-[#EDEDED]">
                <h1>Tout</h1>
              </div>
              <div className="px-2 pt-1 w-fit h-fit bg-[#EDEDED]">
                <h1>Tech & IA</h1>
              </div>
              <div className="px-2 pt-1 w-fit h-fit bg-[#EDEDED]">
                <h1>Conseil</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[97vw] h-[0.5px] -mt-43 bg-black ml-[1.5vw]"></div>
      </div>
      <Blgcont />
      <div className="w-screen transition-all-ease  h-[62vh] flex font-[font-2] justify-between bg-black p-2 mt-60 text-[5vw] text-center">
        <div className="flex gap-2 uppercase ">
          <a target="_blank" href="https://www.facebook.com/K72.ca/">
            <h1 className="border-2 rounded-full w-[8.8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
              fb
            </h1>
          </a>
          <a target="_blank" href="https://www.instagram.com/k72_creation/">
            <h1 className="border-2 rounded-full w-[8.8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
              ig
            </h1>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/k72">
            <h1 className="border-2 rounded-full w-[8.8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
              in
            </h1>
          </a>
          <a target="_blank" href="https://www.behance.net/agenceK72">
            <h1 className="border-2 rounded-full w-[8.8vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
              be
            </h1>
          </a>
        </div>
        <div
          className="rounded-full transition-all-ease flex text-center group hover:text-[#D3FD50] h-[9vh] leading-[5vw] pt-1 border-2 px-5 w-fit hover:border-[#D3FD50]"
          onClick={() => navigator("/contact")}
        >
          <h1 className="uppercase">contact</h1>
          <svg
            className="pt-1 group-hover:fill-[#D3FD50]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="4.5vw"
            height="4.5vw"
            fill="white"
          >
            <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Blogue;
