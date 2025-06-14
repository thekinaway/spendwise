import "./styles/main.scss";
import "../../node_modules/celestia-ui-kit-v2/dist/celestia-ui-kit-v2.css";

import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home/Home";
import { Signin } from "../pages/sign-in/Signin";
import { Header } from "../widgets/header/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
};

export default App;
