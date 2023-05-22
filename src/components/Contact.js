import MessageForm from "./MessageForm";
import Fade from "react-reveal/Fade";
import { HiPhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

function Contact(props) {
  const width = window.innerWidth;

  const getContent = () => {
    return (
      <div className="md:flex md:justify-center lg:gap-20">
        <div>
          <MessageForm
            title={props.title}
            description={props.description}
            marker={props.marker}
          />
        </div>
        <div className="bg-white md:bg-transparent md:w-[562px] mt-16 pb-16 px-8 lg:px-10 xl:px-16 rounded-lg shadow-lg md:shadow-none">
          <div className="bg-white md:shadow-lg lg:px-16 lg:pb-16 md:pb-16 md:px-3 rounded-xl">
            <h1 className="flex justify-center pt-16 md:mt-24 font-semibold text-[18px] lg:text-[20px]">
              <a href="mailto: service@adhocit.nl">
                <HiMail className="mt-0.5 lg:mt-1 mr-2" size={24} />{" "}
              </a>
              E-mail
            </h1>
            <h1 className="text-center text-adhocBlauw font-bold text-[18px] lg:text-[20px]">
              service@adhocit.nl
            </h1>
            <h1 className="flex justify-center mt-8 md:mt-16 font-semibold text-[18px] lg:text-[20px]">
              <HiPhone className="mt-0.5 lg:mt-1 mr-1" size={24} />
              Telefoon
            </h1>
            <h1 className="text-center text-adhocBlauw font-bold text-[18px] lg:text-[20px]">
              +31 6 20503666
            </h1>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-4 pb-24">
      {width > 764  || props.fadeSlide === true ? (
          <Fade bottom>{getContent()}</Fade>
        ) : (
          getContent()
        )}
    </div>
  );
}

export default Contact;
