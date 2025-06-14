import React from "react";

import styles from "./Input.module.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type: string;
  label?: string;
  className?: string;
  hasError?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, type, label, className, hasError, ...rest }, ref) => {
    return (
      <div
        className={`${styles["input__container"]} ${className || ""} ${hasError ? styles["input--error"] : ""}`}
      >
        {label && <label className={styles["input__label"]}>{label}</label>}
        <input
          type={type}
          ref={ref}
          className={styles["input__control"]}
          placeholder={placeholder}
          {...rest}
        />
      </div>
    );
  }
);
