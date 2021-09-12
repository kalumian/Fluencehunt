//import componetns and Style
import Stats_Cards from "../Stats Cards/Stats_Cards";
import Audience_Growth from "../Audience Growth/Audience_Growth";
import Slider_Similar_Accounts from "../Slider Similar Accounts/Slider_Similar_Accounts";
import Engagement from "../Engagement/Engagement";
import Countries_stats from "../Countries stats/Countries_stats";
import Comments_likes_ratio from "../Comments ikes ratio/Comments_likes_ratio";
import Audience from "../Audience/Audience";
import Audience_type from "../Audience Type/Audience_type";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./style.css";

// From Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function Dashboard_sections() {
  return (
    <section className="dashboard-sections">
      <Stats_Cards />
      <div className="dashboard-sections-sliders">
        <Swiper
          wrapperTag="ul"
          className="mySwiper"
          tag="section"
          slidesPerView={1}
          pagination={true}
        >
          <SwiperSlide tag="li">
            <Audience_Growth />
          </SwiperSlide>

          <SwiperSlide tag="li">
            <Engagement />
          </SwiperSlide>

          <SwiperSlide tag="li">
            <Comments_likes_ratio />
          </SwiperSlide>

          <SwiperSlide tag="li">
            <Audience />
          </SwiperSlide>

          <SwiperSlide tag="li">
            <Countries_stats />
          </SwiperSlide>

          <SwiperSlide tag="li">
            <Audience_type />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="min-none-768">
        <Audience_Growth />
        <Engagement />
        <Comments_likes_ratio />
        <Audience />
        <div className="dashboard-last-section">
          <Countries_stats />
          <Audience_type />
        </div>
      </div>
      <Slider_Similar_Accounts />
    </section>
  );
}

export default Dashboard_sections;
