import "../../widgets/expense/Expense.scss";

import { LayoutContainer } from "../../app/providers/Layout";
import { BalanceWidget } from "../../widgets/balance/BalanceWidget";
import { AddExpenseWidget } from "../../widgets/expense/addExpense/AddExpenseWidget";
import ExpensesWidget from "../../widgets/expense/expensesWidget/ExpensesWidget";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <LayoutContainer>
        <div className={styles["home__widgets"]}>
          <BalanceWidget />
          <AddExpenseWidget />
        </div>
      </LayoutContainer>
      <LayoutContainer>
        <main className="main">
          <ExpensesWidget />
        </main>
      </LayoutContainer>
    </>
  );
};
