import React from "react";

const Blogue = () => {
  return (
    <div className="w-screen h-screen relative text-black p-1">
      <div className="mt-48 gap-4 flex relative pl-39 items-start">
        <div className="bg-black left-33 top-2 absolute rounded-full w-[13px] h-[13px]"></div>
        <h1 className="text-xl font-[font-2]">Blogue</h1>
      </div>
      <div className="flex absolute font-[font-2] right-0 top-104 text-xl justify-end pr-2">
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
        <hr className=""/>
      </div>
    </div>
  );
};

export default Blogue;
