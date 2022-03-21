import { Link } from "react-router-dom";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import * as C from "./styled";

type Sport = {
  title: string;
  img: string;
  link: string;
};
type Props = {
  shighlightedSports: Sport[];
};
const Page: React.FC<Props> = ({ shighlightedSports }) => {
  return (
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
  );
};
export default Page;
