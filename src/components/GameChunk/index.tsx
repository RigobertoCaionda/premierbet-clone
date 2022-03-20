import * as C from "./styled";
type Props = {
  bgColor?: string;
};
const Page: React.FC<Props> = ({ bgColor }) => {
  return (
    <C.GameArea style={{ backgroundColor: bgColor }}>
      <div className="left">
        <span>01:30</span>
        <span>17/03</span>
      </div>
      <div className="middle">
        <div className="game-left">
          <div className="top">AMERICA DE CALI VS INDEPENDIENTE MEDELLIN</div>
          <div className="bottom">
            Clubes Internacionais - Taça Sul Americana
          </div>
        </div>
        <div className="game-right">
          <div className="odd">2.31</div>
          <div className="odd">2.90</div>
          <div className="odd">3.15</div>
          <div className="goals">2.5</div>
          <div className="odd">2.38</div>
          <div className="odd" style={{ marginLeft: 30 }}>
            1.47
          </div>
        </div>
      </div>
      <div className="right">+29</div>
    </C.GameArea>
  );
};
export default Page;
