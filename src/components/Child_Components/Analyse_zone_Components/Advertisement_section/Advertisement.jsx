import dashboard from "../../../../assets/Organize zone/Mask Group 21.png";
import circle1 from "../../../../assets/Organize zone/Ellipse 252.png";
import circle2 from "../../../../assets/Organize zone/Group 246.png";

function Advertisement() {
  return (
    <section className="advertisement">
      <h2 className="title">
        Analyze instagram accounts to the smallest detail
      </h2>
      <p>Have insights on instagram accounts and track every change</p>
      <button className="main-button">Try Beta</button>
      <div className="image">
        <img src={dashboard} alt="dashboard" className="dashboard" />
        <img src={circle1} alt="circle1" className="circle1" />
        <img src={circle2} alt="circle2" className="circle2" />
      </div>
      <h2 className="title">Advanced metrics to analyze instagram profiles</h2>
    </section>
  );
}

export default Advertisement;
