import InfoSoftwareDevelopment from "../components/InfoSoftwareDevelopment";
import InfoServicedesk from "../components/infoServicedesk";
import InfoAdvice from "../components/InfoAdvice";

function Services() {
  return (
    <>
      <h1 className="py-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
        Onze services
      </h1>
      <InfoSoftwareDevelopment />
      <InfoServicedesk reverse={true} />
      <InfoAdvice />
    </>
  );
}

export default Services;
