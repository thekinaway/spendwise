import { Card, Direction } from "../../shared/card/Card";
import styles from "./BalanceWidget.module.scss";

const cards = [
  {
    title: "Total Balance",
    content: "$2286",
    area: "total",
    icon: "/wallet.png",
    iconWidth: "40%",
    direction: "row" as Direction,
  },
  {
    title: "Income",
    content: "$2500",
    area: "income",
    icon: "/credit-card.png",
    iconWidth: "90%",
  },
  { title: "Expense", content: "$1920", area: "expense", icon: "/euro.png" },
  {
    title: "Savings",
    content: "$300",
    area: "savings",
    icon: "/locker.png",
    iconWidth: "42%",
    direction: "row" as Direction,
  },
  { title: "Travel", content: "$1000", area: "travel", icon: "/travel.png" },
];

const BalanceWidget = () => {
  return (
    <div className={styles["balance-widget"]}>
      {cards.map(({ title, content, area, icon, iconWidth, direction }) => (
        <Card
          key={area}
          title={title}
          content={content}
          icon={icon}
          className={styles[`balance-widget--${area}`]}
          iconWidth={iconWidth}
          direction={direction}
        />
      ))}
    </div>
  );
};

export { BalanceWidget };
