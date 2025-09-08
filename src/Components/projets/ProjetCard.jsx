import React from "react";

const ProjetCard = (props) => {
  return (
    <>
      <div className="w-1/2 h-full group transition-all flex items-center justify-center relative rounded-none hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.image1} />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center">
          <h2 className="uppercase text-[4vw] font-[font-2] border-3 rounded-full leading-9 pt-2 px-2">
            Voir le projet
          </h2>
        </div>
      </div>
      <div className="w-1/2 h-full group transition-all flex items-center justify-center relative rounded-none hover:rounded-[50px] overflow-hidden">
        <img className="h-full w-full object-cover" src={props.image2} />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute flex items-center justify-center">
          <h2 className="uppercase text-[4vw] font-[font-2] border-3 rounded-full leading-9 pt-2 px-2">
            Voir le projet
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjetCard;
