import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Teste from "./pages/Teste";
const Page = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/teste", element: <Teste /> },
  ]);
};
export default Page;
