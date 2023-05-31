import Fade from "react-reveal/Fade";

function OfferteSucces(props) {
  function displaySelectedWork() {
    return props.selected.map((selection) => <p>{selection}</p>);
  }

  return (
    <div className="flex justify-center py-8 text-center bg-adhocBlauw ">
      <Fade duration="1500">
        <div className="bg-white w-fit pt-14 pb-16 px-4 md:px-8 lg:px-10 xl:px-16 rounded-lg shadow-lg ">
          <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px] pt-8">
            Bedankt voor uw offerte!
          </h1>
          <div className="flex justify-center">
            <h1 className="text-center font-bold text-adhocBlauw text-[18px] lg:text-[24px] pb-8">
              Bekijk uw overzicht:
            </h1>
          </div>

          <div className="">
            <div className="flex items-baseline justify-center gap-28 pb-8">

            <div>
              <div className="pt-6">
                <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
                  Naam
                </label>
                <p>{props.name}</p>
              </div>

              <div className="pt-6">
                <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
                  E-mailadres
                </label>
                <p>{props.email}</p>
              </div>

              <div className="pt-6">
                <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
                  Telefoonnummer
                </label>
                <p>{props.phone}</p>
              </div>
            </div>


            <div>
              <label className="font-semibold text-[18px] pr-2 lg:text-[20px] pt-6">
                Bedrijf
              </label>
              <p>{props.company}</p>

              <div className="pt-6">
                <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
                  Werkzaamheden
                </label>
                <p>{displaySelectedWork()}</p>
              </div>
            </div>
            </div>

            <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
              Omschrijving
            </label>
            <textarea
              className="resize-none h-52 mt-1 block p-2 border-2 rounded-lg border-gray-400 w-full"
              readOnly
            >
              {props.message}
            </textarea>
          </div>
          <div className="flex justify-center">
            <h1 className="text-center font-bold text-adhocBlauw text-[18px] lg:text-[24px] pt-8">
              Wij zullen zo snel mogelijk contact met u nemen
            </h1>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default OfferteSucces;
