import Card from "./Card";
function Types_of_business() {
  return (
    <div className="Types_of_business">
      <h2 className="title">NO MATTER WHAT YOUR BUSINESS IS, WE CAN HELP!</h2>
      <div className="cards">
        <Card
          title="B2C"
          dec="Use our data set to find the best influencers in your niche, country
            etc... and optimize your influencer marketing campaigns ."
        />
        <Card
          title="AGENCY"
          dec="Find new influencers, evaluate them and expand your network using advanced filters and optimzed organization tools ."
        />
        <Card
          title="B2B"
          dec="Take advantage of the power of influencer marketing to generate branded content and create brand awareness"
        />
      </div>
      <button>Try Beta</button>
    </div>
  );
}

export default Types_of_business;
