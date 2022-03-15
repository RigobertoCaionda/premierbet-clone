import { Link } from "react-router-dom";
import { Container } from "./styled";
type LinksType = {
  linkName: string;
  url: string;
};
type Props = {
  items: {
    title: string;
    links: LinksType[];
  };
};
const Page: React.FC<Props> = ({ items }) => {
  return (
    <Container>
      <h5>{items.title}</h5>
      <div className="border"></div>
      <div className="links-wrapper">
        {items.links.map((item, key) => (
          <Link key={key} to={item.url}>
            {item.linkName}
          </Link>
        ))}
      </div>
    </Container>
  );
};
export default Page;
