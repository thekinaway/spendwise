import styles from "./AddExpense.module.scss";
import { AddExpenseForm } from "./AddExpenseForm";

export const AddExpenseWidget = () => {
  return (
    <div className={styles["add-expense-widget"]}>
      <h2 className={styles["add-expense-widget__title"]}>Add Expense</h2>
      <AddExpenseForm />
    </div>
  );
};
