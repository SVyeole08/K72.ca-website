import React from "react";
import Video from "./Video";

const Hometop = () => {
  return (
    <div className="font-[font-1] pt-2">
      <div className="text-[9.5vw] flex items-center justify-center tracking-[1px] uppercase leading-[9vw] text-center ">
        L'étincelle
      </div>
      <div className="text-[9.5vw] flex items-center justify-center tracking-[1px] uppercase leading-[9vw] text-center ">
        qui{""}
        <div className="h-[15vh] w-[16vw] rounded-full object-cover -mt-5 overflow-hidden">
          <Video />
        </div>{""}
        génère
      </div>
      <div className="text-[9.5vw] tracking-[1px] uppercase leading-[7.5vw] text-center ">
        la créativité
      </div>
    </div>
  );
};

export default Hometop;
