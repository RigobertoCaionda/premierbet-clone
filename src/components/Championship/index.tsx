import { ChampionshipArea } from "./styled";
type Props = {
  item: {
    img: string;
    title: string;
    link: string;
  };
};
const Page: React.FC<Props> = ({ item }) => {
  return (
    <ChampionshipArea href={item.link}>
      <img src={item.img} alt="" width="20" height="20" />
      <span>{item.title}</span>
    </ChampionshipArea>
  );
};
export default Page;
