// import Library
import { Helmet } from "react-helmet";
import { useEffect } from "react";

// Import Component
import Header from "../../Child_Components/General_Components/Header/Header";
import Features from "../../Child_Components/Discovery_zone_Components/Features/Features";
import Footer from "../../Child_Components/General_Components/Footer/Footer";
import Advertisement from "../../Child_Components/Discovery_zone_Components/Advertisement_section/Advertisement";
import Other_features from "../../Child_Components/Discovery_zone_Components/Other_features/Other_features";
import Landing from "../../Child_Components/Discovery_zone_Components/Landing/Landing";

function Discovery_zone() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <section className="Discovery_zone">
      <Helmet>
        <title>Discovery Zone | Fluencehunt</title>
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

export default Discovery_zone;
