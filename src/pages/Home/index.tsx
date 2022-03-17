import { Link } from "react-router-dom";
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
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
const championship = [
  { img: "/assets/bfica.gif", title: "PRIMEIRA LIGA" },
  { img: "/assets/bfica.gif", title: "EPL" },
  { img: "/assets/bfica.gif", title: "LIGUE 1" },
  { img: "/assets/bfica.gif", title: "LA LIGA" },
  { img: "/assets/bfica.gif", title: "SERIE A" },
  { img: "/assets/bfica.gif", title: "BUNDESLIGA" },
  { img: "/assets/bfica.gif", title: "UEFA CL" },
  { img: "/assets/bfica.gif", title: "FANTASY FUTEBOL" },
  { img: "/assets/bfica.gif", title: "BENFICA ESPECIAIS" },
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
        <C.LeftSideContent>
          <C.Header>
            <div className="to-bet">A APOSTAR</div>
            <div className="live-bet">
              <Link to="live-bet">APOSTAS AO VIVO</Link>
            </div>
            <div className="go-back">B</div>
          </C.Header>
        </C.LeftSideContent>
        <C.MainContent>
          <C.Header>
            {championship.map((item, key) => (
              <div className="championship" key={key}>
                <Link to="">
                  <img src={item.img} />
                  <span>{item.title}</span>
                </Link>
              </div>
            ))}
          </C.Header>
        </C.MainContent>
        <C.RightSideContent>RightSide RightSide RightSide</C.RightSideContent>
      </C.MainArea>
    </C.HomeArea>
  );
};
export default Page;
