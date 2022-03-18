import { LinkArea } from "./styled";
type Props = {
  item: {
    img: string;
    title: string;
    qt: number;
    link: string;
  };
};
const Page: React.FC<Props> = ({ item }) => {
  return (
    <LinkArea href={item.link}>
      <img src={item.img} width="25" />
      <span>{item.title}</span>
      <span>{item.qt}</span>
    </LinkArea>
  );
};

export default Page;
