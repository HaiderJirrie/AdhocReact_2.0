import { useState } from "react";
import ReactTyped from "react-typed";
import Fade from "react-reveal/Fade";

function MessageForm(props) {
  const [voornaam, setVoornaam] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");

  const [voornaamError, setVoornaamError] = useState(false);
  const [achternaamError, setAchternaamError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [berichtError, setBerichtError] = useState(false);

  const [formFilled, setFormFilled] = useState(false);

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

  function handleFormSubmit() {
    const setError = (errorState, value) => {
      errorState(value);
      errorValue = true;
    };

    let errorValue = false;

    !voornaam.length > 0 ? setError(setVoornaamError, true) : setVoornaamError(false);
    !achternaam.length > 0 ? setError(setAchternaamError, true) : setAchternaamError(false);
    !email.length > 0 ? setError(setEmailError, true) : setEmailError(false);
    !bericht.length > 0 ? setError(setBerichtError, true) : setBerichtError(false);

    if (!errorValue) {
      sendOfferte();
      setFormFilled(true);
    }
  }

  function getData() {
    return {
      subject: "Bericht van " + voornaam + " " + achternaam,
      body:
        "<h1>Bericht</h1> <p>Naam: <span>" +
        voornaam + " " + achternaam +
        "<span><p/> <p>E-mail: <span>" +
        email +
        "<span><p/><p>Bericht: <span>" +
        bericht +
        "<span><p/>",
    };
  }

  const sendOfferte = () => {
    let data = getData();

    fetch("https://adhocmailer.herokuapp.com/Email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  if (formFilled) {
    return (
      <>
        <Fade duration="1500">
          <div className="bg-white md:w-fit lg:w-[562px] pt-14 pb-16 px-4 md:px-8 lg:px-10 xl:px-16 rounded-lg shadow-lg ">
            <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px] py-8">
              Overzicht
            </h1>
            <div className="text-center">
              <label className="font-semibold text-[18px] lg:text-[20px]">
                E-mailadres
              </label>
              <p>{email}</p>

              <div className="py-6">
                <label className="font-semibold text-[18px] lg:text-[20px]">
                  Naam
                </label>
                <p>{voornaam + " " + achternaam}</p>
              </div>

              <label className="font-semibold text-[18px] lg:text-[20px]">
                Bericht
              </label>
              <textarea
                className="resize-none h-52 mt-1 block p-2 border-2 rounded-lg border-gray-400 w-full"
                readOnly
              >
                {bericht}
              </textarea>
            </div>
            <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px] pt-8">
              Bedankt voor uw bericht!
            </h1>
            <div className="flex justify-center">
              <h1 className="text-center font-bold text-adhocBlauw text-[18px] lg:text-[24px]">
                Wij zullen zo snel mogelijk reageren
              </h1>
            </div>
          </div>
        </Fade>
      </>
    );
  }

  return (
    <div className="bg-white md:w-fit pt-14 pb-16 px-4 md:px-8 lg:px-10 xl:px-16 rounded-lg shadow-lg ">
      <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
        {props.title}
      </h1>
      <div className="flex justify-center">
        <h1 className="text-center font-bold text-adhocBlauw text-[18px] lg:text-[24px] pb-8">
          {props.description}
        </h1>
        {props.marker ? showMarker() : null}
      </div>
      <div className="md:w-1/2 text-center">
        <label className="font-semibold text-[18px] pr-2 lg:text-[20px]">
          E-mailadres*
        </label>
        {emailError ? <p className="text-red-500"> verplicht veld </p> : null}
        <input
          className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
          type="email"
          placeholder="Uw e-mailadres"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="text-center md:flex gap-8 mt-4">
        <div className="mb-4 md:mb-0">
          <label className="font-semibold text-[18px] lg:text-[20px]">
            Voornaam*
          </label>
          {voornaamError ? (
            <p className="text-red-500"> verplicht veld </p>
          ) : null}
          <input
            className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
            id="firstname"
            type="text"
            placeholder="Uw voornaam"
            value={voornaam}
            onChange={(e) => {
              setVoornaam(e.target.value);
            }}
          />
        </div>
        <div>
          <label className="font-semibold text-[18px] lg:text-[20px]">
            Achternaam*
          </label>
          {achternaamError ? (
            <p className="text-red-500"> verplicht veld </p>
          ) : null}
          <input
            className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
            id="lastname"
            type=""
            placeholder="Uw achternaam"
            value={achternaam}
            onChange={(e) => {
              setAchternaam(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="pt-8 text-center">
        <label className="font-semibold text-[18px] lg:text-[20px]">
          Bericht*
        </label>
        {berichtError ? <p className="text-red-500"> verplicht veld </p> : null}
        <textarea
          className="resize-none h-52 mt-1 block p-2 border-2 rounded-lg border-gray-400 w-full"
          placeholder="Uw bericht..."
          value={bericht}
          onChange={(e) => {
            setBericht(e.target.value);
          }}
        />
      </div>
      <div className="mt-8 flex flex-col">
        <button
          className="w-fit mx-auto text-white font-semibold py-2 px-10 rounded-[100px] bg-gradient-to-br from-adhocBlauw  via-adhocBlauw200  to-adhocDonkerBlauw bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-500 md:hover:-translate-y-1"
          onClick={handleFormSubmit}
        >
          Verzenden
        </button>
      </div>
    </div>
  );
}

export default MessageForm;
