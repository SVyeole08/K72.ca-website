import React from "react";

const Blgcont = () => {
  return (
    <div>
      <div className="w-screen h-[58vh] flex p-3 gap-3 ">
        <div className="w-1/2 h-full overflow-hidden rounded-[50px]">
          <img
            src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 h-full overflow-hidden rounded-[50px]">
          <img
            src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-1280x960.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="flex text-black justify-between font-[font-2]">
        <div className="gap-4 flex ml-4 relative pl-5 items-start">
          <div className="bg-black left-0 top-2 absolute rounded-full w-[13px] h-[13px]"></div>
          <h1 className="text-xl font-[font-2]">9 mai 2025</h1>
        </div>
        <div className="gap-4 flex relative pl-5 items-start">
          <div className="bg-black left-0 top-2 absolute rounded-full w-[13px] h-[13px]"></div>
          <h1 className="text-xl font-[font-2]">9 mai 2025</h1>
        </div>
      </div>
    </div>
  );
};

export default Blgcont;
