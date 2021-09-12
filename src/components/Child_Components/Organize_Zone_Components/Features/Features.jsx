import FeaturesImage1 from "../../../../assets/Organize zone/Group 1565.png";
import deco1 from "../../../../assets/Organize zone/Group 1178.png";
import FeaturesImage2 from "../../../../assets/Organize zone/Group 1568.png";
import deco2 from "../../../../assets/Organize zone/Group 1232.png";

function Features() {
  return (
    <section className="Features">
      <div className="row">
        <div className="info">
          <img src={deco1} alt="deco1" className="deco1" />
          <h2>Find influencers from our wide data base</h2>
          <p>
            Browse 2M influencers all over the world in the Discovery Zone using
            advanced filters and keyword, get insights on their audience and
            find your ideal influencer.
          </p>
          <button>
            Start now <i class="fas fa-long-arrow-alt-right"></i>
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
          <h2>Save influencers and build<br/> your dream list</h2>
          <p>
            Get all your influencers in one place<br/> for a easy and fast access.
          </p>
          <button>
            Start now <i class="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <img
          src={FeaturesImage2}
          alt="FeaturesImage1"
          className="FeaturesImage1"
        />
      </div>
    </section>
  );
}

export default Features;
