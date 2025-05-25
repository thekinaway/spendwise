import { AddExpenseForm } from "./AddExpenseForm";
import styles from "./AddExpense.module.scss";

export const AddExpenseWidget = () => {
  return (
    <div className={styles["add-expense-widget"]}>
      <h2 className={styles["add-expense-widget__title"]}>Add Expense</h2>
      <AddExpenseForm />
    </div>
  );
};
