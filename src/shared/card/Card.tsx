import React from "react";

import styles from "./Card.module.scss";

export type Direction = "row" | "column";

export interface ICardProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: string;
  iconWidth?: string;
  direction?: Direction;
}

const Card = ({
  title,
  content,
  children,
  className,
  icon,
  iconWidth,
  direction,
}: ICardProps) => {
  return (
    <div
      className={`${styles.card} ${className} ${styles[`card--${direction}`]}`}
    >
      {icon && (
        <img
          src={icon}
          alt="Money Icon"
          className={styles["card__icon"]}
          style={{ width: iconWidth }}
        />
      )}
      <div className={styles["card__content-wrapper"]}>
        <p className={styles["card__title"]}>{title}</p>
        <p className={styles["card__content"]}>{content}</p>
      </div>
      {children}
    </div>
  );
};

export { Card };
