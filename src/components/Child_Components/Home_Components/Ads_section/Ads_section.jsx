import deco_image2 from "../../../../assets/Home Fluencify – 1/Group 1136.png";
import deco_image1 from "../../../../assets/Home Fluencify – 1/Group 1178.png";
import Board_card_images from '../../../../assets/Home Fluencify – 1/Group 2396.png'
import Board_images from '../../../../assets/Home Fluencify – 1/Group 2397.png'
// icons
import icon_1 from "../../../../assets/Home Fluencify – 1/Group 46.png";
import icon_2 from "../../../../assets/Home Fluencify – 1/Group 47.png";
import icon_3 from "../../../../assets/Home Fluencify – 1/Group 49.png";
import icon_4 from "../../../../assets/Home Fluencify – 1/Group 50.png";
import icon_5 from "../../../../assets/Home Fluencify – 1/Group 1150.png";
import icon_6 from "../../../../assets/Home Fluencify – 1/Group 1151.png";
import icon_7 from "../../../../assets/Home Fluencify – 1/Group 1152.png";
import icon_8 from "../../../../assets/Home Fluencify – 1/Group 1153.png";

function Ads_section() {
  return (
    <section className="Ads_section">
      <h2 className="title">
        Everything you will need for an influencer
        <br />
        marketing campaing
      </h2>
      <div className="cards">
        <div className="card">
          <img src={Board_card_images} alt="Board_card_images" className="main-image"/>
          <img src={deco_image1} alt="deco_image" className="deco_image1" />
          <h3>Discover new profiles</h3>
          <p>Browse a list of 4M influencers based on:</p>
          <ul>
            <li>
              <img src={icon_1} alt="icon_1" /> Location
            </li>
            <li>
              <img src={icon_2} alt="icon_2" /> Gandcr
            </li>
            <li>
              <img src={icon_3} alt="icon_3" /> Engagment
            </li>
            <li>
              <img src={icon_4} alt="icon_4" /> Category
            </li>
          </ul>
          <div className="buttons">
            <span>Lern more</span>
            <button>Try Beta</button>
          </div>
        </div>
        <div className="card">
          <img src={Board_images} alt="Board_images" className="main-image"/>
          <img src={deco_image2} alt="deco_image" className="deco_image2" />
          <h3>Analyze Influencer’s audience</h3>
          <p>Access insights on influencers audiences</p>
          <ul>
            <li>
              <img src={icon_5} alt="icon_5" /> Demographics
            </li>
            <li>
              <img src={icon_6} alt="icon_6" /> Cost
            </li>
            <li className="under">
              <img src={icon_7} alt="icon_7" /> Authenticity
              <br />
              score
            </li>
            <li>
              <img src={icon_8} alt="icon_1" /> Collabs
            </li>
          </ul>
          <div className="buttons">
            <span>Lern more</span>
            <button>Try Beta</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ads_section;
