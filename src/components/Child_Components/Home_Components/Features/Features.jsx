//import images
import Features_image1 from "../../../../assets/Home Fluencify – 1/Group 2396 (2).png";
import Features_image2 from "../../../../assets/Home Fluencify – 1/Group 2397 (1).png";
import Features_image3 from "../../../../assets/Home Fluencify – 1/Group 2398.png";

import Features_image1_1 from "../../../../assets/Home Fluencify – 1/Group 1178.png";
import Features_image2_1 from "../../../../assets/Home Fluencify – 1/Group 1176.png";
import Features_image3_1 from "../../../../assets/Home Fluencify – 1/Group 1180.png";

//import components
import Row from "./Row";

function Features() {
  return (
    <div className="Features">
      <h2 className="title">Features</h2>
      <Row
        title="Discovery zone"
        id={1}
        dec={
          <>
            Browse, filter and discover new
            <br />
            influencers from a wide selection of
            <br />
            the best profiles out there .
          </>
        }
        image2={Features_image1}
        image1={Features_image1_1}
        link="discovery_zone"
      />
      <Row
        title="Analyze zone"
        id={2}
        dec={
          <>
            inspect influencer's audience to the
            <br />
            smallest detail: audience authenticity,
            <br /> demographics, cost estimation and brand
            <br />
            collaborations.
          </>
        }
        image2={Features_image2}
        image1={Features_image2_1}
        link="analyse-zone"
      />
      <Row
        title="Organize zone"
        id={3}
        dec={
          <>
            Sort the influencers you found and put
            <br />
            them in one place for organized and
            <br />
            seamless influencer marketing
          </>
        }
        image2={Features_image3}
        image1={Features_image3_1}
        link="organize-zone"
      />
    </div>
  );
}

export default Features;
