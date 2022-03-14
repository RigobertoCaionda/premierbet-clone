import { BrowserRouter } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
import Routes from "./Routes";
const Page: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
      <ReactTooltip id="tip-top" place="top" effect="solid" />
    </BrowserRouter>
  );
};
export default Page;
