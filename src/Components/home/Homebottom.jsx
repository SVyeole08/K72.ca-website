import React from "react";
import { Link } from "react-router-dom";

const Homebottom = () => {
  return (
    <div className="flex items-center  justify-center font-[font-2] gap-6">
      <Link
        className="h-[11.5vh] text-[6.5vw] mb-3 hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[7vw] pt-0.5 border-3 px-6 font-[900] border-white rounded-full uppercase  "
        to="/projets"
      >
        Projets
      </Link>
      <Link
        className="h-[11.5vh] text-[6.5vw] mb-3 hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[7vw] pt-0.5 border-3 px-6 font-[900] border-white rounded-full uppercase  "
        to="/agence"
      >
        Agence
      </Link>
    </div>
  );
};

export default Homebottom;
