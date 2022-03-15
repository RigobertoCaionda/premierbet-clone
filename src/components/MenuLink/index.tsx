import { BaseSyntheticEvent } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LinkArea } from "./styled";
type Props = {
  link: string;
  text: string;
};

const Page: React.FC<Props> = ({ link, text }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let isActive = location.pathname === link;
  const handleClick = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    navigate(link);
  };
  return (
    <LinkArea
      href={link}
      onClick={handleClick}
      active={isActive}
      className={text === "VEGAS" ? "vegas" : ""}
    >
      {text}
    </LinkArea>
  );
};
export default Page;
