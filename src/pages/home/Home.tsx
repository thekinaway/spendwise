import { useEffect, useState } from "react";
import { MonthPicker } from "celestia-ui-kit-v2";
import { IExpense } from "../../app/types/types";
import { getExpenses } from "../../features/expense/get-expenses";
import { ExpenseList } from "../../widgets/expense/ExpensesList";
import { AddExpenseWidget } from "../../widgets/expense/addexpense/AddExpenseWidget";
import "../../widgets/expense/Expense.scss";
import { LayoutContainer } from "../../app/providers/Layout";
import { BalanceWidget } from "../../widgets/balance/BalanceWidget";

export const Home = () => {
  const [expenses, setExpenses] = useState<IExpense[]>([]);
  const [month, setMonth] = useState<number>(new Date().getMonth());

  useEffect(() => {
    const fetchExpenses = async () => {
      const data = await getExpenses();
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  return (
    <>
      <LayoutContainer>
        <BalanceWidget />
        <main className="main">
          <ExpenseList expenses={expenses} />
          <div className="expense-add-block">
            <MonthPicker setMonth={setMonth} month={month} />
          </div>
        </main>
      </LayoutContainer>
      <AddExpenseWidget />
    </>
  );
};
