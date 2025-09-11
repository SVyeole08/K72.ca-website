import React from "react";

const Blgcont = () => {
  return (
    <div>
      <div className="w-screen h-[58vh] flex p-3 gap-3">
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
      <div className="flex  text-black justify-between font-[font-2]">
        <div className="gap-4 flex ml-4 relative pl-5 items-start">
          <div className="bg-black left-0 top-2 absolute rounded-full w-[13px] h-[13px]">
            <a href="#">
              <h1 className="text-4xl uppercase hover:underline w-130 mt-8">
                Conseil & relation client: <br /> un duo qui ne se briefe pas,
                qui se construit
              </h1>
            </a>
            <a href="#">
              <div className="px-2 mt-2 pt-1 w-fit h-fit bg-[#EDEDED]">
                <h1 className="text-xl">Conseil</h1>
              </div>
            </a>
          </div>
          <h1 className="text-xl font-[font-2]">9 mai 2025</h1>
        </div>
        <div className="gap-4 flex absolute right-123 pl-5 items-start">
          <div className="bg-black left-0 top-2 absolute rounded-full w-[13px] h-[13px]">
            <a href="#">
              <h1 className="text-4xl uppercase hover:underline w-130 mt-8">
                Pub prédictive: L’IA <br /> révolutionne le ciblage
              </h1>
            </a>
            <a href="#">
              <div className="px-2 mt-2 pt-1 w-fit h-fit bg-[#EDEDED]">
                <h1 className="text-xl">Tech&nbsp;&&nbsp;IA</h1>
              </div>
            </a>
          </div>
          <h1 className="text-xl font-[font-2]">9 mai 2025</h1>
        </div>
      </div>
    </div>
  );
};

export default Blgcont;
