import { useState } from "react";
import Fade from "react-reveal/Fade";

function Offerte() {
  const [selectedWerk, setSelectedWerk] = useState([]);
  const [bedrijfsnaam, setBedrijfsnaam] = useState("");
  const [voornaam, setVoornaam] = useState("");
  const [tussenvoegsel, setTussenvoegsel] = useState("");
  const [achternaam, setAchternaam] = useState("");
  const [email, setEmail] = useState("");
  const [telefoonnummer, setTelefoonnummer] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [omschrijving, setOmchrijving] = useState("");

  const [bedrijfsnaamError, setBedrijfsnaamError] = useState(false);
  const [voornaamError, setVoornaamError] = useState(false);
  const [achternaamError, setAchternaamError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [telefoonnummerError, setTelefoonnummerError] = useState(false);
  const [werkzaamhedenError, setWerkzaamhedenError] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);

  const [formFilled, setFormFilled] = useState(false);

  function handleFormSubmit() {
    const setError = (errorState, value) => {
      errorState(value);
      errorValue = true;
    };

    let errorValue = false;

    !bedrijfsnaam.length > 0
      ? setError(setBedrijfsnaamError, true)
      : setBedrijfsnaamError(false);
    !voornaam.length > 0
      ? setError(setVoornaamError, true)
      : setVoornaamError(false);
    !achternaam.length > 0
      ? setError(setAchternaamError, true)
      : setAchternaamError(false);
    !email.length > 0 ? setError(setEmailError, true) : setEmailError(false);
    !telefoonnummer.length > 0
      ? setError(setTelefoonnummerError, true)
      : setTelefoonnummerError(false);
    selectedWerk.length === 0
      ? setError(setWerkzaamhedenError, true)
      : setWerkzaamhedenError(false);
    !privacyAccepted ? setError(setPrivacyError, true) : setPrivacyError(false);

    if (!errorValue) {
      console.log("success!");
      setFormFilled(true);
    }
  }

  const werkzaamheden = [
    "Systeembeheer",
    "Werkplekbeheer",
    "Cybersecurity advies",
    "App development",
    "Web development",
    "Anders",
  ];

  function displayWerkzaamheden() {
    return werkzaamheden.map((werkzaamheid, index) => (
      <div className="flex items-baseline gap-3">
        <input
          className="w-4 h-4 rounded-xl cursor-pointer"
          onClick={() => handleWerkzaamheidSelection(werkzaamheid)}
          type="checkbox"
          index={index}
        />
        <label className="text-[18px] lg:text-[20px] pb-4">
          {werkzaamheid}
        </label>
      </div>
    ));
  }

  function displaySelectedWerkzaamheden() {
    return selectedWerk.map((werkzaamheid) => (
      <div className="transition ease-in-out md:hover:scale-110">
        <Fade>
          <div className="p-10 rounded-xl shadow-md mb-8">
            <h1 className="text-center font-semibold text-[18px] lg:text-[20px] md:w-[250px]">
              {werkzaamheid}
            </h1>
          </div>
        </Fade>
      </div>
    ));
  }

  function handleWerkzaamheidSelection(werkzaamheid) {
    const copy = [...selectedWerk];

    if (!copy.includes(werkzaamheid)) {
      copy.push(werkzaamheid);
      setSelectedWerk(copy);
      return;
    }

    const index = copy.indexOf(werkzaamheid);
    copy.splice(index, 1);
    setSelectedWerk(copy);
  }

  if (formFilled) {
    return (<>
      <h1>bedankt! :D:D</h1>
    </>)
  }

  return (
    <div>
      <Fade>
        <h1 className="py-4 font-bold text-[30px] md:text-[32px] lg:text-[36px] text-center text-transparent bg-clip-text bg-gradient-to-l from-adhocDonkerBlauw to-adhocBlauw">
          Offerte
        </h1>
      </Fade>

      <Fade bottom duration={1500}>
        <div className="w-fit mx-4 md:mx-auto justify-evenly xl:grid xl:grid-cols-2 gap-10">
          {/* Contact gegevens */}
          <div className="p-20 gap-8 xl:col-span-1 rounded-xl shadow-xl bg-white">
            <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
              Contact gegevens
            </h1>
            <div className="md:flex mt-8 items-center justify-center gap-16">
              <div className="text-center">
                <div className="md:pb-8 py-4">
                  <label className="font-semibold text-[18px] lg:text-[20px]">
                    Bedrijfsnaam*
                  </label>
                  {bedrijfsnaamError ? (
                    <p className="text-red-500"> verplicht veld </p>
                  ) : null}
                  <input
                    className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
                    type="text"
                    placeholder="Uw Bedrijfsnaam"
                    value={bedrijfsnaam}
                    onChange={(e) => {
                      setBedrijfsnaam(e.target.value);
                    }}
                  />
                </div>
                <label className="font-semibold text-[18px] lg:text-[20px] pb-4">
                  Voornaam*
                </label>
                {voornaamError ? (
                  <p className="text-red-500"> verplicht veld </p>
                ) : null}
                <input
                  className="block mx-auto md:mx-0 p-2 mt-1 mb-4 border-2 rounded-lg border-gray-400"
                  id="firstname"
                  type="text"
                  placeholder="Uw voornaam"
                  value={voornaam}
                  onChange={(e) => {
                    setVoornaam(e.target.value);
                  }}
                />
                <label className="font-semibold text-[18px] lg:text-[20px] pb-4">
                  Tussenvoegsel
                </label>
                <input
                  className="block mx-auto md:mx-0 p-2 mt-1 mb-4 border-2 rounded-lg border-gray-400"
                  id="tussenvoegsel"
                  type="text"
                  placeholder="Uw tussenvoegsel"
                  value={tussenvoegsel}
                  onChange={(e) => {
                    setTussenvoegsel(e.target.value);
                  }}
                />
                <label className="font-semibold text-[18px] lg:text-[20px] pb-4">
                  Achternaam*
                </label>
                {achternaamError ? (
                  <p className="text-red-500"> verplicht veld </p>
                ) : null}
                <input
                  className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
                  id="lastname"
                  type="text"
                  placeholder="Uw achternaam"
                  value={achternaam}
                  onChange={(e) => {
                    setAchternaam(e.target.value);
                  }}
                />
              </div>
              <div className="text-center mt-4 md:mt-8">
                <label className="font-semibold text-[18px] lg:text-[20px]">
                  E-mailadres*
                </label>
                {emailError ? (
                  <p className="text-red-500"> verplicht veld </p>
                ) : null}
                <input
                  className="block mx-auto md:mx-0 p-2 mt-1 mb-4 border-2 rounded-lg border-gray-400"
                  id="email"
                  type="email"
                  placeholder="Uw e-mailadres"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <label className="font-semibold text-[18px] lg:text-[20px]">
                  Telefoonnummer*
                </label>
                {telefoonnummerError ? (
                  <p className="text-red-500"> verplicht veld </p>
                ) : null}
                <input
                  className="block mx-auto md:mx-0 p-2 mt-1 border-2 rounded-lg border-gray-400"
                  id="phone"
                  type="text"
                  placeholder="Uw telefoonnummer"
                  value={telefoonnummer}
                  onChange={(e) => {
                    setTelefoonnummer(e.target.value);
                  }}
                />
              </div>
            </div>
          </div>

          {/* Werkzaamheden */}
          <div className="mt-10 xl:mt-0 p-20 xl:col-span-1 rounded-xl shadow-xl bg-white">
            <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
              Werkzaamheden
            </h1>
            <h1 className="text-center font-semibold text-slate-700 text-[18px] lg:text-[20px]">
              Naar welke werkzaamheden bent u opzoek?*
            </h1>
            {werkzaamhedenError ? (
              <p className="text-red-500 text-center"> verplicht veld </p>
            ) : null}
            <div className="mt-8 xl:pt-8 w-fit mx-auto gap-10">
              {displayWerkzaamheden()}
            </div>
          </div>

          {/* Overzicht/verzenden */}
          <div className="p-20 mb-16 col-span-2 rounded-xl shadow-xl bg-white">
            <h1 className="text-center font-bold text-slate-700 text-[24px] lg:text-[30px]">
              Overzicht
            </h1>
            <div className="flex flex-col xl:flex-row justify-evenly mt-10">
              <div className="md:w-1/2 w-full mx-auto order-last xl:order-first text-center self-start">
                <label className="font-semibold text-[18px] lg:text-[20px]">
                  Omschrijving
                </label>
                <textarea
                  className="h-52 resize-none w-full border-2 rounded-lg border-gray-400 mt-2 p-2"
                  placeholder="Uw omschrijving"
                  value={omschrijving}
                  onChange={(e) => {
                    setOmchrijving(e.target.value);
                  }}
                />
                <div className="flex flex-col">
                  <div className="py-2">
                    {privacyError ? (
                      <p className="text-red-500"> verplicht veld </p>
                    ) : null}
                    <input
                      type="checkbox"
                      onChange={() => {
                        setPrivacyAccepted(!privacyAccepted);
                      }}
                    />
                    <label className="pl-2">
                      Ik accepteer de{" "}
                      <a
                        className="font-semibold underline-offset-auto"
                        href="/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        privacyverklaring
                      </a>
                      *
                    </label>
                  </div>
                  <button
                    className=" px-8 py-2 text-[18px] md:text-[20px] font-semibold text-white rounded-[100px] max-w-fit mx-auto bg-gradient-to-br from-adhocBlauw  via-adhocBlauw200  to-adhocDonkerBlauw bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all ease-in-out duration-500 md:hover:-translate-y-1"
                    onClick={handleFormSubmit}
                  >
                    Verzenden
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center lg:w-[500px] mb-8 xl:mb-0">
                {selectedWerk.length === 0 ? (
                  <>
                    <h1 className="text-center md:text-end xl:ml-14 font-semibold text-slate-700 text-[18px] lg:text-[20px]">
                      U heeft nog geen werkzaamheden geselecteerd.
                    </h1>
                  </>
                ) : (
                  <>
                    <h1>{displaySelectedWerkzaamheden()}</h1>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Offerte;
