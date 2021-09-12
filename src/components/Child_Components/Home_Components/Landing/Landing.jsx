import Landing_image from "../../../../assets/Home Fluencify – 1/Group 2399.png";

function Landing() {
  return (
    <section className="Landing">
      <div className="image">
        <img src={Landing_image} alt="Landing_image" />
      </div>
      <div className="title-landing">
        <h1>
          Influencer marketing
          <br />
          made easy
          <p>
            Analytics that help you find authentic and relevant
            <br /> influencers in no time .
            <div className="buttons">
              <button>Try Beta</button>
              <button>Sample Report</button>
            </div>
          </p>
        </h1>
      </div>
    </section>
  );
}

export default Landing;
