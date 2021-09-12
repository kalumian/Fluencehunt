// import Library
import { Helmet } from "react-helmet";
import { useEffect } from "react";

// Import Component
import Header from "../../Child_Components/General_Components/Header/Header";
import Advertisement from "../../Child_Components/Organize_Zone_Components/Advertisement_section/Advertisement";
import Landing from "../../Child_Components/Organize_Zone_Components/Landing/Landing";
import Features from "../../Child_Components/Organize_Zone_Components/Features/Features";
import Other_features from "../../Child_Components/Organize_Zone_Components/Other_features/Other_features";
import Footer from "../../Child_Components/General_Components/Footer/Footer";

function Organize_zone() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  return (
    <div className="organize_zone">
      <Helmet>
        <title>Organize Zone | Fluencehunt</title>
      </Helmet>
      <Header />
      <Landing />
      <Advertisement />
      <Features />
      <Other_features />
      <Footer />
    </div>
  );
}

export default Organize_zone;
