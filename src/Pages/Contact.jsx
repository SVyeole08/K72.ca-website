import ContactTop from "../Components/contact/ContactTop";
import ContactBottom from "../Components/contact/ContactBottom";
import Lenis from "lenis";
import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration:3,
      infinite: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="whitespace-nowrap">
      <div className="contact">
        <ContactTop />
        <a href="mailto:bonjour@k72.ca" target="_blank">
          <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px]  pt-2 origin-center">
            <div className="moveX whitespace-nowrap flex items-center">
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <ContactBottom />
      </div>
      <div className="contact">
        <ContactTop />
        <a href="mailto:bonjour@k72.ca" target="_blank">
          <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 origin-center">
            <div className="moveX whitespace-nowrap flex items-center">
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <ContactBottom />
      </div>
      <div className="contact">
        <ContactTop />
        <a href="mailto:bonjour@k72.ca" target="_blank">
          <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 origin-center">
            <div className="moveX whitespace-nowrap flex items-center">
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <ContactBottom />
      </div>
      <div className="contact">
        <ContactTop />
        <a href="mailto:bonjour@k72.ca" target="_blank">
          <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 origin-center">
            <div className="moveX whitespace-nowrap flex items-center">
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <ContactBottom />
      </div>
      <div className="contact">
        <ContactTop />
        <a href="mailto:bonjour@k72.ca" target="_blank">
          <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 origin-center">
            <div className="moveX whitespace-nowrap flex items-center">
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <ContactBottom />
      </div>
      <div className="contact">
        <ContactTop />
        <a href="mailto:bonjour@k72.ca" target="_blank">
          <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 origin-center">
            <div className="moveX whitespace-nowrap flex items-center">
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
              <div className="items-center flex">
                <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                  &nbsp;bonjour@k72.ca
                </h1>
                <svg
                  className="pt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="8vw"
                  height="8vw"
                  fill="black"
                >
                  <path d="M256 448L64 192V96l64-96 128 160L384 0l64 96v96L256 448z" />
                </svg>
              </div>
            </div>
          </div>
        </a>
        <ContactBottom />
      </div>
    </div>
  );
};

export default Contact;
