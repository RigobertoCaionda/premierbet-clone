import { DetailsArea } from "./styled";
const Page: React.FC = () => {
  return (
    <DetailsArea>
      <div className="top">
        <span>3 WAY</span>
        <select>
          <option>MAIS/MENOS</option>
          <option>Indefinido</option>
          <option>Indefindo</option>
        </select>
      </div>
      <div className="bottom">
        <div className="time-and-event">
          <span>TEMPO</span>
          <span>EVENTO</span>
        </div>
        <div className="specials">
          <span className="special-span">1</span>
          <span className="special-span">X</span>
          <span className="special-span">2</span>
          <span className="special-span">GOLOS</span>
          <span className="special-span">ACIMA</span>
          <span className="special-span">UNDER</span>
          <span className="special-span">MAIS</span>
        </div>
      </div>
    </DetailsArea>
  );
};
export default Page;
