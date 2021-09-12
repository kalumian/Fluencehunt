// import Library
import { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Components
import Landing from "../../Child_Components/Home_Components/Landing/Landing";
import Header from "../../Child_Components/General_Components/Header/Header";
import Ads_section from "../../Child_Components/Home_Components/Ads_section/Ads_section";
import Example_section from "../../Child_Components/Home_Components/Example_section/Example_section";
import Browse_form from "../../Child_Components/Home_Components/Browse_form/Browse_form";
import Features from "../../Child_Components/Home_Components/Features/Features";
import Types_of_business from "../../Child_Components/Home_Components/Types_of_business/Types_of_business";
import Footer from "../../Child_Components/General_Components/Footer/Footer";
import Slider_images from "../../Child_Components/Home_Components/Slider_images/Slider_images";

// import style
import "./style.css";

function Home() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home | Fluencehunt</title>
      </Helmet>
      <section className="Home">
        <Header />
        <h2>Page Web Site</h2>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/organize-zone">Organize_zone</Link>
        </div>
        <div>
          <Link to="/discovery-zone">Discovery_zone</Link>
        </div>
        <div>
          <Link to="/analyse-zone">Analyse_zone</Link>
        </div>
        <div>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <Link to="/payment">Payment</Link>
        </div>
        <div>
          <Link to="/coming-soon">Coming_Soon</Link>
        </div>
        <div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <div>
          <Link to="/sign-up-1">Sign_up_step1</Link>
        </div>
        <div>
          <Link to="/sign-up-2">Sign_up_step2</Link>
        </div>
        <Landing />
        <Ads_section />
        <Example_section />
        <Browse_form />
        <Features />
        <Slider_images />
        <Types_of_business />
        <Footer />
      </section>
    </>
  );
}

export default Home;
