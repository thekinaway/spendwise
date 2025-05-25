import React from "react";
import styles from "./Card.module.scss";

export interface ICardProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
}

const Card = ({ title, content, children, className }: ICardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <p className={styles["card__title"]}>{title}</p>
      <p className={styles["card__content"]}>{content}</p>
      {children}
    </div>
  );
};

export { Card };
