import { BaseSyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import * as C from "./styled";
import Championship from "../../components/Championship";

SwiperCore.use([EffectCoverflow, Pagination]);
const slide_img = [
  "/assets/slide1.jpg",
  "/assets/slide2.jpg",
  "/assets/slide3.jpg",
  "/assets/slide4.jpg",
  "/assets/slide5.jpg",
];
const championship = [
  { img: "/assets/bfica.gif", title: "PRIMEIRA LIGA", link: "/first-league" },
  { img: "/assets/bfica.gif", title: "EPL", link: "/epl" },
  { img: "/assets/bfica.gif", title: "LIGUE 1", link: "/ligue1" },
  { img: "/assets/bfica.gif", title: "LA LIGA", link: "/laliga" },
  { img: "/assets/bfica.gif", title: "SERIE A", link: "/seriea" },
  { img: "/assets/bfica.gif", title: "BUNDESLIGA", link: "/bundesliga" },
  { img: "/assets/bfica.gif", title: "UEFA CL", link: "/uefacl" },
  { img: "/assets/bfica.gif", title: "FANTASY FUTEBOL", link: "/fantasy" },
  { img: "/assets/bfica.gif", title: "BENFICA ESPECIAIS", link: "/benfica" },
];
const Page = () => {
  const [toBet, setToBet] = useState(true);
  const [liveBet, setLiveBet] = useState(false);

  const handleToBetClick = () => {
    setToBet(true);
    setLiveBet(false);
  };

  const handleLiveBetClick = () => {
    setLiveBet(true);
    setToBet(false);
  };
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
          <div>
            <button
              className={toBet ? "to-bet" : ""}
              onClick={handleToBetClick}
            >
              A APOSTAR
            </button>
            <button
              className={liveBet ? "to-bet" : ""}
              onClick={handleLiveBetClick}
            >
              APOSTAS AO VIVO
            </button>
            <button>B</button>
          </div>

          <div className="search-input-area">
            <input type="text" placeholder="PROCURAR" />
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: "#f00",
                marginLeft: -25,
              }}
            ></div>
          </div>
        </C.LeftSideContent>
        <C.MainContent>
          <div className="champions">
            {championship.map((item, key) => (
              <Championship item={item} key={key} />
            ))}
          </div>
          <div className="highlights">DESTAQUES</div>
        </C.MainContent>
        <C.RightSideContent>
          <h5>BOLETIM DE APOSTAS</h5>
          <div className="top2">
            <div>UNICO</div>
            <div>BÓNUS</div>
            <div className="my-bet">MINHAS APOSTAS</div>
          </div>
        </C.RightSideContent>
      </C.MainArea>
    </C.HomeArea>
  );
};
export default Page;
