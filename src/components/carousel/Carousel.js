import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        pagination={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        className="carousel__inner"
      >
        <SwiperSlide>
          <img
            className="carousel__desktop"
            src="https://images.uzum.uz/cldk6gt6sfhvbd1i8r2g/main_page_banner.jpg"
            alt=""
          />
          <img
            className="carousel__mobile"
            src="https://images.uzum.uz/cldk6sd6sfhvbd1i8r80/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="carousel__desktop"
            src="https://images.uzum.uz/clbmn6dennt861iq33dg/main_page_banner.jpg"
            alt=""
          />
          <img
            className="carousel__mobile"
            src="https://images.uzum.uz/clbmn6dennt861iq33dg/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/cle4qgfn7c6qm23jp4ng/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.uzum.uz/clbmfp5ennt861iq308g/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}

export default Carousel;
