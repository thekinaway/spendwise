import { LayoutContainer } from "../../app/providers/Layout";
import "./Header.scss";
import { Button } from "celestia-ui-kit-v2";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <header className="header">
        <a href="/">
          <img
            src="/logo.svg"
            alt="Header Logo Icon"
            className="header__logo"
          />
        </a>
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
    </LayoutContainer>
  );
};
