import advies from "../resources/icons/3.png";
import Fade from "react-reveal/Fade";

function InfoAdvice() {
  return (
    <>
      <Fade>
        <div className="sm:mx-16 xl:mx-0">
          <div className="mx-4 xl:grid lg:grid-cols-2 xl:py-8">
            <div className="xl:col-span-1 mx-auto mt-28">
              <img
                className="w-[150px] xl:w-[250px] mx-auto"
                src={advies}
                alt=""
              />
              <h1 className=" py-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
                Professioneel advies
              </h1>
            </div>
            <div className="xl:col-span-1 xl:w-4/6 my-auto">
              <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
                Waarom ons advies?
              </h1>
              <p className="px-4 md:px-16 text-[16px] md:text-[18px] leading-8 pt-4">
                ICT is complex; de mogelijkheden zijn eindeloos. Niet zo gek dat
                je door de bomen het bos niet ziet. Onafhankelijk ICT-advies
                maakt oplossingen voor u inzichtelijk en keuzes gemakkelijk. ICT
                advies op maat is bij Ad Hoc IT het uitgangspunt.
              </p>
            </div>
          </div>
          <div className="bg-adhocBlauw w-full py-16 mt-16 rounded-t-xl">
            <div className="w-fit sm:w-4/6 mx-auto">
              <div className="mx-4 py-8 bg-white rounded-xl shadow-xl p-4 md:px-8 md:py-16 md:hover:scale-105 transition ease-in-out duration-500">
                <h1 className="text-center text-slate-700 font-bold text-[24px] lg:text-[30px]">
                  Cybersecurity advies
                </h1>
                <p className="px-4 md:px-16 text-[16px] md:text-[18px] leading-8 pt-4">
                  Naarmate meer en meer bedrijven online gaan, is er een
                  toenemende dreiging van cybercriminelen. Wij willen onze
                  klanten hier tegen wapenen door hen te laten adviseren door
                  onze cybersecurity professionals. Wij doen dit door
                  ‘behavioural change techniques’ toe te passen wat een
                  cybersecurity ongunstige bedrijfscultuur zal doorbreken.
                  Voorkomen is immers goedkoper en beter dan genezen. Ook biedt
                  Ad Hoc IT Pentesten aan, wat de weerbaarheid van organisaties
                  op technische vlak analyseert. Verder zijn wij gespecialiseerd
                  in het opstellen van IT inventarisaties wat helpt een inzicht
                  te creëren in de staat van jou IT-netwerk. Wij van Ad Hoc IT
                  services leveren onze adviezen met veel passie en expertise.
                </p>
              </div>

              <div className="mx-4 py-8 mt-16 bg-white rounded-xl shadow-xl p-4 md:px-8 md:py-16 md:hover:scale-105 transition ease-in-out duration-500">
                <h1 className="text-center text-slate-700 font-bold text-[24px] lg:text-[30px]">
                  Digitaliseren en Moderniseren van werkprocessen
                </h1>
                <p className="px-4 md:px-16 text-[16px] md:text-[18px] leading-8 pt-4">
                  Onder het concept digitaliseren en moderniseren van
                  werkprocessen verstaan wij adviseren en waar nodig technisch
                  ondersteunen van migratie naar de cloud. Werken in de cloud is
                  namelijk essentieel voor een bedrijf want in de cloud kun je
                  op een eenvoudige en efficiënte manier online flexibel
                  samenwerken, op welk tijdstip dan ook. Verder helpen wij met
                  het moderniseren van kantoorruimtes, bijvoorbeeld door het
                  installeren van dockingstations, meetingrooms en adviezen te
                  geven over welke hardware en software geschikt is voor jouw
                  onderneming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default InfoAdvice;
