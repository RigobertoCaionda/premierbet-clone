import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import * as C from "./styled";

SwiperCore.use([EffectCoverflow, Pagination]);
const slide_img = [
  "/assets/slide1.jpg",
  "/assets/slide2.jpg",
  "/assets/slide3.jpg",
  "/assets/slide4.jpg",
  "/assets/slide5.jpg",
];
const Page = () => {
  return (
    <C.HomeArea>
      <C.SliderArea>
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </C.SliderArea>

      <C.MainArea>
        <C.LeftSideContent>LeftSide</C.LeftSideContent>
        <C.MainContent>MainSide</C.MainContent>
        <C.RightSideContent>RightSide</C.RightSideContent>
      </C.MainArea>
    </C.HomeArea>
  );
};
export default Page;
