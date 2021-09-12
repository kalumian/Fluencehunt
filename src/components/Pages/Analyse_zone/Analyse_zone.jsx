// import Library
import { Helmet } from "react-helmet";
import { useEffect } from "react";
// Import Component
import Header from "../../Child_Components/General_Components/Header/Header";
import Footer from "../../Child_Components/General_Components/Footer/Footer";
import Landing from "../../Child_Components/Analyse_zone_Components/Landing/Landing";
import Advertisement from "../../Child_Components/Analyse_zone_Components/Advertisement_section/Advertisement";
import Features from "../../Child_Components/Analyse_zone_Components/Features/Features";
import Other_features from "../../Child_Components/Analyse_zone_Components/Other_features/Other_features";

function Analyse_zone() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <section className="Analyse_zone">
      <Helmet>
        <title>Analyse Zone | Fluencehunt</title>
      </Helmet>
      <Header />
      <Landing />
      <Advertisement />
      <Features />
      <Other_features />
      <Footer />
    </section>
  );
}

export default Analyse_zone;
