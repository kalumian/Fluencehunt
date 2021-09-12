import Form_Search from "./Form_Search";
import Card from "./Card";
import circle2 from "../../../../assets/Coming Soon/circle2.png";
import circle3 from "../../../../assets/Coming Soon/circle3.png";
import circle1 from "../../../../assets/Coming Soon/circle1.png";
import { Data } from "./API.json";

function Cards() {
  const card_list = Data.map((item) => {
    return (
      <Card
        image1={item.image1}
        image2={item.image2}
        image3={item.image3}
        avatar={item.avatar}
        name={item.name}
        username={item.username}
        details={item.details}
        statistics={item.statistics}
        location={item.location}
        verification={item.verification}
      />
    );
  });
  return (
    <section className="coming-soon-cards">
      <div className="circle-deco1">
        <img src={circle2} alt="deco-wave" />
      </div>
      <div className="circle-deco2">
        <img src={circle1} alt="deco-wave" />
      </div>
      <div className="circle-deco3">
        <img src={circle3} alt="deco-wave" />
      </div>
      <Form_Search />
      <div className="cards-section">
        <div className="cards">
          <ul className="none-style-list cards-list">{card_list}</ul>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Cards;
