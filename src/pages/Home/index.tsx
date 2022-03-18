import { BaseSyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import * as C from "./styled";
import Championship from "../../components/Championship";
import Sport from "../../components/Sport";

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

const sports = [
  {
    img: "/assets/bfica.gif",
    title: "CASH BACK BOOSTS",
    qt: 2,
    link: "/cash-back",
  },
  {
    img: "/assets/bfica.gif",
    title: " OODS BOOSTS",
    qt: 80,
    link: "/odds-boosts",
  },
  { img: "/assets/bfica.gif", title: "FUTEBOL", qt: 1087, link: "/football" },
  {
    img: "/assets/bfica.gif",
    title: "CASH BACK BOOSTS",
    qt: 2,
    link: "/cash-back",
  },
  {
    img: "/assets/bfica.gif",
    title: "FANTASY FUTEBOL",
    qt: 22,
    link: "/fantasy",
  },
  {
    img: "/assets/bfica.gif",
    title: "BASQUETEBOL",
    qt: 25,
    link: "/basketball",
  },
  { img: "/assets/bfica.gif", title: "TÉNIS", qt: 184, link: "/tenis" },
  { img: "/assets/bfica.gif", title: "BASEBOL", qt: 7, link: "/baseball" },
  { img: "/assets/bfica.gif", title: "CRICKET", qt: 6, link: "/cricket" },
  { img: "/assets/bfica.gif", title: "ANDEBOL", qt: 23, link: "/handball" },
  {
    img: "/assets/bfica.gif",
    title: "LEAGUE OF LEGENDS",
    qt: 1,
    link: "/league-of-legends",
  },
  { img: "/assets/bfica.gif", title: "BOXE", qt: 10, link: "/boxe" },
];
const Page = () => {
  const [toBet, setToBet] = useState(true);
  const [liveBet, setLiveBet] = useState(false);
  const [rangeInput, setRangeInput] = useState(97);

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

          <div className="date-picker">
            <div className="first-div">
              <span>HOJE 24 HO...</span>
              <span>3 DIAS</span>
              <span>SEMA...</span>
              <span className="diff-span">TOD...</span>
            </div>
            <div className="range">
              <input
                type="range"
                value={rangeInput}
                onChange={(e) => setRangeInput(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="sport">
            {sports.map((item, key) => (
              <Sport key={key} item={item} />
            ))}
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
          <div className="title">
            <h5>BOLETIM DE APOSTAS</h5>
          </div>
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
