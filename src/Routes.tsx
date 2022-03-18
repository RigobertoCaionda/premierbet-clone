import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/Home";

const Page = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};
export default Page;
