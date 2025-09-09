import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".names", {
      delay: 2,
      y: -200,
      stagger: { amount:0.4 },
    });
    tl.to(".names", {
      y: 0,
      stagger: { amount:0.4 },
    });
  });
  return (
    <div className="w-screen relative bg-black flex justify-center h-screen">
      <div className="w-full py-3 text-center">
        <div className="font-[font-1] text-[10vw] leading-28 uppercase">
          <h1 className="names">Pour</h1>
          <h1 className="names">parler de</h1>
          <h1 className="names">votre</h1>
          <h1 className="names">projet</h1>
        </div>
      </div>
      <div className="absolute w-full top-[53%]">
        <p className="text-center font-[font-2] absolute left-16">
          Dans un écran ou un bureau.
          <br /> Chez vous. Chez nous. <br /> Partout.
        </p>
        <p className="text-center font-[font-2] absolute top-3 right-18">
          <a
            className="hover:underline hover:text-[#D3FD50] transition-all"
            href="https://www.google.com/maps/place/525+Av.+Viger+O+%23400,+Montr%C3%A9al,+QC+H2Z+1G6/@45.5021694,-73.5657993,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc91a5b05feecdb:0xd2975bab8102c4b2!8m2!3d45.5021694!4d-73.5632244?entry=tts"
          >
            525 Av. Viger O - Suite 400 <br /> Montréal, QC H2Z 1G6 →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
