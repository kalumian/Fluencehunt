import FeaturesImage1 from "../../../../assets/Discovery zone/Group 1565.png";
import deco1 from "../../../../assets/Discovery zone/Group 1178.png";
import FeaturesImage2 from "../../../../assets/Discovery zone/Group 1568.png";
import deco2 from "../../../../assets/Discovery zone/Group 1232.png";
import FeaturesImage3 from "../../../../assets/Discovery zone/Group 1539.png";
import deco3 from "../../../../assets/Discovery zone/Group 251.png";

function Features() {
  return (
    <section className="Features">
      <div className="row">
        <div className="info">
          <img src={deco1} alt="deco1" className="deco1" />
          <h2>Influencer characteristics</h2>
          <p>
            Know your influencers better with
            <br /> insights on their:
          </p>
          <ul>
            <li>Location & Language</li>
            <li>Content Category</li>
            <li>Age & Gender</li>
          </ul>
          <button>
            Start Analyzing <i class="fas fa-search"></i>
          </button>
        </div>
        <img
          src={FeaturesImage1}
          alt="FeaturesImage1"
          className="FeaturesImage1"
        />
      </div>
      <div className="row reverce">
        <div className="info">
          <img src={deco2} alt="deco1" className="deco1" />
          <h2>Audience Insights</h2>
          <p>Check influencer’s audience :</p>
          <ul>
            <li>Audience Location & Language</li>
            <li>Audience Age & Gender</li>
            <li>Audience Authencity</li>
          </ul>
          <button>
            Start Analyzing <i class="fas fa-search"></i>
          </button>
        </div>
        <img
          src={FeaturesImage2}
          alt="FeaturesImage1"
          className="FeaturesImage1"
        />
      </div>
      <div className="row">
        <div className="info">
          <img src={deco3} alt="deco1" className="deco1" />
          <h2>Engagement</h2>
          <p>
            See how much engagement
            <br /> the influencers have on their profile and
            <br />
            predict how impactful your
            <br /> campaign will be.
          </p>
          <button>
            Start Analyzing <i class="fas fa-search"></i>
          </button>
        </div>
        <img
          src={FeaturesImage3}
          alt="FeaturesImage1"
          className="FeaturesImage1"
        />
      </div>
    </section>
  );
}

export default Features;
