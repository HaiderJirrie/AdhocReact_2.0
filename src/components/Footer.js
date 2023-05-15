import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-auto w-full bg-gray-50 py-4">
      <div className="text-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-tl from-adhocDonkerBlauw to-adhocBlauw cursor-pointer font-bold text-[22px] md:text-[26px]">
          AD HOC IT SERVICES
        </h1>
        <h1 className="text-gray-500 font-semibold">KVK-nummer: 87169509</h1>
        <div className="flex justify-center gap-8 pt-2 text-gray-400">
          <a
            href="https://wa.me/message/XAA6C5BCFGLVI1"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsappSquare
              className="cursor-pointer transition ease-in-out md:hover:-translate-y-1"
              size={40}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/ad-hoc-it-services/"
            target="_black"
            rel="noreferrer"
          >
            <FaLinkedin
              className="cursor-pointer transition ease-in-out md:hover:-translate-y-1"
              size={40}
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
