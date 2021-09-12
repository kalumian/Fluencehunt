// import Library
import { Helmet } from "react-helmet";
import Switch from "@material-ui/core/Switch";
import { useEffect } from "react";
// Import Component
import Header from "../../Child_Components/General_Components/Header/Header";
import Card from "../../Child_Components/Pricing_Components/Card";

function Pricing() {
  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);
  return (
    <section className="Pricing">
      <Helmet>
        <title>Pricing | Fluencehunt</title>
      </Helmet>
      <Header />
      <div className="header">
        <h1>
          Ready to start with
          <br />
          FLUENCIFY ?
        </h1>
        <p>Choose the package that suits you.</p>
        <div className="kind-package">
          <p>
            Monthly <Switch color="primary" />
          </p>{" "}
          <p>
            Yearly <span>Save 17%</span>
          </p>
        </div>
      </div>
      <div className="content">
        <Card
          title="Starter"
          details="Try our search and analyze1 influencer at a time ."
          count={{ value: 5, type: "$", time: "" }}
          features={[
            "Access to 2M Handpicked Influencers .",
            "Search by Filters",
            "Chrome Extension",
            "1 Querie",
          ]}
          active={true}
        />

        <Card
          title="Essentials"
          details="Full access to our Data and features ."
          count={{ value: 49, type: "$", time: "mo" }}
          features={[
            "Access to 2M Handpicked Influencers .",
            "Search by Filters",
            "Chrome Extension",
            "Unlimited Queries",
          ]}
        />
        <Card
          title="Team"
          details="Full access to our Data and features ."
          count={{ value: 99, type: "$", time: "mo" }}
          features={[
            "Access to 2M Handpicked Influencers .",
            "Search by Filters",
            "Chrome Extension",
            "Unlimited Queries",
          ]}
        />
        <Card
          title="Professional"
          details="Full access to our Data and features ."
          count={{ value: 249, type: "$", time: "mo" }}
          features={[
            "Access to 2M Handpicked Influencers .",
            "Search by Filters",
            "Chrome Extension",
            "Unlimited Queries",
          ]}
        />
      </div>
    </section>
  );
}

export default Pricing;
