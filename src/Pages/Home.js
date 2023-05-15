import Hero from "../components/Hero";
import Promo from "../components/Promo";
import Contact from "../components/Contact";
import Sponsors from "../components/Sponsors";

function Home() {
  return (
    <>
      <Hero />
      <Promo />
      <Contact
        title="Heeft u vragen?"
        description="Neem gerust contact met ons op."
        marker={true}
      />
      <Sponsors />
    </>
  );
}

export default Home;
