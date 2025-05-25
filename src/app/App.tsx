import { Header } from "../widgets/header/Header";
import "./styles/main.scss";
import "../../node_modules/celestia-ui-kit-v2/dist/celestia-ui-kit-v2.css";
import { Home } from "../pages/home/Home";
import { Signin } from "../pages/sign-in/Signin";
import { Route, Routes } from "react-router-dom";

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
