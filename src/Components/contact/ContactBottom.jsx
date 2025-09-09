import React from "react";

const ContactBottom = () => {
  return (
    <div className="bg-black pt-20">
      <div className="uppercase text-center mb-5 text-[1.1vw] font-[font-2]">
        <p>Suivez-nous</p>
      </div>
      <div className="pb-10 gap-2 flex justify-center uppercase text-center text-[5vw] font-[font-2]">
        <a target="_blank" href="https://www.facebook.com/K72.ca/">
          <h1 className="border-1 rounded-full w-[9vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
            fb
          </h1>
        </a>
        <a target="_blank" href="https://www.instagram.com/k72_creation/">
          <h1 className="border-1 rounded-full w-[9vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
            ig
          </h1>
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/k72">
          <h1 className="border-1 rounded-full w-[9vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
            in
          </h1>
        </a>
        <a target="_blank" href="https://www.behance.net/agenceK72">
          <h1 className="border-1 rounded-full w-[9vw] hover:text-[#D3FD50] hover:border-[#D3FD50] h-[9vh] leading-[5vw] pt-1 ">
            be
          </h1>
        </a>
      </div>
    </div>
  );
};

export default ContactBottom;
