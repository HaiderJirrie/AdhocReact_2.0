import Contact from "../components/Contact";
import Fade from "react-reveal/Fade";

function ContactPage() {
  return (
    <div className="bg-wave bg-cover">
      <Fade>
        <h1 className="pt-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
          Contact
        </h1>
        <p className="mx-4 text-center pb-6 font-semibold text-slate-700 text-[16px] md:text-[18px] lg:text-[20px] leading-8">
          Wij zijn via de mail en telefonisch bereikbaar, <br />
          wij zullen zo snel mogelijk contact met u nemen.
        </p>
      </Fade>
      <div>
        <Contact title="Stuur een bericht" animation={true} />
      </div>
    </div>
  );
}

export default ContactPage;
