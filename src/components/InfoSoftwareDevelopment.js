import webapp from "../resources/icons/1.png";
import DropdownFAQ from "./DropdownFAQ";
import Fade from "react-reveal/Fade";

function InfoSoftwareDevelopment() {
  return (
    <>
      <Fade>
        <div className="mx-4 sm:mx-16 xl:mx-0 mb-16">
          <div className="xl:grid lg:grid-cols-2 xl:py-8">
            <div className="xl:col-span-1 mx-auto mt-28">
              <img
                className="w-[150px] xl:w-[250px] mx-auto"
                src={webapp}
                alt=""
              />
              <h1 className=" py-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
                Software development
              </h1>
            </div>

            <div className="xl:col-span-1 xl:w-4/6">
              <div className="py-6">
                <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
                  Zakelijke website of app laten maken
                </h1>
                <p className="px-4 md:px-16 text-[16px] md:text-[18px] leading-8 pt-4">
                  Ad Hoc IT Services ontwerpt, ontwikkelt en onderhoudt
                  zakelijke websites. Daarnaast werken wij samen met developers
                  over heel Europa. Ben jij op zoek naar een website of App die
                  functioneel is én voor veel aanvragen zorgt? Lees dan verder.
                </p>
              </div>
              <DropdownFAQ
                title="Waarom een zakelijke website of app op maat laten maken?"
                text=" Een zakelijke website hebben is belangrijk omdat je website ook het
            middelpunt van de online aanwezigheid van je bedrijf is. Zakelijke
            websites kunnen uiteraard simpel en plain maar als je de lat hoog
            legt, je website voor je wilt laten werken, geen concessies wilt
            doen en wilt dat je website naadloos bij je branding aansluit, dan
            is een maatwerk website precies wat je nodig hebt."
              />
              <DropdownFAQ
                title="Hoe gaan wij te werk?"
                text="Zodra je het aanvraagformulier invult met alle wensen en benodigdheden
            voor de website kunnen wij een offerte opstellen samen met een plan
            van aanpak en een timeline van wat er gaat gebeuren en wanneer. Zodra
            er een akkoord wordt gegeven gaan wij onmiddellijk aan de slag."
              />
              <DropdownFAQ
                title="Hoeveel kost het?"
                text="Het budget dat je beschikbaar moet stellen voor een maatwerk website 
            of App is sterk afhankelijk van de grootte van de website, complexiteit,
            functionaliteiten en koppelingen met externe software (API’s).
            Doorgaans begint de investering nabij de € 10,000.-"
              />
              <DropdownFAQ
                title="Hoe lang duurt het om mijn website of App te laten maken?"
                text="De timeline is sterk afhankelijk van de omvang van het project. Over
            het algemeen worden websites in 2 tot 6 maanden gemaakt. In de meeste
            gevallen kunnen wij de deadline verkorten naar jouw gewenste datum."
              />
              <DropdownFAQ
                title="Hoe zit het met het onderhoud en beheer van de website of app?"
                text="Na de lancering van de zakelijke website of app zijn wij verantwoordelijk
            voor de onderhoud en beheer. Dit doen wij samen met een partner van Ad hoc IT 
            services die inmiddels al jaren ervaring hebben."
              />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default InfoSoftwareDevelopment;
