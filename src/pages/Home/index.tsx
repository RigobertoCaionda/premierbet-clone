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

const shighlightedSports = [
  { title: "FUTEBOL", img: "/assets/img7.jpg", link: "/futeball" },
  { title: "BASQUETEBOL", img: "/assets/img7.jpg", link: "/basketball" },
  { title: "RUGBY", img: "/assets/img7.jpg", link: "/rugby" },
  { title: "HOQUEI NO GELO", img: "/assets/img7.jpg", link: "/hoquei-gelo" },
  { title: "VOLEIBOL", img: "/assets/img7.jpg", link: "/voleibol" },
];
const slide_img = [
  "/assets/slide1.jpg",
  "/assets/slide2.jpg",
  "/assets/slide3.jpg",
  "/assets/slide4.jpg",
  "/assets/slide5.jpg",
];
const championship = [
  { img: "/assets/img1.png", title: "PRIMEIRA LIGA", link: "/first-league" },
  { img: "/assets/img2.png", title: "EPL", link: "/epl" },
  { img: "/assets/img3.png", title: "LIGUE 1", link: "/ligue1" },
  { img: "/assets/img4.png", title: "LA LIGA", link: "/laliga" },
  { img: "/assets/img5.png", title: "SERIE A", link: "/seriea" },
  { img: "/assets/img6.png", title: "BUNDESLIGA", link: "/bundesliga" },
  { img: "/assets/img7.jpg", title: "UEFA CL", link: "/uefacl" },
  { img: "/assets/img7.jpg", title: "FANTASY FUTEBOL", link: "/fantasy" },
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
  { img: "/assets/bfica.gif", title: "DARDOS", qt: 10, link: "/dardos" },
  { img: "/assets/bfica.gif", title: "RUGBY", qt: 10, link: "/rugby" },
  {
    img: "/assets/bfica.gif",
    title: "FUTEBOL AMERICANO",
    qt: 10,
    link: "/american-football",
  },
  {
    img: "/assets/bfica.gif",
    title: "FUTEBOL AUSTRALIANO",
    qt: 10,
    link: "/australian",
  },
  { img: "/assets/bfica.gif", title: "FUTSAL", qt: 10, link: "/futsal" },
  { img: "/assets/bfica.gif", title: "FORMULA 1", qt: 10, link: "/formula" },
  {
    img: "/assets/bfica.gif",
    title: "HOQUEI NO GELO",
    qt: 10,
    link: "/hoquei",
  },
  { img: "/assets/bfica.gif", title: "VOLEIBOL", qt: 10, link: "/voleibol" },
  {
    img: "/assets/bfica.gif",
    title: "VOLEIBOL DE PRAIA",
    qt: 45,
    link: "/voleibol-praia",
  },
  { img: "/assets/bfica.gif", title: "MMA", qt: 23, link: "/mma" },
  { img: "/assets/bfica.gif", title: "SNOOKER", qt: 76, link: "/snooker" },
  { img: "/assets/bfica.gif", title: "POLO AQUÁTICO", qt: 10, link: "/polo" },
  {
    img: "/assets/bfica.gif",
    title: "TÉNIS DE MESA",
    qt: 9,
    link: "/table'tenis",
  },
  { img: "/assets/bfica.gif", title: "BADMINTON", qt: 4, link: "/badminton" },
  { img: "/assets/bfica.gif", title: "EFUTEBOL", qt: 7, link: "/efutebol" },
  {
    img: "/assets/bfica.gif",
    title: "FUTEBOL GAÉLICO",
    qt: 5,
    link: "/futebol-gaelico",
  },
  { img: "/assets/bfica.gif", title: "HURLING", qt: 10, link: "/hurling" },
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
          <C.SportsSlider>
            <Swiper
              effect={"coverflow"}
              grabCursor={false}
              centeredSlides={false}
              slidesPerView={5}
              navigation={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              pagination={true}
              className="mySwiper"
            >
              {shighlightedSports.map((img, i) => {
                return (
                  <SwiperSlide key={i}>
                    <Link to={img.link} className="sport-link">
                      <img
                        src={img.img}
                        alt=""
                        width="20"
                        height="20"
                        style={{ marginRight: 10 }}
                      />{" "}
                      <span>{img.title}</span>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </C.SportsSlider>
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
          <div className="cart">
            <div className="empty-cart">
              <div className="ball"></div>
              <div className="boletim">Boletim vazio.</div>
              <div className="select-odd">
                Selecionar uma odd para começar a apostar!
              </div>
            </div>
          </div>
        </C.RightSideContent>
      </C.MainArea>
    </C.HomeArea>
  );
};
export default Page;
