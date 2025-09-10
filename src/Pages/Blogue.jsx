import React from "react";
import Blgcont from "../Components/blogue/Blgcont";

const Blogue = () => {
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
        <div className="w-[95vw] origin-center h-[0.5px] -mt-66 bg-black ml-[1.5vw]"></div>
      </div>
      <Blgcont />
    </>
  );
};

export default Blogue;
