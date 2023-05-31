import InfoSoftwareDevelopment from "../components/InfoSoftwareDevelopment";
import InfoServicedesk from "../components/infoServicedesk";
import InfoAdvice from "../components/InfoAdvice";

function Services() {
  return (
    <>
      <InfoSoftwareDevelopment />
      <InfoServicedesk reverse={true} />
      <InfoAdvice />
    </>
  );
}

export default Services;
