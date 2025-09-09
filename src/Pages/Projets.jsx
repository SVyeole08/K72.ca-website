import React from "react";
import ProjetCard from "../Components/projets/projetCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
const Projets = () => {
  const projets = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/COUP_FUMANT/CF_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/BEST/BEST_site_menu_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/SollioAg/thumbnailimage_SollioAg-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OSM/thumbnail_OSM_1280-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/BAnQ_100TEMPS/100temps_Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/CRISIS24/crisis24_behance_1920X1200_cartes-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PME-MTL/PME-MTL_Thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/FRUITE/Fruite_thumbnail_bbq-1280x960.jpg",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".hero", {
      height: 0,
      stagger: { amount: 0.4 },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <div>
      <div className="w-full h-[70vh] pt-66 px-2">
        <h2 className="uppercase font-[font-2] text-[13.1vw] text-black ">
          Projets
        </h2>
        <div className="-mt-16 lol">
          {projets.map((elem, idx) => {
            return (
              <div key={idx} className="hero w-full h-[70vh] flex gap-3 mb-3">
                <ProjetCard image1={elem.image1} image2={elem.image2} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projets;
