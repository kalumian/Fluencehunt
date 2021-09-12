import main_image from "../../../../assets/Home Fluencify – 1/Group 2396 (1).png";
function Slider_images() {
  return (
    <div className="Slider_images">
      <div className="info">
        <h2>
          Influencer marketing
          <br />
          made easy
        </h2>
        <p>
          <span>Adam freetly</span>
          <span>musician</span>
          <span>
            Browse, filter and discover new
            <br />
            influencers from a wide selection
            <br />
            of the best profiles out there .
          </span>
          <div className="buttons">
            <i class="fas fa-arrow-left"></i>
            <i class="fas fa-arrow-right"></i>
          </div>
        </p>
      </div>
      <div className="image">
        <img src={main_image} alt="main_image" />
      </div>
    </div>
  );
}

export default Slider_images;
