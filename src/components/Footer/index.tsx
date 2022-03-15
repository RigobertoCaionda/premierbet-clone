import { FooterArea, Footer1, Footer2, Footer3 } from "./styled";
import FooterMenuItem from "../FooterMenuItem";
import {
  information,
  help,
  contact,
  promotion,
  workWithUs,
} from "../../helpers/menuList";
import { clock } from "../../helpers/date";
import { useState } from "react";
import { Link } from "react-router-dom";
const Page: React.FC = () => {
  const [showTime, setShowTime] = useState(clock);
  const [showScroller, setShowScroller] = useState(false);
  setInterval(() => {
    let res = clock();
    let [hour, _] = res.split(":");
    setShowTime(parseInt(hour) < 13 ? `${res} AM` : `${res} PM`);
  }, 1000);

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 25) {
      // documentElement retorna o elemento raiz da pagina, se o arquivo for html retorna html, se for xml retorna xml
      setShowScroller(true);
    } else {
      setShowScroller(false);
    }
  };
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <FooterArea>
      <Footer1>
        <FooterMenuItem items={information} />
        <FooterMenuItem items={help} />
        <FooterMenuItem items={contact} />
        <FooterMenuItem items={promotion} />
        <FooterMenuItem items={workWithUs} />
        <div className="last-element">
          <div className="top">
            <div className="left">
              <div>18+</div>
            </div>
            <div className="right">
              <div className="social-icons-area">
                <a href="" className="social-icon"></a>
                <a href="" className="social-icon"></a>
                <a href="" className="social-icon"></a>
              </div>
              <div className="lang">
                <div className="timer">
                  <div
                    className="clock-image"
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "#fff",
                      borderRadius: 5,
                      marginRight: 5,
                    }}
                  ></div>
                  <span>{showTime}</span>
                </div>
                <div className="select">
                  <select>
                    <option>Português</option>
                    <option>Inglês</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Footer1>
      <Footer2>
        <div className="container">
          <Link to="">
            <img src="/assets/multicaixa.png" />
          </Link>
          <Link to="">
            <img src="/assets/voucher.png" />
          </Link>
        </div>
      </Footer2>
      <Footer3>© Premier Bet 2022</Footer3>
      {showScroller && (
        <div className="scroll" onClick={handleClick}>
          ^
        </div>
      )}
    </FooterArea>
  );
};
export default Page;
