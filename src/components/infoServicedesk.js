import servicedesk from "../resources/icons/2.png";
import DropdownFAQ from "./DropdownFAQ";
import Fade from "react-reveal/Fade";

function InfoServicedesk(props) {
  return (
    <>
      <Fade>
        <div className="mx-4 sm:mx-16 xl:mx-0 mb-16">
          <div className="xl:grid lg:grid-cols-2 xl:py-8">
            <div
              className={
                props.reverse !== true ? "xl:col-span-1 mx-auto mt-28" : "order-last xl:col-span-1 mx-auto mt-28"
              }
            >
              <img
                className="w-[150px] xl:w-[250px] mx-auto"
                src={servicedesk}
                alt=""
              />
              <h1 className=" py-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
                ICT Servicedesk
              </h1>
            </div>

            <div
              className={
                props.reverse !== true ? "xl:col-span-1 xl:w-4/6" : "xl:ml-60 xl:col-span-1 xl:w-4/6"
              }
            >
              <div className="py-6">
                <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
                  Over onze servicedeskmedewerkers
                </h1>
                <p className="px-4 md:px-16 text-[16px] md:text-[18px] leading-8 pt-4">
                  Onze ITIL-gecertificeerde servicedesk medewerkers zijn
                  hoogopgeleid en volledig ingewerkt. Ze hebben kennis van
                  hardware-netwerktechniek, Windows 10 en TOPdesk. Ook zijn ze
                  getraind in security awareness.
                  <br />
                  <br />
                  Ad Hoc IT-servicedeskers zijn analytisch, zelfredzaam en
                  sociaal. Ze werken procesmatig en bieden ook applicatie
                  specifieke ondersteuning.
                </p>
              </div>
              <DropdownFAQ
                title="Werkzaamheden van een servicedesk medewerker"
                text={
                  <div>
                    <p>
                      Een ICT servicedesk is een centrale afdeling voor het
                      monitoren en oplossen van storingen (incidenten) en
                      serviceaanvragen (routinetaken met betrekking tot de
                      service).
                      <br />
                      De werkzaamheden op een rijtje:
                    </p>
                    <p className="pt-4">
                      •Incidenten (vragen en verzoeken) aannemen, registreren
                      (ticketsystemen), analyseren, volgen en afhandelen.
                    </p>
                    <p className="pt-4">
                      •Incidenten overdragen aan een (interne of externe)
                      helpdesk of andere verantwoordelijke afdeling.
                    </p>
                    <p className="pt-4">
                      •(Eind)gebruikers ondersteunen, telefonisch, per e-mail of
                      instant messaging.
                    </p>
                    <p className="pt-4">
                      •Procesmatig werken aan de hand van beschreven kaders en
                      standaardbeschrijvingen (ITIL, Service Level Agreement,
                      SLA).
                    </p>
                    <p className="pt-4">
                      •Samenwerken met een team van servicedeskmedewerkers en
                      systeem- en netwerkbeheerders.
                    </p>
                    <p className="pt-4">
                      •Beheren en onderhouden van informatiesystemen.
                    </p>
                    <p className="pt-4">
                      •Beveiliging van kleine tot middelgrote netwerken.
                    </p>
                    <p className="pt-4">
                      •Testprocedures opstellen en uitvoeren.
                    </p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default InfoServicedesk;
