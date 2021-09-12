import { useState } from "react";
import Card from "./Card";

// From Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// import style file
import "./style.css";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation,Pagination]);

function Stats_Cards() {
  const data_info = [
    {
      id: 1,
      title: "Media Posts(Last 30 day)",
      state: "less posts then usual",
      color: "138 43 226",
      icon: "fab fa-instagram",
      rate: "0.4",
    },
    {
      id: 2,
      title: "Followers(Last 30 Day)",
      state: "follower growth",
      color: "60 80 189",
      icon: "fas fa-users",
      rate: "22.4",
    },
    {
      id: 3,
      title: "Following(Last 30 day)",
      state: "following growth",
      color: "255 217 0",
      icon: "fas fa-user-plus",
      rate: "22.4",
    },
    {
      id: 4,
      title: "Quality Audience",
      state: "less posts then usual",
      color: "245 0 57",
      icon: "fas fa-fingerprint",
      rate: "0.4",
    },
    {
      id: 5,
      title: "Authentic Engagement",
      state: "good",
      color: "41 196 45",
      icon: "fas fa-comment-dots",
      rate: "12.4",
    },
    {
      id: 6,
      title: "Audience Quality Score",
      state: "pefect quality score",
      color: "78 105 62",
      icon: "fas fa-eye",
      rate: "22.4",
    },
  ];

  const [selectValue, SetSelectValue] = useState(30);
  return (
    <section className="stats_cards">
      <div className="stats_cards_header">
        <h2 className="title">Instagram Stats Overview</h2>
        <select onChange={(e) => SetSelectValue(e.target.value)}>
          <option value={30}>Last 30 Day</option>
          <option value={90}>Last 3 Month</option>
          <option value={100}>Last 6 Month</option>
          <option value={120}>Last 1 Year</option>
        </select>
      </div>
      <div className="stats_cards_content">
        <div className="cards">
          {data_info.map((item) => {
            return (
              <Card
                title={item.title}
                count={`${selectValue * 0.2}%`}
                state={item.state}
                color={item.color}
                icon={item.icon}
                rate={item.rate}
                key={item.id}
              />
            );
          })}
        </div>
        <div className="slider-card">
          <Swiper
            wrapperTag="ul"
            navigation={true}
            className="mySwiper"
            tag="section"
            slidesPerView={1}
            pagination={true}
          >
              {data_info.map((item) => {
                return (
                  <SwiperSlide tag="li" key={item}>
                    <Card
                      title={item.title}
                      count={`${selectValue * 0.2}%`}
                      state={item.state}
                      color={item.color}
                      icon={item.icon}
                      rate={item.rate}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Stats_Cards;
