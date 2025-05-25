import { Card } from "../../shared/card/Card";
import styles from "./BalanceWidget.module.scss";

const cards = [
  { title: "Total Balance", content: "$2286", area: "total" },
  { title: "Income", content: "$2500", area: "income" },
  { title: "Expense", content: "$1920", area: "expense" },
  { title: "Savings", content: "$300", area: "savings" },
  { title: "Travel", content: "$1000", area: "travel" },
];

const BalanceWidget = () => {
  return (
    <div className={styles["balance-widget"]}>
      {cards.map(({ title, content, area }) => (
        <Card
          key={area}
          title={title}
          content={content}
          className={styles[`balance-widget--${area}`]}
        />
      ))}
    </div>
  );
};

export { BalanceWidget };
