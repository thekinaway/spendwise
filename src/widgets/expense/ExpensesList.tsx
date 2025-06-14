import { IExpense } from "../../app/types/types";
import { ExpenseCard } from "./ExpenseCard";

interface IExpenseListProps {
  expenses: IExpense[];
}

export const ExpenseList = ({ expenses }: IExpenseListProps) => {
  return (
    <div className="expenses-list">
      {expenses?.map((expense: IExpense) => (
        <ExpenseCard key={expense.id} expense={expense} />
      ))}
    </div>
  );
};
