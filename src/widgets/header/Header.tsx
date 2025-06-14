import "./Header.scss";

import { Button } from "celestia-ui-kit-v2";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <a href="/">
        <img src="/logo.svg" alt="Header Logo Icon" className="header__logo" />
      </a>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="/">Store</a>
          </li>
          <li>
            <a href="/">Mac</a>
          </li>
          <li>
            <a href="/">IPad</a>
          </li>
          <li>
            <a href="/">IPhone</a>
          </li>
          <li>
            <a href="/">Watch</a>
          </li>
        </ul>
      </nav>
      <div className="header-signin">
        <img src="/user.svg" alt="User Icon" />
        <Button
          title="Войти"
          variant="primary"
          size="small"
          onClick={() => navigate("/signin")}
        ></Button>
      </div>
    </header>
  );
};
