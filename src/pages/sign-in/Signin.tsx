import { LayoutContainer } from "../../app/providers/Layout";
import { AuthForm } from "../../features/auth";
import styles from "./Signin.module.scss";

export const Signin = () => {
  return (
    <LayoutContainer>
      <div className={`${styles["sphere-1"]} ${styles["sphere"]}`}></div>
      <AuthForm />
    </LayoutContainer>
  );
};
