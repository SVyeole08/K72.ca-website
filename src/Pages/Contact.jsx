import ContactTop from "../Components/contact/ContactTop";
import ContactBottom from "../Components/contact/ContactBottom";
const Contact = () => {
  return (
    <>
      <ContactTop />
      <a href="mailto:bonjour@k72.ca" target="_blank">
        <div className=" w-fit transition-all-ease flex items-center justify-center text-black bg-[#D3FD50] h-[120px] pt-2 absolute top-150 origin-center">
          <div className="moveX whitespace-nowrap flex items-center">
            <div className="items-center flex">
              <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                &nbsp;bonjour@k72.ca
              </h1>
              <img className="h-25" src="src\Media\pixcar.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="items-center flex">
              <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                &nbsp;bonjour@k72.ca
              </h1>
              <img className="h-25" src="src\Media\pixcar.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="items-center flex">
              <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                &nbsp;bonjour@k72.ca
              </h1>
              <img className="h-25" src="src\Media\pixcar.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="items-center flex">
              <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                &nbsp;bonjour@k72.ca
              </h1>
              <img className="h-25" src="src\Media\pixcar.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="items-center flex">
              <h1 className="text-[18vh] pt-2 uppercase font-[font-2]">
                &nbsp;bonjour@k72.ca
              </h1>
              <img className="h-25" src="src\Media\pixcar.png" alt="" />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </a>
      <ContactBottom />
    </>
  );
};

export default Contact;
