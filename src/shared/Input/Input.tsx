import styles from "./Input.module.scss";

interface InputProps {
  placeholder?: string;
  type: string;
}

export const Input = ({ placeholder, type }: InputProps) => {
  return (
    <input type={type} className={styles.input} placeholder={placeholder} />
  );
};
