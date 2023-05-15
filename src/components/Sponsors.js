import Amnesty from "../resources/partners/amnesty.png";
import Hva from "../resources/partners/hva.png";
import Nielsen from "../resources/partners/nielsen.png";
import Fade from "react-reveal/Fade";

function Sponsors() {
  return (
    <div className="text-center pt-16 pb-16 px-4 rounded-t-xl bg-adhocBlauw">
      <Fade>
      <h1 className="font-bold text-white text-[24px] lg:text-[30px] pb-14">
        Deze partners gingen u voor
      </h1>
        <div className="lg:flex lg:justify-center mx-4 gap-8">
        <div className="bg-white rounded-xl shadow-lg mb-6 lg:mb-0 mx-auto p-8 px-16 md:hover:scale-105 duration-500">
          <img className="mx-auto w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-md" src={Amnesty} alt="Amnesty"/>
        </div>
        <div className="bg-white rounded-xl shadow-lg mb-6 lg:mb-0 mx-auto p-8 px-16 md:hover:scale-105 duration-500">
          <img className="mx-auto w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-md" src={Nielsen} alt="Nielsen"/>
        </div>
        <div className="bg-white rounded-xl shadow-lg mx-auto p-8 px-16 md:hover:scale-105 duration-500">
          <img className="mx-auto w-[200px] md:w-[250px] lg:w-[300px] drop-shadow-md" src={Hva} alt="HVA"/>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default Sponsors;
