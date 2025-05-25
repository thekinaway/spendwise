import { Button } from "celestia-ui-kit-v2";
import { Input } from "../../../../shared/Input/Input";
import styles from "./Form.module.scss";

export const Form = () => {
  const signIn = () => {
    window.location.href = "http://localhost:8000/oauth2/google/login";
  };

  return (
    <div className={styles["signin-form"]}>
      <h2>Sign in</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button variant="primary" size="small" title="Sign in"></Button>
      <Button
        icon="/google.svg"
        variant="outline"
        size="small"
        title="Sign in with Google"
        onClick={signIn}
      ></Button>
    </div>
  );
};
