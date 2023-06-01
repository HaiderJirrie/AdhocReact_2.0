import Fade from "react-reveal/Fade";
import Ali from "../resources/over/ali.png";
import Justin from "../resources/over/justin.png";
import Persoon from "../components/Persoon";

function OverOns() {
  const width = window.innerWidth;

  const getPeople = () => {
    return (
      <>
        <h1 className="pt-24 font-bold text-[24px] md:text-[28px] lg:text-[32px] text-center text-adhocBlauw">
          Maak kennis met ons team
        </h1>
        <div className="pb-10">
          <Persoon
            pic={Ali}
            name="Ali Jirrie"
            function="ICT Manager"
            link="https://www.linkedin.com/in/ali-j-b35995205/"
            text={
              <>
                Mijn naam is Ali Jirrie, ik ben een ICT manager bij Ad Hoc IT
                Services.
                <br /> Ik ben een sport-fanaat met een sterke interesse in de
                ontwikkelingen omtrent cybersecurity. Vandaar dat ik een
                Cybersecurity Governance Master volg aan Leiden universiteit. Ik
                krijg vanuit mijn studie veel te maken met complexe ICT
                vraagstukken omtrent cybersecurity.
                <br />
                <br /> Ik heb naast academische kennis ook veel hands-on ICT
                ervaring opgedaan bij andere bedrijven en organisaties. Wat mij
                het meeste is bijgebleven van mijn tijd voor Ad Hoc IT, is hoe
                lastig het voor collega ICT'ers kan zijn om technische kwesties
                in 'normale taal' uit te leggen aan minder technische collega's.
                Ook viel het mij op dat simpele verzoeken van klanten altijd
                door molens van accountmanagers moesten gaan voordat er
                eindelijk wat gebeurde.
                <br />
                <br /> Wat fijn is aan werken Bij Ad Hoc IT services is dat wij
                dit helemaal anders doen. Hier staat communicatie met de klant
                centraal. Bij Ad Hoc It services werken wij zonder complexe
                bureaucratie, als u iets wilt dan werken wij dezelfde dag nog
                aan een oplossing. De laagdrempeligheid zorgt ook voor een fijne
                werksfeer, wat mij ook de ruimte biedt om mijn ambities te
                verkennen.
              </>
            }
          />

          <Persoon
            pic={Justin}
            name="
            Justin Azekraoui"
            function="Skilled Servicedesk Medewerker"
            link="https://www.linkedin.com/in/justin-azekraoui/"
            text={
              <>
                Mijn naam is Justin. Ik ben een gedreven 23 jarige life-science
                student met een passie voor ICT.
                <br />
                <br /> Deze passie heb ik weten te vervullen met mijn baan als
                servicedesk medewerker bij Ad Hoc IT services. Vanuit mijn
                studie krijg ik ook dagelijks te maken met de IT echter wel op
                gebruikers niveau. Dit geeft mij een uniek beeld over de wensen
                van de klant en wat er voor nodig is om deze te vervullen.
                <br />
                <br />
                Ik zie ieder probleem als een uitdaging en ga deze maar al te
                graag aan! Ik zie graag een fijne samenwerking tegemoet!
              </>
            }
          />
        </div>
      </>
    );
  };

  return (
    <div className="bg-wave bg-cover min-h-[1666px]">
      <Fade>
        <h1 className="py-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
          Over ons
        </h1>
        <div className="flex justify-center">
          <div className="px-4 md:px-16 lg:sm:w-5/12 text-center text-[16px] md:text-[18px] leading-8">
            <p>
              Bij Ad Hoc IT Services richten wij ons op de wensen van de klant.
              Zoals de naam doet vermoeden leveren wij hulp adhoc maar bestaan
              de meeste van onze diensten uit een langdurige samenwerking. Wij
              leveren kennis, techniek, capaciteit en expertise aan zonder
              complexe communicatie.
            </p>
            <p className="pt-4">
              Ook werken bij ons veel ICT'ers met soft skills die vaardigheden
              bezitten om complexe ICT problemen te vertalen naar gewone taal.
              Tegenwoordig heeft vrijwel elke organisatie te maken met ICT, wij
              van Ad Hoc IT proberen dit zo soepel mogelijk te laten verlopen.
            </p>
          </div>
        </div>
      </Fade>

      {width > 764 ? <Fade bottom duration="2000"> {getPeople()} </Fade> : getPeople() }
    </div>
  );
}

export default OverOns;
