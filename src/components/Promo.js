import webapp from "../resources/icons/1.png";
import servicedesk from "../resources/icons/2.png";
import advies from "../resources/icons/3.png";
import ServiceCard from "./ServiceCard";

import Fade from "react-reveal/Fade";

function Promo() {
  return (
    <div className="text-center mb-20">
      <div className="w-full rounded-b justify-center rounded-xl bg-adhocBlauw py-16 px-4">
        <Fade bottom>
          <h1 className="text-white font-bold text-[24px] lg:text-[30px] pb-4">
            Onze services
          </h1>
        <div className="md:flex items-center md:justify-center gap-8">
          <ServiceCard
            pic={webapp}
            title="Software development"
            description="Wij ontwikkelen zakelijke websites en Apps voor onze klanten,
                bekijk de mogelijkheden!"
          />
          <ServiceCard
            pic={servicedesk}
            title="ICT Servicedesk"
            description="Wij ondersteunen onze klanten bij het gebruik van hardware en
              software door middel van het detacheren van Skilled Service Desk
              medewerkers en systeembeheerders."
          />
          <ServiceCard
            pic={advies}
            title="Professioneel advies"
            description="Wij adviseren onder andere in cybersecurity en het digitaliseren
              van werkprocessen."
          />
        </div>
        </Fade>
      </div>
    </div>
  );
}

export default Promo;
