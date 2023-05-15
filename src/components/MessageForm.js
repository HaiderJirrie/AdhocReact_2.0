import ReactTyped from "react-typed";

function MessageForm(props) {
  function showMarker() {
    return (
      <>
        <ReactTyped
          className="text-center font-bold text-adhocBlauw text-[18px] lg:text-[24px] pb-8"
          strings={[""]}
        />
      </>
    );
  }

  return (
    <div className="bg-white md:w-fit pt-14 pb-16 px-4 md:px-8 lg:px-10 xl:px-16 rounded-lg shadow-lg ">
      <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
        {/* Heeft u vragen? */}
        {props.title}
      </h1>
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-adhocBlauw text-[18px] lg:text-[24px] pb-8">
          {/* Neem gerust contact met ons op. */}
          {props.description}
        </h1>
        {props.marker ? showMarker() : null}
      </div>
      <div className="md:w-1/2 text-center">
        <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
          E-mailadress*
        </label>
        <input
          className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
          type="email"
          placeholder="Uw e-mailadress"
        />
      </div>
      <div className="text-center md:flex gap-8 mt-4">
        <div className="mb-4 md:mb-0">
          <label className="font-semibold text-[18px] lg:text-[20px]">
            Voornaam*
          </label>
          <input
            className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
            id="firstname"
            type="text"
            placeholder="Uw voornaam"
          />
        </div>
        <div>
          <label className="font-semibold text-[18px] lg:text-[20px]">
            Achternaam*
          </label>
          <input
            className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
            id="lastname"
            type=""
            placeholder="Uw achternaam"
          />
        </div>
      </div>
      <div className="pt-8 text-center">
        <label className="font-semibold text-[18px] lg:text-[20px]">
          Bericht
        </label>
        <textarea
          className="resize-none h-52 mt-1 block p-2 border-2 rounded-lg border-gray-400 w-full"
          placeholder="Uw bericht..."
        />
      </div>
      <div className="mt-8 flex justify-center">
        <button className="text-white font-semibold py-2 px-10 rounded-[100px] bg-gradient-to-br from-adhocBlauw  via-adhocBlauw200  to-adhocDonkerBlauw bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-500 md:hover:-translate-y-1">
          Verzenden
        </button>
      </div>
    </div>
  );
}

export default MessageForm;
