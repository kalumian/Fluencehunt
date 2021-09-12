import dashboard from "../../../../assets/Organize zone/Mask Group 21.png";
import circle1 from "../../../../assets/Organize zone/Ellipse 252.png";
import circle2 from "../../../../assets/Organize zone/Group 246.png";

function Advertisement() {
  return (
    <section className="advertisement">
      <h2 className="title">Save influencers and organize your search</h2>
      <div className="image">
        <img src={dashboard} alt="dashboard" className="dashboard" />
        <img src={circle1} alt="circle1" className="circle1" />
        <img src={circle2} alt="circle2" className="circle2" />
      </div>
      <button className="main-button">Try Beta</button>
    </section>
  );
}

export default Advertisement;
