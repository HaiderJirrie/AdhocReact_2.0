import ReactTyped from "react-typed";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-cover h-screen bg-center">
      <div className="px-2 max-w-[600px] mt-[-150px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div>
          <Fade bottom duration="2000">
            <div>
              <h1 className="font-bold text-[30px] md:text-[32px] lg:text-[36px] text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
                Ad Hoc IT Services
              </h1>
              <div className="flex justify-center gap-2 mb-4">
                <p className="font-semibold text-[20px] md:text-[24px] lg:text-[26px]">
                  Op zoek naar
                </p>
                <ReactTyped
                  className="font-bold text-[20px] md:text-[24px] lg:text-[26px] text-adhocBlauw "
                  strings={[
                    "Systeembeheerders?",
                    "Web developers?",
                    "Cybersecurity advies?",
                    "Werkplekbeheerders?",
                    "App developers?",
                  ]}
                  typeSpeed={100}
                  backSpeed={60}
                  loop
                />
              </div>
              <p className="max-w-xs mx-auto md:max-w-none font-semibold text-slate-600 text-[16px] md:text-[18px] lg:text-[20px] leading-8">
                Bij Ad Hoc IT services staan de wensen van onze klanten
                centraal, Wij leveren kennis en techniek zonder complexiteiten.
                <br /> Wij houden ICT simpel.
              </p>
              <Link to="/offerte">
                <button className="px-8 py-2 mt-8 text-[18px] md:text-[20px] font-semibold text-white rounded-[100px] max-w-fit mx-auto bg-gradient-to-br from-adhocBlauw  via-adhocBlauw200  to-adhocDonkerBlauw bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-500 md:hover:-translate-y-1">
                  Offerte Aanvragen
                </button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default Hero;
