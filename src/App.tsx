import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global";
const Page: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      {/*<Routes />*/}
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
};
export default Page;
