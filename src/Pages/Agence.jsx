import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  const imageDivRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <>
      <div
        className="section-1
    bg-white w-screen h-screen relative text-black overflow-x-hidden font-[font-2]"
      >
        <div
          ref={imageDivRef}
          className="h-[35vh] w-48 absolute top-54 overflow-hidden left-97"
        >
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg"
            alt=""
          />
          <img
            className="rounded-2xl h-full w-full object-cover"
            src="https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
            alt=""
          />
        </div>
        <div className="mt-[56vh] relative px-2">
          <h1 className="text-[20vw] text-center uppercase leading-[17.3vw] ">
            Soixan7e <br />
            Douze
          </h1>
        </div>
        <div className="pl-[43%]">
          <p className=" text-right text-5xl w-[55vw] h-fit">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre
            curiosité nourrit notre créativité. On reste humbles et on dit non
            aux gros egos, même le vôtre. Une marque est vivante. Elle a des
            valeurs, une personnalité, une histoire. Si on oublie ça, on peut
            faire de bons chiffres à court terme, mais on la tue à long terme.
            C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir
            des marques influentes.
          </p>
        </div>
      </div>
      <div className="section-2"></div>
    </>
  );
};

export default Agence;
