import dashboard from "../../../../assets/Organize zone/Mask Group 21.png";
import circle1 from "../../../../assets/Organize zone/Ellipse 252.png";
import circle2 from "../../../../assets/Organize zone/Group 246.png";

function Advertisement() {
  return (
    <section className="advertisement">
      <h2 className="title">
        Find the best and real influencers for your
        <br />
        brand in the discovery zone
      </h2>
      <p>
        BROWSE, FILTER AND EXPLORE NEW INFLUENCERS FROM A WIDE SELECTION
        <br />
        OF THE BEST PROFLES OUT THERE
      </p>
      <div className="image">
        <img src={dashboard} alt="dashboard" className="dashboard" />
        <img src={circle1} alt="circle1" className="circle1" />
        <img src={circle2} alt="circle2" className="circle2" />
      </div>
      <h2 className="title">Improve Your Search With Keywords and Filters</h2>
    </section>
  );
}

export default Advertisement;
