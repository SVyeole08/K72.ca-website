import { useRef } from "react";
import ContactTop from "../Components/contact/ContactTop";
const Contact = () => {
  const ContactDiv = useRef(null);
  return (
    <>
      <ContactTop />
      <div
        ref={ContactDiv}
        className="moveX w-[500vw] whitespace-nowrap transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 absolute top-150 origin-center"
      >
        <div className="items-center flex">
          <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
            bonjour@k72.ca&nbsp;
          </h1>
          <img className="h-25" src="src\Media\pixcar.png" alt="" />
        </div>
        <div className="items-center flex">
          <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
            bonjour@k72.ca&nbsp;
          </h1>
          <img className="h-25" src="src\Media\pixcar.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
