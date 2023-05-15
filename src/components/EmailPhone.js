import { HiPhone } from "react-icons/hi";
import { HiMail } from "react-icons/hi";

function EmailPhone() {
  return (
    <div className="bg-white bg-opacity-90 md:backdrop-blur-xl text-center shadow-none md:shadow-lg lg:px-16 lg:pb-16 md:pb-16 md:px-3 rounded-xl">
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
  );
}

export default EmailPhone;
