import image1 from "./../../../../assets/Organize zone/Rectangle 333.png";
import image2 from "./../../../../assets/Organize zone/Rectangle 331.png";

function Other_features() {
  
  return (
    <section className="Other_features">
      <h2 className="title">Check other features</h2>
      <div className="cards">
        <div className="card">
          <img src={image1} alt="" />
          <div className="info">
            <h3>Analyze zone</h3>
            <p>
              Browse, Filter and Discover new influencers from a wide selection
              of the best profiles out there.
            </p>
          </div>
        </div>
        <div className="card">
          <img src={image2} alt="" />
          <div className="info">
            <h3>Discovery zone</h3>
            <p>
              Sort the influencers you found and put them in one place for
              organized and seamless influencer marketing.
            </p>
          </div>
        </div>
      </div>
      <button className="main-button">Try Bay</button>
    </section>
  );
}

export default Other_features;
